import { IOS_SAFE_AREA_TOP } from './preview/device';
import { BottomNavBar, BOTTOM_NAV_HEIGHT } from './BottomNavBar';
import cardAnswer from '../../assets/home-card-answer.png';
import cardGrade from '../../assets/home-card-grade.png';
import cardAnalysis from '../../assets/home-card-analysis.png';

const HEADER_HEIGHT = IOS_SAFE_AREA_TOP + 80;

const features = [
  {
    img: cardAnswer,
    title: '問題の解答',
    subtitle: 'AIが苦手分野を自動で診断',
  },
  {
    img: cardGrade,
    title: '採点する',
    subtitle: 'AIが苦手分野を自動で診断',
  },
  {
    img: cardAnalysis,
    title: '間違い分析',
    subtitle: 'AIが苦手分野を自動で診断',
  },
];

function FeatureCard({ img, title, subtitle }: { img: string; title: string; subtitle: string }) {
  return (
    <div className="bg-[#f2fbff] border border-[rgba(13,14,18,0.08)] rounded-[14px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] p-[12px] flex flex-col gap-[10px] overflow-hidden w-[calc(50%-6px)]">
      <img src={img} alt="" className="w-[60px] h-[60px] object-cover" />
      <div className="flex flex-col gap-[4px]">
        <p className="font-['Hiragino_Sans',sans-serif] font-bold text-[15px] leading-normal text-[rgba(13,14,18,0.85)] whitespace-nowrap">
          {title}
        </p>
        <p className="font-['Hiragino_Sans',sans-serif] text-[11px] leading-normal text-[rgba(13,14,18,0.45)]">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export default function ProductHomeV2() {
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
      <div
        className="h-full overflow-y-auto px-[20px]"
        style={{ paddingTop: HEADER_HEIGHT + 24, paddingBottom: BOTTOM_NAV_HEIGHT + 16 }}
      >
        {/* Section: 解题 */}
        <div className="flex flex-col gap-[16px]">
          <p className="font-['Hiragino_Sans',sans-serif] font-bold text-[16px] leading-normal text-[rgba(13,14,18,0.6)]">
            解题
          </p>
          <div className="flex flex-wrap gap-y-[12px] justify-between">
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </div>

      <BottomNavBar />
    </div>
  );
}
