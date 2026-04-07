import { useEffect, useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import Lottie from 'lottie-react';
import { useNavigate } from 'react-router';
import successBadge from '@/assets/success-badge.png';
import successConfetti from '@/assets/success-confetti.json';

function SuccessMascot({ showConfetti }: { showConfetti: boolean }) {
  return (
    <div className="relative h-[150px] w-[150px]">
      {showConfetti ? (
        <div className="pointer-events-none absolute inset-1/2 z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2">
          <Lottie animationData={successConfetti} autoplay loop={false} />
        </div>
      ) : null}
      <img
        alt=""
        className="relative h-[150px] w-[150px] overflow-hidden rounded-full"
        src={successBadge}
      />
    </div>
  );
}

export default function CompletionSuccess() {
  const navigate = useNavigate();
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);

    const timer = window.setTimeout(() => {
      setShowConfetti(false);
    }, 4500);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative size-full overflow-hidden bg-white font-['Hiragino_Sans',sans-serif] text-[#0d0e12]">
      <div className="absolute inset-x-0 top-[52px] flex h-[56px] items-center px-5">
        <button
          aria-label="Back"
          className="flex h-8 w-8 items-center justify-center rounded-full text-[color:var(--token-color-black-80)]"
          onClick={() => navigate('/discovery-source')}
          type="button"
        >
          <ChevronLeft className="h-6 w-6" strokeWidth={2.2} />
        </button>
      </div>

      <div className="absolute left-1/2 top-1/2 flex w-[270px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-[13px]">
        <SuccessMascot showConfetti={showConfetti} />
        <div className="w-[240px] text-center">
          <p className="text-[18px] font-semibold leading-[1.5]">情報登録が完了しました！</p>
          <p className="mt-[10px] text-[14px] leading-[1.55]">さあ、「すう先生」と一緒に数学の難関を突破しよう！</p>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-white px-5 pb-[34px] pt-2">
        <button
          className="h-14 w-full rounded-[var(--token-radius-button)] bg-[var(--token-color-accent-primary)] text-[16px] font-semibold text-white shadow-[var(--token-shadow-primary-inset)]"
          onClick={() => navigate('/paywall')}
          type="button"
        >
          始める
        </button>
      </div>
    </div>
  );
}
