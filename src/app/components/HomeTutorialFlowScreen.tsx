import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import ProductHomeV2, { HomeV2Content } from './ProductHomeV2';
import { Button } from './ui/button';
import onboardingCharacter from '../../assets/onboarding-dialog-character.png';
import onboardingCharacterStep2 from '../../assets/onboarding-dialog-character-step2.png';

type TutorialStep = 0 | 1 | 2 | 3;

function clampStep(value: number): TutorialStep {
  if (value <= 0) return 0;
  if (value === 1) return 1;
  if (value === 2) return 2;
  return 3;
}

function useTutorialStep() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  return clampStep(Number(params.get('step') ?? '1'));
}

function TutorialTooltip({
  text,
  buttonLabel,
  onSkip,
  onContinue,
  step,
  characterSrc,
  isExiting,
}: {
  text: string;
  buttonLabel: string;
  onSkip: () => void;
  onContinue: () => void;
  step: TutorialStep;
  characterSrc: string;
  isExiting: boolean;
}) {
  const shouldAnimateCharacter = step === 1;

  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col h-[812px] items-center justify-end left-1/2 overflow-clip pb-[130px] pt-[44px] px-[16px] top-0 w-[375px]">
      <div
        className={`content-stretch flex h-[104px] w-[343px] items-start justify-end mb-[-10px] relative shrink-0 overflow-visible ${
          isExiting ? 'tutorial-character-exit' : ''
        }`}
      >
        <div className={`relative h-[104px] w-[125.005px] shrink-0 ${shouldAnimateCharacter ? 'tutorial-character-enter' : ''}`}>
          <img
            alt=""
            className="block h-full w-full max-w-none object-contain pointer-events-none"
            src={characterSrc}
          />
        </div>
      </div>

      <div className="bg-[var(--token-color-background-primary,#f2fbff)] content-stretch flex flex-col h-[135px] items-start mb-[-10px] px-[12px] py-[12px] relative rounded-[16px] shrink-0 w-full">
        <div className="flex min-h-0 flex-1 items-start w-full">
          <p className="font-['Hiragino_Sans:W4',sans-serif] leading-[1.55] min-h-px min-w-px not-italic relative text-[18px] text-[color:var(--token-color-accent-primary-shadow,#0371a4)] w-full">
            {text}
          </p>
        </div>
        <div className="mt-[12px] flex h-[32px] shrink-0 items-end w-full">
          <Button
            className="ml-auto inline-flex h-[32px] items-center gap-[4px] rounded-full bg-[var(--token-color-accent-primary,#339bc9)] px-[12px] text-[14px] font-normal leading-none text-white shadow-none hover:bg-[var(--token-color-accent-primary,#339bc9)] focus-visible:ring-0"
            onClick={onContinue}
            type="button"
          >
            <span className="font-['Hiragino_Sans:W4',sans-serif] relative shrink-0">{buttonLabel}</span>
            <span className="font-['Rco',sans-serif] relative shrink-0 text-[14px]">{`\uE903`}</span>
          </Button>
        </div>
      </div>

      <div className="absolute content-stretch flex flex-col h-[56px] items-center justify-center left-0 px-[20px] py-[12px] top-[61px] w-[375px]">
        <div className="content-stretch flex gap-[8px] items-center justify-center py-[2px] relative shrink-0 w-full">
          <button className="content-stretch cursor-pointer flex gap-[20px] items-start relative shrink-0 size-[24px]" data-name="左侧icon" type="button" />
          <div className="flex flex-[1_0_0] flex-col font-['Hiragino_Sans:W5',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic opacity-0 relative text-[18px] text-center text-white tracking-[0.54px]">
            <p className="leading-[1.5]">User Agreement and Privacy...</p>
          </div>
          <div className="content-stretch flex gap-[20px] items-start relative shrink-0">
            <button
              className="flex flex-col font-['Hiragino_Sans:W4',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap"
              onClick={onSkip}
              type="button"
            >
              <p className="leading-[normal]">跳过</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomeTutorialFlowScreen() {
  const navigate = useNavigate();
  const step = useTutorialStep();
  const [isExiting, setIsExiting] = useState(false);
  const [showTutorial, setShowTutorial] = useState(true);

  const goHome = () => navigate('/home-v2', { replace: true });
  const goStep = (next: TutorialStep) => {
    navigate({
      pathname: '/home-tutorial',
      search: `?step=${next}`,
    });
  };

  useEffect(() => {
    setIsExiting(false);
    setShowTutorial(true);
  }, [step]);

  if (step === 0) {
    return <ProductHomeV2 />;
  }

  const stepConfig: Record<Exclude<TutorialStep, 0>, { text: string; buttonLabel: string; next: TutorialStep | null }> = {
    1: {
      text: '你好，我是数老师，每一道题都是一个等待被解开的谜题。让我带着你先了解一下。',
      buttonLabel: '开始了解',
      next: 2,
    },
    2: {
      text: '在Home中，点击这里进行题目的拍摄，可以根据不同的情况来选择。',
      buttonLabel: '下一步',
      next: 3,
    },
    3: {
      text: '现在来上传一道题试试吧',
      buttonLabel: '完成',
      next: null,
    },
  };

  const current = stepConfig[step];

  const handleContinue = () => {
    if (current.next) {
      goStep(current.next);
      return;
    }

    setIsExiting(true);
    window.setTimeout(() => {
      setShowTutorial(false);
      goHome();
    }, 420);
  };

  return (
    <div className="relative isolate z-[220] size-full overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <ProductHomeV2 variant={step === 2 ? 'tutorial-step2' : 'default'} />
      </div>
      <div className="pointer-events-none absolute inset-0 z-[150] bg-[rgba(13,14,18,0.4)]" />
      {step === 2 ? (
        <div className="pointer-events-none absolute inset-0 z-[152]">
          <HomeV2Content variant="tutorial-step2" />
        </div>
      ) : null}
      {showTutorial ? (
        <div className="relative z-[160]">
          <TutorialTooltip
            buttonLabel={current.buttonLabel}
            onContinue={current.next ? () => goStep(current.next!) : handleContinue}
            onSkip={goHome}
            text={current.text}
            step={step}
            characterSrc={step === 2 ? onboardingCharacterStep2 : onboardingCharacter}
            isExiting={isExiting}
          />
        </div>
      ) : null}
    </div>
  );
}
