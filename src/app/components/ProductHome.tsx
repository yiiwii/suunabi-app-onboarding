import { useNavigate } from 'react-router';
import { ChevronRight, PartyPopper, X } from 'lucide-react';
import { IOS_SAFE_AREA_BOTTOM, IOS_SAFE_AREA_TOP } from './preview/device';

type ProblemStatus = 'cleared' | 'success' | 'incorrect' | 'inProgress' | 'uncleared';
const promoMascotImage = 'https://www.figma.com/api/mcp/asset/961848f7-6917-4280-8ded-895983c47f33';

interface ProblemCard {
  id: string;
  title: string;
  problem: string;
  status: ProblemStatus;
  emphasized?: boolean;
  offset?: boolean;
  threaded?: boolean;
  longText?: boolean;
}

const todayCards: ProblemCard[] = [
  {
    id: 'today-1',
    title: '解三元一次方程',
    problem: '請分解這個一元二次方程 x^2+2x+4',
    status: 'cleared',
    emphasized: true,
    threaded: true,
  },
  {
    id: 'today-2',
    title: '',
    problem: '請分解這個一元三次方程 x^2+2x+4',
    status: 'incorrect',
    offset: true,
  },
  {
    id: 'today-3',
    title: '',
    problem: '請分解這個一元三次方程 x^2+2x+4',
    status: 'incorrect',
    offset: true,
  },
  {
    id: 'today-4',
    title: '',
    problem: '請分解這個一元三次方程 x^2+2x+4',
    status: 'success',
    offset: true,
  },
];

const olderCards: ProblemCard[] = [
  {
    id: 'older-1',
    title: '解二元一次方程',
    problem: '請分解這個一元二次方程 x^2+2x+4',
    status: 'uncleared',
    threaded: true,
  },
  {
    id: 'older-2',
    title: '',
    problem: '請分解這個一元三次方程 x^2+2x+4',
    status: 'inProgress',
    offset: true,
  },
  {
    id: 'older-3',
    title: '排列組合題',
    problem: '有一個特別長的應用題，內容分成三段，第一段描述有一點長。',
    status: 'uncleared',
    longText: true,
  },
  {
    id: 'older-4',
    title: '代數題',
    problem: '求解 1+2+3^(23+12) = ?',
    status: 'uncleared',
    threaded: true,
  },
  {
    id: 'older-5',
    title: '',
    problem: '求解 13+2+3^(12/2) = ?',
    status: 'incorrect',
    offset: true,
  },
  {
    id: 'older-6',
    title: '',
    problem: '求解 3^(23+12) x 24 +(12+5) x 10 -23 = ?',
    status: 'incorrect',
    offset: true,
  },
];

function StatusBadge({ status }: { status: ProblemStatus }) {
  if (status === 'cleared') {
    return (
      <div className="flex h-[20px] items-center rounded-[5px] bg-[var(--token-color-success)] pl-1 text-white">
        <div className="flex items-center gap-0.5">
          <PartyPopper className="h-3 w-3" strokeWidth={2.2} />
          <span className="text-[10px] font-bold leading-none">クリア済み</span>
        </div>
        <ChevronRight className="h-[14px] w-[14px]" strokeWidth={2.2} />
      </div>
    );
  }

  if (status === 'uncleared') {
    return (
      <div className="flex h-[20px] items-center rounded-[5px] bg-[var(--token-color-complimentary-50)] pl-1 text-[var(--token-color-complimentary-shadow)]">
        <span className="text-[10px] font-bold leading-none">未クリア</span>
        <ChevronRight className="h-[14px] w-[14px]" strokeWidth={2.2} />
      </div>
    );
  }

  if (status === 'inProgress') {
    return (
      <div className="flex h-[20px] items-center rounded-[5px] bg-[var(--token-color-complimentary-20)] pl-1 text-[rgba(13,14,18,0.3)]">
        <span className="text-[10px] font-bold leading-none">進行中</span>
        <ChevronRight className="h-[14px] w-[14px]" strokeWidth={2.2} />
      </div>
    );
  }

  if (status === 'success') {
    return (
      <div className="flex h-[18px] items-center rounded-[5px] bg-[var(--token-color-success-20)] pl-1 text-[var(--token-color-success)]">
        <span className="text-[10px] font-bold leading-none">正解</span>
        <ChevronRight className="h-[14px] w-[14px]" strokeWidth={2.2} />
      </div>
    );
  }

  return (
    <div className="flex h-[18px] items-center rounded-[5px] bg-[var(--token-color-black-8)] pl-1 text-[rgba(13,14,18,0.3)]">
      <span className="text-[10px] font-bold leading-none">不正解</span>
      <ChevronRight className="h-[14px] w-[14px]" strokeWidth={2.2} />
    </div>
  );
}

