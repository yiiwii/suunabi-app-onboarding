import svgPaths from "./svg-dtvvtlfrsl";
import imgPose131 from "figma:asset/b14bc5f9d3771e0db54ccbd1130ab0920d4d01ea.png";

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
    <div className="absolute content-stretch flex items-start left-[20px] rounded-[12px] top-[700px] w-[335px]" data-name="Button">
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

function IntroText() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start leading-[normal] left-[20px] not-italic text-[#f2fbff] text-center top-[548px] w-[335px]" data-name="Intro Text">
      <p className="font-['Hiragino_Sans:W7',sans-serif] relative shrink-0 text-[24px] w-full">苦手をクリア！</p>
      <div className="font-['Hiragino_Sans:W4',sans-serif] relative shrink-0 text-[18px] w-full">
        <p className="mb-0">やったね！</p>
        <p>ここまでの努力がちゃんと残るよ。</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Hiragino_Sans:W7',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#249176] text-[11.21px] whitespace-nowrap">一元二次方程式</p>
    </div>
  );
}

function StreamlinePartyPopperSolid() {
  return (
    <div className="relative shrink-0 size-[10.044px]" data-name="streamline:party-popper-solid">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0436 10.0436">
        <g id="streamline:party-popper-solid">
          <path clipRule="evenodd" d={svgPaths.pbf1d200} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[1.674px] items-center relative shrink-0">
      <StreamlinePartyPopperSolid />
      <p className="font-['Hiragino_Sans:W7',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-white whitespace-nowrap">クリア済み</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#249176] content-stretch flex h-[16.739px] items-center justify-center pl-[3.348px] relative rounded-[5px] shrink-0">
      <Frame14 />
      <div className="flex flex-col font-['Rco:Regular',sans-serif] h-full justify-center leading-[0] not-italic relative shrink-0 text-[11.72px] text-white tracking-[0.2344px] w-[11.718px]">
        <p className="leading-[1.3]"></p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame8 />
      <Frame6 />
    </div>
  );
}

function Component4X220X() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[8.37px] w-full" data-name="4x^2 + 20x + 18">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="-scale-y-100 flex-none w-full">
          <p className="font-['Hiragino_Sans:W4','Noto_Sans_SC:Regular',sans-serif] leading-[0] not-italic relative text-[13.39px] text-[rgba(13,14,18,0.8)] w-full">
            <span className="leading-[normal]">{`x²+2x+4=0 `}</span>
            <span className="font-['Hiragino_Sans:W4',sans-serif] leading-[normal]">の解を求めてみましょう</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8.37px] items-start relative shrink-0 w-full">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="-scale-y-100 flex-none w-full">
          <Component4X220X />
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[8.37px] items-start relative shrink-0 w-full">
      <Frame4 />
      <Frame />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[rgba(13,14,18,0.08)] content-stretch flex h-[15.065px] items-center justify-center pl-[3.348px] relative rounded-[4.185px] shrink-0 text-[rgba(13,14,18,0.3)]">
      <p className="font-['Hiragino_Sans:W7',sans-serif] leading-[normal] relative shrink-0 text-[10px] whitespace-nowrap">不正解</p>
      <div className="flex flex-col font-['Rco:Regular',sans-serif] h-full justify-center leading-[0] relative shrink-0 text-[11.72px] tracking-[0.2344px] w-[11.718px]">
        <p className="leading-[1.3]"></p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex h-[16.739px] items-center justify-between not-italic relative shrink-0 w-full">
      <p className="font-['Hiragino_Sans:W4',sans-serif] leading-[1.5] relative shrink-0 text-[10.04px] text-[transparent] whitespace-nowrap">解三元一次方程</p>
      <Frame7 />
    </div>
  );
}

function Component4X220X1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[8.37px] w-full" data-name="4x^2 + 20x + 18">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="-scale-y-100 flex-none w-full">
          <p className="font-['Hiragino_Sans:W4','Noto_Sans_SC:Regular',sans-serif] leading-[normal] not-italic relative text-[13.39px] text-[rgba(13,14,18,0.8)] w-full">2x²-3x-5=0 の解を求めてみましょう</p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8.37px] items-start relative shrink-0 w-full">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="-scale-y-100 flex-none w-full">
          <Component4X220X1 />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[rgba(13,14,18,0.08)] content-stretch flex h-[15.065px] items-center justify-center pl-[3.348px] relative rounded-[4.185px] shrink-0 text-[rgba(13,14,18,0.3)]">
      <p className="font-['Hiragino_Sans:W7',sans-serif] leading-[normal] relative shrink-0 text-[10px] whitespace-nowrap">不正解</p>
      <div className="flex flex-col font-['Rco:Regular',sans-serif] h-full justify-center leading-[0] relative shrink-0 text-[11.72px] tracking-[0.2344px] w-[11.718px]">
        <p className="leading-[1.3]"></p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex h-[16.739px] items-center justify-between not-italic relative shrink-0 w-full">
      <p className="font-['Hiragino_Sans:W4',sans-serif] leading-[1.5] relative shrink-0 text-[10.04px] text-[transparent] whitespace-nowrap">解三元一次方程</p>
      <Frame10 />
    </div>
  );
}

