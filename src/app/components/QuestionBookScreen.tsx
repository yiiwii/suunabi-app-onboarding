import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { IOS_SAFE_AREA_TOP, IOS_SAFE_AREA_BOTTOM } from './preview/device';
import { BottomNavBar, BOTTOM_NAV_HEIGHT } from './BottomNavBar';
import threadArrow from '../../assets/thread-arrow.png';

import imgPartyPopper from '../../assets/qbook-party-popper.svg';

// ─── Types ────────────────────────────────────────────────────────────────────

type CardStatus = 'cleared' | 'uncleared' | 'inProgress' | 'correct' | 'incorrect';
type FilterType = 'all' | 'uncleared' | 'cleared';

interface ThreadCard {
  id: string;
  title?: string; // category label — shown only on parent card
  problem: string;
  status: CardStatus;
  favorited?: boolean;
}

interface QuestionThread {
  id: string;
  cards: ThreadCard[]; // cards[0] is the parent (full-width), rest are children (indented)
}

interface DateSection {
  label: string;
  threads: QuestionThread[];
}

// ─── Mock data (matches Figma) ─────────────────────────────────────────────────

const sections: DateSection[] = [
  {
    label: '今日',
    threads: [
      // Solved — 3 practice rounds, favorited
      {
        id: 't1',
        cards: [
          {
            id: 'c1',
            title: '一元二次方程',
            problem: 'x² + 5x + 6 = 0 を因数分解して解きなさい',
            status: 'cleared',
            favorited: true,
          },
          { id: 'c2', problem: 'x² + 5x + 4 = 0 を因数分解して解きなさい', status: 'incorrect' },
          { id: 'c3', problem: 'x² + 7x + 12 = 0 を因数分解して解きなさい', status: 'incorrect' },
          { id: 'c4', problem: 'x² + 3x + 2 = 0 を因数分解して解きなさい', status: 'correct' },
        ],
      },
      // Solved — 2 practice rounds
      {
        id: 't2',
        cards: [
          {
            id: 'c5',
            title: '連立方程式',
            problem: '2x + y = 7 および x − y = 2 を解きなさい',
            status: 'cleared',
          },
          { id: 'c6', problem: '3x + 2y = 12 および x + y = 5 を解きなさい', status: 'incorrect' },
          { id: 'c7', problem: 'x + 3y = 9 および 2x − y = 4 を解きなさい', status: 'correct' },
        ],
      },
    ],
  },
  {
    label: '昨日',
    threads: [
      // Solved — single attempt, favorited
      {
        id: 't3',
        cards: [
          {
            id: 'c8',
            title: '三角形の面積',
            problem: '底辺 8cm、高さ 5cm の三角形の面積を求めなさい',
            status: 'cleared',
            favorited: true,
          },
          { id: 'c9', problem: '底辺 12cm、高さ 7cm の三角形の面積を求めなさい', status: 'correct' },
        ],
      },
      // Solved — no children
      {
        id: 't4',
        cards: [
          {
            id: 'c10',
            title: '速さ・時間・距離',
            problem: '時速 60km で 2.5 時間走ったとき、何 km 進みますか？',
            status: 'cleared',
          },
        ],
      },
      // Unsolved — still in practice loop
      {
        id: 't5',
        cards: [
          {
            id: 'c11',
            title: '分数の計算',
            problem: '¾ ÷ ⅜ を計算し、最も簡単な分数で答えなさい',
            status: 'uncleared',
          },
          { id: 'c12', problem: '⅗ ÷ ⅙ を計算しなさい', status: 'incorrect' },
          { id: 'c13', problem: '⁵⁄₆ ÷ ⅔ を計算しなさい', status: 'inProgress' },
        ],
      },
      // Unsolved — single attempt so far
      {
        id: 't6',
        cards: [
          {
            id: 'c14',
            title: '文字式と代入',
            problem: 'a = 3、b = −2 のとき、2a² − 3b の値を求めなさい',
            status: 'uncleared',
          },
          { id: 'c15', problem: 'a = −1、b = 4 のとき、a² + 2ab − b の値を求めなさい', status: 'incorrect' },
        ],
      },
    ],
  },
];

