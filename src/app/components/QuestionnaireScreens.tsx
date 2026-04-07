import { ChevronLeft } from 'lucide-react';
import { motion } from 'motion/react';

interface QuestionnaireOption {
  label: string;
  value: string;
}

interface QuestionnaireLayoutProps {
  title: string;
  subtitle?: string;
  options: QuestionnaireOption[];
  selectedValue: string | null;
  onBack: () => void;
  onNext: () => void;
  onSelect: (value: string) => void;
  nextLabel?: string;
  nextDisabled?: boolean;
  compact?: boolean;
}

function QuestionnaireNav({ onBack }: Pick<QuestionnaireLayoutProps, 'onBack'>) {
  return (
    <div className="absolute inset-x-0 top-[52px] flex h-[56px] items-center px-5">
      <button
        aria-label="Back"
        className="flex h-8 w-8 items-center justify-center rounded-full text-[color:var(--token-color-black-80)]"
        onClick={onBack}
        type="button"
      >
        <ChevronLeft className="h-6 w-6" strokeWidth={2.2} />
      </button>
    </div>
  );
}

function QuestionnaireLayout({
  title,
  subtitle,
  options,
  selectedValue,
  onBack,
  onNext,
  onSelect,
  nextLabel = '次へ',
  nextDisabled = false,
  compact = false,
}: QuestionnaireLayoutProps) {
  return (
    <div className="relative size-full overflow-hidden bg-white font-['Hiragino_Sans',sans-serif] text-[#0d0e12]">
      <QuestionnaireNav onBack={onBack} />

      <div className="px-5 pt-[109px]">
        <div className="max-w-[335px]">
          <h1 className="text-[24px] font-bold leading-[1.45]">{title}</h1>
          {subtitle ? (
            <p className="mt-3 text-[16px] font-normal leading-[1.5] text-[#0d0e12]/80">{subtitle}</p>
          ) : null}
        </div>

        <div className={`mt-[52px] flex flex-col ${compact ? 'gap-4' : 'gap-5'}`}>
          {options.map((option) => {
            const selected = option.value === selectedValue;

            return (
              <motion.button
                key={option.value}
                className={`h-14 rounded-[var(--token-radius-button)] border text-[16px] text-center ${
                  selected
                    ? 'border-[var(--token-color-border-accent-3)] bg-[var(--token-color-border-primary-3)] font-semibold'
                    : 'border-[var(--token-color-border-accent-3)] bg-[var(--token-color-background-primary)] font-normal'
                }`}
                animate={selected ? { scale: [1, 0.985, 1] } : { scale: 1 }}
                onClick={() => onSelect(option.value)}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                type="button"
              >
                {option.label}
              </motion.button>
            );
          })}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-white px-5 pb-[34px] pt-2">
        <button
          className={`h-14 w-full rounded-[var(--token-radius-button)] text-[16px] ${
            nextDisabled
              ? 'bg-[var(--token-color-accent-secondary)] text-white/80'
              : 'bg-[var(--token-color-accent-primary)] font-semibold text-white shadow-[var(--token-shadow-primary-inset)]'
          }`}
          disabled={nextDisabled}
          onClick={onNext}
          type="button"
        >
          {nextLabel}
        </button>
      </div>
    </div>
  );
}

interface ScreenProps {
  onBack: () => void;
  onNext: () => void;
  onSelect: (value: string) => void;
  selectedValue: string | null;
}

export function GradeSelectionQuestion(props: ScreenProps) {
  return (
    <QuestionnaireLayout
      {...props}
      nextDisabled={props.selectedValue === null}
      options={[
        { label: '小学生', value: 'elementary' },
        { label: '中学生', value: 'middle' },
        { label: '高校生', value: 'high' },
        { label: '大学生', value: 'college' },
        { label: 'その他', value: 'other' },
      ]}
      subtitle="入力内容に合わせて、学習内容を用意します。"
      title="今の学年を選んでください。"
    />
  );
}

export function ElementaryGradeQuestion(props: ScreenProps) {
  return (
    <QuestionnaireLayout
      {...props}
      compact={true}
      nextDisabled={props.selectedValue === null}
      options={[
        { label: '小学1年生', value: '1' },
        { label: '小学2年生', value: '2' },
        { label: '小学3年生', value: '3' },
        { label: '小学4年生', value: '4' },
        { label: '小学5年生', value: '5' },
        { label: '小学6年生', value: '6' },
      ]}
      subtitle="入力内容に合わせて、学習内容を用意します。"
      title="今の学年を選んでください。"
    />
  );
}

export function UserTypeQuestion(props: ScreenProps) {
  return (
    <QuestionnaireLayout
      {...props}
      nextDisabled={props.selectedValue === null}
      options={[
        { label: '自分の学習のため（本人）', value: 'self' },
        { label: '子どもの学習のため（保護者）', value: 'parent' },
      ]}
      subtitle="あなたに合ったサポートを用意するため、当てはまるものを選んでください。"
      title="なぜご利用を始めましたか？"
    />
  );
}

export function DiscoverySourceQuestion(props: ScreenProps) {
  return (
    <QuestionnaireLayout
      {...props}
      compact={true}
      nextDisabled={props.selectedValue === null}
      options={[
        { label: 'Instagram', value: 'instagram' },
        { label: 'Google 検索', value: 'google' },
        { label: 'YouTube', value: 'youtube' },
        { label: '友達・クラスメートの紹介', value: 'friends' },
        { label: '保護者同士の紹介', value: 'parents' },
        { label: 'その他', value: 'other' },
      ]}
      subtitle="きっかけを教えてください。今後の改善に役立てます。"
      title="どこで私たちを知りましたか？"
    />
  );
}
