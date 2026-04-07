import type { ReactNode } from 'react';
import { ChevronLeft } from 'lucide-react';

import intro1Reference from '../../assets/intro-1-reference.png';
import intro2Reference from '../../assets/intro-2-reference.png';
import intro3Reference from '../../assets/intro-3-reference.png';
import intro4Reference from '../../assets/intro-4-reference.png';

interface FeatureIntroLayoutProps {
  title: string;
  description: [string, string];
  artwork: ReactNode;
  onBack: () => void;
  onSkip: () => void;
  onContinue: () => void;
}

function IntroNav({ onBack, onSkip }: Pick<FeatureIntroLayoutProps, 'onBack' | 'onSkip'>) {
  return (
    <div className="absolute inset-x-0 top-[52px] flex h-[56px] items-center px-5">
      <button
        aria-label="Back"
        className="flex h-8 w-8 items-center justify-center rounded-full text-white/85"
        onClick={onBack}
        type="button"
      >
        <ChevronLeft className="h-6 w-6" strokeWidth={2.2} />
      </button>
      <div className="flex-1" />
      <button
        className="w-20 text-right text-[16px] font-normal text-white"
        onClick={onSkip}
        type="button"
      >
        スキップ
      </button>
    </div>
  );
}

function ContinueButton({ onContinue }: Pick<FeatureIntroLayoutProps, 'onContinue'>) {
  return (
    <div className="absolute inset-x-0 bottom-0 px-5 pb-[34px] pt-2">
      <button
        className="h-14 w-full rounded-[var(--token-radius-button)] bg-[var(--token-color-background-primary)] text-[16px] font-semibold text-[color:var(--token-color-black-100)] shadow-[var(--token-shadow-primary-inset)]"
        onClick={onContinue}
        type="button"
      >
        続ける
      </button>
    </div>
  );
}

function FeatureIntroLayout({
  title,
  description,
  artwork,
  onBack,
  onSkip,
  onContinue,
}: FeatureIntroLayoutProps) {
  return (
    <div className="relative size-full overflow-hidden bg-[#2389b9] font-['Hiragino_Sans',sans-serif]">
      <IntroNav onBack={onBack} onSkip={onSkip} />
      <div className="absolute inset-x-0 top-[108px] flex h-[388px] justify-center overflow-hidden">
        <div className="relative h-full w-[375px]">{artwork}</div>
      </div>
      <div className="absolute inset-x-0 top-[548px] flex justify-center px-5 text-[#f2fbff]">
        <div className="w-full max-w-[335px] text-center">
        <p className="text-[24px] font-bold leading-[1.5]">{title}</p>
        <div className="mt-[10px] text-[18px] font-normal leading-[1.5]">
          <p>{description[0]}</p>
          <p>{description[1]}</p>
        </div>
        </div>
      </div>
      <ContinueButton onContinue={onContinue} />
    </div>
  );
}

function Intro1Artwork() {
  return (
    <div className="relative h-full w-full">
      <img alt="" className="h-full w-full object-contain" src={intro1Reference} />
    </div>
  );
}

function Intro2Artwork() {
  return (
    <div className="relative h-full w-full">
      <img alt="" className="h-full w-full object-contain" src={intro2Reference} />
    </div>
  );
}

function Intro3Artwork() {
  return (
    <div className="relative h-full w-full">
      <img alt="" className="h-full w-full object-contain" src={intro3Reference} />
    </div>
  );
}

function Intro4Artwork() {
  return (
    <div className="relative h-full w-full">
      <img alt="" className="h-full w-full object-contain" src={intro4Reference} />
    </div>
  );
}

interface IntroScreenProps {
  onBack: () => void;
  onSkip: () => void;
  onContinue: () => void;
}

export function Intro1Screen(props: IntroScreenProps) {
  return (
    <FeatureIntroLayout
      {...props}
      artwork={<Intro1Artwork />}
      description={['撮るだけで、', 'つまずきポイントが分かるよ。']}
      title="撮るだけで分析！"
    />
  );
}

export function Intro2Screen(props: IntroScreenProps) {
  return (
    <FeatureIntroLayout
      {...props}
      artwork={<Intro2Artwork />}
      description={['ステップごとに、', '考え方を丁寧に説明するよ。']}
      title="しっかり分かる解説！"
    />
  );
}

export function Intro3Screen(props: IntroScreenProps) {
  return (
    <FeatureIntroLayout
      {...props}
      artwork={<Intro3Artwork />}
      description={['解けるかどうか、', '一緒に確かめてみよう。']}
      title="学んだら、すぐ練習！"
    />
  );
}

export function Intro4Screen(props: IntroScreenProps) {
  return (
    <FeatureIntroLayout
      {...props}
      artwork={<Intro4Artwork />}
      description={['やったね！', 'ここまでの努力がちゃんと残るよ。']}
      title="苦手をクリア！"
    />
  );
}
