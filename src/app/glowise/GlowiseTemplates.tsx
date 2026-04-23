import { useLocation, useNavigate } from 'react-router';
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

const figmaEllipse1343 = 'https://www.figma.com/api/mcp/asset/4456c162-e684-4af0-889b-2bfc9d4229b4';
const figmaCap = 'https://www.figma.com/api/mcp/asset/77a85f6a-cc79-4575-873f-b1e128e24f33';
const figmaWifi = 'https://www.figma.com/api/mcp/asset/7f93fee2-97bf-4a62-a65b-baa16b658ed5';
const figmaCellularConnection = 'https://www.figma.com/api/mcp/asset/460f0b91-fd8c-40d0-a954-d52030f736c4';
const figmaBar = 'https://www.figma.com/api/mcp/asset/204cd511-9e74-49e0-81f2-38407930857a';

const multiFigmaEllipse1343 = 'https://www.figma.com/api/mcp/asset/e1ed4292-2d46-44d6-bff0-d4868325629a';
const multiFigmaCap = 'https://www.figma.com/api/mcp/asset/3c449e55-1b97-4062-8fb1-e931269f277b';
const multiFigmaWifi = 'https://www.figma.com/api/mcp/asset/e08cdc32-8194-470e-89aa-960747ba290b';
const multiFigmaCellularConnection = 'https://www.figma.com/api/mcp/asset/067d2394-dcb1-49f8-8b12-8688cc480460';
const multiFigmaBar = 'https://www.figma.com/api/mcp/asset/ff0c6405-d835-40bb-972d-58eefe59f82a';

const textFigmaEllipse1343 = 'https://www.figma.com/api/mcp/asset/1b793053-a45c-4dd3-809d-6fa820c5358b';
const textFigmaCap = 'https://www.figma.com/api/mcp/asset/a0cf50ee-2a26-4e1a-b1ec-6d366ff45c0f';
const textFigmaWifi = 'https://www.figma.com/api/mcp/asset/ec095496-36b9-4141-a49f-c2cc3bb81d60';
const textFigmaCellularConnection = 'https://www.figma.com/api/mcp/asset/eea3e870-c711-424a-9597-1f417aa78f87';
const textFigmaEmoji = 'https://www.figma.com/api/mcp/asset/3165cad3-680f-449b-a1f2-f396639016f6';
const textFigmaMic = 'https://www.figma.com/api/mcp/asset/c3ec9708-0a06-4e9f-9cf2-56faec7140f5';
const textFigmaBar = 'https://www.figma.com/api/mcp/asset/89354bfe-aa09-4363-b9da-63ae521867eb';
const bgFigmaImage188 = 'https://www.figma.com/api/mcp/asset/9fff4866-4947-48fc-af67-7b11ba2e5dba';
const valuePageBgImage = 'https://www.figma.com/api/mcp/asset/fc09188f-6ae2-4002-8b40-da45f1947ac2';
const valuePageIconImage = 'https://www.figma.com/api/mcp/asset/2b61a643-2a56-43d1-8c6c-263b9917cf4e';
const valuePageBarImage = 'https://www.figma.com/api/mcp/asset/be160651-62de-4eb8-8990-1c352e10010d';
const valuePageCellularImage = 'https://www.figma.com/api/mcp/asset/c73bebe6-f90d-4262-b34e-a53a610520c1';
const valuePageWifiImage = 'https://www.figma.com/api/mcp/asset/ae13f776-647c-4bdc-a394-67c3da58969d';
const valuePageBatteryImage = 'https://www.figma.com/api/mcp/asset/47437ae1-4544-4468-88e2-619dcb0c4075';
const loadingFrame1Ellipse1343 = 'https://www.figma.com/api/mcp/asset/053472e7-caa3-479b-80e7-8ab6096b62dd';
const loadingFrame1Ellipse1344 = 'https://www.figma.com/api/mcp/asset/e86898a1-ef71-4bce-9499-da804e73bb84';
const loadingFrame1Ellipse1345 = 'https://www.figma.com/api/mcp/asset/7e8931f2-b9e7-451e-8edc-36e6b446f26a';
const loadingFrame1Base = 'https://www.figma.com/api/mcp/asset/7b65f13d-b24a-4620-8ccf-c8b365f78f74';
const loadingFrame2Ellipse1343 = 'https://www.figma.com/api/mcp/asset/91646815-9c96-4b7d-bc67-3e780ab0921c';
const loadingFrame2Ellipse1344 = 'https://www.figma.com/api/mcp/asset/bc5edb54-eb2e-4e48-8baf-0b78aabe5c91';
const loadingFrame2Ellipse1345 = 'https://www.figma.com/api/mcp/asset/7f65e8ca-6f7d-4afd-b8d7-bd0f90e86bc8';
const loadingFrame2Base = 'https://www.figma.com/api/mcp/asset/8bade2d4-a1cd-4df1-8139-9a19e9cfa858';

type QuestionShellProps = {
  title: string;
  description?: string;
  progressWidth?: number;
  children: ReactNode;
  bodyHeight?: number;
  bodyAlign?: 'start' | 'center';
  bodyJustify?: 'start' | 'center';
  footerLabel?: string;
  footerDisabled?: boolean;
  footerSecondaryLabel?: string;
  onFooterClick?: () => void;
};

type CompactQuestionFrameProps = Pick<
  QuestionShellProps,
  'title' | 'description' | 'progressWidth' | 'footerLabel' | 'footerDisabled' | 'footerSecondaryLabel'
> & {
  children: ReactNode;
  contentClassName?: string;
  contentStyle?: CSSProperties;
  hideFooter?: boolean;
  onFooterClick?: () => void;
};

type MedicationTab = 'injections' | 'pills';

function GlowiseStatusBar() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[52px] text-[#1e3930]">
      <p className="absolute left-[14px] top-[18px] text-[12px] font-semibold tracking-[-0.015em]">
        12:00
      </p>

      <div className="absolute right-[14px] top-[18px] flex items-center gap-[7px]">
        <svg aria-hidden="true" width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="7.5" width="3" height="3.5" rx="1.1" fill="currentColor" />
          <rect x="5.25" y="5.5" width="3" height="5.5" rx="1.1" fill="currentColor" />
          <rect x="9.5" y="3.25" width="3" height="7.75" rx="1.1" fill="currentColor" />
          <rect x="13.75" y="1" width="3" height="10" rx="1.1" fill="currentColor" />
        </svg>

        <svg aria-hidden="true" width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 3.5C4.4 0.9 10.6 0.9 14 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M3.1 5.9C5.5 4 9.5 4 11.9 5.9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M5.45 8.2C6.65 7.25 8.35 7.25 9.55 8.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="7.5" cy="9.2" r="1.15" fill="currentColor" />
        </svg>

        <svg aria-hidden="true" width="27" height="13" viewBox="0 0 27 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="22" height="11" rx="3.2" stroke="currentColor" strokeWidth="1.25" />
          <rect x="3" y="3" width="16.5" height="7" rx="2" fill="currentColor" />
          <rect x="24.25" y="4.1" width="1.8" height="4.1" rx="0.9" fill="currentColor" opacity="0.45" />
        </svg>
      </div>
    </div>
  );
}

function RcoGlyph({ children, className = '', size = 18 }: { children: string; className?: string; size?: number }) {
  return (
    <span
      className={`inline-flex items-center justify-center font-['Rco',sans-serif] leading-none ${className}`}
      style={{ fontSize: size }}
      aria-hidden="true"
    >
      {children}
    </span>
  );
}

function RcoBackIcon() {
  return <RcoGlyph size={24}>{'\uE900'}</RcoGlyph>;
}

function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#1e3930] transition hover:bg-[rgba(30,57,48,0.06)]"
      aria-label="Back"
      onClick={() => navigate(-1)}
    >
      <RcoBackIcon />
    </button>
  );
}

function RoundCheckIcon() {
  return <RcoGlyph className="text-[#0d0e12]" size={20}>{'\uE92B'}</RcoGlyph>;
}

function MedicationSegmentedControl({
  activeTab,
  onChange,
}: {
  activeTab: MedicationTab;
  onChange: (tab: MedicationTab) => void;
}) {
  return (
    <div className="flex h-[32px] w-full items-center rounded-[100px] bg-[rgba(118,118,128,0.12)] p-[2px]">
      <button
        type="button"
        onClick={() => onChange('injections')}
        className={`flex h-full flex-1 items-center justify-center gap-[4px] rounded-[20px] px-[6px] py-[3px] text-[14px] font-medium leading-[1.3] text-[#0d0e12] ${
          activeTab === 'injections' ? 'bg-white' : 'bg-transparent'
        }`}
      >
        <RcoGlyph size={13.333}>{'\uE9BF'}</RcoGlyph>
        <span>Injections</span>
      </button>
      <button
        type="button"
        onClick={() => onChange('pills')}
        className={`flex h-full flex-1 items-center justify-center gap-[4px] rounded-[20px] px-[6px] py-[3px] text-[14px] font-medium leading-[1.3] text-[#0d0e12] ${
          activeTab === 'pills' ? 'bg-white' : 'bg-transparent'
        }`}
      >
        <RcoGlyph size={13.333}>{'\uE9F7'}</RcoGlyph>
        <span>Pill/Tablets</span>
      </button>
    </div>
  );
}

function GlowiseProgressBar({ width = 180 }: { width?: number }) {
  const progressWidth = Math.max(24, Math.min(width, 180));

  return (
    <div className="absolute left-1/2 top-[73px] h-[14px] w-[180px] -translate-x-1/2 overflow-hidden rounded-[38px] bg-white/20">
      <div className="absolute inset-y-[1px] left-[1.5px] rounded-[20px] bg-[linear-gradient(180deg,rgba(84,159,134,0.85)_0%,rgba(57,108,91,0.85)_28%,rgba(30,57,48,0.85)_76%),linear-gradient(180deg,rgba(30,57,48,0.85)_54%,rgba(57,108,91,0.85)_83%,rgba(84,159,134,0.85)_100%)]">
        <div
          className="absolute left-[4px] top-[2px] h-[2px] rounded-full bg-[#dcebff] blur-[2px]"
          style={{ width: progressWidth - 8 }}
        />
      </div>
    </div>
  );
}

function GlowiseFooter({
  footerLabel = 'Continue',
  footerDisabled = false,
  footerSecondaryLabel,
  onClick,
}: Pick<QuestionShellProps, 'footerLabel' | 'footerDisabled' | 'footerSecondaryLabel' | 'onFooterClick'> & {
  onClick?: () => void;
}) {
  return (
    <div className="absolute inset-x-5 bottom-[34px]">
      <button
        type="button"
        onClick={() => onClick?.()}
        className={`flex h-14 w-full items-center justify-center rounded-[12px] text-[16px] font-semibold transition ${
          footerDisabled
            ? 'bg-[#26493f] text-white/55'
            : 'bg-[#1e3930] text-white shadow-[inset_0_-4px_0_rgba(255,255,255,0.06)]'
        }`}
        disabled={footerDisabled}
      >
        {footerLabel}
      </button>

      {footerSecondaryLabel ? (
        <p className="mt-3 text-center text-[10px] leading-none text-white/75">
          {footerSecondaryLabel}
        </p>
      ) : null}

      <div className="mt-[8px] flex justify-center">
        <div className="h-[5px] w-[134px] rounded-full bg-black/20" />
      </div>
    </div>
  );
}

type ValuePageProps = {
  title: string;
  description: string;
  buttonLabel: string;
  onButtonClick?: () => void;
};

