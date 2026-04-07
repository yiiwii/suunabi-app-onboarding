import { ChevronLeft, ArrowRight } from 'lucide-react';
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
          <h1 className="text-[24px] font-bold leading-none text-[#0d0e12]">購読して全機能を解放</h1>
        </div>
      </div>
    </>
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

function LongLegalCopy() {
  return (
    <div className="text-[14px] leading-[1.45] text-[#0d0e12]/60">
      <ol className="list-decimal space-y-[2px] pl-5">
        <li>購読プランは自動更新となり、Appleストアから自動的に料金が引き落とされます。支払い完了後すぐにサービスが開始されます。</li>
        <li>購入すると、すべての機能がご利用いただけます。</li>
        <li>次回の請求日前にAppleストアの設定からキャンセルすれば、次回以降の更新は行われません。すでに支払われた料金は返金できません。</li>
        <li>購読期間中はいつでもご利用いただけます。カメラで撮影するか、問題文を入力して、理解できない・解けない数学の問題をシステムにアップロードし、「問題のアップロード → 解説 → 練習 → 振り返り」という学習サイクルを通じて、理解を深めながら知識を定着させ、数学力の向上を目指します。</li>
        <li>
          購入された時点で、
          <span className="text-[#339bc9]">【特定商取引法に基づく表示】</span>
          に同意いただいたものとみなされます。
        </li>
      </ol>
    </div>
  );
}

export default function TrialPaywallB() {
  const navigate = useNavigate();

  return (
    <div className="relative size-full overflow-hidden bg-white font-['Hiragino_Sans',sans-serif] text-[#0d0e12]">
      <Header onBack={() => navigate('/success')} />

      <div className="absolute inset-x-0 top-[196px] bottom-[148px] overflow-y-auto px-5 pb-6">
        <div className="mx-auto w-full max-w-[335px]">
          <LongLegalCopy />
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
            onClick={() => console.log('Register annual plan')}
            type="button"
          >
            <span className="text-[16px] font-semibold leading-none">登録</span>
            <ArrowRight className="absolute right-8 h-[18px] w-[18px]" strokeWidth={2.4} />
          </button>

          <p className="mt-[18px] text-center text-[10px] leading-none text-[#0d0e12]/30">
            Restore Purchases  |  Privacy Policy  |  Terms of Service
          </p>
        </div>
      </div>
    </div>
  );
}
