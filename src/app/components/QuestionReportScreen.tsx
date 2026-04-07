import { useState } from 'react';
import { useNavigate } from 'react-router';
import { IOS_SAFE_AREA_TOP, IOS_SAFE_AREA_BOTTOM } from './preview/device';

const imgImage222 = 'https://www.figma.com/api/mcp/asset/7abe76ba-aed8-423d-a055-6d2b3321c5a9';
const imgImage223 = 'https://www.figma.com/api/mcp/asset/34dc767b-0cf1-473d-b39c-f436b9d4f34b';
const imgImage224 = 'https://www.figma.com/api/mcp/asset/24cb14b5-b54e-4aad-9ac3-ca193243f9cb';
const imgPose81 = 'https://www.figma.com/api/mcp/asset/c03b590d-5971-47ad-babd-ffad965f72bd';
const imgGroup3276 = 'https://www.figma.com/api/mcp/asset/7aac15ad-4c38-4b73-bda5-485f4fc40bbc';
const imgPose72 = 'https://www.figma.com/api/mcp/asset/4557835a-f8f8-4ea9-a764-f8393b7f7cbd';
const imgGroup3275 = 'https://www.figma.com/api/mcp/asset/87fd2f78-8207-430a-968f-d40a82e0f5b2';
const imgIconoirSparkSolid = 'https://www.figma.com/api/mcp/asset/2255ade4-ccad-4531-a6e4-efcf8176776e';

