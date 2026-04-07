import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ChevronLeft, ChevronRight, PartyPopper } from 'lucide-react';
import { IOS_SAFE_AREA_TOP } from './preview/device';
import { BottomNavBar, BOTTOM_NAV_HEIGHT } from './BottomNavBar';
import { categoryFolders, QuestionEntry } from './question-data';

const HEADER_HEIGHT = IOS_SAFE_AREA_TOP + 56;
const FILTER_BAR_HEIGHT = 48;

type Filter = 'all' | 'pending' | 'mastered';

function StatusBadge({ status }: { status: QuestionEntry['status'] }) {
  if (status === 'mastered') {
    return (
      <div className="flex h-[20px] items-center rounded-[5px] bg-[var(--token-color-success-20)] pl-1 pr-1.5 text-[var(--token-color-success)]">
        <PartyPopper className="h-3 w-3" strokeWidth={2.2} />
        <span className="ml-0.5 text-[10px] font-bold leading-none">クリア済み</span>
        <ChevronRight className="h-[14px] w-[14px]" strokeWidth={2.2} />
      </div>
    );
  }
  return (
    <div className="flex h-[20px] items-center rounded-[5px] bg-[var(--token-color-complimentary-50)] pl-1 pr-0.5 text-[var(--token-color-complimentary-shadow)]">
      <span className="text-[10px] font-bold leading-none">未クリア</span>
      <ChevronRight className="h-[14px] w-[14px]" strokeWidth={2.2} />
    </div>
  );
}

function QuestionCard({ question }: { question: QuestionEntry }) {
  return (
    <div
      className={`rounded-[12px] border px-4 py-3 shadow-[0_2px_6px_rgba(0,0,0,0.04)] ${
        question.status === 'mastered'
          ? 'border-[var(--token-color-success-80)] bg-[var(--token-color-success-20)]'
          : 'border-[rgba(13,14,18,0.08)] bg-white'
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="text-[12px] font-medium text-[rgba(13,14,18,0.4)]">{question.capturedTime}</span>
        <StatusBadge status={question.status} />
      </div>
      <p className="mt-2 text-[15px] leading-snug text-[rgba(13,14,18,0.8)]">{question.problem}</p>
    </div>
  );
}

function FilterChip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`flex h-[30px] items-center rounded-full px-3.5 text-[13px] font-semibold transition-colors ${
        active
          ? 'bg-[#2389b9] text-white shadow-[inset_0_-2px_0_rgba(0,0,0,0.15)]'
          : 'border border-[rgba(13,14,18,0.12)] bg-white text-[rgba(13,14,18,0.5)]'
      }`}
    >
      {label}
    </button>
  );
}

export default function QuestionFolderScreen() {
  const navigate = useNavigate();
  const { categoryId } = useParams<{ categoryId: string }>();
  const [filter, setFilter] = useState<Filter>('all');

  const folder = categoryFolders.find((c) => c.id === categoryId);

  if (!folder) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-[14px] text-[rgba(13,14,18,0.4)]">カテゴリーが見つかりません</p>
      </div>
    );
  }

  const filtered = folder.questions.filter((q) => {
    if (filter === 'pending') return q.status === 'pending';
    if (filter === 'mastered') return q.status === 'mastered';
    return true;
  });

  const mastered = folder.questions.filter((q) => q.status === 'mastered').length;
  const total = folder.questions.length;

  // Group by date
  const grouped = filtered.reduce<Record<string, QuestionEntry[]>>((acc, q) => {
    (acc[q.capturedDate] ??= []).push(q);
    return acc;
  }, {});

  return (
    <div className="relative h-full w-full bg-[#f2fbff]">
      {/* Header */}
      <div className="absolute inset-x-0 top-0 z-10">
        <div className="bg-[#2389b9]" style={{ height: IOS_SAFE_AREA_TOP }} />
        <div className="flex h-14 items-center gap-2 bg-[#2389b9] px-4 text-white">
          <button
            onClick={() => navigate('/question-book')}
            className="flex h-8 w-8 items-center justify-center rounded-full text-white/90"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2.5} />
          </button>
          <div className="flex min-w-0 flex-1 flex-col">
            <h1 className="text-[17px] font-semibold leading-tight">{folder.name}</h1>
            <p className="text-[11px] text-white/70">
              {total}題 · {mastered}/{total} クリア済み
            </p>
          </div>
        </div>

        {/* Filter bar */}
        <div className="flex h-[48px] items-center gap-2 border-b border-[rgba(13,14,18,0.08)] bg-[#f2fbff] px-4">
          <FilterChip label="すべて" active={filter === 'all'} onClick={() => setFilter('all')} />
          <FilterChip label="未クリア" active={filter === 'pending'} onClick={() => setFilter('pending')} />
          <FilterChip label="クリア済み" active={filter === 'mastered'} onClick={() => setFilter('mastered')} />
        </div>
      </div>

      {/* Content */}
      <div
        className="h-full overflow-y-auto px-4"
        style={{
          paddingTop: HEADER_HEIGHT + FILTER_BAR_HEIGHT + 16,
          paddingBottom: BOTTOM_NAV_HEIGHT + 16,
        }}
      >
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <p className="text-[14px] font-medium text-[rgba(13,14,18,0.4)]">該当する問題がありません</p>
          </div>
        ) : (
          <div className="space-y-5">
            {Object.entries(grouped).map(([date, questions]) => (
              <section key={date}>
                <h3 className="mb-2.5 text-[13px] font-bold text-[rgba(13,14,18,0.5)]">{date}</h3>
                <div className="space-y-2.5">
                  {questions.map((q) => (
                    <QuestionCard key={q.id} question={q} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>

      <BottomNavBar />
    </div>
  );
}