// ─── Action sheet (history: save+delete / favorites: unsave+delete) ──────────

function ActionSheet({
  isSaved,
  onSave,
  onUnsave,
  onDelete,
  onCancel,
}: {
  isSaved: boolean;
  onSave: () => void;
  onUnsave: () => void;
  onDelete: () => void;
  onCancel: () => void;
}) {
  const chevronIcon = '\uE9F0'; // bookmark outline
  const trashIcon = '\uE910';   // trash/delete

  return (
    <>
      {/* Backdrop */}
      <div className="absolute inset-0 z-40 bg-black/40" onClick={onCancel} />
      {/* Sheet */}
      <div
        className="absolute inset-x-0 bottom-0 z-50 bg-white rounded-t-[20px] pt-[10px] overflow-hidden"
        style={{ paddingBottom: IOS_SAFE_AREA_BOTTOM }}
      >
        {/* Save / Unsave */}
        <button
          className="flex h-[64px] w-full items-center gap-[16px] px-[20px] border-b border-[rgba(13,14,18,0.08)]"
          onClick={isSaved ? onUnsave : onSave}
        >
          <span className="font-['Rco',sans-serif] text-[22px] leading-none text-[#0371a4]">
            {chevronIcon}
          </span>
          <span className="font-['Hiragino_Sans',sans-serif] font-bold text-[16px] text-[#0371a4]">
            {isSaved ? '取消收藏' : '収藏问题'}
          </span>
        </button>
        {/* Delete */}
        <button
          className="flex h-[64px] w-full items-center gap-[16px] px-[20px] border-b border-[rgba(13,14,18,0.08)]"
          onClick={onDelete}
        >
          <span className="font-['Rco',sans-serif] text-[22px] leading-none text-[#0371a4]">
            {trashIcon}
          </span>
          <span className="font-['Hiragino_Sans',sans-serif] font-bold text-[16px] text-[#0371a4]">
            删除问题
          </span>
        </button>
        {/* Cancel */}
        <button
          className="flex h-[64px] w-full items-center justify-center"
          onClick={onCancel}
        >
          <span className="font-['Hiragino_Sans',sans-serif] text-[16px] text-[#0371a4]">Cancel</span>
        </button>
      </div>
    </>
  );
}

// ─── Toast ────────────────────────────────────────────────────────────────────

function Toast({ message }: { message: string }) {
  return (
    <div
      className="absolute left-1/2 top-1/2 z-50 flex items-center gap-[12px] bg-[rgba(13,14,18,0.8)] backdrop-blur-[25px] rounded-[8px] px-[20px] py-[10px] pointer-events-none"
      style={{ animation: 'toast-in-out 2.5s ease both', maxWidth: 280 }}
    >
      <span className="font-['Rco',sans-serif] text-[24px] leading-none text-white shrink-0">
        {'\uE92B'}
      </span>
      <span className="font-['Hiragino_Sans',sans-serif] text-[16px] leading-normal text-white">
        {message}
      </span>
    </div>
  );
}

// ─── Thread (parent + children with connector line) ───────────────────────────

