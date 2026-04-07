import type { ReactNode } from 'react';
import { ChevronLeft, Crown, Lock, Bell, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import paywallBoat from '@/assets/paywall-boat.png';
import paywallCardStar from '@/assets/paywall-card-star.png';

function Header({ onBack }: { onBack: () => void }) {
  return (
    <>
      <div className="absolute inset-x-0 top-[52px] flex h-14 items-center bg-white px-5">
        <button
          aria-label="Back"
          className="flex h-8 w-8 items-center justify-center rounded-full text-[color:var(--token-color-black-80)]"
          onClick={onBack}
          type="button"
        >
          <ChevronLeft className="h-6 w-6" strokeWidth={2.2} />
        </button>
      </div>
      <div className="absolute inset-x-0 top-[108px] flex h-[72px] items-center justify-center px-5">
        <div className="relative flex w-full max-w-[335px] flex-col items-center gap-2 text-center">
          <div className="relative h-8 w-[70px]">
            <img alt="" className="absolute left-1/2 top-0 h-[26px] w-[48px] -translate-x-1/2 object-contain" src={paywallBoat} />
          </div>
          <h1 className="text-[24px] font-bold leading-none text-[#0d0e12]">無料トライアルについて</h1>
        </div>
      </div>
    </>
  );
}

function TimelineItem({
  icon,
  title,
  body,
  active = false,
}: {
  icon: ReactNode;
  title: string;
  body: string;
  active?: boolean;
}) {
  return (
    <div className="relative flex gap-3">
      <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] bg-[#339bc9] text-white shadow-[0_6px_12px_rgba(51,155,201,0.18)]">
        {icon}
      </div>
      <div className="flex-1 pt-[1px]">
        <p className="text-[16px] font-bold leading-[1.35] text-[#0d0e12]">{title}</p>
        <p className="mt-1 text-[14px] leading-[1.55] text-[#0d0e12]/60">{body}</p>
      </div>
      {active ? <div className="absolute left-[14px] top-8 h-[30px] w-[4px] bg-[#339bc9]" /> : null}
    </div>
  );
}

function LegalNotes() {
  const notes = [
    '購読プランは自動更新となり、Appleストアから自動的に料金が引き落とされます。支払い完了後すぐにサービスが開始されます。',
    '購入すると、すべての機能がご利用いただけます。',
    '次回の請求日前にAppleストアの設定からキャンセルすれば、次回以降の更新は行われません。すでに支払われた料金は返金できません。',
    '購読期間中はいつでもご利用いただけます。',
  ];

  return (
    <div className="text-[14px] leading-[1.65] text-[#0d0e12]/60">
      <ol className="list-decimal space-y-1 pl-5">
        {notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ol>
      <p className="mt-1 pl-5 text-[14px] leading-[1.65] text-[#0d0e12]/60">
        購入された時点で、
        <span className="text-[#268bb9]">【特定商取引法に基づく表示】</span>
        に同意いただいたものとみなされます。
      </p>
    </div>
  );
}

function PlanDecoration() {
  return (
    <div className="pointer-events-none absolute bottom-0 right-0 z-0 h-[88px] w-[88px]">
      <img alt="" className="absolute bottom-[-2px] right-0 h-[78px] w-[78px] object-contain opacity-80" src={paywallCardStar} />
    </div>
  );
}

function PlanCard({
  title,
  subtitle,
  price,
  badge,
  selected = false,
}: {
  title: string;
  subtitle: string;
  price: string;
  badge?: string;
  selected?: boolean;
}) {
  return (
    <button
      className={`relative w-full overflow-hidden rounded-[12px] px-5 pb-3 pt-5 text-left ${
        selected
          ? 'border-2 border-[var(--token-color-accent-primary)] bg-[var(--token-color-background-primary)] shadow-[var(--token-shadow-card)]'
          : 'border border-[var(--token-color-border-accent-2)] bg-[var(--token-color-background-primary)]'
      }`}
      type="button"
    >
      {badge ? (
        <span
          className={`absolute z-20 rounded-bl-[12px] rounded-tr-[12px] bg-[var(--token-color-accent-primary)] px-[7px] py-[2px] text-[10px] leading-none text-white ${
            selected ? '-right-[2px] -top-[2px]' : '-right-px -top-px'
          }`}
        >
          {badge}
        </span>
      ) : null}
      <PlanDecoration />
      <div className="relative z-10 flex items-start justify-between gap-4">
        <div>
          <p className="text-[16px] font-bold leading-none text-[color:var(--token-color-black-100)]">{title}</p>
          <p className="mt-[10px] text-[10px] leading-none text-[color:var(--token-color-black-40)]">{subtitle}</p>
        </div>
        <p className="pt-[2px] text-[16px] font-bold leading-none text-[color:var(--token-color-black-100)]">{price}</p>
      </div>
    </button>
  );
}

export default function TrialPaywall() {
  const navigate = useNavigate();

  return (
    <motion.div
      animate={{ y: 0 }}
      className="relative size-full overflow-hidden bg-white font-['Hiragino_Sans',sans-serif] text-[#0d0e12]"
      initial={{ y: '100%' }}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
    >
      <Header onBack={() => navigate('/success')} />

      <div className="absolute inset-x-0 top-[196px] bottom-[148px] overflow-y-auto px-5 pb-6">
        <div className="mx-auto w-full max-w-[335px]">
          <div className="relative space-y-7 pb-8">
            <div className="absolute left-[14px] top-8 bottom-[128px] w-[4px] bg-[#268bb9]/5" />
            <TimelineItem
              active
              body="問題を撮って送るだけ！分かりやすい解説で苦手を克服しよう！"
              icon={<Lock className="h-[18px] w-[18px]" strokeWidth={2.2} />}
              title="今日：全機能を解放"
            />
            <TimelineItem
              body="無料トライアルの終了が近づくと、リマインド通知をお送りします。"
              icon={<Bell className="h-[18px] w-[18px]" strokeWidth={2.2} />}
              title="2日目：もうすぐトライアル終了！"
            />
            <TimelineItem
              body="この日に自動的に購読が開始されます。"
              icon={<Crown className="h-[18px] w-[18px]" strokeWidth={2.2} />}
              title="3日目：トライアル終了"
            />
          </div>

          <LegalNotes />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-white px-5 pb-[34px] pt-5">
        <div className="mx-auto w-full max-w-[335px]">
          <div className="space-y-[10px]">
            <PlanCard badge="3日間無料" price="JPY ¥ 1000" selected subtitle="3日間無料で試す" title="月額プラン" />
            <PlanCard badge="20% OFF" price="JPY ¥ 9000" subtitle="割引は固定で、長期間有効" title="年間プラン" />
          </div>

          <button
            className="relative mt-5 flex h-14 w-full items-center justify-center rounded-[var(--token-radius-button)] bg-[var(--token-color-accent-primary)] px-3 text-white shadow-[var(--token-shadow-primary-inset)]"
            onClick={() => console.log('Start trial')}
            type="button"
          >
            <div className="flex flex-col items-center">
              <span className="text-[16px] font-semibold leading-none">3日間無料でお試し</span>
              <span className="mt-1 text-[10px] leading-none">その後、自動更新</span>
            </div>
            <ArrowRight className="absolute right-8 h-[18px] w-[18px]" strokeWidth={2.4} />
          </button>

          <p className="mt-[18px] text-center text-[10px] leading-none text-[#0d0e12]/30">
            Restore Purchases  |  Privacy Policy  |  Terms of Service
          </p>
        </div>
      </div>
    </motion.div>
  );
}