function ValuePageShell({ title, description, buttonLabel, onButtonClick }: ValuePageProps) {
  return (
    <div
      className="relative size-full h-[812px] w-[375px] overflow-clip rounded-[44px] bg-[var(--comp/bg/app,#f8f8f9)]"
      style={{ fontFamily: 'Figtree, Hiragino Sans, sans-serif' }}
    >
      <img alt="" aria-hidden="true" className="absolute inset-0 size-full object-cover" src={valuePageBgImage} />

      <div className="absolute left-0 right-0 top-0 flex h-[44px] items-start">
        <div className="flex h-[44px] flex-1 items-center justify-between min-w-px px-[24px] pb-[19px] pt-[21px]">
          <p className="font-['SF_Pro:Semibold',sans-serif] text-[17px] font-[590] leading-[22px] text-white">
            9:41
          </p>
          <div className="flex h-[22px] items-center justify-center gap-[7px] pr-px pt-px">
            <div className="relative h-[12.226px] w-[19.2px]">
              <img alt="" className="absolute inset-0 block size-full max-w-none" src={valuePageCellularImage} />
            </div>
            <div className="relative h-[12.328px] w-[17.142px]">
              <img alt="" className="absolute inset-0 block size-full max-w-none" src={valuePageWifiImage} />
            </div>
            <div className="relative h-[13px] w-[27.328px]">
              <img alt="" className="absolute inset-0 block size-full max-w-none" src={valuePageBatteryImage} />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-1/2 top-[239px] -translate-x-1/2">
        <img alt="" className="block h-[64px] w-[64px] max-w-none" src={valuePageIconImage} />
      </div>

      <div className="absolute left-1/2 top-[323.5px] w-[317px] -translate-x-1/2 text-center">
        <p
          className="text-[36px] leading-[48px] text-[#f3f3f4]"
          style={{ fontFamily: 'Freigeist, Figtree, Hiragino Sans, sans-serif' }}
        >
          {title}
        </p>
        <p className="mt-[19px] text-[18px] leading-[1.4] text-[rgba(255,255,255,0.6)]">
          {description}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 flex w-full flex-col items-center gap-[16px] pt-[8px]">
        <button
          type="button"
          onClick={() => onButtonClick?.()}
          className="flex h-[56px] w-[335px] items-center justify-center rounded-[16px] bg-[#ecfff6] px-[16px] py-[16px] text-center text-[16px] font-medium leading-[1.3] text-[#1e3930]"
        >
          {buttonLabel}
        </button>

        <div className="relative h-[34px] w-full">
          <div className="absolute left-0 top-0 h-[34px] w-[375px]" />
          <div className="-translate-x-1/2 absolute bottom-[9px] left-[calc(50%+0.5px)] top-[20px] w-[134px]">
            <img alt="" className="absolute inset-0 block size-full max-w-none" src={valuePageBarImage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function WelcomeValuePage({ onNext }: { onNext?: (value?: string) => void } = {}) {
  return (
    <ValuePageShell
      buttonLabel="Continue"
      description="We’ll calibrate Plateau insights and Voice / note around your rhythm."
      onButtonClick={onNext}
      title="Welcome"
    />
  );
}

export function PermissionValuePage({ onNext }: { onNext?: (value?: string) => void } = {}) {
  return (
    <ValuePageShell
      buttonLabel="Allow"
      description="Enable notifications so we can remind you at the right moment."
      onButtonClick={onNext}
      title="Enable reminders"
    />
  );
}

export function PaywallValuePage({ onNext }: { onNext?: (value?: string) => void } = {}) {
  return (
    <ValuePageShell
      buttonLabel="Continue"
      description="Start with the plan that fits your goals and adjust later."
      onButtonClick={onNext}
      title="Paywall here"
    />
  );
}

export function BehaviorValuePage({ onNext }: { onNext?: (value?: any) => void } = {}) {
  return (
    <ValuePageShell
      buttonLabel="Continue"
      description="Glowise uses a protein-first model that helps better understand your weight loss journey with GLP, backed by science. At the same time, we keep the calories counting so you have a holistic understanding of your eating habits."
      onButtonClick={onNext}
      title="强调 Protein Centric 的 food model 和竞争的不同"
    />
  );
}

export function SocialProofValuePage({ onNext }: { onNext?: (value?: any) => void } = {}) {
  return (
    <ValuePageShell
      buttonLabel="Continue"
      description="You’re not doing this alone. Glowise is built to help you stay consistent with practical support, clear signals, and a model that fits real life."
      onButtonClick={onNext}
      title="Real support for real life"
    />
  );
}

export function FoodCorrelationValuePage({ onNext }: { onNext?: (value?: any) => void } = {}) {
  return (
    <ValuePageShell
      buttonLabel="Continue"
      description="Glowise highlights patterns between foods, side effects, and how you feel so the plan can adapt to your real eating experience."
      onButtonClick={onNext}
      title="Food + side effect insights"
    />
  );
}

export function SideEffectCorrelationValuePage({ onNext }: { onNext?: (value?: any) => void } = {}) {
  return (
    <ValuePageShell
      buttonLabel="Continue"
      description="We turn your meals and symptoms into clear patterns so side effects feel more predictable and easier to manage."
      onButtonClick={onNext}
      title="Food and side effect correlations"
    />
  );
}

export function GeneratingPlanLoadingPage({ onNext }: { onNext?: () => void } = {}) {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const raf = window.requestAnimationFrame(() => setIsComplete(true));
    const timeout = window.setTimeout(() => onNext?.(), 2000);

    return () => {
      window.cancelAnimationFrame(raf);
      window.clearTimeout(timeout);
    };
  }, [onNext]);

  return (
    <div className="relative size-full h-[812px] w-[375px] overflow-clip rounded-[44px] bg-[#2b4338]">
      <div
        className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
          isComplete ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="absolute inset-0 bg-[#1e3930]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(255,255,255,0.08)_0%,_rgba(255,255,255,0)_44%)]" />

        <div className="absolute left-[93.81px] top-[182px] flex size-[187.386px] items-center justify-center px-[60px] py-[57px]">
          <div className="absolute left-[13.79px] top-[13.79px] size-[159.812px]">
            <img alt="" className="absolute inset-0 block size-full max-w-none" src={loadingFrame1Ellipse1344} />
          </div>
          <div className="absolute left-0 top-0 size-[187.385px]">
            <img alt="" className="absolute inset-0 block size-full max-w-none" src={loadingFrame1Base} />
          </div>
          <div className="relative flex items-start justify-center gap-[10px] text-[color:var(--func/brand,#1e3930)]">
            <p className="text-center font-['Figtree',sans-serif] text-[60px] font-medium leading-[1.2] tracking-[-0.1px]">
              01
            </p>
            <p className="absolute left-[72px] top-[44px] text-[14px] leading-[1.3]">%</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2 size-[184.718px]">
            <div className="absolute inset-[0_0.56%_47.47%_0]">
              <img alt="" className="block size-full max-w-none" src={loadingFrame1Ellipse1345} />
            </div>
          </div>
        </div>

        <div className="-translate-x-1/2 absolute left-1/2 top-[429px] w-[189px] rounded-[12px] bg-[rgba(255,255,255,0.6)] p-[10px] text-center text-[14px] leading-[1.3] text-[color:var(--func/brand,#1e3930)]">
          <p>Analyzing your stage</p>
          <p>Mapping risk factors</p>
          <p>Building your plan</p>
        </div>

        <div className="-translate-x-1/2 absolute bottom-[-590px] left-1/2 flex size-[655.989px] items-center justify-center">
          <div className="flex-none rotate-[-144.42deg]">
            <div className="relative size-[470.199px] opacity-90">
              <div className="absolute inset-[-34.03%]">
                <img alt="" className="block size-full max-w-none" src={loadingFrame1Ellipse1343} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
          isComplete ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#c8dde3_0%,#e3efdb_100%)]" />

        <div className="-translate-x-1/2 absolute left-[calc(50%+4.72px)] top-[-1184.68px] flex h-[2449.209px] w-[2449.034px] items-center justify-center">
          <div className="flex-none rotate-[-134.86deg]">
            <div className="relative h-[1706.17px] w-[1757.421px] opacity-90">
              <div className="absolute inset-[-11.72%_-11.38%]">
                <img alt="" className="block size-full max-w-none" src={loadingFrame2Ellipse1343} />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-[93.81px] top-[182px] flex size-[187.386px] items-center justify-center px-[60px] py-[57px]">
          <div className="absolute left-0 top-0 size-[187.385px]">
            <img alt="" className="absolute inset-0 block size-full max-w-none" src={loadingFrame2Ellipse1344} />
          </div>
          <div className="absolute left-0 top-0 size-[187.385px]">
            <img alt="" className="absolute inset-0 block size-full max-w-none" src={loadingFrame2Base} />
          </div>
          <div className="relative flex items-start justify-center gap-[10px] text-[color:var(--func/brand,#1e3930)]">
            <p className="text-center font-['Figtree',sans-serif] text-[60px] font-medium leading-[1.2] tracking-[-0.1px]">
              99
            </p>
            <p className="absolute left-[72px] top-[44px] text-[14px] leading-[1.3]">%</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2 size-[184.718px]">
            <img alt="" className="absolute inset-0 block size-full max-w-none" src={loadingFrame2Ellipse1345} />
          </div>
        </div>

        <div className="-translate-x-1/2 absolute left-1/2 top-[429px] w-[189px] rounded-[12px] bg-[rgba(255,255,255,0.6)] p-[10px] text-center text-[14px] leading-[1.3] text-[color:var(--func/brand,#1e3930)]">
          <p>Analyzing your stage</p>
          <p>Mapping risk factors</p>
          <p>Building your plan</p>
        </div>
      </div>
    </div>
  );
}

export function QuestionShell({
  title,
  description,
  progressWidth,
  children,
  bodyHeight = 492,
  bodyAlign = 'start',
  bodyJustify = 'start',
  footerLabel = 'Continue',
  footerDisabled = false,
  footerSecondaryLabel,
  onFooterClick,
}: QuestionShellProps) {
  return (
    <div
      className="relative h-[812px] w-[375px] overflow-hidden rounded-[44px] bg-[#f3f4f4] text-[#1e3930]"
      style={{ fontFamily: "Figtree, Hiragino Sans, sans-serif" }}
    >
      <img alt="" aria-hidden="true" className="absolute inset-0 size-full object-cover" src={bgFigmaImage188} />
      <GlowiseStatusBar />
      <GlowiseProgressBar width={progressWidth} />

      <div className="absolute left-1/2 top-[108px] h-[704px] w-[375px] -translate-x-1/2 overflow-hidden rounded-t-[30px] bg-white shadow-[0_-18px_40px_rgba(30,57,48,0.04)]">
        <div className="px-5 pb-10 pt-[40px]">
          <div className="flex items-start gap-3">
            <BackButton />

            <div className="flex-1">
              <h1
                className="max-w-[286px] text-[33px] font-medium leading-[1.08] tracking-[-0.01em] text-[#1e3930]"
                style={{ fontFamily: "Freigeist, Figtree, Hiragino Sans, sans-serif" }}
              >
                {title}
              </h1>
              {description ? (
                <p className="mt-[14px] max-w-[300px] text-[17px] leading-[1.35] tracking-[-0.01em] text-[rgba(13,14,18,0.4)]">
                  {description}
                </p>
              ) : null}
            </div>
          </div>

          <div
            className="mt-[28px] flex w-full pb-[96px]"
            style={{
              height: `${bodyHeight}px`,
              alignItems: bodyAlign === 'center' ? 'center' : 'flex-start',
              justifyContent: bodyJustify === 'center' ? 'center' : 'flex-start',
            }}
          >
            <div className="w-full">{children}</div>
          </div>
        </div>

        <GlowiseFooter
          footerDisabled={footerDisabled}
          footerLabel={footerLabel}
          footerSecondaryLabel={footerSecondaryLabel}
          onClick={onFooterClick}
        />
      </div>
    </div>
  );
}

function CompactQuestionFrame({
  title,
  description,
  progressWidth,
  children,
  contentClassName = 'flex h-[533px] w-full flex-col gap-[16px] overflow-x-clip overflow-y-auto',
  contentStyle,
  footerLabel = 'Continue',
  footerDisabled = false,
  footerSecondaryLabel,
  hideFooter = false,
  onFooterClick,
}: CompactQuestionFrameProps) {
  const [footerInteraction, setFooterInteraction] = useState<'idle' | 'pressed' | 'released'>('idle');
  const footerIdleTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (footerIdleTimerRef.current) window.clearTimeout(footerIdleTimerRef.current);
    };
  }, []);

  return (
    <div
      className="relative h-[812px] w-[375px] overflow-hidden rounded-[44px] bg-[#f3f4f4] text-[#1e3930]"
      style={{ fontFamily: 'Figtree, Hiragino Sans, sans-serif' }}
    >
      <img alt="" aria-hidden="true" className="absolute inset-0 size-full object-cover" src={bgFigmaImage188} />

      <div
        className="-translate-x-1/2 absolute left-[calc(50%-0.5px)] top-0 flex w-[375px] flex-col items-start"
        aria-label="Secondary navigation"
      >
        <div className="relative h-[52px] w-full" aria-label="Status Bar">
          <div className="-translate-y-1/2 absolute left-0 right-[64.25%] top-1/2 h-[51.527px]">
            <p className="absolute inset-[33.96%_33.21%_25.28%_32.48%] whitespace-nowrap text-center font-['Figtree',sans-serif] text-[16.221px] font-semibold leading-[20.992px] text-[#0d0e12]">
              12:00
            </p>
          </div>
          <div className="-translate-y-1/2 absolute left-[64.25%] right-0 top-1/2 h-[51.527px]">
            <div className="-translate-x-1/2 absolute bottom-[33.33%] left-[calc(50%+22.19px)] top-[42.59%] w-[23.855px] rounded-[4.103px] border-[0.954px] border-solid border-[#0d0e12] opacity-35" />
            <div className="-translate-x-1/2 absolute bottom-[41.01%] left-[calc(50%+35.7px)] top-[51.45%] w-[1.267px]">
              <img alt="" className="absolute inset-0 block size-full max-w-none" src={figmaCap} />
            </div>
            <div className="-translate-x-1/2 absolute bottom-[37.04%] left-[calc(50%+22.19px)] top-[46.3%] w-[20.038px] rounded-[2.385px] bg-[#0d0e12]" />
            <div className="-translate-x-1/2 absolute bottom-[32.99%] left-[calc(50%-4.79px)] top-[44.18%] w-[16.357px]">
              <img alt="" className="absolute inset-0 block size-full max-w-none" src={figmaWifi} />
            </div>
            <div className="-translate-x-1/2 absolute bottom-[33.77%] left-[calc(50%-29.25px)] top-[43.58%] w-[18.321px]">
              <img
                alt=""
                className="absolute inset-0 block size-full max-w-none"
                src={figmaCellularConnection}
              />
            </div>
          </div>
        </div>

        <div className="content-stretch flex h-[56px] w-[375px] flex-col items-center justify-center px-[16px] py-[12px]">
          <div className="content-stretch flex w-full items-center justify-between py-[2px] relative">
            <div className="content-stretch flex gap-[20px] items-start relative shrink-0">
              <BackButton />
            </div>
            <div className="content-stretch flex gap-[4px] h-[16px] items-center shrink-0 w-[27px]" />
          </div>
        </div>
      </div>

      <div className="absolute left-1/2 top-[73px] h-[14px] w-[180px] -translate-x-1/2 overflow-clip rounded-[38px] bg-[rgba(255,255,255,0.2)]">
        <div className="absolute bottom-[7.14%] left-[1.5px] top-[7.14%] flex w-[65px] items-start overflow-clip rounded-[20px] bg-[linear-gradient(180deg,rgba(84,159,134,0.8)_0%,rgba(57,108,91,0.8)_27.996%,rgba(30,57,48,0.8)_75.994%),linear-gradient(180deg,rgba(30,57,48,0.8)_54.264%,rgba(57,108,91,0.8)_83.151%,rgba(84,159,134,0.8)_100%)] px-[4px] pb-[8px] pt-[2px]">
          <div
            className="h-[2px] w-full shrink-0 rounded-[999px] blur-[2px]"
            style={{
              backgroundImage:
                "url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 57 2\\' preserveAspectRatio=\\'none\\'><g transform=\\'matrix(2.85 -3.5335e-16 1.973e-8 0.11788 28.5 1.0857)\\'><foreignObject x=\\'-190\\' y=\\'-190\\' width=\\'380\\' height=\\'380\\'><div xmlns=\\'http://www.w3.org/1999/xhtml\\' style=\\'background-image: conic-gradient(from 90deg, rgb(255, 233, 198) 0%, rgb(245, 242, 215) 27.404%, rgb(220, 233, 197) 52.885%, rgb(204, 224, 211) 67.308%, rgb(188, 215, 225) 78.846%, rgb(156, 197, 254) 100%); opacity:1; height: 100%; width: 100%;\\'></div></foreignObject></g></svg>')",
              }}
          />
        </div>
      </div>

      <div className="-translate-x-1/2 absolute left-1/2 top-[108.12px] h-[704px] w-[375px] overflow-hidden rounded-tl-[30px] rounded-tr-[30px] bg-white px-[20px] py-[40px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.12)]">
        <div className="flex flex-col gap-[40px]">
          <div className="flex w-full flex-col items-start gap-[12px]">
            <p className="w-full shrink-0 font-['Freigeist',sans-serif] text-[24px] leading-[1.2] tracking-[-0.1px] text-[#1e3930]">
              {title}
            </p>
            {description ? (
              <p className="w-full shrink-0 font-['Figtree',sans-serif] text-[16px] leading-[1.3] text-[rgba(13,14,18,0.4)]">
                {description}
              </p>
            ) : null}
          </div>

          <div className={contentClassName} style={contentStyle}>
            {children}
          </div>
        </div>
      </div>

      {hideFooter ? null : (
        <div className="absolute bottom-0 left-0 flex w-[375px] flex-col items-center gap-[16px] bg-white pt-[8px]">
          <button
            type="button"
            onPointerDown={() => setFooterInteraction('pressed')}
            onClick={() => {
              setFooterInteraction('released');
              if (footerIdleTimerRef.current) window.clearTimeout(footerIdleTimerRef.current);
              footerIdleTimerRef.current = window.setTimeout(() => {
                setFooterInteraction('idle');
              }, 140);
              onFooterClick?.();
            }}
            className={`transform-gpu flex h-[56px] w-[335px] items-center justify-center rounded-[16px] bg-[#1e3930] px-[16px] py-[16px] text-center font-['Figtree',sans-serif] text-[16px] font-medium leading-[1.3] text-white transition-[transform,box-shadow,filter,opacity] duration-200 ease-[cubic-bezier(0.25,1,0.5,1)] disabled:cursor-not-allowed disabled:opacity-50 ${
              footerInteraction === 'pressed'
                ? 'scale-[0.968] brightness-[1.03] shadow-[0_10px_20px_rgba(13,14,18,0.08)]'
                : footerInteraction === 'released'
                  ? 'scale-[1.008] brightness-[1.015] shadow-[0_6px_16px_rgba(13,14,18,0.05)]'
                  : 'scale-100 shadow-[inset_0_-4px_0_rgba(255,255,255,0.06)]'
            }`}
            disabled={footerDisabled}
          >
            {footerLabel}
          </button>

          {footerSecondaryLabel ? (
            <p className="text-center text-[10px] leading-none text-white/75">{footerSecondaryLabel}</p>
          ) : null}

          <div className="relative h-[34px] w-full">
            <div className="absolute left-0 top-0 h-[34px] w-[375px]" />
            <div className="-translate-x-1/2 absolute bottom-[9px] left-[calc(50%+0.5px)] top-[20px] w-[134px]">
              <img alt="" className="absolute inset-0 block size-full max-w-none" src={figmaBar} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

type OptionRow = {
  label: string;
  selected?: boolean;
  muted?: boolean;
  checked?: boolean;
  pressed?: boolean;
  released?: boolean;
  onClick?: () => void;
  onPointerDown?: () => void;
  onPointerUp?: () => void;
  onPointerLeave?: () => void;
  onPointerCancel?: () => void;
};

export function SelectableOptionRow({
  label,
  selected,
  muted,
  checked,
  pressed,
  released,
  onClick,
  onPointerDown,
  onPointerUp,
  onPointerLeave,
  onPointerCancel,
}: OptionRow) {
  return (
    <button
      type="button"
      onClick={onClick}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerLeave}
      onPointerCancel={onPointerCancel}
      className={`box-border flex h-[60px] min-h-[60px] w-full shrink-0 items-center rounded-[16px] px-[20px] text-left transform-gpu transition-[transform,box-shadow,filter,background-color] duration-200 ease-[cubic-bezier(0.25,1,0.5,1)] ${
        pressed
          ? 'scale-[0.968] brightness-[1.03] shadow-[0_10px_20px_rgba(13,14,18,0.08)]'
          : released
            ? 'scale-[1.008] brightness-[1.015] shadow-[0_6px_16px_rgba(13,14,18,0.05)]'
            : 'scale-100 shadow-none'
      } ${
        selected
          ? 'bg-[#b6e093] text-[#0d0e12]'
          : muted
            ? 'bg-[rgba(30,57,48,0.05)] text-[#0d0e12]'
            : 'bg-[rgba(13,14,18,0.05)] text-[#0d0e12]'
      }`}
    >
      <span
        className="min-w-0 flex-1 pr-[12px] text-[16px] font-medium leading-[1.3] tracking-[0px]"
        style={{ fontFamily: 'Figtree, Hiragino Sans, sans-serif' }}
      >
        {label}
      </span>

      <span className="flex h-[20px] w-[20px] shrink-0 items-center justify-center">
        {checked || selected ? <RoundCheckIcon /> : <span className="h-[20px] w-[20px]" aria-hidden="true" />}
      </span>
    </button>
  );
}

export function FirstQuestionMockup({ onNext }: { onNext?: (value?: string) => void } = {}) {
  const [selectedTab, setSelectedTab] = useState<MedicationTab>('injections');
  const [selectedLabelByTab, setSelectedLabelByTab] = useState<Record<MedicationTab, string>>({
    injections: 'Mounjaro®',
    pills: 'Rybelsus®',
  });

  const injectionOptions = [
    { label: 'Zepbound®', muted: true },
    { label: 'Mounjaro®', muted: false },
    { label: 'Compounded Tirzepatide', muted: true },
    { label: 'Wegovy®', muted: true },
    { label: 'Compounded Semaglutide', muted: true },
    { label: 'Ozempic®', muted: false },
    { label: 'Trulicity®', muted: false },
    { label: 'Saxenda®', muted: false },
    { label: 'Victoza®', muted: false },
    { label: 'Other', muted: false },
  ];

  const pillOptions = [
    { label: 'Rybelsus®', muted: false },
    { label: 'Oral Semaglutide', muted: false },
    { label: 'Compounded Semaglutide', muted: true },
    { label: 'Other', muted: false },
  ];

  const options = selectedTab === 'injections' ? injectionOptions : pillOptions;
  const selectedLabel = selectedLabelByTab[selectedTab];

  return (
    <div
      className="bg-[var(--comp/bg/input,#f3f3f4)] relative h-[812px] w-[375px] overflow-clip rounded-[44px] text-[#0d0e12]"
      style={{ fontFamily: 'Figtree, Hiragino Sans, sans-serif' }}
    >
      <div className="-translate-x-1/2 absolute left-[calc(50%-0.5px)] top-[-580.72px] flex size-[1660.175px] items-center justify-center" aria-hidden="true">
        <div className="-rotate-60 flex-none">
          <div className="relative size-[1215.332px]">
            <div className="absolute inset-[-13.17%]">
              <img alt="" className="block size-full max-w-none" height="1535.332" src={figmaEllipse1343} width="1535.332" />
            </div>
          </div>
        </div>
      </div>

      <div className="-translate-x-1/2 absolute left-[calc(50%-0.5px)] top-0 flex w-[375px] flex-col items-start" aria-label="Secondary navigation">
        <div className="relative h-[52px] w-full" aria-label="Status Bar">
          <div className="-translate-y-1/2 absolute left-0 right-[64.25%] top-1/2 h-[51.527px]">
            <p className="absolute inset-[33.96%_33.21%_25.28%_32.48%] whitespace-nowrap text-center font-['Figtree',sans-serif] text-[16.221px] font-semibold leading-[20.992px] text-[#0d0e12]">
              12:00
            </p>
          </div>
          <div className="-translate-y-1/2 absolute left-[64.25%] right-0 top-1/2 h-[51.527px]">
            <div className="-translate-x-1/2 absolute bottom-[33.33%] left-[calc(50%+22.19px)] top-[42.59%] w-[23.855px] rounded-[4.103px] border-[0.954px] border-solid border-[#0d0e12] opacity-35" />
            <div className="-translate-x-1/2 absolute bottom-[41.01%] left-[calc(50%+35.7px)] top-[51.45%] w-[1.267px]">
              <img alt="" className="absolute inset-0 block size-full max-w-none" src={figmaCap} />
            </div>
            <div className="-translate-x-1/2 absolute bottom-[37.04%] left-[calc(50%+22.19px)] top-[46.3%] w-[20.038px] rounded-[2.385px] bg-[#0d0e12]" />
            <div className="-translate-x-1/2 absolute bottom-[32.99%] left-[calc(50%-4.79px)] top-[44.18%] w-[16.357px]">
              <img alt="" className="absolute inset-0 block size-full max-w-none" src={figmaWifi} />
            </div>
            <div className="-translate-x-1/2 absolute bottom-[33.77%] left-[calc(50%-29.25px)] top-[43.58%] w-[18.321px]">
              <img alt="" className="absolute inset-0 block size-full max-w-none" src={figmaCellularConnection} />
            </div>
          </div>
        </div>

        <div className="content-stretch flex h-[56px] w-[375px] flex-col items-center justify-center px-[16px] py-[12px]">
          <div className="content-stretch flex w-full items-center justify-between py-[2px] relative">
            <div className="content-stretch flex gap-[20px] items-start relative shrink-0">
              <div className="flex flex-col font-['Rco',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-[rgba(13,14,18,0.8)] text-center tracking-[0.72px] whitespace-nowrap">
                <p className="leading-[normal]">{'\uE900'}</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[4px] h-[16px] items-center shrink-0 w-[27px]" />
          </div>
        </div>
      </div>

      <div className="absolute left-1/2 top-[73px] h-[14px] w-[180px] -translate-x-1/2 overflow-clip rounded-[38px] bg-[rgba(255,255,255,0.2)]">
        <div className="absolute bottom-[6.26%] left-[1.5px] top-[8.02%] flex items-center">
          <div
            className="flex h-[12px] w-[10px] shrink-0 flex-col items-start overflow-clip rounded-bl-[20px] rounded-tl-[20px] pb-[8px] pl-[4px] pt-[2px]"
            style={{
              backgroundImage:
                'linear-gradient(180.00000031830638deg, rgba(84, 159, 134, 0.8) 0%, rgba(57, 108, 91, 0.8) 27.996%, rgba(30, 57, 48, 0.8) 75.994%), linear-gradient(180.00000031843138deg, rgba(30, 57, 48, 0.8) 54.264%, rgba(57, 108, 91, 0.8) 83.151%, rgba(84, 159, 134, 0.8) 100%)',
            }}
          >
            <div className="h-[2px] w-[14.565px] shrink-0 rounded-[999px] bg-[#dcebff] blur-[2px]" />
          </div>
          <div
            className="flex h-[12px] w-[11px] flex-col items-center overflow-clip pb-[8px] pt-[2px]"
            style={{
              backgroundImage:
                'linear-gradient(180.00000028936944deg, rgba(84, 159, 134, 0.8) 0%, rgba(57, 108, 91, 0.8) 27.996%, rgba(30, 57, 48, 0.8) 75.994%), linear-gradient(180.00000028948307deg, rgba(30, 57, 48, 0.8) 54.264%, rgba(57, 108, 91, 0.8) 83.151%, rgba(84, 159, 134, 0.8) 100%)',
            }}
          >
            <div className="h-[2px] w-[40.287px] shrink-0 rounded-[999px] bg-[#dcebff] blur-[2px]" />
          </div>
          <div
            className="flex h-[12px] w-[10px] flex-col items-end overflow-clip rounded-br-[20px] rounded-tr-[20px] pb-[8px] pr-[4px] pt-[2px]"
            style={{
              backgroundImage:
                'linear-gradient(180.00000031830638deg, rgba(84, 159, 134, 0.8) 0%, rgba(57, 108, 91, 0.8) 27.996%, rgba(30, 57, 48, 0.8) 75.994%), linear-gradient(180.00000031843138deg, rgba(30, 57, 48, 0.8) 54.264%, rgba(57, 108, 91, 0.8) 83.151%, rgba(84, 159, 134, 0.8) 100%)',
            }}
          >
            <div className="h-[2px] w-[20.622px] shrink-0 rounded-[999px] bg-[#dcebff] blur-[2px]" />
          </div>
        </div>
      </div>

      <div className="-translate-x-1/2 absolute left-1/2 top-[108px] h-[704px] w-[375px] overflow-hidden rounded-tl-[30px] rounded-tr-[30px] bg-white px-[20px] pb-[40px] pt-[40px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.12)]">
        <div className="flex flex-col gap-[40px]">
          <div className="flex w-full flex-col items-start gap-[12px]">
            <p className="w-full shrink-0 font-['Freigeist',sans-serif] text-[24px] leading-[1.2] tracking-[-0.1px] text-[#1e3930]">
              Which GLP-1 medication are you taking?
            </p>
            <p className="w-full shrink-0 font-['Figtree',sans-serif] text-[16px] leading-[1.3] text-[rgba(13,14,18,0.4)]">
              If it’s not listed, choose “Other”
            </p>
          </div>

            <div className="flex h-[545px] w-full flex-col gap-[24px] overflow-clip">
              <MedicationSegmentedControl activeTab={selectedTab} onChange={setSelectedTab} />

            <div className="flex h-[493px] w-full flex-col gap-[16px] overflow-x-clip overflow-y-auto pb-[200px]">
              {options.map((option) => (
                <SelectableOptionRow
                  key={option.label}
                  label={option.label}
                  muted={option.muted}
                  selected={selectedLabel === option.label}
                  checked={selectedLabel === option.label}
                  onClick={() =>
                    setSelectedLabelByTab((current) => ({
                      ...current,
                      [selectedTab]: option.label,
                    }))
                  }
                />
              ))}
            </div>
            </div>
          </div>
      </div>

      <div className="absolute bottom-0 left-0 flex w-[375px] flex-col items-center gap-[16px] bg-white pt-[8px]">
        <button
          type="button"
          onClick={() => onNext?.(selectedLabel)}
          className="flex h-[56px] w-[335px] items-center justify-center rounded-[16px] bg-[#1e3930] px-[16px] py-[16px] text-center font-['Figtree',sans-serif] text-[16px] font-medium leading-[1.3] text-white"
        >
          Continue
        </button>

        <div className="relative h-[34px] w-full">
          <div className="absolute left-0 top-0 h-[34px] w-[375px]" />
          <div className="-translate-x-1/2 absolute bottom-[9px] left-[calc(50%+0.5px)] top-[20px] w-[134px]">
            <img alt="" className="absolute inset-0 block size-full max-w-none" src={figmaBar} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function WelcomePlaceholderQuestion({ onNext }: { onNext?: (value?: string) => void } = {}) {
  return (
    <QuestionShell
      bodyAlign="center"
      bodyHeight={388}
      bodyJustify="center"
      description="We’ll ask a few quick questions to personalize Glowise."
      footerLabel="Start"
      progressWidth={12}
      title="Welcome to Glowise"
      onFooterClick={onNext}
    >
      <div className="w-full rounded-[28px] bg-[rgba(30,57,48,0.05)] px-[20px] py-[20px]">
        <div className="flex flex-col gap-[14px]">
          <p className="font-['Figtree',sans-serif] text-[16px] leading-[1.45] tracking-[0px] text-[#1e3930]">
            This setup should feel quick, calm, and easy to skip later if needed.
          </p>
          <div className="flex flex-wrap gap-[8px]">
            <span className="rounded-full bg-white px-[12px] py-[6px] text-[13px] font-medium text-[#1e3930]">
              About 2 minutes
            </span>
            <span className="rounded-full bg-white px-[12px] py-[6px] text-[13px] font-medium text-[#1e3930]">
              Editable later
            </span>
          </div>
          <div className="rounded-[20px] bg-white px-[16px] py-[14px]">
            <p className="font-['Figtree',sans-serif] text-[14px] leading-[1.45] text-[rgba(13,14,18,0.65)]">
              We’ll tailor the experience around your profile and goals.
            </p>
          </div>
        </div>
      </div>
    </QuestionShell>
  );
}

export function GenderQuestion({ onNext }: { onNext?: (value?: string) => void } = {}) {
  const [selectedGender, setSelectedGender] = useState('');
  const genders = ['Female', 'Male', 'Non-binary', 'Prefer not to say'];

  return (
    <CompactQuestionFrame
      description="This helps us tailor the questions that follow."
      progressWidth={28}
      title="What is your sex?"
      contentClassName="flex h-[420px] w-full flex-col gap-[24px] overflow-clip"
      hideFooter
    >
      <div className="flex h-[368px] w-full flex-col gap-[16px] overflow-x-clip overflow-y-auto pb-[120px]">
        {genders.map((gender) => {
          const isSelected = selectedGender === gender;

          return (
            <SelectableOptionRow
              key={gender}
              checked={isSelected}
              label={gender}
              muted={!isSelected}
              selected={isSelected}
              onClick={() => {
                setSelectedGender(gender);
                onNext?.(gender);
              }}
            />
          );
        })}
      </div>
    </CompactQuestionFrame>
  );
}

export function BirthdayQuestion({ onNext }: { onNext?: (value?: string) => void } = {}) {
  const months = ['Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec', 'Jan'];
  const days = ['14', '15', '16', '17', '18', '19', '20'];
  const years = ['1989', '1990', '1991', '1990', '1993', '1994', '1995'];

  return (
    <CompactQuestionFrame
      description="We use this to personalize your plan."
      footerLabel="Continue"
      progressWidth={46}
      title="When is your birthday?"
      contentClassName="flex w-full items-start justify-center overflow-hidden"
      onFooterClick={() => onNext?.('Sep 17, 1990')}
    >
      <div className="flex items-center justify-center gap-[16px]">
        <WheelColumn selectedIndex={3} values={months} width={82} />
        <WheelColumn selectedIndex={3} values={days} width={58} />
        <WheelColumn selectedIndex={3} values={years} width={82} />
      </div>
    </CompactQuestionFrame>
  );
}

function MeasurementWheelQuestion({
  title,
  description,
  progressWidth,
  values,
  selectedIndex,
  selectedValue,
  unitLabel,
  secondaryUnitLabel,
  onNext,
}: {
  title: string;
  description: string;
  progressWidth: number;
  values: string[];
  selectedIndex: number;
  selectedValue: string;
  unitLabel: string;
  secondaryUnitLabel: string;
  onNext?: (value?: string) => void;
}) {
  return (
    <CompactQuestionFrame
      description={description}
      footerLabel="Continue"
      progressWidth={progressWidth}
      title={title}
      contentClassName="flex w-full items-start justify-center overflow-hidden"
      onFooterClick={() => onNext?.(selectedValue)}
    >
      <div className="flex w-full flex-col items-center gap-[40px] pt-[13px]">
        <WheelColumn selectedIndex={selectedIndex} values={values} width={148} />

        <div className="flex items-center justify-center rounded-[28px] bg-[rgba(13,14,18,0.05)] p-[4px]">
          <div className="flex h-[40px] w-[78px] items-center justify-center rounded-[24px] bg-[#b6e093] px-[10px] py-[10px]">
            <p className="font-['Figtree',sans-serif] text-[16px] font-medium leading-[1.3] text-[#1e3930]">
              {unitLabel}
            </p>
          </div>
          <div className="flex h-[40px] w-[78px] items-center justify-center rounded-[24px] px-[10px] py-[10px]">
            <p className="font-['Figtree',sans-serif] text-[16px] font-medium leading-[1.3] text-[#1e3930]">
              {secondaryUnitLabel}
            </p>
          </div>
        </div>
      </div>
    </CompactQuestionFrame>
  );
}

export function HeightQuestion({ onNext }: { onNext?: (value?: string) => void } = {}) {
  return (
    <MeasurementWheelQuestion
      description="This helps us estimate a starting point."
      onNext={onNext}
      progressWidth={58}
      selectedIndex={2}
      selectedValue="170 cm"
      secondaryUnitLabel="ft/in"
      title="What is your height?"
      unitLabel="cm"
      values={['160', '165', '170', '175', '180', '185', '190']}
    />
  );
}

export function WeightQuestion({ onNext }: { onNext?: (value?: string) => void } = {}) {
  return (
    <MeasurementWheelQuestion
      description="This helps us estimate a starting point."
      onNext={onNext}
      progressWidth={68}
      selectedIndex={3}
      selectedValue="60 kg"
      secondaryUnitLabel="lb"
      title="What is your weight?"
      unitLabel="kg"
      values={['45', '50', '55', '60', '65', '70', '75']}
    />
  );
}

export function TargetWeightQuestion({ onNext }: { onNext?: (value?: string) => void } = {}) {
  return (
    <CompactQuestionFrame
      description="You can update this later."
      footerLabel="Continue"
      progressWidth={82}
      title="What is your target weight?"
      contentClassName="flex w-full items-start justify-center overflow-hidden"
      hideFooter={false}
      onFooterClick={() => onNext?.('65 kg')}
    >
      <div className="flex w-full flex-col items-center gap-[40px] pt-[13px]">
        <div className="w-full">
          <div className="flex w-full items-center border-b border-[#00944e] px-[20px] py-[13px]">
            <div className="flex w-full items-center justify-center">
              <p className="font-['Freigeist',sans-serif] text-[36px] leading-[1.3] tracking-[0px] text-[rgba(14,23,42,0.3)]">
                65
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center rounded-[28px] bg-[rgba(13,14,18,0.05)] p-[4px]">
          <div className="flex h-[40px] w-[78px] items-center justify-center rounded-[24px] bg-[#b6e093] px-[10px] py-[10px]">
            <p className="font-['Figtree',sans-serif] text-[16px] font-medium leading-[1.3] text-[#1e3930]">
              kg
            </p>
          </div>
          <div className="flex h-[40px] w-[78px] items-center justify-center rounded-[24px] px-[10px] py-[10px]">
            <p className="font-['Figtree',sans-serif] text-[16px] font-medium leading-[1.3] text-[#1e3930]">
              lb
            </p>
          </div>
        </div>
      </div>
    </CompactQuestionFrame>
  );
}

type MultiSelectQuestionProps = {
  title?: string;
  description?: string;
  options?: string[];
  progressWidth?: number;
  initialSelected?: string[];
  onNext?: (value?: any) => void;
};

export function MultiSelectQuestion({
  title = 'Title that is written in a conversational style?',
  description = 'Show description only when its necessary',
  options = ['Nausea', 'Fatigue', 'Hair Loss', 'Muscle Loss', 'Injection Anxiety', 'Food Noise'],
  progressWidth = 65,
  initialSelected = [],
  onNext,
}: MultiSelectQuestionProps = {}) {
  const [selectedLabels, setSelectedLabels] = useState<string[]>(initialSelected);

  const toggleLabel = (label: string) => {
    setSelectedLabels((current) =>
      current.includes(label) ? current.filter((item) => item !== label) : [...current, label],
    );
  };

  return (
    <CompactQuestionFrame
      description={description}
      footerLabel="Continue"
      footerDisabled={selectedLabels.length === 0}
      progressWidth={progressWidth}
      title={title}
      contentClassName="flex h-[545px] w-full flex-col gap-[24px] overflow-clip"
      onFooterClick={() => {
        if (selectedLabels.length === 0) return;
        onNext?.(selectedLabels);
      }}
    >
      <div className="flex h-[493px] w-full flex-col gap-[16px] overflow-x-clip overflow-y-auto pb-[200px]">
        {options.map((label) => {
          const isSelected = selectedLabels.includes(label);

          return (
            <button
              key={label}
              type="button"
              onClick={() => toggleLabel(label)}
              className={`box-border flex h-[60px] min-h-[60px] w-full shrink-0 items-center justify-between rounded-[16px] px-[20px] text-left ${
                isSelected ? 'bg-[#b6e093]' : 'bg-[rgba(13,14,18,0.05)]'
              }`}
            >
              <p className="font-['Figtree',sans-serif] text-[16px] font-medium leading-[1.3] tracking-[0px] text-[#0d0e12]">
                {label}
              </p>
              <p
                className={`font-['Rco',sans-serif] text-[20px] not-italic ${
                  isSelected ? 'text-[#0d0e12]' : 'text-[rgba(13,14,18,0.2)]'
                }`}
              >
                {isSelected ? '\uE92B' : '\uE94A'}
              </p>
            </button>
          );
        })}
      </div>
    </CompactQuestionFrame>
  );
}

type WheelColumnProps = {
  values: string[];
  selectedIndex: number;
  width?: number;
  className?: string;
};

function WheelColumn({
  values,
  selectedIndex,
  width,
  className = '',
  height = 460,
}: WheelColumnProps & { height?: number }) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center overflow-hidden ${className}`}
      style={{
        height,
        width,
        fontFamily: 'Freigeist, Figtree, Hiragino Sans, sans-serif',
      }}
    >
      <div className="absolute left-0 right-0 top-1/2 h-[60px] -translate-y-1/2 rounded-[16px] bg-[#b6e093]" />
      <div className="relative flex w-full flex-col items-center gap-[18px]">
        {values.map((value, index) => {
          const distance = Math.abs(index - selectedIndex);
          const size = distance === 0 ? 'text-[26px]' : distance === 1 ? 'text-[24px]' : distance === 2 ? 'text-[18px]' : 'text-[16px]';
          const color =
            distance === 0 ? 'text-[#16191c]' : distance === 1 ? 'text-[#aeaeae]' : distance === 2 ? 'text-[#c2c2c2]' : 'text-[#d7d7d7]';

          return (
            <div
              key={`${value}-${index}`}
              className={`select-none leading-none tracking-[0px] ${size} ${color}`}
            >
              {value}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function OneWheelQuestion() {
  const values = ['1989', '1990', '1991', '1990', '1993', '1994', '1995'];

  return (
    <CompactQuestionFrame
      description="Show description only when its necessary"
      footerLabel="Continue"
      progressWidth={30}
      title="Title that is written in a conversational style?"
      contentClassName="flex w-full items-start justify-center overflow-hidden"
    >
      <WheelColumn height={300} selectedIndex={3} values={values} width={148} />
    </CompactQuestionFrame>
  );
}

export function TwoWheelQuestion() {
  const left = ['1989', '1990', '1991', '1990', '1993', '1994', '1995'];
  const right = ['\u00A0', '\u00A0', '\u00A0', 'Days', 'Weeks', '\u00A0', '\u00A0'];

  return (
    <CompactQuestionFrame
      description="Show description only when its necessary"
      footerLabel="Continue"
      progressWidth={30}
      title="Title that is written in a conversational style?"
      contentClassName="flex w-full items-start justify-start overflow-hidden"
    >
      <div className="relative flex h-[300px] w-[335px] items-start gap-[16px] overflow-hidden">
        <div className="absolute left-0 right-0 top-1/2 h-[60px] -translate-y-1/2 rounded-[16px] bg-[#b6e093]" />
        <WheelColumn className="flex-1 min-w-0" height={300} selectedIndex={3} values={left} />
        <WheelColumn className="flex-1 min-w-0" height={300} selectedIndex={3} values={right} />
      </div>
    </CompactQuestionFrame>
  );
}

export function ThreeWheelQuestion() {
  const months = ['Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec', 'Jan'];
  const days = ['14', '15', '16', '17', '18', '19', '20'];
  const years = ['1989', '1990', '1991', '1990', '1993', '1994', '1995'];

  return (
    <CompactQuestionFrame
      description="Show description only when its necessary"
      footerLabel="Continue"
      progressWidth={65}
      title="Title that is written in a conversational style?"
      contentClassName="flex w-full items-start justify-center overflow-hidden"
    >
      <div className="flex items-center justify-center gap-[16px]">
        <WheelColumn height={300} selectedIndex={3} values={months} width={82} />
        <WheelColumn height={300} selectedIndex={3} values={days} width={58} />
        <WheelColumn height={300} selectedIndex={3} values={years} width={82} />
      </div>
    </CompactQuestionFrame>
  );
}

export function NumericInputQuestion() {
  return (
    <CompactQuestionFrame
      description="Show description only when its necessary"
      footerLabel="Continue"
      progressWidth={85}
      title="Title that is written in a conversational style?"
      contentClassName="flex w-full items-start justify-center overflow-hidden"
    >
      <div className="flex w-full flex-col items-center gap-[40px] pt-[13px]">
        <div className="w-full">
          <div className="flex w-full items-center border-b border-[#00944e] px-[20px] py-[13px]">
            <div className="flex w-full items-center justify-center">
              <p className="font-['Freigeist',sans-serif] text-[36px] leading-[1.3] tracking-[0px] text-[rgba(14,23,42,0.3)]">
                168
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center rounded-[28px] bg-[rgba(13,14,18,0.05)] p-[4px]">
          <div className="flex h-[40px] w-[78px] items-center justify-center rounded-[24px] bg-[#b6e093] px-[10px] py-[10px]">
            <p className="font-['Figtree',sans-serif] text-[16px] font-medium leading-[1.3] text-[#1e3930]">
              cm
            </p>
          </div>
          <div className="flex h-[40px] w-[78px] items-center justify-center rounded-[24px] px-[10px] py-[10px]">
            <p className="font-['Figtree',sans-serif] text-[16px] font-medium leading-[1.3] text-[#1e3930]">
              ft/in
            </p>
          </div>
        </div>
      </div>
    </CompactQuestionFrame>
  );
}

function KeyboardKey({ label, wide, accent }: { label: string; wide?: boolean; accent?: boolean }) {
  return (
    <div
      className={`flex h-[45px] items-center justify-center rounded-[8.5px] bg-[#333] text-[25px] leading-none text-[color:var(--miscellaneous/keyboards/glyphs---primary,#595959)] ${
        wide ? 'flex-[1_0_0]' : 'w-full'
      }`}
      style={{
        boxShadow: 'inset 0 0 0 999px rgba(255,255,255,0.3), inset 0 0 0 1px rgba(255,255,255,0.02)',
        color: accent ? '#ffffff' : undefined,
        backgroundColor: accent ? '#08f' : '#333',
      }}
    >
      <span className="translate-y-[-1px] font-['Figtree',sans-serif] text-[25px] leading-none">{label}</span>
    </div>
  );
}

function FakeKeyboard() {
  return (
    <div className="rounded-t-[20px] bg-[rgba(13,14,18,0.05)] px-2 pb-3 pt-3">
      <div className="space-y-[6px]">
        <div className="grid grid-cols-10 gap-[6px]">
          {['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'].map((key) => (
            <KeyboardKey key={key} label={key} />
          ))}
        </div>
        <div className="grid grid-cols-9 gap-[6px]">
          {['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'].map((key) => (
            <KeyboardKey key={key} label={key} />
          ))}
        </div>
        <div className="flex items-center gap-[6px]">
          <KeyboardKey label="⇧" wide />
          <div className="grid flex-[1_0_0] grid-cols-7 gap-[6px]">
            {['z', 'x', 'c', 'v', 'b', 'n', 'm'].map((key) => (
              <KeyboardKey key={key} label={key} />
            ))}
          </div>
          <KeyboardKey label="⌫" wide />
        </div>
        <div className="flex items-center gap-[6px]">
          <KeyboardKey label="ABC" wide />
          <KeyboardKey label=" " wide />
          <KeyboardKey label="↵" wide accent />
        </div>
      </div>
    </div>
  );
}

function TextKeyboardKey({
  label,
  wide,
  accent,
  blank,
}: {
  label: string;
  wide?: boolean;
  accent?: boolean;
  blank?: boolean;
  }) {
  return (
    <div
      className={`flex h-[44px] items-center justify-center rounded-[8px] ${
        accent ? 'bg-[#0a84ff] text-white' : 'bg-white text-[#1a1a1a]'
      } ${wide ? 'flex-[1_0_0]' : 'w-full'}`}
      style={{
        boxShadow: accent
          ? 'none'
          : '0 1px 0 rgba(255,255,255,0.9) inset, 0 1px 1px rgba(13,14,18,0.08)',
      }}
    >
      <span
        className={`font-['Figtree',sans-serif] leading-none ${
          blank ? 'text-transparent' : 'text-[23px]'
        }`}
      >
        {label}
      </span>
    </div>
  );
}

function TextKeyboard() {
  return (
    <div className="w-full overflow-hidden rounded-t-[27px] bg-[#e3e7ec] pt-[10px]">
      <div className="px-0">
        <div className="flex h-[26px] items-center gap-[16px] px-0">
          <div className="flex-[1_0_0] overflow-hidden text-center text-[16px] leading-[21px] tracking-[-0.3px] text-[#1a1a1a]">
            “The”
          </div>
          <div className="h-[16px] w-px bg-[rgba(13,14,18,0.12)]" />
          <div className="flex-[1_0_0] overflow-hidden text-center text-[16px] leading-[21px] tracking-[-0.3px] text-[#1a1a1a]">
            the
          </div>
          <div className="h-[16px] w-px bg-[rgba(13,14,18,0.12)]" />
          <div className="flex-[1_0_0] overflow-hidden text-center text-[16px] leading-[21px] tracking-[-0.3px] text-[#1a1a1a]">
            to
          </div>
        </div>
      </div>

      <div className="px-0 pt-[10px]">
        <div className="space-y-[5px]">
          <div className="grid grid-cols-10 gap-[4px]">
            {['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'].map((key) => (
              <TextKeyboardKey key={key} label={key} />
            ))}
          </div>
          <div className="grid grid-cols-9 gap-[4px]">
            {['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'].map((key) => (
              <TextKeyboardKey key={key} label={key} />
            ))}
          </div>
          <div className="flex items-center gap-[4px]">
            <TextKeyboardKey label="⇧" wide />
            <div className="grid flex-[1_0_0] grid-cols-7 gap-[4px]">
              {['z', 'x', 'c', 'v', 'b', 'n', 'm'].map((key) => (
                <TextKeyboardKey key={key} label={key} />
              ))}
            </div>
            <TextKeyboardKey label="⌫" wide />
          </div>
          <div className="flex items-center gap-[4px]">
            <TextKeyboardKey label="ABC" wide />
            <TextKeyboardKey label="space" wide blank />
            <TextKeyboardKey label="↵" wide accent />
          </div>
        </div>
      </div>

      <div className="flex h-[66px] items-start justify-between px-0 pb-[14px] pt-[23px]">
        <div className="h-[26px] w-[26px] shrink-0 opacity-85">
          <img alt="" className="block size-full max-w-none" src={textFigmaEmoji} />
        </div>
        <div className="h-[27px] w-[18px] shrink-0 opacity-85">
          <img alt="" className="block size-full max-w-none" src={textFigmaMic} />
        </div>
      </div>
    </div>
  );
}

export function TextInputQuestion() {
  return (
    <CompactQuestionFrame
      description="Show description only when its necessary"
      footerLabel="Continue"
      progressWidth={43}
      title="Title that is written in a conversational style?"
      contentClassName="relative flex h-[545px] w-full items-start justify-center overflow-hidden"
      hideFooter
    >
      <div className="flex h-full w-full flex-col">
        <div className="px-[20px] pt-[0px]">
          <div className="rounded-[12px] border border-[#00944e] bg-[rgba(14,23,42,0.05)] px-[20px] py-[13px]">
            <div className="flex items-center gap-[20px]">
              <div className="h-[21px] w-[2px] shrink-0 bg-[#0d0e12]" />
              <p className="font-['Figtree',sans-serif] text-[16px] leading-[1.3] text-[rgba(14,23,42,0.3)]">
                Enter medication name
              </p>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-[10px]">
          <div className="flex flex-col gap-[10px]">
            <div className="px-[20px]">
              <button
                type="button"
                className="flex h-[56px] w-full items-center justify-center rounded-[16px] bg-[#1e3930] px-[16px] py-[16px] text-center font-['Figtree',sans-serif] text-[16px] font-medium leading-[1.3] text-white"
              >
                Continue
              </button>
            </div>
            <TextKeyboard />
          </div>
        </div>
      </div>
    </CompactQuestionFrame>
  );
}

export function NameQuestion({ onNext }: { onNext?: (value?: string) => void } = {}) {
  return (
    <CompactQuestionFrame
      description="So we know how to address you."
      footerLabel="Continue"
      progressWidth={35}
      title="What is your name?"
      contentClassName="flex w-full items-start justify-center overflow-hidden"
      hideFooter
      onFooterClick={onNext}
    >
      <div className="flex w-full flex-col gap-[40px]">
        <div className="rounded-[12px] border border-[#00944e] bg-[rgba(14,23,42,0.05)] px-[20px] py-[13px]">
          <div className="flex items-center gap-[20px]">
            <div className="h-[21px] w-[2px] shrink-0 bg-[#0d0e12]" />
            <p className="font-['Figtree',sans-serif] text-[16px] leading-[1.3] text-[rgba(14,23,42,0.3)]">
              Enter your first name
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-[8px]">
          <button
            type="button"
            onClick={() => onNext?.('')}
            className="flex h-[56px] w-[335px] items-center justify-center rounded-[16px] bg-[#1e3930] px-[16px] py-[16px] text-center font-['Figtree',sans-serif] text-[16px] font-medium leading-[1.3] text-white"
          >
            Continue
          </button>

          <TextKeyboard />

          <div className="relative h-[34px] w-full bg-white">
            <div className="absolute left-0 top-0 h-[34px] w-[375px]" />
            <div className="-translate-x-1/2 absolute bottom-[9px] left-[calc(50%+0.5px)] top-[20px] w-[134px]">
              <img alt="" className="absolute inset-0 block size-full max-w-none" src={textFigmaBar} />
            </div>
          </div>
        </div>
      </div>
    </CompactQuestionFrame>
  );
}

export function GlpDurationQuestion({ onNext }: { onNext?: (value?: any) => void } = {}) {
  const [selectedDuration, setSelectedDuration] = useState('');
  const durations = ['Less than 1 month', '1-3 months', 'More than 3 months'];

  return (
    <CompactQuestionFrame
      description="This helps us tailor the next questions."
      progressWidth={52}
      title="How long have you been on your GLP-1 medication?"
      contentClassName="flex h-[420px] w-full flex-col gap-[24px] overflow-clip"
      hideFooter
    >
      <div className="flex h-[368px] w-full flex-col gap-[16px] overflow-x-clip overflow-y-auto pb-[120px]">
        {durations.map((duration) => {
          const isSelected = selectedDuration === duration;

          return (
            <SelectableOptionRow
              key={duration}
              checked={isSelected}
              label={duration}
              muted={!isSelected}
              selected={isSelected}
              onClick={() => {
                setSelectedDuration(duration);
                onNext?.(duration);
              }}
            />
          );
        })}
      </div>
    </CompactQuestionFrame>
  );
}

export function GlpInitiationQuestion({ onNext }: { onNext?: (value?: any) => void } = {}) {
  const [selectedInitiation, setSelectedInitiation] = useState('');
  const choices = ['My doctor recommended it', 'I decided on my own after research.'];

  return (
    <CompactQuestionFrame
      description="We use this to tailor the next support step."
      progressWidth={64}
      title="Who nudged you to start this journey?"
      contentClassName="flex h-[420px] w-full flex-col gap-[24px] overflow-clip"
      hideFooter
    >
      <div className="flex h-[368px] w-full flex-col gap-[16px] overflow-x-clip overflow-y-auto pb-[120px]">
        {choices.map((choice) => {
          const isSelected = selectedInitiation === choice;

          return (
            <SelectableOptionRow
              key={choice}
              checked={isSelected}
              label={choice}
              muted={!isSelected}
              selected={isSelected}
              onClick={() => {
                setSelectedInitiation(choice);
                onNext?.(choice);
              }}
            />
          );
        })}
      </div>
    </CompactQuestionFrame>
  );
}

type GlpPermissionQuestionProps = {
  title: string;
  description: string;
  onNext?: () => void;
};

function GlpPermissionQuestion({ title, description, onNext }: GlpPermissionQuestionProps) {
  return (
    <div
      className="relative size-full h-[812px] w-[375px] overflow-clip rounded-[44px] bg-[#f8f8f9]"
      style={{ fontFamily: 'Figtree, Hiragino Sans, sans-serif' }}
    >
      <img alt="" aria-hidden="true" className="absolute inset-0 size-full object-cover" src={bgFigmaImage188} />

      <div className="absolute left-0 right-0 top-0 h-[115px] bg-[#5a9d66]" />

      <div className="absolute inset-x-0 top-0 flex items-start justify-between px-[12px] pt-[14px] text-white">
        <p className="text-[12px] font-semibold tracking-[-0.015em]">12:00</p>
        <div className="flex items-center gap-[7px]">
          <svg aria-hidden="true" width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="7.5" width="3" height="3.5" rx="1.1" fill="currentColor" />
            <rect x="5.25" y="5.5" width="3" height="5.5" rx="1.1" fill="currentColor" />
            <rect x="9.5" y="3.25" width="3" height="7.75" rx="1.1" fill="currentColor" />
            <rect x="13.75" y="1" width="3" height="10" rx="1.1" fill="currentColor" />
          </svg>
          <svg aria-hidden="true" width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 3.5C4.4 0.9 10.6 0.9 14 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M3.1 5.9C5.5 4 9.5 4 11.9 5.9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M5.45 8.2C6.65 7.25 8.35 7.25 9.55 8.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <circle cx="7.5" cy="9.2" r="1.15" fill="currentColor" />
          </svg>
          <svg aria-hidden="true" width="27" height="13" viewBox="0 0 27 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="22" height="11" rx="3.2" stroke="currentColor" strokeWidth="1.25" />
            <rect x="3" y="3" width="16.5" height="7" rx="2" fill="currentColor" />
            <rect x="24.25" y="4.1" width="1.8" height="4.1" rx="0.9" fill="currentColor" opacity="0.45" />
          </svg>
        </div>
      </div>

      <div className="absolute left-[16px] right-[16px] top-[48px] h-[28px] rounded-[4px] bg-[#d96661] text-center text-[18px] font-medium leading-[28px] tracking-[0px] text-white">
        {title}
      </div>

      <div className="absolute left-1/2 top-[242px] flex w-[280px] -translate-x-1/2 gap-[16px]">
        <div className="flex h-[58px] flex-1 items-center justify-center rounded-[4px] border border-[#2b2b2b] bg-[#fbe2e2] px-[10px] text-center text-[14px] leading-[1.35] text-[#1d1d1d]">
          Apple Health
        </div>
        <div className="flex h-[58px] flex-1 items-center justify-center rounded-[4px] border border-[#2b2b2b] bg-[#fbe2e2] px-[10px] text-center text-[14px] leading-[1.35] text-[#1d1d1d]">
          Notification
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-[16px] pb-[34px]">
        <p className="w-[287px] text-center text-[14px] leading-[1.45] text-[rgba(13,14,18,0.62)]">
          {description}
        </p>
        <button
          type="button"
          onClick={() => onNext?.()}
          className="flex h-[52px] w-[335px] items-center justify-center rounded-[16px] bg-[#1e3930] px-[16px] py-[16px] text-center text-[16px] font-semibold leading-[1.3] text-white"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export function AppleHealthPermissionQuestion({ onNext }: { onNext?: (value?: string) => void } = {}) {
  return (
    <ValuePageShell
      buttonLabel="Allow"
      description="Connect Apple Health so we can tailor your plan and progress signals."
      onButtonClick={onNext}
      title="Apple Health"
    />
  );
}

export function NotificationPermissionQuestion({ onNext }: { onNext?: (value?: string) => void } = {}) {
  return <GlpPermissionQuestion description="Allow notifications so we can keep your plan moving at the right moment." onNext={onNext} title="授权" />;
}

export function GlpSupportValuePage({ onNext }: { onNext?: (value?: string) => void } = {}) {
  const location = useLocation();
  const state = location.state as { initiationChoice?: string } | null;
  const clinicianInitiated = state?.initiationChoice === 'My doctor recommended it';

  return (
    <ValuePageShell
      buttonLabel="Continue"
      description={
        clinicianInitiated
          ? 'adherence support'
          : 'social proof & lifestyle'
      }
      onButtonClick={onNext}
      title={
        clinicianInitiated
          ? '我们可以帮你更好地执行你的减重计划'
          : '我们可以帮你建立更健康、又轻松的生活的方式'
      }
      />
  );
}

type ReportState = Record<string, unknown>;

function getStageFromDuration(duration: unknown) {
  const value = typeof duration === 'string' ? duration : '';

  if (value === 'Less than 1 month') {
    return {
      key: 'early-adaptation',
      label: 'Early Adaptation',
      headline: 'You’re in the Early Adaptation phase',
    };
  }

  if (value === '1-3 months') {
    return {
      key: 'optimization',
      label: 'Optimization',
      headline: 'You’re entering the Optimization phase',
    };
  }

  if (value === 'More than 3 months') {
    return {
      key: 'sustainability',
      label: 'Sustainability',
      headline: 'You’re in the Sustainability phase',
    };
  }

  return {
    key: 'pre-start',
    label: 'Pre-start',
    headline: 'You’re preparing to start GLP-1',
  };
}

function getToleranceLabel(state: ReportState) {
  const concerns = Array.isArray(state['behavior-concern']) ? (state['behavior-concern'] as string[]) : [];
  const postMeal = typeof state['sensory-post-meal'] === 'string' ? state['sensory-post-meal'] : '';
  const sideEffect = typeof state['sensory-side-effect'] === 'string' ? state['sensory-side-effect'] : '';

  if (sideEffect === 'Nausea' || sideEffect === 'Digestive discomfort') {
    return 'Low';
  }

  if (sideEffect === 'Fatigue' || sideEffect === 'Muscle loss or weakness') {
    return 'Medium';
  }

  if (postMeal === 'I feel it almost immediately' || concerns.includes('Nausea or side effects')) {
    return 'Low';
  }

  if (postMeal === 'I get back to eating later' || concerns.includes('Losing muscle or feeling weak')) {
    return 'Medium';
  }

  return 'High';
}

function buildFocusPoints(stageKey: string, concerns: string[], goal?: string, sideEffect?: string) {
  const points = new Set<string>();

  if (stageKey === 'pre-start') {
    points.add('Set a simple nutrition baseline before your first dose.');
    points.add('Learn which foods reduce nausea risk through correlations.');
    points.add('Start with structured, repeatable eating patterns.');
  } else if (stageKey === 'early-adaptation') {
    points.add('Avoid common trigger foods like high-fat, heavy meals.');
    points.add('Expect side effects to peak 24-48 hours after dosing.');
    points.add('Prioritize protein intake to protect metabolism.');
  } else if (stageKey === 'optimization') {
    points.add('Increase nutrient density, not just reduce intake.');
    points.add('Maintain consistent protein despite lower appetite.');
    points.add('Start identifying food-symptom patterns.');
  } else if (stageKey === 'sustainability') {
    points.add('Build low-effort tracking habits.');
    points.add('Prevent plateaus with small adjustments.');
    points.add('Prepare for long-term maintenance.');
  }

  if (concerns.includes('Losing muscle or feeling weak')) {
    points.add('Protect muscle with protein-first meals and strength support.');
  }

  if (concerns.includes('Not knowing what to eat')) {
    points.add('Use simple meal rules so decisions stay easy.');
  }

  if (concerns.includes('Staying consistent and keep on track')) {
    points.add('Keep the routine light enough to repeat on busy days.');
  }

  if (concerns.includes('Stopping GLP and getting weight rebound')) {
    points.add('Build maintenance habits now so the post-GLP phase is smoother.');
  }

  if (sideEffect === 'Nausea') {
    points.add('Keep meals lighter and simpler when side effects peak.');
  }

  if (sideEffect === 'Fatigue') {
    points.add('Keep protein and meal timing steady so energy stays more predictable.');
  }

  if (sideEffect === 'Muscle loss or weakness') {
    points.add('Protect muscle with protein-first meals and strength support.');
  }

  if (sideEffect === 'Digestive discomfort') {
    points.add('Use smaller, simpler meals when your stomach feels sensitive.');
  }

  if (goal === 'Build sustainable habits') {
    points.add('Make the plan easy to repeat, not just effective on good days.');
  }

  return Array.from(points).slice(0, 4);
}

function ReportPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[16px] bg-[rgba(30,57,48,0.05)] px-[12px] py-[10px]">
      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[rgba(13,14,18,0.55)]">
        {label}
      </p>
      <p className="mt-1 text-[13px] leading-[1.4] text-[#1e3930]">{value}</p>
    </div>
  );
}

export function ReportResultPage({ onNext }: { onNext?: () => void } = {}) {
  const location = useLocation();
  const state = (location.state as ReportState | null) ?? {};
  const stage = getStageFromDuration(state['glp-duration']);
  const tolerance = getToleranceLabel(state);
  const goal = typeof state['behavior-goal'] === 'string' ? state['behavior-goal'] : undefined;
  const concerns = Array.isArray(state['behavior-concern']) ? (state['behavior-concern'] as string[]) : [];
  const sideEffectConcern = typeof state['sensory-side-effect'] === 'string' ? state['sensory-side-effect'] : undefined;
  const tracking = typeof state['behavior-tracking'] === 'string' ? state['behavior-tracking'] : undefined;
  const duration = typeof state['glp-duration'] === 'string' ? state['glp-duration'] : 'Not started';
  const initiation = typeof state['glp-initiation'] === 'string' ? state['glp-initiation'] : undefined;
  const focusPoints = buildFocusPoints(stage.key, concerns, goal, sideEffectConcern);
  const keyConcern = concerns[0] ?? 'your main friction points';

  const insightText = (() => {
    if (stage.key === 'pre-start') {
      return 'You’re setting yourself up before the first dose. That gives us the best window to make eating patterns simple, reduce nausea risk, and avoid guessing later.';
    }

    if (stage.key === 'early-adaptation') {
      return 'Your appetite is likely changing fast, while your structure is still catching up. That means the next wins come from protecting muscle, avoiding trigger meals, and staying ahead of side effects.';
    }

    if (stage.key === 'optimization') {
      return 'Your appetite is more stable now, so food quality matters more than quantity. The next improvements come from nutrient density, consistent protein, and reading food-symptom patterns.';
    }

    return 'Your results now depend on habits more than medication alone. The priority is to build a system that holds up when motivation drops or dosing changes.';
  })();

  const riskText =
    stage.key === 'pre-start'
      ? 'The first few weeks are the most unpredictable. Starting with a baseline helps reduce surprises.'
      : stage.key === 'early-adaptation'
        ? 'Without guidance, a significant portion of early weight loss can come from muscle.'
        : stage.key === 'optimization'
          ? 'Dose increases can re-trigger side effects and disrupt progress.'
          : 'Without structure, weight regain can happen quickly after stopping.';

  return (
    <div
      className="relative size-full h-[812px] w-[375px] overflow-clip rounded-[44px] bg-[linear-gradient(180deg,#eef7ff_0%,#f7fbff_34%,#edf4f0_100%)]"
      style={{ fontFamily: 'Figtree, Hiragino Sans, sans-serif' }}
    >
      <GlowiseStatusBar />
      <div className="absolute left-0 right-0 top-0 h-[156px] bg-[linear-gradient(180deg,rgba(30,57,48,0.04)_0%,rgba(255,255,255,0)_100%)]" />

      <div className="absolute inset-x-0 top-[54px] bottom-[108px] overflow-y-auto">
        <div className="mx-auto w-[335px] pb-[16px] pt-0">
          <div className="pt-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6e8ca0]">Your report</p>
            <h1
              className="mt-2 text-[30px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#13231d]"
              style={{ fontFamily: 'Freigeist, Figtree, Hiragino Sans, sans-serif' }}
            >
              {stage.headline}
            </h1>
            <p className="mt-3 text-[15px] leading-[1.55] text-[rgba(13,14,18,0.62)]">
              Based on what you told us, here is the first read on your plan and where it needs the most support.
            </p>
          </div>

          <div className="mt-[48px] rounded-[28px] bg-white/92 p-[18px] shadow-[0_24px_70px_rgba(30,57,48,0.08)] backdrop-blur">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-[#1e3930] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                Predicted tolerance: {tolerance}
              </span>
              <span className="rounded-full bg-[rgba(30,57,48,0.06)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1e3930]">
                {stage.label}
              </span>
            </div>

            <div className="mt-5 rounded-[20px] border border-[rgba(30,57,48,0.08)] bg-[rgba(30,57,48,0.03)] p-[14px]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6e8ca0]">Insight</p>
              <p className="mt-2 text-[14px] leading-[1.55] text-[#1e3930]">{insightText}</p>
            </div>

            <div className="mt-4 rounded-[20px] border border-[rgba(30,57,48,0.08)] p-[14px]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6e8ca0]">Key risk</p>
              <p className="mt-2 text-[14px] leading-[1.55] text-[#1e3930]">{riskText}</p>
            </div>

            <div className="mt-4 rounded-[20px] border border-[rgba(30,57,48,0.08)] p-[14px]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6e8ca0]">Your focus</p>
              <div className="mt-3 flex flex-col gap-2">
                {focusPoints.map((point) => (
                  <div key={point} className="flex gap-2 text-[14px] leading-[1.5] text-[#1e3930]">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#b6e093]" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 grid gap-2 rounded-[20px] border border-[rgba(30,57,48,0.08)] bg-[rgba(30,57,48,0.03)] p-[14px] text-[13px] leading-[1.5] text-[rgba(13,14,18,0.72)]">
              {sideEffectConcern ? <ReportPill label="Side effect concern" value={sideEffectConcern} /> : null}
              {goal ? <ReportPill label="Goal" value={goal} /> : null}
              {keyConcern ? <ReportPill label="Focus friction" value={keyConcern} /> : null}
              {tracking ? <ReportPill label="Tracking style" value={tracking} /> : null}
              {initiation ? <ReportPill label="Starting point" value={initiation} /> : null}
              <ReportPill label="Current phase" value={duration} />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-[16px] pb-[34px]">
        <button
          type="button"
          onClick={() => onNext?.()}
          className="flex h-[56px] w-[335px] items-center justify-center rounded-[16px] bg-[#1e3930] px-[16px] py-[16px] text-center text-[16px] font-medium leading-[1.3] text-white shadow-[inset_0_-4px_0_rgba(255,255,255,0.06)]"
        >
          Build my plan
        </button>

        <div className="relative h-[34px] w-full">
          <div className="absolute left-0 top-0 h-[34px] w-[375px]" />
          <div className="-translate-x-1/2 absolute bottom-[9px] left-[calc(50%+0.5px)] top-[20px] w-[134px]">
            <img alt="" className="absolute inset-0 block size-full max-w-none" src={valuePageBarImage} />
          </div>
        </div>
      </div>
    </div>
  );
}

function SingleSelectQuestionFrame({
  title,
  description,
  options,
  selected,
  onSelect,
  onNext,
  progressWidth,
}: {
  title: string;
  description: string;
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
  onNext?: (value?: any) => void;
  progressWidth: number;
}) {
  const [interaction, setInteraction] = useState<{ option: string | null; phase: 'idle' | 'pressed' | 'released' }>({
    option: null,
    phase: 'idle',
  });
  const pressTimerRef = useRef<number | null>(null);
  const releaseTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (pressTimerRef.current) window.clearTimeout(pressTimerRef.current);
      if (releaseTimerRef.current) window.clearTimeout(releaseTimerRef.current);
    };
  }, []);

  return (
    <CompactQuestionFrame
      description={description}
      progressWidth={progressWidth}
      title={title}
      contentClassName="flex h-[420px] w-full flex-col gap-[24px] overflow-clip"
      hideFooter
    >
      <div className="flex h-[368px] w-full flex-col gap-[16px] overflow-x-clip overflow-y-auto pb-[120px]">
        {options.map((option) => {
          const isSelected = selected === option;

          return (
            <SelectableOptionRow
              key={option}
              checked={isSelected}
              label={option}
              muted={!isSelected}
              selected={isSelected}
              pressed={interaction.option === option && interaction.phase === 'pressed'}
              released={interaction.option === option && interaction.phase === 'released'}
              onClick={() => {
                setInteraction({ option, phase: 'pressed' });
                if (pressTimerRef.current) window.clearTimeout(pressTimerRef.current);
                pressTimerRef.current = window.setTimeout(() => {
                  onSelect(option);
                  setInteraction({ option, phase: 'released' });
                  if (releaseTimerRef.current) window.clearTimeout(releaseTimerRef.current);
                  releaseTimerRef.current = window.setTimeout(() => {
                    onNext?.(option);
                  }, 90);
                }, 90);
              }}
            />
          );
        })}
      </div>
    </CompactQuestionFrame>
  );
}

function MultiSelectQuestionFrame({
  title,
  description,
  options,
  selected,
  onToggle,
  onNext,
  progressWidth,
}: {
  title: string;
  description: string;
  options: string[];
  selected: string[];
  onToggle: (value: string) => void;
  onNext?: (value?: any) => void;
  progressWidth: number;
}) {
  const [interaction, setInteraction] = useState<{ option: string | null; phase: 'idle' | 'pressed' | 'released' }>({
    option: null,
    phase: 'idle',
  });
  const footerTimerRef = useRef<number | null>(null);
  const footerReleaseTimerRef = useRef<number | null>(null);
  const optionDownAtRef = useRef<number>(0);

  useEffect(() => {
    return () => {
      if (footerTimerRef.current) window.clearTimeout(footerTimerRef.current);
      if (footerReleaseTimerRef.current) window.clearTimeout(footerReleaseTimerRef.current);
    };
  }, []);

  return (
    <CompactQuestionFrame
      description={description}
      footerLabel="Continue"
      footerDisabled={selected.length === 0}
      progressWidth={progressWidth}
      title={title}
      contentClassName="flex h-[420px] w-full flex-col gap-[24px] overflow-clip"
      onFooterClick={() => {
        if (selected.length === 0) return;
        if (footerTimerRef.current) window.clearTimeout(footerTimerRef.current);
        footerTimerRef.current = window.setTimeout(() => {
          onNext?.(selected);
        }, 180);
      }}
    >
      <div className="flex h-[368px] w-full flex-col gap-[16px] overflow-x-clip overflow-y-auto pb-[120px]">
        {options.map((option) => {
          const isSelected = selected.includes(option);
          const isActive = interaction.option === option;

          return (
            <SelectableOptionRow
              key={option}
              checked={isSelected}
              label={option}
              muted={!isSelected}
              selected={isSelected}
              pressed={isActive && interaction.phase === 'pressed'}
              released={isActive && interaction.phase === 'released'}
              onPointerDown={() => {
                optionDownAtRef.current = performance.now();
                setInteraction({ option, phase: 'pressed' });
              }}
              onPointerUp={() => {
                const elapsed = performance.now() - optionDownAtRef.current;
                const remainingPressMs = Math.max(120 - elapsed, 0);

                if (footerTimerRef.current) window.clearTimeout(footerTimerRef.current);
                footerTimerRef.current = window.setTimeout(() => {
                  onToggle(option);
                  setInteraction({ option, phase: 'released' });
                  if (footerReleaseTimerRef.current) window.clearTimeout(footerReleaseTimerRef.current);
                  footerReleaseTimerRef.current = window.setTimeout(() => {
                    setInteraction({ option: null, phase: 'idle' });
                  }, 90);
                }, remainingPressMs);
              }}
              onPointerLeave={() => {
                if (interaction.option === option && interaction.phase === 'pressed') {
                  if (footerTimerRef.current) window.clearTimeout(footerTimerRef.current);
                  setInteraction({ option: null, phase: 'idle' });
                }
              }}
              onPointerCancel={() => {
                if (interaction.option === option) {
                  if (footerTimerRef.current) window.clearTimeout(footerTimerRef.current);
                  setInteraction({ option: null, phase: 'idle' });
                }
              }}
            />
          );
        })}
      </div>

    </CompactQuestionFrame>
  );
}

export function SensoryFoodNoiseQuestion({ onNext }: { onNext?: (value?: any) => void } = {}) {
  const [selected, setSelected] = useState('');

  return (
    <SingleSelectQuestionFrame
      description="We use this to tune the next support questions."
      onNext={onNext}
      onSelect={setSelected}
      options={['Loud / constant', 'Quiet / faded', 'Totally silent / disoriented']}
      progressWidth={76}
      selected={selected}
      title="What’s your Food Noise level right now?"
    />
  );
}

export function SensorySideEffectQuestion({ onNext }: { onNext?: (value?: any) => void } = {}) {
  const [selected, setSelected] = useState('');

  return (
    <SingleSelectQuestionFrame
      description="This helps us anticipate the support you’ll need most."
      onNext={onNext}
      onSelect={setSelected}
      options={['Nausea', 'Fatigue', 'Muscle loss or weakness', 'Digestive discomfort', 'Not sure yet']}
      progressWidth={68}
      selected={selected}
      title="What side effect worries you most?"
    />
  );
}

export function SensoryPostMealQuestion({ onNext }: { onNext?: (value?: any) => void } = {}) {
  const [selected, setSelected] = useState('');

  return (
    <SingleSelectQuestionFrame
      description="We’ll tailor the tone and pace based on how that feels."
      onNext={onNext}
      onSelect={setSelected}
      options={[
        'I feel it almost immediately',
        'I get back to eating later',
        'It does not feel especially different',
      ]}
      progressWidth={86}
      selected={selected}
      title='When you "break" and eat a big meal, how does your body feel?'
    />
  );
}

export function SensoryGridQuestion({ onNext }: { onNext?: (value?: any) => void } = {}) {
  const [selected, setSelected] = useState('');

  return (
    <SingleSelectQuestionFrame
      description="This helps us understand how much structure you want."
      onNext={onNext}
      onSelect={setSelected}
      options={['I love it', 'I hate it', 'I’d rather not track calories anymore']}
      progressWidth={96}
      selected={selected}
      title="How do you feel about the calorie grid?"
    />
  );
}

export function BehaviorGoalQuestion({ onNext }: { onNext?: (value?: any) => void } = {}) {
  const [selected, setSelected] = useState('');

  return (
    <SingleSelectQuestionFrame
      description="This helps us focus the rest of the experience."
      onNext={onNext}
      onSelect={setSelected}
      options={['Lose weight', 'Improve metabolic health', 'Reduce side effects', 'Build sustainable habits']}
      progressWidth={104}
      selected={selected}
      title="What’s your primary goal right now?"
    />
  );
}

export function BehaviorConcernQuestion({ onNext }: { onNext?: (value?: any) => void } = {}) {
  return (
    <MultiSelectQuestion
      description="Choose all that apply so we can address them directly."
      onNext={onNext}
      options={[
        'Nausea or side effects',
        'Losing muscle or feeling weak',
        'Not knowing what to eat',
        'Staying consistent and keep on track',
        'Stopping GLP and getting weight rebound',
      ]}
      progressWidth={116}
      title="What concerns you most right now?"
    />
  );
}

export function BehaviorTrackingStyleQuestion({ onNext }: { onNext?: (value?: any) => void } = {}) {
  const [selected, setSelected] = useState('');

  return (
    <SingleSelectQuestionFrame
      description="We’ll adapt the pacing and detail level to this style."
      onNext={onNext}
      onSelect={setSelected}
      options={['Fast and minimal', 'I need reminders to stay consistent', 'I like detailed data and insights']}
      progressWidth={126}
      selected={selected}
      title="When it comes to tracking your progress, what’s your natural style?"
    />
  );
}
