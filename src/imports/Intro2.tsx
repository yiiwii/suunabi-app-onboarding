import svgPaths from "./svg-sxss7uvrbu";
import img20251017205555 from "figma:asset/dd052ce25af265328b8b7bdbeb211c260636ef74.png";
import img20251017205601 from "figma:asset/54f7a6c886c6a86847c492bdf77a9eb1e25064f1.png";
import imgPose151 from "figma:asset/f0627035c0beb6b5dde80df8bec5ab70033daccb.png";

function Time() {
  return (
    <div className="-translate-y-1/2 absolute h-[51.527px] left-0 right-[64.25%] top-1/2" data-name="Time">
      <p className="absolute font-['Hiragino_Sans:W5',sans-serif] inset-[33.96%_33.21%_25.28%_32.48%] leading-[20.992px] not-italic text-[#0d0e12] text-[16.221px] text-center whitespace-nowrap">12:00</p>
    </div>
  );
}

function Battery() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[33.33%] contents left-[calc(50%+23.3px)] top-[42.59%]" data-name="Battery">
      <div className="-translate-x-1/2 absolute border-[#0d0e12] border-[0.954px] border-solid bottom-[33.33%] left-[calc(50%+22.19px)] opacity-35 rounded-[4.103px] top-[42.59%] w-[23.855px]" data-name="Border" />
      <div className="-translate-x-1/2 absolute bottom-[41.01%] left-[calc(50%+35.7px)] top-[51.45%] w-[1.267px]" data-name="Cap">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.26721 3.88881">
          <path d={svgPaths.p3c92c680} fill="var(--fill-0, #0D0E12)" id="Cap" opacity="0.4" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute bg-[#0d0e12] bottom-[37.04%] left-[calc(50%+22.19px)] rounded-[2.385px] top-[46.3%] w-[20.038px]" data-name="Capacity" />
    </div>
  );
}

function Levels() {
  return (
    <div className="-translate-y-1/2 absolute h-[51.527px] left-[64.25%] right-0 top-1/2" data-name="Levels">
      <Battery />
      <div className="-translate-x-1/2 absolute bottom-[32.99%] left-[calc(50%-4.79px)] top-[44.18%] w-[16.357px]" data-name="Wifi">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3566 11.7637">
          <path clipRule="evenodd" d={svgPaths.p2c09b880} fill="var(--fill-0, #0D0E12)" fillRule="evenodd" id="Wifi" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute bottom-[33.77%] left-[calc(50%-29.25px)] top-[43.58%] w-[18.321px]" data-name="Cellular Connection">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3206 11.6664">
          <path clipRule="evenodd" d={svgPaths.p3240b180} fill="var(--fill-0, #0D0E12)" fillRule="evenodd" id="Cellular Connection" />
        </svg>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start left-[20px] rounded-[12px] top-[700px] w-[335px]" data-name="Button">
      <div className="bg-[#f2fbff] flex-[1_0_0] h-[56px] min-h-px min-w-px relative rounded-[12px]" data-name="Btn">
        <div aria-hidden="true" className="absolute border-[#0371a4] border-b-4 border-solid inset-[0_0_-4px_0] pointer-events-none rounded-[12px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[12px] relative size-full">
            <p className="font-['Hiragino_Sans:W7',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0d0e12] text-[16px] text-center whitespace-nowrap">続ける</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute h-[34px] left-[20px] top-[778px] w-[335px]" data-name="滑动控件">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 335 34">
        <g id="æ»å¨æ§ä»¶">
          <g id="æ§ä»¶æ¡" />
          <path clipRule="evenodd" d={svgPaths.p18d8480} fill="var(--fill-0, #0D0E12)" fillRule="evenodd" id="Bar" />
        </g>
      </svg>
    </div>
  );
}

