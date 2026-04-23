import { useNavigate } from 'react-router';
import { IOS_SAFE_AREA_TOP } from './preview/device';
import { BottomNavBar, BOTTOM_NAV_HEIGHT } from './BottomNavBar';
import cardAnswer from '../../assets/home-card-answer.png';
import cardGrade from '../../assets/home-card-grade.png';
import cardAnalysis from '../../assets/home-card-analysis.png';
import cardQuestion from '../../assets/home-card-question.png';
import step2Card1 from '../../assets/home-tutorial-step2-card-1.png';
import step2Card2 from '../../assets/home-tutorial-step2-card-2.png';
import step2Card3 from '../../assets/home-tutorial-step2-card-3.png';

const HEADER_HEIGHT = IOS_SAFE_AREA_TOP + 80;

type HomeV2Variant = 'default' | 'tutorial-step2';

export type HomeFeature = {
  img: string;
  title: string;
  subtitle: string;
};

export const defaultFeatures: HomeFeature[] = [
  {
    img: cardAnswer,
    title: '解き方を見る',
    subtitle: 'わからない問題はこちら',
  },
  {
    img: cardGrade,
    title: '正誤チェック',
    subtitle: '答えが合っているか確認',
  },
  {
    img: cardAnalysis,
    title: 'ミスの分析',
    subtitle: '間違えた点をチェック',
  },
  {
    img: cardQuestion,
    title: 'すう先生に質問',
    subtitle: '間違えた点をチェック',
  },
];

export const tutorialStep2Features: HomeFeature[] = [
  {
    img: step2Card1,
    title: '解き方を見る',
    subtitle: 'わからない問題はこちら',
  },
  {
    img: step2Card2,
    title: '正誤チェック',
    subtitle: '答えが合っているか確認',
  },
  {
    img: step2Card3,
    title: 'ミスの分析',
    subtitle: '間違えた点をチェック',
  },
  {
    img: cardQuestion,
    title: 'すう先生に質問',
    subtitle: '間違えた点をチェック',
  },
];

export function FeatureCard({
  img,
  title,
  subtitle,
  highlightId,
  className = '',
  style,
  onClick,
}: {
  img: string;
  title: string;
  subtitle: string;
  highlightId?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}) {
  const CardTag = onClick ? 'button' : 'div';

  return (
    <CardTag
      type={onClick ? 'button' : undefined}
      onClick={onClick}
      className={`bg-[#f2fbff] border border-[rgba(13,14,18,0.08)] rounded-[14px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] p-[12px] flex flex-col gap-[10px] overflow-hidden w-[calc(50%-6px)] ${className}`}
      data-step2-highlight-card={highlightId}
      style={style}
    >
      <img src={img} alt="" className="w-[60px] h-[60px] object-cover" />
      <div className="flex flex-col gap-[4px]">
        <p className="font-['Hiragino_Sans',sans-serif] font-bold text-[15px] leading-normal text-[rgba(13,14,18,0.85)] whitespace-nowrap">
          {title}
        </p>
        <p className="font-['Hiragino_Sans',sans-serif] text-[11px] leading-normal text-[rgba(13,14,18,0.45)]">
          {subtitle}
        </p>
      </div>
    </CardTag>
  );
}

export function HomeV2Content({ variant = 'default' }: { variant?: HomeV2Variant }) {
  const navigate = useNavigate();
  const features = variant === 'tutorial-step2' ? tutorialStep2Features : defaultFeatures;
  const heading = '問題解決';

  return (
    <div
      className="h-full overflow-y-auto px-[20px]"
      style={{ paddingTop: HEADER_HEIGHT + 24, paddingBottom: BOTTOM_NAV_HEIGHT + 16 }}
    >
      <div className="flex flex-col gap-[16px]">
        <p className="font-['Hiragino_Sans',sans-serif] font-bold text-[16px] leading-normal text-[rgba(13,14,18,0.6)]">
          {heading}
        </p>
        <div className="flex flex-wrap gap-y-[12px] justify-between">
          {features.map((f, index) => (
            <FeatureCard
              key={f.title}
              {...f}
              highlightId={variant === 'tutorial-step2' ? String(index) : undefined}
              onClick={
                f.title === 'すう先生に質問'
                  ? () => navigate('/question-chat', { state: { transition: 'push-from-right' } })
                  : undefined
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProductHomeV2({ variant = 'default' }: { variant?: HomeV2Variant }) {
  return (
    <div className="relative h-full w-full bg-white">

      {/* Blue header */}
      <div className="absolute inset-x-0 top-0 z-10 bg-[#2389b9]" style={{ paddingTop: IOS_SAFE_AREA_TOP }}>
        <div className="flex h-[80px] items-end pb-[16px] px-[20px]">
          <span className="font-['Hiragino_Sans',sans-serif] font-bold text-[24px] leading-normal text-white">
            すうナビ
          </span>
        </div>
      </div>

      {/* Scrollable content */}
      <HomeV2Content variant={variant} />

      <BottomNavBar />
    </div>
  );
}