function Component4X220X2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[8.37px] w-full" data-name="4x^2 + 20x + 18">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="-scale-y-100 flex-none w-full">
          <p className="font-['Hiragino_Sans:W4','Noto_Sans_SC:Regular',sans-serif] leading-[normal] not-italic relative text-[13.39px] text-[rgba(13,14,18,0.8)] w-full">3x²-2x-8=0 の解を求めてみましょう</p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8.37px] items-start relative shrink-0 w-full">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="-scale-y-100 flex-none w-full">
          <Component4X220X2 />
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[rgba(162,255,232,0.2)] content-stretch flex h-[15.065px] items-center justify-center pl-[3.348px] relative rounded-[4.185px] shrink-0">
      <p className="font-['Hiragino_Sans:W7',sans-serif] leading-[normal] relative shrink-0 text-[#249176] text-[10px] whitespace-nowrap">正解</p>
      <div className="flex flex-col font-['Rco:Regular',sans-serif] h-full justify-center leading-[0] relative shrink-0 text-[11.72px] text-[rgba(13,14,18,0.3)] tracking-[0.2344px] w-[11.718px]">
        <p className="leading-[1.3]"></p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex h-[16.739px] items-center justify-between not-italic relative shrink-0 w-full">
      <p className="font-['Hiragino_Sans:W4',sans-serif] leading-[1.5] relative shrink-0 text-[10.04px] text-[transparent] text-justify whitespace-nowrap">解三元一次方程</p>
      <Frame13 />
    </div>
  );
}