function ProblemItem({ card }: { card: ProblemCard }) {
  const isHighlighted = card.status === 'cleared' && card.emphasized;
  const isWarm = card.status === 'uncleared';

  return (
    <div className={`relative ${card.offset ? 'ml-5 w-[315px]' : 'w-full'}`}>
      {card.threaded && (
        <>
          <div className="absolute left-[-12px] top-[54px] h-[calc(100%+18px)] border-l border-dashed border-[#8ed6f5]" />
          <div className="absolute bottom-[-7px] left-[-19px] text-[12px] text-[#3f5662]">↘</div>
        </>
      )}
      <div
        className={`relative rounded-[8px] border px-[10px] py-[10px] shadow-[0_2px_4px_rgba(0,0,0,0.05)] ${
          isHighlighted
            ? 'border-[var(--token-color-success-80)] bg-[var(--token-color-success-20)]'
            : isWarm
              ? 'border-[rgba(130,96,7,0.3)] bg-[rgba(255,210,96,0.1)]'
              : 'border-[var(--token-color-black-8)] bg-white'
        }`}
      >
        <div className="flex items-center justify-between">
          <p
            className={`text-[14px] font-bold leading-none ${
              isHighlighted
                ? 'text-[var(--token-color-success)]'
                : isWarm
                  ? 'text-[var(--token-color-complimentary-shadow)]'
                  : 'text-transparent'
            }`}
          >
            {card.title || 'placeholder'}
          </p>
          <StatusBadge status={card.status} />
        </div>
        <p className={`mt-[10px] text-[16px] leading-[1.45] text-[rgba(13,14,18,0.8)] ${card.longText ? '' : 'line-clamp-2'}`}>
          {card.problem}
        </p>
      </div>
    </div>
  );
}

function CounterTab({ label, count }: { label: string; count: number }) {
  return (
    <div className="flex items-center gap-2 text-[16px] text-[#2389b9]">
      <span>{label}</span>
      <span className="font-bold">{count}</span>
    </div>
  );
}

function PromoModule() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#2389b9] px-5 pb-2">
      <button
        onClick={() => navigate('/invite-friends')}
        className="flex h-[60px] w-full items-center rounded-[12px] border border-white/10 bg-[linear-gradient(258deg,#ffd0e6_3.38%,#8bd2f3_69.08%)] pl-[10px] text-left"
      >
        <img alt="" className="h-[60px] w-[90px] shrink-0 object-contain" src={promoMascotImage} />
        <div className="flex min-w-0 flex-1 items-center gap-2">
          <div className="flex min-w-0 flex-1 flex-col justify-center text-[#e491aa]">
            <p
              className="text-[18px] font-semibold leading-none"
              style={{
                textShadow:
                  '-1px 0 0 #ffffff, 1px 0 0 #ffffff, 0 -1px 0 #ffffff, 0 1px 0 #ffffff, -1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff, 1px 1px 0 #ffffff',
              }}
            >
              分享3天免费活动开催中
            </p>
            <p
              className="mt-[6px] text-[10px] leading-none"
              style={{
                textShadow:
                  '-0.75px 0 0 #ffffff, 0.75px 0 0 #ffffff, 0 -0.75px 0 #ffffff, 0 0.75px 0 #ffffff',
              }}
            >
              すべての機能が使えます
            </p>
          </div>
          <div className="flex h-[30px] w-[30px] items-center justify-center text-[#e491aa]">
            <X className="h-[14px] w-[14px]" strokeWidth={2.2} />
          </div>
        </div>
      </button>
    </div>
  );
}

export function ProductHomeScreen({ showPromo = false }: { showPromo?: boolean }) {
  const navigate = useNavigate();
  const promoHeight = showPromo ? 68 : 0;
  const headerHeight = IOS_SAFE_AREA_TOP + 56 + promoHeight + 48;

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#f7fbfe]">
      <div className="absolute inset-x-0 top-0 z-10">
        <div className="bg-[#2389b9]" style={{ height: IOS_SAFE_AREA_TOP }} />
        <div className="bg-[#2389b9]">
        <div className="flex h-14 items-center justify-between px-5 text-white">
          <h1 className="text-[18px] font-semibold">すうナビ</h1>
          <button
            onClick={() => navigate('/settings')}
            className="flex h-8 w-8 items-center justify-center rounded-full text-white/95"
          >
            <span
              className="font-['Rco',sans-serif] text-[24px] leading-none tracking-[0.72px]"
              aria-hidden="true"
            >
              
            </span>
          </button>
        </div>
        </div>
        {showPromo ? <PromoModule /> : null}
        <div className="flex h-12 items-center justify-center gap-[30px] bg-[#e0f1f9] px-[10px]">
          <CounterTab label="すべて" count={6} />
          <CounterTab label="未クリア" count={3} />
          <CounterTab label="クリア済み" count={3} />
        </div>
      </div>

      <div className="h-full overflow-y-auto px-5" style={{ paddingTop: headerHeight + 20, paddingBottom: 140 + IOS_SAFE_AREA_BOTTOM }}>
        <section>
          <h2 className="text-[24px] font-bold text-[rgba(13,14,18,0.8)]">今日</h2>
          <div className="mt-5 space-y-[10px]">
            {todayCards.map((card) => (
              <ProblemItem key={card.id} card={card} />
            ))}
          </div>
        </section>

        <section className="mt-[28px] space-y-[10px]">
          {olderCards.map((card) => (
            <ProblemItem key={card.id} card={card} />
          ))}
        </section>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-white via-[rgba(255,255,255,0.82)] to-transparent px-5 pt-6 backdrop-blur-[5px]"
        style={{ paddingBottom: 10 + IOS_SAFE_AREA_BOTTOM }}
      >
        <div className="pointer-events-auto flex justify-center">
          <button className="flex h-[50px] w-[160px] items-center justify-center gap-3 rounded-full bg-[var(--token-color-accent-primary)] px-5 text-white shadow-[var(--token-shadow-primary-inset)]">
            <span
              className="font-['Rco',sans-serif] text-[18px] leading-none tracking-[0.36px]"
              aria-hidden="true"
            >
              
            </span>
            <span className="text-[18px] font-semibold">問題を送る</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProductHome() {
  return <ProductHomeScreen />;
}