// ── Step card ─────────────────────────────────────────────────────────────────
function StepCard({
  stepNum,
  open,
  onToggle,
}: {
  stepNum: number;
  open: boolean;
  onToggle: () => void;
}) {
  const stepContent = [
    {
      intro: '方程の両辺を整理して、xの項を左辺に集めます。',
      bullets: ['両辺に 2x を加える：3x − 3 = 5', '両辺に 3 を加える：3x = 8', '3 で割る：x = 8/3'],
    },
    {
      intro: '式を因数分解して、共通因数を括り出します。',
      bullets: ['共通因数を見つける：4(x² + 5x + 4)', '因数分解：4(x + 1)(x + 4)', '解を求める：x = −1, x = −4'],
    },
    {
      intro: '検算として、求めた解を元の方程式に代入して確認します。',
      bullets: ['x = −1 を代入して確認', 'x = −4 を代入して確認', '両方とも成立することを確認'],
    },
  ];
  const { intro, bullets } = stepContent[stepNum - 1];

  return (
    <div className="bg-white rounded-[10px] overflow-hidden w-[335px] shrink-0">
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-[10px] py-[8px] h-[40px]"
        style={{ background: '#339bc9' }}
      >
        <span
          className="font-['Hiragino_Sans',sans-serif] font-bold text-[16px] text-white leading-none"
        >
          Step{stepNum}
        </span>
        <span
          className="font-['Rco',sans-serif] text-[18px] text-white leading-none transition-transform duration-200"
          style={{ transform: open ? 'rotate(0deg)' : 'rotate(180deg)' }}
        >
          {'\uE985'}
        </span>
      </button>

      {/* Collapsible body */}
      {open && (
        <div className="px-[10px] pb-[10px] pt-[10px] flex flex-col gap-[10px]">
          {/* Text content */}
          <div className="font-['Hiragino_Sans',sans-serif] text-[16px] text-[rgba(13,14,18,0.6)] leading-normal">
            <p className="mb-[8px]">{intro}</p>
            <ul className="list-disc pl-[20px] flex flex-col gap-[2px]">
              {bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
          {/* LaTeX image */}
          <div className="w-full overflow-hidden rounded-[4px]">
            <img src={imgImage223} alt="" className="w-[200px] h-[28px] object-cover" />
          </div>
          {/* Reason button */}
          <div className="flex items-center">
            <div
              className="px-[6px] py-[2px] rounded-[100px] font-['Hiragino_Sans',sans-serif] text-[14px]"
              style={{ background: '#f2fbff', color: '#0371a4' }}
            >
              その理由は？
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Feedback widget ────────────────────────────────────────────────────────────
function FeedbackWidget() {
  const [voted, setVoted] = useState<'yes' | 'no' | null>(null);
  return (
    <div
      className="bg-white border rounded-[20px] p-[20px] flex flex-col gap-[12px] items-center w-[335px] shrink-0"
      style={{ borderColor: '#cce5f2' }}
    >
      {/* Character illustration */}
      <div className="relative size-[100px] shrink-0">
        <img src={imgPose81} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <img
          src={imgGroup3276}
          alt=""
          className="absolute"
          style={{ left: '28%', top: '20%', width: '54%', height: '23%' }}
        />
      </div>
      <p
        className="font-['Hiragino_Sans',sans-serif] text-[16px] text-center leading-normal w-full"
        style={{ color: '#339bc9' }}
      >
        この情報は役に立ちましたか？
      </p>
      {voted === null ? (
        <div className="flex gap-[10px]">
          <button
            onClick={() => setVoted('yes')}
            className="flex-1 flex items-center justify-center gap-[4px] px-[20px] py-[6px] rounded-[12px] border font-['Hiragino_Sans',sans-serif] text-[14px] border-b-4"
            style={{
              background: '#f2fbff',
              borderColor: '#cce5f2',
              color: '#339bc9',
            }}
          >
            <span className="font-['Rco',sans-serif]">{'\uE965'}</span>
            <span>はい</span>
          </button>
          <button
            onClick={() => setVoted('no')}
            className="flex-1 flex items-center justify-center gap-[4px] px-[20px] py-[6px] rounded-[12px] border font-['Hiragino_Sans',sans-serif] text-[14px] border-b-4"
            style={{
              background: '#f2fbff',
              borderColor: '#cce5f2',
              color: '#339bc9',
            }}
          >
            <span className="font-['Rco',sans-serif]">{'\uE961'}</span>
            <span>いいえ</span>
          </button>
        </div>
      ) : (
        <p
          className="font-['Hiragino_Sans',sans-serif] text-[14px] text-center"
          style={{ color: '#339bc9' }}
        >
          {voted === 'yes' ? 'フィードバックありがとう！' : 'ご意見ありがとうございます'}
        </p>
      )}
    </div>
  );
}

// ── Chat panel ─────────────────────────────────────────────────────────────────
function ChatPanel({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="absolute inset-x-0 bottom-0 bg-white rounded-t-[20px] overflow-hidden flex flex-col"
      style={{
        height: 529,
        boxShadow: '0px -4px 20px 0px rgba(0,0,0,0.1)',
      }}
    >
      {/* Chat nav bar */}
      <div className="flex items-center px-[10px] py-[14px] h-[60px] shrink-0">
        <button
          onClick={onClose}
          className="w-[40px] h-[40px] flex items-center justify-center rounded-full"
        >
          <span className="font-['Rco',sans-serif] text-[24px] leading-none" style={{ color: 'rgba(13,14,18,0.8)' }}>
            {'\uE92A'}
          </span>
        </button>
        <div className="flex-1 text-center font-['Hiragino_Sans',sans-serif] font-semibold text-[18px]" style={{ color: 'rgba(13,14,18,0.8)' }}>
          すう先生に質問する
        </div>
        <button className="w-[40px] h-[40px] flex items-center justify-center rounded-full">
          <span className="font-['Rco',sans-serif] text-[24px] leading-none" style={{ color: 'rgba(13,14,18,0.8)' }}>
            {'\uE951'}
          </span>
        </button>
      </div>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto px-[20px] pb-[20px] flex flex-col gap-[20px]">
        {/* AI avatar */}
        <div className="relative size-[100px] shrink-0">
          <img src={imgPose72} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <img
            src={imgGroup3275}
            alt=""
            className="absolute"
            style={{ left: '26%', top: '22%', width: '55%', height: '27%' }}
          />
        </div>
        {/* Greeting */}
        <p className="font-['Hiragino_Sans',sans-serif] text-[16px]" style={{ color: 'rgba(13,14,18,0.8)' }}>
          こんにちは！すう先生です。何でも聞いてください。
        </p>
        {/* User message */}
        <div className="flex justify-end">
          <div
            className="max-w-[280px] p-[10px] rounded-tl-[12px] rounded-bl-[12px] rounded-tr-[12px] rounded-br-[2px] font-['Hiragino_Sans',sans-serif] text-[16px] text-white"
            style={{ background: '#339bc9' }}
          >
            このステップを説明してください
          </div>
        </div>
        {/* AI response */}
        <p className="font-['Hiragino_Sans',sans-serif] text-[16px]" style={{ color: 'rgba(13,14,18,0.8)' }}>
          もちろんです！まず、方程式の両辺にある同じ項をまとめます。次にxの係数で両辺を割ることで解を求めます。
        </p>
      </div>

      {/* Chat input */}
      <div
        className="shrink-0 flex items-center px-[20px] py-[10px] border-t"
        style={{ borderColor: '#cce5f2', paddingBottom: IOS_SAFE_AREA_BOTTOM + 10 }}
      >
        <div
          className="flex-1 flex items-center gap-[4px] bg-white border rounded-[24px] pl-[16px] pr-[8px] h-[40px]"
          style={{ borderColor: '#339bc9' }}
        >
          <img src={imgIconoirSparkSolid} alt="" className="w-[18px] h-[18px] shrink-0" />
          <span
            className="flex-1 font-['Hiragino_Sans',sans-serif] text-[14px] leading-none"
            style={{ color: 'rgba(3,113,164,0.4)' }}
          >
            メッセージを入力
          </span>
          <span className="font-['Rco',sans-serif] text-[20px]" style={{ color: '#339bc9' }}>
            {'\uE96F'}
          </span>
        </div>
      </div>
    </div>
  );
}

// ── Main screen ────────────────────────────────────────────────────────────────
function ReportToast({ message, onDone }: { message: string; onDone: () => void }) {
  return (
    <div
      className="absolute left-1/2 top-1/2 z-50 flex items-center gap-[12px] rounded-[8px] px-[20px] py-[10px] pointer-events-none"
      style={{
        background: 'rgba(13,14,18,0.8)',
        backdropFilter: 'blur(25px)',
        maxWidth: 280,
        animation: 'toast-in-out 2.5s ease both',
      }}
      onAnimationEnd={onDone}
    >
      <span className="font-['Rco',sans-serif] text-[24px] leading-none text-white shrink-0">{'\uE92B'}</span>
      <span className="font-['Hiragino_Sans',sans-serif] text-[16px] leading-normal text-white">{message}</span>
    </div>
  );
}

export default function QuestionReportScreen() {
  const navigate = useNavigate();
  const [openSteps, setOpenSteps] = useState<Set<number>>(new Set([1, 2, 3]));
  const [chatOpen, setChatOpen] = useState(false);
  const [saved, setSaved] = useState(false);
  const [toast, setToast] = useState<{ key: number; message: string } | null>(null);
  const [exiting, setExiting] = useState(false);

  function handleBack() {
    setExiting(true);
  }

  function handleBookmark() {
    if (saved) {
      setSaved(false);
      setToast({ key: Date.now(), message: '収藏取消！' });
    } else {
      setSaved(true);
      setToast({ key: Date.now(), message: '收藏成功！请在收藏夹查看' });
    }
    setTimeout(() => setToast(null), 2600);
  }

  function toggleStep(n: number) {
    setOpenSteps(prev => {
      const next = new Set(prev);
      if (next.has(n)) next.delete(n);
      else next.add(n);
      return next;
    });
  }

  const NAV_HEIGHT = IOS_SAFE_AREA_TOP + 60;

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        background: '#f2fbff',
        animation: exiting
          ? 'slide-out-to-right 300ms cubic-bezier(0.4,0,0.2,1) both'
          : 'slide-in-from-right 300ms cubic-bezier(0.4,0,0.2,1) both',
      }}
      onAnimationEnd={() => { if (exiting) navigate(-1); }}
    >

      {/* ── Nav bar ──────────────────────────────────────────────────────────── */}
      <div
        className="absolute inset-x-0 top-0 z-10 flex items-end"
        style={{ height: NAV_HEIGHT, background: '#f2fbff', paddingBottom: 0 }}
      >
        <div className="flex items-center w-full px-[10px] h-[60px]">
          <button
            onClick={handleBack}
            className="w-[40px] h-[40px] flex items-center justify-center rounded-full"
          >
            <span className="font-['Rco',sans-serif] text-[24px] leading-none" style={{ color: 'rgba(13,14,18,0.8)' }}>
              {'\uE92A'}
            </span>
          </button>
          <div
            className="flex-1 text-center font-['Hiragino_Sans',sans-serif] font-semibold text-[18px] leading-none"
            style={{ color: 'rgba(13,14,18,0.8)' }}
          >
            一元三次方程
          </div>
          {/* Bookmark toggle */}
          <button
            onClick={handleBookmark}
            className="w-[40px] h-[40px] flex items-center justify-center rounded-full"
          >
            <span
              className="font-['Rco',sans-serif] text-[22px] leading-none"
              style={{ color: saved ? '#339bc9' : 'rgba(13,14,18,0.4)' }}
            >
              {saved ? '\uE9EF' : '\uE9F0'}
            </span>
          </button>
        </div>
      </div>

      {/* ── Scrollable content ───────────────────────────────────────────────── */}
      <div
        className="absolute inset-x-0 bottom-0 overflow-y-auto"
        style={{ top: NAV_HEIGHT }}
      >
        <div className="flex flex-col items-center gap-[30px] px-[20px] pb-[120px] pt-[10px]">

          {/* Question card */}
          <div className="bg-white rounded-[10px] w-[335px] shrink-0 flex flex-col gap-[10px] px-[10px] py-[14px]">
            <p className="font-['Hiragino_Sans',sans-serif] text-[16px] leading-normal" style={{ color: 'rgba(13,14,18,0.6)' }}>
              次の方程式を解きなさい：
            </p>
            <div className="flex justify-center">
              <img src={imgImage222} alt="equation" className="h-[69px] object-contain" />
            </div>
            <div className="rounded-[4px] overflow-hidden w-full">
              <img src={imgImage224} alt="solution" className="w-full object-contain" />
            </div>
          </div>

          {/* 解き方のポイント */}
          <div className="flex flex-col gap-[10px] w-[335px] shrink-0">
            <p className="font-['Hiragino_Sans',sans-serif] font-semibold text-[18px] leading-none" style={{ color: '#0371a4' }}>
              解き方のポイント
            </p>
            <div className="bg-white rounded-[10px] px-[10px] py-[14px]">
              <p className="font-['Hiragino_Sans',sans-serif] text-[16px] leading-relaxed" style={{ color: 'rgba(13,14,18,0.6)' }}>
                一元三次方程を解くには、方程式の片方だけに未知数 x が残るように整理する必要があります。
              </p>
            </div>
          </div>

          {/* ステップ解説 */}
          <div className="flex flex-col gap-[10px] w-[335px] shrink-0">
            <div className="flex items-center justify-between w-full">
              <p className="font-['Hiragino_Sans',sans-serif] font-semibold text-[18px] leading-none" style={{ color: '#0371a4' }}>
                ステップ解説
              </p>
              <button
                className="flex items-center gap-[4px] px-[8px] py-[3px] rounded-[100px] font-['Hiragino_Sans',sans-serif] text-[13px]"
                style={{ background: '#cce5f2', color: '#0371a4' }}
              >
                <span>別の解き方</span>
                <span className="font-['Rco',sans-serif] text-[12px]">{'\uE952'}</span>
              </button>
            </div>
            <div className="flex flex-col gap-[10px]">
              {[1, 2, 3].map(n => (
                <StepCard
                  key={n}
                  stepNum={n}
                  open={openSteps.has(n)}
                  onToggle={() => toggleStep(n)}
                />
              ))}
            </div>
          </div>

          {/* 解答 */}
          <div className="flex flex-col gap-[10px] w-[335px] shrink-0">
            <p className="font-['Hiragino_Sans',sans-serif] font-semibold text-[18px] leading-none" style={{ color: '#0371a4' }}>
              解答
            </p>
            <div className="bg-white rounded-[10px] px-[10px] py-[14px] flex flex-col gap-[10px]">
              <img src={imgImage223} alt="answer" className="h-[28px] object-contain self-start" />
              <p className="font-['Hiragino_Sans',sans-serif] text-[16px] leading-relaxed" style={{ color: 'rgba(13,14,18,0.6)' }}>
                よって、x = 8/3 が解となります。
              </p>
            </div>
          </div>

          {/* 復習 */}
          <div className="flex flex-col gap-[10px] w-[335px] shrink-0">
            <p className="font-['Hiragino_Sans',sans-serif] font-semibold text-[18px] leading-none" style={{ color: '#0371a4' }}>
              復習
            </p>
            <button
              className="w-full h-[56px] rounded-[12px] flex items-center justify-center font-['Hiragino_Sans',sans-serif] font-bold text-[16px] text-white border-b-4"
              style={{ background: '#339bc9', borderColor: '#0371a4' }}
            >
              もう1問練習
            </button>
            <button
              className="w-full h-[56px] rounded-[12px] flex items-center justify-center font-['Hiragino_Sans',sans-serif] font-bold text-[16px] border border-b-4"
              style={{ color: '#339bc9', borderColor: 'rgba(51,155,201,0.2)' }}
            >
              別の解き方
            </button>
          </div>

          {/* Feedback */}
          <FeedbackWidget />

        </div>
      </div>

      {/* ── Bottom input bar ─────────────────────────────────────────────────── */}
      <div
        className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center"
        style={{
          background: 'linear-gradient(to top, white 60%, rgba(255,255,255,0))',
          paddingBottom: IOS_SAFE_AREA_BOTTOM + 10,
        }}
      >
        <div className="pt-[10px] px-[20px] w-full flex items-center">
          <button
            onClick={() => setChatOpen(true)}
            className="flex-1 flex items-center gap-[6px] bg-white border rounded-[24px] pl-[16px] pr-[8px] h-[48px]"
            style={{ borderColor: '#339bc9' }}
          >
            <img src={imgIconoirSparkSolid} alt="" className="w-[22px] h-[22px] shrink-0" />
            <span
              className="flex-1 font-['Hiragino_Sans',sans-serif] text-[16px] text-left leading-none"
              style={{ color: 'rgba(3,113,164,0.4)' }}
            >
              すう先生に質問する
            </span>
            <div className="w-[34px] h-[34px] flex items-center justify-center rounded-full">
              <span className="font-['Rco',sans-serif] text-[24px] leading-none" style={{ color: '#339bc9' }}>
                {'\uE96F'}
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* ── Bookmark toast ───────────────────────────────────────────────────── */}
      {toast && (
        <ReportToast key={toast.key} message={toast.message} onDone={() => setToast(null)} />
      )}

      {/* ── Chat panel overlay ───────────────────────────────────────────────── */}
      {chatOpen && (
        <>
          <div
            className="absolute inset-0 z-20 bg-black/30"
            onClick={() => setChatOpen(false)}
          />
          <div className="absolute inset-x-0 bottom-0 z-30" style={{ height: 529 }}>
            <ChatPanel onClose={() => setChatOpen(false)} />
          </div>
        </>
      )}

    </div>
  );
}