function Component4X220X3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[8.37px] w-full" data-name="4x^2 + 20x + 18">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="-scale-y-100 flex-none w-full">
          <p className="font-['Hiragino_Sans:W4','Noto_Sans_SC:Regular',sans-serif] leading-[normal] not-italic relative text-[13.39px] text-[rgba(13,14,18,0.8)] text-justify w-full">x²+2x+4 の解を求めてみましょう</p>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8.37px] items-start relative shrink-0 w-full">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="-scale-y-100 flex-none w-full">
          <Component4X220X3 />
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[32.51px] top-[115.04px]">
      <div className="absolute h-[168.231px] left-[6.31px] top-0 w-0">
        <div className="absolute inset-[0_-0.42px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.836969 168.231">
            <path d="M0.418484 0V168.231" id="Vector 122" stroke="var(--stroke-0, #64B9E2)" strokeDasharray="1.67 1.67" strokeOpacity="0.6" strokeWidth="0.836969" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[9.525px] left-0 top-[162.69px] w-[13.457px]">
        <div className="absolute inset-[8.79%_25.48%_10.26%_25.48%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.5993 7.7107">
            <path d={svgPaths.p31a18a00} fill="var(--fill-0, #E0F1F9)" id="Vector 121" />
          </svg>
        </div>
        <div className="absolute inset-[0_19.26%_1.47%_19.26%]" data-name="Vector 121 (Stroke)">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.2731 9.38486">
            <path d={svgPaths.p10c4e900} fill="var(--fill-0, #1A1A1A)" id="Vector 121 (Stroke)" />
          </svg>
        </div>
        <div className="absolute inset-[32.8%_3.11%_4.39%_3.11%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.62 5.98248">
            <path d={svgPaths.p2ad74200} fill="var(--fill-0, #E0F1F9)" id="Vector 120" />
          </svg>
        </div>
        <div className="absolute inset-[28.4%_0_0_0]" data-name="Vector 120 (Stroke)">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4569 6.81938">
            <path d={svgPaths.p51c1c00} fill="var(--fill-0, #1A1A1A)" id="Vector 120 (Stroke)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[31.46px] top-[54.78px]">
      <div className="absolute bg-[#ecfffa] content-stretch flex flex-col gap-[8.37px] h-[62.773px] items-start left-[31.46px] p-[8.37px] rounded-[8px] top-[54.78px] w-[279.826px]" data-name="单元卡片">
        <div aria-hidden="true" className="absolute border-[0.837px] border-[rgba(36,145,118,0.8)] border-solid inset-[-0.837px] pointer-events-none rounded-[8.837px] shadow-[0px_1.674px_3.348px_0px_rgba(0,0,0,0.05)]" />
        <Frame11 />
      </div>
      <div className="absolute bg-white content-stretch flex flex-col gap-[8.37px] h-[61.936px] items-start left-[47.64px] p-[8.37px] rounded-[8px] top-[125.53px] w-[263.645px]" data-name="单元卡片">
        <div aria-hidden="true" className="absolute border-[0.837px] border-[rgba(13,14,18,0.08)] border-solid inset-[-0.837px] pointer-events-none rounded-[8.837px] shadow-[0px_1.674px_3.348px_0px_rgba(0,0,0,0.05)]" />
        <Frame5 />
        <Frame1 />
      </div>
      <div className="absolute bg-white content-stretch flex flex-col gap-[8.37px] h-[61.936px] items-start left-[47.64px] p-[8.37px] rounded-[8px] top-[195.82px] w-[263.645px]" data-name="单元卡片">
        <div aria-hidden="true" className="absolute border-[0.837px] border-[rgba(13,14,18,0.08)] border-solid inset-[-0.837px] pointer-events-none rounded-[8.837px] shadow-[0px_1.674px_3.348px_0px_rgba(0,0,0,0.05)]" />
        <Frame9 />
        <Frame2 />
      </div>
      <div className="absolute bg-white content-stretch flex flex-col gap-[8.37px] h-[61.936px] items-start left-[47.64px] p-[8.37px] rounded-[8px] top-[266.11px] w-[263.645px]" data-name="单元卡片">
        <div aria-hidden="true" className="absolute border-[0.837px] border-[rgba(13,14,18,0.08)] border-solid inset-[-0.837px] pointer-events-none rounded-[8.837px] shadow-[0px_1.674px_3.348px_0px_rgba(0,0,0,0.05)]" />
        <Frame12 />
        <Frame3 />
      </div>
      <Group1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[24.62%_15.62%_25.47%_21.93%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51.5552 40.7656">
        <g id="Group 1437253406">
          <g id="Group 3275">
            <path d={svgPaths.p1168000} fill="var(--stroke-0, black)" id="Vector 7" />
            <path d={svgPaths.p34bd5880} fill="var(--stroke-0, black)" id="Vector 9" />
            <path d={svgPaths.ped8f800} fill="var(--stroke-0, black)" id="Vector 8" />
          </g>
          <path d={svgPaths.p226918c0} id="Vector 2" stroke="var(--stroke-0, #55A4C8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.98" />
          <path d={svgPaths.p26773000} id="Vector 3" stroke="var(--stroke-0, #55A4C8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.98" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[-15.44%_-15.28%_-1.08%_0]">
      <div className="absolute aspect-[1024/1024] left-0 right-[-15.28%] top-[-12.61px]" data-name="pose13 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPose131} />
      </div>
      <Group />
      <div className="absolute inset-[21.65%_41.33%_70.26%_50.99%] mix-blend-multiply">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.34309 6.60791">
          <g id="Ellipse 20" style={{ mixBlendMode: "multiply" }}>
            <ellipse cx="3.17155" cy="3.30396" fill="var(--fill-0, #FFEEA2)" rx="3.17155" ry="3.30396" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[-15.44%_-15.28%_-1.08%_0]">
      <Group3 />
      <div className="absolute flex inset-[-7.4%_28.08%_78.77%_29.45%] items-center justify-center">
        <div className="flex-none h-[16.384px] rotate-[-13.48deg] skew-x-[0.28deg] w-[32.048px]">
          <p className="font-['Chalkduster:Regular',sans-serif] leading-[normal] not-italic relative size-full text-[12.774px] text-white tracking-[1.6606px]">YES</p>
        </div>
      </div>
      <div className="absolute flex inset-[-5.42%_20.37%_87.32%_72.05%] items-center justify-center">
        <div className="flex-none h-[14.331px] rotate-[-8.51deg] skew-x-[0.18deg] w-[4.137px]">
          <p className="font-['Chalkduster:Regular',sans-serif] leading-[normal] not-italic relative size-full text-[11.308px] text-white tracking-[1.47px]">!</p>
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute h-[81.677px] left-[239.06px] top-[-14.48px] w-[82.555px]">
      <Group4 />
    </div>
  );
}

function QuestionThread() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[10.243px] h-[93px] items-end justify-center left-1/2 top-[26.8px] w-[342.448px]" data-name="问题状态 Question Thread">
      <Group5 />
      <Group2 />
    </div>
  );
}

export default function Intro() {
  return (
    <div className="bg-[#2389b9] relative size-full" data-name="Intro4">
      <div className="absolute h-[52px] left-0 top-0 w-[375px]" data-name="Status Bar">
        <Time />
        <Levels />
      </div>
      <Button />
      <Component />
      <Navbar />
      <IntroText />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[388px] left-1/2 overflow-clip top-[calc(50%-104px)] w-[375px]" data-name="Intro4">
        <QuestionThread />
        <div className="absolute flex h-[131.056px] items-center justify-center left-[225.95px] top-[265.86px] w-[136.318px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-[-18.87deg]">
            <div className="h-[101.067px] relative w-[109.517px]">
              <div className="absolute inset-[-3.31%_-3.22%_-4.77%_-3.83%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 117.232 109.23">
                  <path d={svgPaths.p19688a00} fill="var(--stroke-0, black)" id="Vector 248" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}