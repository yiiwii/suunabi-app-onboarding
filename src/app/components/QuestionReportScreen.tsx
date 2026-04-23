import type { ReactNode } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { IOS_SAFE_AREA_BOTTOM, IOS_SAFE_AREA_TOP } from './preview/device';
import { QuestionChatComposer } from './QuestionChatScreen';

import imgQuestion from '../../assets/question-report-image-222.png';
import imgSolution from '../../assets/question-report-image-224.png';
import imgAnswer from '../../assets/question-report-image-223.png';
import imgEvalHero from '../../assets/question-report-evaluation-hero.png';
import imgEvalBadge from '../../assets/question-report-evaluation-badge.png';

const NAV_HEIGHT = IOS_SAFE_AREA_TOP + 60;

function StepCard({
  stepNum,
  expanded,
  title,
  body,
}: {
  stepNum: number;
  expanded: boolean;
  title: string;
  body: string[];
}) {
  return (
    <div className="overflow-hidden rounded-[10px] bg-[var(--token-color-background-secondary,#fff)]">
      <div className="flex h-[40px] items-center justify-between bg-[var(--token-color-accent-primary,#339bc9)] px-[10px] py-[8px]">
        <div className="flex items-center gap-[10px]">
          <span className="font-['Hiragino_Sans',sans-serif] text-[16px] font-bold leading-none text-[var(--token-color-background-secondary,#fff)]">
            Step{stepNum}
          </span>
          <span className="flex items-center gap-[4px] rounded-[999px] bg-[var(--token-color-green-20,#a2ffe833)] px-[8px] py-[2px] text-[var(--token-color-success,#249176)]">
            <span className="font-['Rco',sans-serif] text-[14px] leading-none">{'\uE94A'}</span>
            <span className="font-['Hiragino_Sans',sans-serif] text-[14px] leading-none">正解</span>
          </span>
        </div>
        <span className="font-['Rco',sans-serif] text-[18px] leading-none text-[var(--token-color-background-secondary,#fff)]">
          {expanded ? '\uE951' : '\uE985'}
        </span>
      </div>

      {expanded && (
        <div className="space-y-[10px] px-[10px] pb-[10px] pt-[10px]">
          <p className="font-['Hiragino_Sans',sans-serif] text-[16px] leading-normal text-[var(--token-color-black-60,#0d0e1299)]">
            {title}
          </p>
          <div className="font-['Hiragino_Sans',sans-serif] text-[16px] leading-normal text-[var(--token-color-black-60,#0d0e1299)]">
            <ul className="list-disc pl-[20px]">
              {body.map((item) => (
                <li key={item} className="mb-[2px]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

function AnswerEvaluationCard() {
  return (
    <div className="relative overflow-hidden rounded-[10px] border border-[var(--token-color-border-primary-2,#cce5f2)] bg-[var(--token-color-green-20,#a2ffe833)] p-[10px]">
      <div className="flex min-h-[61px] items-center justify-center pr-[78px]">
        <p className="font-['Hiragino_Sans',sans-serif] text-[16px] font-bold leading-none text-[var(--token-color-success,#249176)]">
          完全に正解！
        </p>
      </div>
      <div className="pointer-events-none absolute right-[-2px] top-[-2px] h-[81px] w-[80px]">
        <img src={imgEvalHero} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <img src={imgEvalBadge} alt="" className="absolute right-[-2px] top-[-2px] h-[80px] w-[80px] object-cover" />
      </div>
    </div>
  );
}

function ReviewButton({
  primary,
  icon,
  children,
}: {
  primary?: boolean;
  icon: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      className={`flex min-h-[92px] flex-1 flex-col items-center justify-center gap-[8px] rounded-[12px] border-b-[4px] p-[12px] ${
        primary
          ? 'border border-[var(--token-color-border-primary-2,#cce5f2)] bg-[var(--token-color-accent-primary,#339bc9)] text-[var(--token-color-background-secondary,#fff)]'
          : 'border border-[var(--token-color-border-primary-2,#cce5f2)] bg-[var(--token-color-background-primary,#f2fbff)] text-[var(--token-color-accent-primary,#339bc9)]'
      }`}
    >
      <span className="font-['Rco',sans-serif] text-[24px] leading-none">{icon}</span>
      <span className="font-['Hiragino_Sans',sans-serif] text-[16px] font-bold leading-none">
        {children}
      </span>
    </button>
  );
}

export default function QuestionReportScreen() {
  const navigate = useNavigate();
  const [openSteps] = useState<Set<number>>(new Set([1, 2, 3]));

  return (
    <div className="relative h-full w-full overflow-hidden bg-[var(--token-color-background-primary,#f2fbff)]">
      <div
        className="absolute inset-x-0 top-0 z-10 flex items-end bg-[var(--token-color-background-primary,#f2fbff)]"
        style={{ height: NAV_HEIGHT }}
      >
        <div className="flex h-[60px] w-full items-center px-[10px]">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex size-[40px] items-center justify-center rounded-full"
          >
            <span className="font-['Rco',sans-serif] text-[24px] leading-none text-[var(--token-color-black-80,#0d0e12cc)]">
              {'\uE92A'}
            </span>
          </button>

          <div className="flex-1 text-center">
            <div className="font-['Hiragino_Sans',sans-serif] text-[18px] font-semibold leading-none text-[var(--token-color-black-80,#0d0e12cc)]">
              一元三次方程
            </div>
          </div>

          <button
            type="button"
            className="flex size-[40px] items-center justify-center rounded-full"
            aria-hidden="true"
            tabIndex={-1}
          >
            <span className="font-['Rco',sans-serif] text-[24px] leading-none text-[var(--token-color-black-80,#0d0e12cc)] opacity-0">
              {'\uE92A'}
            </span>
          </button>
        </div>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 overflow-y-auto"
        style={{ top: NAV_HEIGHT, paddingBottom: 84 + IOS_SAFE_AREA_BOTTOM }}
      >
        <div className="flex flex-col items-center gap-[30px] px-[20px] pb-[20px] pt-[10px]">
          <div className="w-[335px] rounded-[10px] bg-[var(--token-color-background-secondary,#fff)] px-[10px] py-[14px]">
            <p className="font-['Hiragino_Sans',sans-serif] text-[16px] leading-normal text-[var(--token-color-black-60,#0d0e1299)]">
              次の方程式を解きなさい：
            </p>
            <div className="flex justify-center py-[10px]">
              <img src={imgQuestion} alt="question" className="h-[69px] object-contain" />
            </div>
            <div className="overflow-hidden rounded-[4px]">
              <img src={imgSolution} alt="solution" className="w-full object-contain" />
            </div>
          </div>

          <div className="flex w-[335px] flex-col gap-[10px]">
            <p className="font-['Hiragino_Sans',sans-serif] text-[18px] font-semibold leading-none text-[var(--token-color-accent-primary-shadow,#0371a4)]">
              解答の評価
            </p>
            <AnswerEvaluationCard />
          </div>

          <div className="flex w-[335px] flex-col gap-[10px]">
            <p className="font-['Hiragino_Sans',sans-serif] text-[18px] font-semibold leading-none text-[var(--token-color-accent-primary-shadow,#0371a4)]">
              解き方のポイント
            </p>
            <div className="rounded-[10px] bg-[var(--token-color-background-secondary,#fff)] px-[10px] py-[14px]">
              <p className="font-['Hiragino_Sans',sans-serif] text-[16px] leading-normal text-[var(--token-color-black-60,#0d0e1299)]">
                要解答一元三次方程，我们需要使得左右只有一边有未知数x
              </p>
            </div>
          </div>

          <div className="flex w-[335px] flex-col gap-[10px]">
            <div className="flex items-center justify-between">
              <p className="font-['Hiragino_Sans',sans-serif] text-[18px] font-semibold leading-none text-[var(--token-color-accent-primary-shadow,#0371a4)]">
                ステップ解説
              </p>
              <button
                type="button"
                className="flex items-center gap-[2px] rounded-[100px] bg-[var(--token-color-background-primary,#f2fbff)] px-[6px] py-[2px] text-[var(--token-color-accent-primary-shadow,#0371a4)]"
              >
                <span className="font-['Hiragino_Sans',sans-serif] text-[16px] leading-none">別の解き方</span>
                <span className="font-['Rco',sans-serif] text-[12px] leading-none">{'\uE952'}</span>
              </button>
            </div>

            <div className="flex flex-col gap-[10px]">
              <div className="w-full">
                <StepCard
                  stepNum={1}
                  expanded={openSteps.has(1)}
                  title="両辺から適切な因数を取り出す"
                  body={['両辺から適切な因数を取り出す']}
                />
              </div>
              <div className="w-full">
                <StepCard
                  stepNum={2}
                  expanded={openSteps.has(2)}
                  title="対两边拆解出合理的因子"
                  body={['两边加上 2x：3x - 3 = 5', '两边加 3：3x = 8', '除以 3：x = 8/3']}
                />
              </div>
              <div className="w-full">
                <StepCard
                  stepNum={3}
                  expanded={openSteps.has(3)}
                  title="両辺から適切な因数を取り出す"
                  body={['両辺から適切な因数を取り出す']}
                />
              </div>
            </div>
          </div>

          <div className="flex w-[335px] flex-col gap-[10px]">
            <p className="font-['Hiragino_Sans',sans-serif] text-[18px] font-semibold leading-none text-[var(--token-color-accent-primary-shadow,#0371a4)]">
              解答
            </p>
            <div className="rounded-[10px] bg-[var(--token-color-background-secondary,#fff)] px-[10px] py-[14px]">
              <p className="font-['Hiragino_Sans',sans-serif] text-[16px] leading-normal text-[var(--token-color-black-60,#0d0e1299)]">
                要解答一元三次方程，我们需要使得左右只有一边有未知数x
              </p>
              <div className="pt-[10px]">
                <img src={imgAnswer} alt="answer" className="h-[28px] object-contain" />
              </div>
            </div>
          </div>

          <div className="flex w-[335px] flex-col gap-[10px]">
            <p className="font-['Hiragino_Sans',sans-serif] text-[18px] font-semibold leading-none text-[var(--token-color-accent-primary-shadow,#0371a4)]">
              復習
            </p>
            <div className="flex gap-[20px]">
              <ReviewButton icon={'\uE9A4'}>別の解き方</ReviewButton>
              <ReviewButton primary icon={'\uE98A'}>
                もう1問練習
              </ReviewButton>
            </div>
          </div>

          <div className="w-[335px] rounded-[20px] border border-[var(--token-color-border-primary-2,#cce5f2)] bg-[var(--token-color-background-secondary,#fff)] p-[20px]">
            <div className="flex flex-col items-center gap-[12px]">
              <div className="relative size-[100px]">
                <img src={imgEvalHero} alt="" className="absolute inset-0 h-full w-full object-cover" />
                <img src={imgEvalBadge} alt="" className="absolute right-[-2px] top-[-2px] h-[80px] w-[80px] object-cover" />
              </div>
              <p className="font-['Hiragino_Sans',sans-serif] text-[16px] leading-normal text-[var(--token-color-accent-primary,#339bc9)]">
                この情報は役に立ちましたか？
              </p>
              <div className="flex w-full gap-[10px]">
                <button
                  type="button"
                  className="flex-1 rounded-[12px] border border-[var(--token-color-border-primary-2,#cce5f2)] border-b-[4px] bg-[var(--token-color-background-primary,#f2fbff)] px-[20px] py-[4px] text-[14px] text-[var(--token-color-accent-primary,#339bc9)]"
                >
                  <span className="mr-[4px] font-['Rco',sans-serif]">{'\uE965'}</span>
                  <span className="font-['Hiragino_Sans',sans-serif]">はい</span>
                </button>
                <button
                  type="button"
                  className="flex-1 rounded-[12px] border border-[var(--token-color-border-primary-2,#cce5f2)] border-b-[4px] bg-[var(--token-color-background-primary,#f2fbff)] px-[20px] py-[4px] text-[14px] text-[var(--token-color-accent-primary,#339bc9)]"
                >
                  <span className="mr-[4px] font-['Rco',sans-serif]">{'\uE961'}</span>
                  <span className="font-['Hiragino_Sans',sans-serif]">いいえ</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20">
        <QuestionChatComposer />
      </div>
    </div>
  );
}