function icon() {
  return (
    <button className="content-stretch cursor-pointer flex gap-[20px] items-start relative shrink-0" data-name="左侧icon">
      <div className="flex flex-col font-['Rco:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-[rgba(255,255,255,0.8)] text-center tracking-[0.72px] whitespace-nowrap" role="button" tabIndex="0">
        <p className="leading-[normal]"></p>
      </div>
    </button>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center py-[2px] relative shrink-0 w-full" data-name="1-常规">
      <icon />
      <div className="flex flex-[1_0_0] flex-col font-['Hiragino_Sans:W6',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic opacity-0 relative text-[18px] text-[rgba(255,255,255,0.8)] text-center">
        <p className="leading-[1.5]">Daily Outfit</p>
      </div>
      <div className="flex flex-col font-['Hiragino_Sans:W4',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-right text-white w-[80px]">
        <p className="leading-[normal]">スキップ</p>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[56px] items-center justify-center left-0 px-[20px] py-[12px] top-[52px] w-[375px]" data-name="Navbar">
      <Component1 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[1.562px] h-[18.509px] items-center relative w-[128.727px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <p className="font-['Rco:Regular',sans-serif] leading-[1.5] not-italic relative text-[#00ffbf] text-[12.47px] tracking-[0.2494px] whitespace-nowrap"></p>
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <p className="font-['Hiragino_Sans:W4',sans-serif] leading-[normal] not-italic relative text-[#00ffbf] text-[12.47px] whitespace-nowrap">正解</p>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[7.6px] items-center relative shrink-0 w-[168.221px]">
      <div className="flex h-[18.691px] items-center justify-center relative shrink-0 w-[44.201px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-[0.24deg] skew-x-[0.48deg]">
          <p className="font-['Hiragino_Sans:W7',sans-serif] h-[18.509px] leading-[normal] not-italic relative text-[12.47px] text-white w-[44.121px]">{`Step1 `}</p>
        </div>
      </div>
      <div className="flex h-[19.039px] items-center justify-center relative shrink-0 w-[128.806px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "42" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.24deg] skew-x-[0.48deg]">
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[77.939px] shrink-0 w-[23.382px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <p className="font-['Rco:Regular',sans-serif] leading-[1.3] not-italic relative text-[14.029px] text-white tracking-[0.2806px] whitespace-nowrap"></p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#339bc9] content-stretch flex h-[31.176px] items-center justify-between px-[7.794px] py-[6.235px] relative w-[260.316px]">
      <Frame6 />
      <Frame />
    </div>
  );
}

function StepCard() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[7.794px] h-[65.079px] items-center justify-center overflow-clip pb-[7.794px] px-[7.794px] relative rounded-[7.794px] shadow-[0px_7.794px_15.588px_0px_rgba(0,0,0,0.25)] w-[260.316px]" data-name="Step Card">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Frame2 />
        </div>
      </div>
      <p className="font-['Hiragino_Sans:W4',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[12.47px] text-[rgba(13,14,18,0.6)] w-[min-content]">両辺から適切な因数を取り出す</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#826007] content-stretch flex items-center justify-center px-[3.897px] relative rounded-[3.118px] shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <p className="font-['Hiragino_Sans:W4',sans-serif] leading-[normal] not-italic relative text-[12.47px] text-white whitespace-nowrap">ここでミス！</p>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[7.794px] items-center relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <p className="font-['Hiragino_Sans:W7',sans-serif] leading-[normal] not-italic relative text-[#826007] text-[12.47px] whitespace-nowrap">{`Step2 `}</p>
        </div>
      </div>
      <Frame4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[77.939px] shrink-0 w-[23.382px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <p className="font-['Rco:Regular',sans-serif] leading-[1.3] not-italic relative text-[#826007] text-[14.029px] tracking-[0.2806px] whitespace-nowrap"></p>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[rgba(255,210,96,0.5)] content-stretch flex h-[31.176px] items-center justify-between px-[7.794px] py-[6.235px] relative w-[260.316px]">
      <Frame5 />
      <Frame1 />
    </div>
  );
}

function Component4X220X() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[7.794px] w-full" data-name="4x^2 + 20x + 17">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="-scale-y-100 flex-none w-full">
          <div className="font-['Hiragino_Sans:W4',sans-serif] leading-[normal] not-italic relative text-[12.47px] text-[rgba(13,14,18,0.6)] w-full whitespace-pre-wrap">
            <p className="mb-[9.35267448425293px]">
              解の公式は当たっているけれど
              <br aria-hidden="true" />
              代入するときに正負を間違えてしまったみたい
            </p>
            <p className="mb-[9.35267448425293px]">正しくは、</p>
            <p className="mb-[9.35267448425293px]">&nbsp;</p>
            <p>となるので、答えは</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Latex() {
  return <div className="bg-white h-[54.213px] overflow-clip shrink-0 w-[238.728px]" data-name="Latex 公式表达框" />;
}

function Component2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[7.794px] items-center justify-center left-[43px] overflow-clip pb-[7.794px] px-[7.794px] rounded-[7.794px] shadow-[0px_7.794px_15.588px_0px_rgba(0,0,0,0.25)] top-[101.85px] w-[260.316px]" data-name="Component 18">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Frame3 />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="-scale-y-100 flex-none w-full">
          <Component4X220X />
        </div>
      </div>
      <Latex />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[83.23px] top-[292px]">
      <div className="absolute h-[39.876px] left-[83.23px] top-[292.38px] w-[91.905px]" data-name="スクリーンショット 2025-10-17 20.56.01">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[215.24%] left-0 max-w-none top-0 w-full" src={img20251017205601} />
        </div>
      </div>
      <div className="absolute h-[44.053px] left-[175.1px] top-[292px] w-[91.905px]" data-name="スクリーンショット 2025-10-17 20.56.01">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[194.83%] left-0 max-w-none top-[-94.83%] w-full" src={img20251017205601} />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="h-[50.92px] relative w-[63.795px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63.7953 50.9203">
        <g id="Group 1437253406">
          <g id="Group 3275">
            <path d={svgPaths.pa565900} fill="var(--stroke-0, black)" id="Vector 7" />
            <path d={svgPaths.p1b82270} fill="var(--stroke-0, black)" id="Vector 9" />
            <path d={svgPaths.p3a0a9000} fill="var(--stroke-0, black)" id="Vector 8" />
          </g>
          <path d={svgPaths.pac52d80} id="Vector 2" stroke="var(--stroke-0, #55A4C8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.8" />
          <path d={svgPaths.p5a54980} id="Vector 3" stroke="var(--stroke-0, #55A4C8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.8" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[247px] top-[250px]">
      <div className="absolute left-[247px] size-[128px] top-[250px]" data-name="pose15 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPose151} />
      </div>
      <div className="absolute flex h-[55.907px] items-center justify-center left-[271.32px] top-[271.76px] w-[67.7px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-4.63deg]">
          <Group />
        </div>
      </div>
      <div className="absolute h-[9.754px] left-[295.44px] mix-blend-multiply top-[271.26px] w-[9.376px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.37616 9.75415">
          <g id="Ellipse 18" style={{ mixBlendMode: "multiply" }}>
            <ellipse cx="4.68808" cy="4.87708" fill="var(--fill-0, #FFEEA2)" rx="4.68808" ry="4.87708" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IntroText() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start leading-[normal] left-[20px] not-italic text-[#f2fbff] text-center top-[548px] w-[335px]" data-name="Intro Text">
      <p className="font-['Hiragino_Sans:W7',sans-serif] relative shrink-0 text-[24px] w-full">しっかり分かる解説！</p>
      <div className="font-['Hiragino_Sans:W4',sans-serif] relative shrink-0 text-[18px] w-full">
        <p className="mb-0">ステップごとに、</p>
        <p>考え方を丁寧に説明するよ。</p>
      </div>
    </div>
  );
}

export default function Intro() {
  return (
    <div className="bg-[#2389b9] relative size-full" data-name="Intro2">
      <div className="absolute h-[52px] left-0 top-0 w-[375px]" data-name="Status Bar">
        <Time />
        <Levels />
      </div>
      <Button />
      <Component />
      <Navbar />
      <div className="-translate-x-1/2 absolute h-[388px] left-[calc(50%+0.21px)] overflow-clip top-[108px] w-[375px]" data-name="Intro2">
        <div className="absolute flex h-[88.633px] items-center justify-center left-[65.25px] top-[25px] w-[265.18px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "102" } as React.CSSProperties}>
          <div className="flex-none rotate-[5.25deg]">
            <StepCard />
          </div>
        </div>
        <Component2 />
        <div className="absolute h-[44.947px] left-[106px] top-[217.95px] w-[130px]" data-name="スクリーンショット 2025-10-17 20.55.55">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img20251017205555} />
        </div>
        <Group2 />
        <Group1 />
      </div>
      <IntroText />
    </div>
  );
}