function QuestionThreadView({ thread, onLongPress, onNavigate }: { thread: QuestionThread; onLongPress: () => void; onNavigate: () => void }) {
  const [parent, ...children] = thread.cards;
  const hasChildren = children.length > 0;
  const [expanded, setExpanded] = useState(false);
  const childrenContainerRef = useRef<HTMLDivElement>(null);
  const [boatStartY, setBoatStartY] = useState<number | null>(null);
  const [boatTop, setBoatTop] = useState<number | null>(null);
  const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wasLongPress = useRef(false);

  useEffect(() => () => { if (longPressTimer.current) clearTimeout(longPressTimer.current); }, []);

  function startLongPress() {
    wasLongPress.current = false;
    longPressTimer.current = setTimeout(() => {
      wasLongPress.current = true;
      onLongPress();
    }, 500);
  }
  function endLongPress() {
    if (longPressTimer.current) { clearTimeout(longPressTimer.current); longPressTimer.current = null; }
  }

  const isCleared = parent.status === 'cleared';

  // Measure last and 2nd last card midpoints for boat position + animation
  useEffect(() => {
    if (!expanded || !childrenContainerRef.current) return;
    requestAnimationFrame(() => {
      const container = childrenContainerRef.current;
      if (!container) return;
      const cards = container.querySelectorAll<HTMLElement>(':scope > div');
      if (cards.length === 0) return;
      const containerRect = container.getBoundingClientRect();

      const lastCard = cards[cards.length - 1];
      const lastRect = lastCard.getBoundingClientRect();
      // Store the card midpoint — CSS translateY(-50%) centers the image on it
      const lastMid = lastRect.top - containerRect.top + lastRect.height / 2;
      setBoatTop(lastMid);

      const secondLast = cards[Math.max(0, cards.length - 2)];
      const secondRect = secondLast.getBoundingClientRect();
      const secondMid = secondRect.top - containerRect.top + secondRect.height / 2;
      setBoatStartY(secondMid - lastMid);
    });
  }, [expanded]);

  return (
    <div className="relative flex flex-col gap-[10px]">

      {/* ── Parent card ───────────────────────────────────────────────────── */}
      <button
        className="w-full text-left"
        onMouseDown={startLongPress}
        onMouseUp={endLongPress}
        onMouseLeave={endLongPress}
        onTouchStart={startLongPress}
        onTouchEnd={endLongPress}
        onTouchCancel={endLongPress}
        onContextMenu={(e) => e.preventDefault()}
        onClick={() => {
          if (wasLongPress.current) return;
          onNavigate();
        }}
      >
        <div className={`rounded-[8px] border p-[10px] flex flex-col gap-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)] ${
          isCleared
            ? 'bg-[rgba(162,255,232,0.2)] border-[rgba(36,145,118,0.8)]'
            : 'bg-[rgba(255,210,96,0.1)] border-[rgba(130,96,7,0.3)]'
        }`}>

          {/* Row 1: category label + status badge */}
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-[4px]">
              {parent.favorited && (
                <span
                  className="font-['Rco',sans-serif] text-[14px] leading-none"
                  style={{ color: isCleared ? '#249176' : '#826007' }}
                >
                  {'\uE9EF'}
                </span>
              )}
              <span
                className="font-['Hiragino_Sans',sans-serif] font-bold text-[14px] leading-normal whitespace-nowrap"
                style={{ color: isCleared ? '#249176' : '#826007' }}
              >
                {parent.title}
              </span>
            </div>

            {/* Status badge */}
            {isCleared ? (
              <div className="flex h-[20px] items-center rounded-[5px] bg-[#249176] pl-[4px]">
                <div className="flex items-center gap-[2px] shrink-0">
                  <img src={imgPartyPopper} alt="" className="w-[12px] h-[12px] shrink-0" />
                  <span className="font-['Hiragino_Sans',sans-serif] font-bold text-[10px] text-white whitespace-nowrap">
                    クリア済み
                  </span>
                </div>
                <span className="font-['Rco',sans-serif] text-[14px] leading-none w-[14px] text-center text-white">
                  {'\uE901'}
                </span>
              </div>
            ) : (
              <div className="flex h-[20px] items-center rounded-[5px] bg-[rgba(255,210,96,0.5)] pl-[4px]">
                <span className="font-['Hiragino_Sans',sans-serif] font-bold text-[10px] text-[#826007] whitespace-nowrap">
                  未クリア
                </span>
                <span className="font-['Rco',sans-serif] text-[14px] leading-none w-[14px] text-center text-[#826007]">
                  {'\uE901'}
                </span>
              </div>
            )}
          </div>

          {/* Row 2: problem text */}
          <p className="font-['Hiragino_Sans',sans-serif] text-[16px] leading-normal text-[rgba(13,14,18,0.8)]">
            {parent.problem}
          </p>

          {/* Row 3: practice count + expand toggle */}
          {hasChildren && (
            <button
              className="flex items-center justify-between h-[26px] w-full"
              onClick={(e) => {
                e.stopPropagation();
                setExpanded((v) => {
                  if (v) { setBoatStartY(null); setBoatTop(null); }
                  return !v;
                });
              }}
            >
              <span className="font-['Hiragino_Sans',sans-serif] text-[12px] leading-[18px] text-[rgba(13,14,18,0.35)]">
                {children.length}回練習
              </span>
              <span
                className="font-['Rco',sans-serif] text-[14px] text-[rgba(13,14,18,0.3)] transition-transform duration-200"
                style={{ display: 'inline-block', transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
              >
                {'\uE951'}
              </span>
            </button>
          )}
        </div>
      </button>

      {/* ── Children — grid trick for smooth height animation ─────────────── */}
      <div
        className="w-full transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ display: 'grid', gridTemplateRows: expanded ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div ref={childrenContainerRef} className="relative flex flex-col items-end gap-[10px]">

            {/* Dashed connector line */}
            <div
              className="absolute border-l border-dashed border-[rgba(13,14,18,0.18)] w-0 pointer-events-none"
              style={{
                left: 9,
                top: 0,
                bottom: boatTop !== null ? `calc(100% - ${boatTop}px)` : 14,
                transformOrigin: 'top',
                animation: expanded ? 'line-grow 600ms cubic-bezier(0.4,0,0.2,1) both' : 'none',
                animationDelay: '100ms',
              }}
            />

            {/* Boat — CSS translateY(-50%) centers it on the card midpoint */}
            {expanded && boatTop !== null && boatStartY !== null && (
              <img
                src={threadArrow}
                alt=""
                className="absolute pointer-events-none"
                style={{
                  width: 16.5,
                  height: 11.5,
                  left: 1.5,
                  top: boatTop,
                  '--boat-start-y': `${boatStartY}px`,
                  animation: 'boat-slide-in 600ms cubic-bezier(0.4,0,0.2,1) both',
                  animationDelay: '50ms',
                } as React.CSSProperties}
              />
            )}

            {/* Sub question cards */}
            {children.map((child, i) => {
              // Badge per sub-card state
              const badge =
                child.status === 'correct' ? (
                  <div className="flex h-[18px] items-center rounded-[5px] bg-[rgba(162,255,232,0.2)] pl-[4px]">
                    <span className="font-['Hiragino_Sans',sans-serif] font-bold text-[10px] text-[#249176] whitespace-nowrap">
                      正解
                    </span>
                    <span className="font-['Rco',sans-serif] text-[14px] leading-none w-[14px] text-center text-[rgba(13,14,18,0.3)]">
                      {'\uE901'}
                    </span>
                  </div>
                ) : child.status === 'incorrect' ? (
                  <div className="flex h-[18px] items-center rounded-[5px] bg-[rgba(13,14,18,0.08)] pl-[4px]">
                    <span className="font-['Hiragino_Sans',sans-serif] font-bold text-[10px] text-[rgba(13,14,18,0.6)] whitespace-nowrap">
                      不正解
                    </span>
                    <span className="font-['Rco',sans-serif] text-[14px] leading-none w-[14px] text-center text-[rgba(13,14,18,0.6)]">
                      {'\uE901'}
                    </span>
                  </div>
                ) : (
                  /* inProgress */
                  <div className="flex h-[20px] items-center rounded-[5px] bg-[rgba(255,210,96,0.2)] pl-[4px]">
                    <span className="font-['Hiragino_Sans',sans-serif] font-bold text-[10px] text-[#826007] whitespace-nowrap">
                      進行中
                    </span>
                    <span className="font-['Rco',sans-serif] text-[14px] leading-none w-[14px] text-center text-[#826007]">
                      {'\uE901'}
                    </span>
                  </div>
                );

              return (
                <div
                  key={child.id}
                  style={{
                    animation: expanded ? 'thread-card-in 240ms ease-out both' : 'none',
                    animationDelay: `${i * 60}ms`,
                  }}
                >
                  {/* Sub-card: white, thicker left border, narrower */}
                  <button
                    onClick={() => onNavigate()}
                    className="text-left bg-white border border-[rgba(13,14,18,0.08)] border-l-[3px] rounded-[8px] p-[10px] flex flex-col gap-[10px] w-[315px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)]">
                    {/* Badge row — right-aligned, no title on sub-cards */}
                    <div className="flex items-center justify-end w-full">
                      {badge}
                    </div>
                    {/* Problem text */}
                    <p className="font-['Hiragino_Sans',sans-serif] text-[16px] leading-normal text-[rgba(13,14,18,0.8)]">
                      {child.problem}
                    </p>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Filter pill ──────────────────────────────────────────────────────────────

function FilterPill({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex h-[36px] items-center gap-[4px] rounded-full px-[10px] text-[12px] leading-none whitespace-nowrap transition-colors ${
        active
          ? 'bg-[rgba(51,155,201,0.2)] text-[#0371a4]'
          : 'bg-white text-[rgba(13,14,18,0.4)]'
      }`}
    >
      <span className="font-['Hiragino_Sans',sans-serif] font-normal">
        {label}
      </span>
      <span className={`font-['Hiragino_Sans',sans-serif] font-bold ${active ? 'text-[#0371a4]' : 'text-[rgba(13,14,18,0.6)]'}`}>
        {count}
      </span>
    </button>
  );
}

// ─── Content list ─────────────────────────────────────────────────────────────

function ContentList({
  sections: sectionData,
  filter,
  favoritesOnly,
  onLongPress,
  onNavigate,
}: {
  sections: DateSection[];
  filter: FilterType;
  favoritesOnly: boolean;
  onLongPress: (threadId: string) => void;
  onNavigate: () => void;
}) {
  const filteredSections = sectionData.map((section) => ({
    ...section,
    threads: section.threads.filter((thread) => {
      const parent = thread.cards[0];
      if (filter === 'uncleared') return parent.status === 'uncleared';
      if (filter === 'cleared') return parent.status === 'cleared';
      return true;
    }),
  })).filter((s) => s.threads.length > 0);

  const allThreads = filteredSections.flatMap((s) => s.threads);

  if (favoritesOnly) {
    return (
      <div className="flex flex-col gap-[20px]">
        {allThreads.map((thread) => (
          <QuestionThreadView key={thread.id} thread={thread} onLongPress={() => onLongPress(thread.id)} onNavigate={onNavigate} />
        ))}
        {allThreads.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <p className="text-[14px] text-[rgba(13,14,18,0.4)]">該当する問題がありません</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[16px]">
      {filteredSections.map((section) => (
        <div key={section.label}>
          <div className="mb-[16px] pt-[2px]">
            <span className="font-['Hiragino_Sans',sans-serif] font-bold text-[16px] leading-normal text-[rgba(13,14,18,0.6)]">
              {section.label}
            </span>
          </div>
          <div className="flex flex-col gap-[20px]">
            {section.threads.map((thread) => (
              <QuestionThreadView key={thread.id} thread={thread} onLongPress={() => onLongPress(thread.id)} onNavigate={onNavigate} />
            ))}
          </div>
        </div>
      ))}
      {filteredSections.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <p className="text-[14px] text-[rgba(13,14,18,0.4)]">該当する問題がありません</p>
        </div>
      )}
    </div>
  );
}

// ─── Main screen ──────────────────────────────────────────────────────────────

// Layout constants (from Figma)
const STATUS_BAR = IOS_SAFE_AREA_TOP;     // 44px
const TITLE_ROW = 80;                      // header row
const FILTER_BAR = 60;                     // filter pills row
const CONTENT_TOP = STATUS_BAR + TITLE_ROW + FILTER_BAR; // 184px

function getCounts(threads: QuestionThread[]) {
  return {
    total: threads.length,
    uncleared: threads.filter((t) => t.cards[0].status === 'uncleared').length,
    cleared: threads.filter((t) => t.cards[0].status === 'cleared').length,
  };
}

export default function QuestionBookScreen() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'categories' | 'favorites'>('categories');
  const [filter, setFilter] = useState<FilterType>('all');

  // Mutable thread state — savedIds / deletedIds overlay the static sections data
  const [savedIds, setSavedIds] = useState<Set<string>>(
    () => new Set(sections.flatMap((s) => s.threads).filter((t) => t.cards[0].favorited).map((t) => t.id))
  );
  const [deletedIds, setDeletedIds] = useState<Set<string>>(new Set());
  const [sheetThreadId, setSheetThreadId] = useState<string | null>(null);
  const [toast, setToast] = useState<{ key: number; message: string } | null>(null);

  // Apply mutations to section data
  const visibleSections = sections.map((s) => ({
    ...s,
    threads: s.threads
      .filter((t) => !deletedIds.has(t.id))
      .map((t) => ({
        ...t,
        cards: t.cards.map((c, i) => (i === 0 ? { ...c, favorited: savedIds.has(t.id) } : c)),
      })),
  })).filter((s) => s.threads.length > 0);

  const favoriteSections = visibleSections.map((s) => ({
    ...s,
    threads: s.threads.filter((t) => t.cards[0].favorited),
  })).filter((s) => s.threads.length > 0);

  const allThreadList = visibleSections.flatMap((s) => s.threads);
  const favThreadList = favoriteSections.flatMap((s) => s.threads);

  const sheetIsSaved = sheetThreadId ? savedIds.has(sheetThreadId) : false;

  function showToast(message: string) {
    setToast({ key: Date.now(), message });
    setTimeout(() => setToast(null), 2500);
  }

  function handleSave() {
    if (!sheetThreadId) return;
    setSavedIds((prev) => new Set([...prev, sheetThreadId]));
    setSheetThreadId(null);
    showToast('収藏成功！请在収藏夹查看');
  }

  function handleUnsave() {
    if (!sheetThreadId) return;
    setSavedIds((prev) => { const n = new Set(prev); n.delete(sheetThreadId); return n; });
    setSheetThreadId(null);
    showToast('収藏取消！');
  }

  function handleDelete() {
    if (!sheetThreadId) return;
    setSavedIds((prev) => { const n = new Set(prev); n.delete(sheetThreadId); return n; });
    setDeletedIds((prev) => new Set([...prev, sheetThreadId]));
    setSheetThreadId(null);
  }

  return (
    <div className="relative h-full w-full bg-white">

      {/* ── Header (fixed) ───────────────────────────────────────────────── */}
      <div className="absolute inset-x-0 top-0 z-10 flex flex-col overflow-hidden">

        {/* Status bar + tabs at title height (matches Home V2 / Settings blue band) */}
        <div className="flex flex-col bg-[#339bc9]" style={{ paddingTop: STATUS_BAR }}>

          {/* Tab bar */}
          <div className="flex h-[80px] items-stretch">
            {/* 質問履歴 */}
            <button
              onClick={() => setActiveTab('categories')}
              className={`relative flex h-[44px] flex-1 items-center justify-center self-end border-b-[3px] px-[20px] transition-colors ${
                activeTab === 'categories'
                  ? 'border-[#f2fbff] text-[#f2fbff]'
                  : 'border-[#66b7d5] text-[#f2fbff]'
              }`}
            >
              <span className={`flex items-center justify-center gap-[10px] text-center ${activeTab === 'categories' ? '' : 'opacity-60'}`}>
                <span className="font-['Rco',sans-serif] text-[16px] leading-[21px] tracking-[-0.15px]">
                  {activeTab === 'categories' ? '\uE941' : '\uE940'}
                </span>
                <span className={`font-['Hiragino_Sans',sans-serif] text-[14px] leading-none ${activeTab === 'categories' ? 'font-bold' : 'font-normal'}`}>質問履歴</span>
              </span>
            </button>
            {/* お気に入り */}
            <button
              onClick={() => setActiveTab('favorites')}
              className={`relative flex h-[44px] flex-1 items-center justify-center self-end border-b-[3px] px-[20px] transition-colors ${
                activeTab === 'favorites'
                  ? 'border-[#f2fbff] text-[#f2fbff]'
                  : 'border-[#66b7d5] text-[#f2fbff]'
              }`}
            >
              <span className={`flex items-center justify-center gap-[4px] text-center ${activeTab === 'favorites' ? '' : 'opacity-60'}`}>
                <span className="font-['Rco',sans-serif] text-[16px] leading-[21px] tracking-[-0.15px]">
                  {activeTab === 'favorites' ? '\uE9EF' : '\uE9F0'}
                </span>
                <span className={`font-['Hiragino_Sans',sans-serif] text-[14px] leading-none ${activeTab === 'favorites' ? 'font-bold' : 'font-normal'}`}>お気に入り</span>
              </span>
            </button>
          </div>
        </div>

        {/* Filter pills */}
        {(() => {
          const counts = getCounts(activeTab === 'favorites' ? favThreadList : allThreadList);
          return (
            <div className="flex h-[60px] items-center gap-[8px] bg-white px-[16px] py-[12px]">
              <FilterPill label="すべて" count={counts.total} active={filter === 'all'} onClick={() => setFilter('all')} />
              <FilterPill label="未クリア" count={counts.uncleared} active={filter === 'uncleared'} onClick={() => setFilter('uncleared')} />
              <FilterPill label="クリア済み" count={counts.cleared} active={filter === 'cleared'} onClick={() => setFilter('cleared')} />
            </div>
          );
        })()}

      </div>

      {/* ── Scrollable content with slide transition ─────────────────────── */}
      <div
        className="absolute inset-x-0 overflow-hidden"
        style={{ top: CONTENT_TOP, bottom: 0 }}
      >
        <div
          className="flex h-full w-[200%] transition-transform duration-[220ms] ease-in-out"
          style={{ transform: activeTab === 'favorites' ? 'translateX(-50%)' : 'translateX(0%)' }}
        >
          {/* カテゴリー panel */}
          <div className="w-1/2 h-full overflow-y-auto px-[20px] py-[10px]" style={{ paddingBottom: BOTTOM_NAV_HEIGHT + 120 }}>
            <ContentList sections={visibleSections} filter={filter} favoritesOnly={false} onLongPress={setSheetThreadId} onNavigate={() => navigate('/question-report')} />
          </div>
          {/* お気に入り panel */}
          <div className="w-1/2 h-full overflow-y-auto px-[20px]" style={{ paddingTop: 30, paddingBottom: BOTTOM_NAV_HEIGHT + 120 }}>
            <ContentList sections={favoriteSections} filter={filter} favoritesOnly={true} onLongPress={setSheetThreadId} onNavigate={() => navigate('/question-report')} />
          </div>
        </div>
      </div>

      {/* ── Action sheet ──────────────────────────────────────────────────── */}
      {sheetThreadId && (
        <ActionSheet
          isSaved={sheetIsSaved}
          onSave={handleSave}
          onUnsave={handleUnsave}
          onDelete={handleDelete}
          onCancel={() => setSheetThreadId(null)}
        />
      )}

      {/* ── Toast ─────────────────────────────────────────────────────────── */}
      {toast && <Toast key={toast.key} message={toast.message} />}

      {/* ── FAB (camera) ──────────────────────────────────────────────────── */}
      <div
        className="absolute right-0 flex flex-col items-end justify-center gap-[20px] overflow-hidden pb-[20px] pt-[10px] px-[20px]"
        style={{ bottom: BOTTOM_NAV_HEIGHT }}
      >
        <button
          onClick={() => navigate('/camera')}
          className="flex items-center justify-center w-[56px] h-[56px] rounded-full bg-[#339bc9] shadow-[0px_2px_10px_0px_rgba(35,137,185,0.25)] shrink-0"
        >
          <span className="font-['Rco',sans-serif] text-[24px] leading-none text-white">
            {'\uE994'}
          </span>
        </button>
      </div>

      {/* ── Bottom nav ────────────────────────────────────────────────────── */}
      <BottomNavBar />
    </div>
  );
}
