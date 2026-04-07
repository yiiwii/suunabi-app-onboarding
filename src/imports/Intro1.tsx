import { useNavigate } from "react-router";
import svgPaths from "./svg-3rn164xheq";
import imgChatGptImage202510151618281 from "figma:asset/a5a3f2e4ea4bf40cb30bd5b0969aaa8454d3c95f.png";
import imgChatGptImage202510151302221 from "figma:asset/6e84a1f04ffd44a100b00350bfd3d01ce90a939a.png";

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
  const navigate = useNavigate();
  
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start left-[20px] rounded-[12px] top-[700px] w-[335px]" data-name="Button">
      <button 
        onClick={() => navigate('/grade-empty')}
        className="bg-[#f2fbff] flex-[1_0_0] h-[56px] min-h-px min-w-px relative rounded-[12px] cursor-pointer" 
        data-name="Btn"
      >
        <div aria-hidden="true" className="absolute border-[#0371a4] border-b-4 border-solid inset-[0_0_-4px_0] pointer-events-none rounded-[12px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[12px] relative size-full">
            <p className="font-['Hiragino_Sans:W7',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0d0e12] text-[16px] text-center whitespace-nowrap">続ける</p>
          </div>
        </div>
      </button>
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
  const navigate = useNavigate();
  
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center py-[2px] relative shrink-0 w-full" data-name="1-常规">
      <icon />
      <div className="flex flex-[1_0_0] flex-col font-['Hiragino_Sans:W6',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic opacity-0 relative text-[18px] text-[rgba(255,255,255,0.8)] text-center">
        <p className="leading-[1.5]">Daily Outfit</p>
      </div>
      <button 
        onClick={() => navigate('/grade-empty')}
        className="flex flex-col font-['Hiragino_Sans:W4',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-right text-white w-[80px] cursor-pointer"
      >
        <p className="leading-[normal]">スキップ</p>
      </button>
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
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start leading-[normal] left-[20.21px] not-italic text-[#f2fbff] text-center top-[548px] w-[335px]" data-name="Intro Text">
      <p className="font-['Hiragino_Sans:W7',sans-serif] relative shrink-0 text-[24px] w-full">撮るだけで分析！</p>
      <div className="font-['Hiragino_Sans:W4',sans-serif] relative shrink-0 text-[18px] w-full">
        <p className="mb-0">撮るだけで、</p>
        <p>つまずきポイントが分かるよ。</p>
      </div>
    </div>
  );
}

function Container() {
  return <div className="absolute left-[11.17px] size-[25.698px] top-[16.76px]" data-name="Container" />;
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24.022px]">
        <div className="absolute inset-[-3.49%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.6977 25.6977">
            <path d={svgPaths.p100db700} id="Vector 97" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.67594" />
          </svg>
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[24.022px]">
            <div className="absolute inset-[-3.49%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.6977 25.6977">
                <path d={svgPaths.p100db700} id="Vector 98" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.67594" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="relative size-[24.022px]">
            <div className="absolute inset-[-3.49%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.6977 25.6977">
                <path d={svgPaths.p100db700} id="Vector 97" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.67594" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <div className="relative size-[24.022px]">
            <div className="absolute inset-[-3.49%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.6977 25.6977">
                <path d={svgPaths.p100db700} id="Vector 98" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.67594" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col h-[196.531px] items-start justify-between left-1/2 top-[76.56px] w-[178.249px]">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Focus() {
  return (
    <div className="absolute h-[10.81px] left-[99.44px] top-[145.33px] w-[10.056px]" data-name="Focus">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0556 10.8099">
        <g id="Focus">
          <line id="Line 1" stroke="var(--stroke-0, white)" strokeWidth="0.558646" x2="10.0556" y1="5.12387" y2="5.12387" />
          <line id="Line 2" stroke="var(--stroke-0, white)" strokeWidth="0.558646" x1="5.30717" x2="5.30717" y1="8.12564e-05" y2="10.8099" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute h-[312.283px] left-0 top-0 w-[209.492px]" data-name="Subtract">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 209.492 312.283">
          <path d={svgPaths.p3900ba00} fill="var(--fill-0, #0D0E12)" fillOpacity="0.2" id="Subtract" />
        </svg>
      </div>
      <Frame />
      <Focus />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[36.312px]">
      <p className="font-['Hiragino_Sans:W4',sans-serif] leading-[normal] not-italic opacity-70 relative shrink-0 text-[8.938px] text-center text-white w-[66.397px]">間違いの解説</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[1.676px] items-center relative shrink-0 w-[36.312px]">
      <p className="font-['Hiragino_Sans:W7',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[8.938px] text-center text-white w-[min-content]">採点する</p>
      <div className="bg-white h-[2.199px] shrink-0 w-[19.308px]" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[1.676px] items-center relative shrink-0 w-[36.312px]">
      <p className="font-['Hiragino_Sans:W4',sans-serif] leading-[normal] not-italic opacity-70 relative shrink-0 text-[8.938px] text-center text-white w-[66.397px]">空欄問題の解答</p>
      <div className="bg-white h-[2.199px] opacity-0 shrink-0 w-[19.308px]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[24px] items-start left-[0.03px] overflow-clip px-[26px] top-[286.03px]">
      <Frame6 />
      <Frame5 />
      <Frame7 />
    </div>
  );
}

function CloseBtn() {
  return (
    <div className="content-stretch flex items-center justify-center p-[5.586px] relative rounded-[12.849px] shrink-0 size-[22.346px]" data-name="Close_btn">
      <p className="font-['Rco:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[13.408px] text-center text-white tracking-[0.2682px] whitespace-nowrap"></p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[rgba(13,14,18,0.2)] content-stretch flex items-center justify-center px-[5.586px] py-[1.117px] relative rounded-[7.542px] shrink-0 w-[111.729px]">
      <p className="font-['Hiragino_Sans:W4',sans-serif] leading-[normal] not-italic relative shrink-0 text-[5.586px] text-center text-white whitespace-nowrap">
        質問に焦点を当てるために角
        <br aria-hidden="true" />
        を調整する
      </p>
    </div>
  );
}

function CloseBtn1() {
  return (
    <div className="content-stretch flex items-center justify-center p-[5.586px] relative rounded-[12.849px] shrink-0 size-[22.346px]" data-name="Close_btn">
      <p className="font-['Rco:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[13.408px] text-center text-white tracking-[0.2682px] whitespace-nowrap"></p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex h-[31.284px] items-center justify-between left-[0.03px] px-[5.586px] top-[29.05px] w-[209.492px]">
      <CloseBtn />
      <Frame4 />
      <CloseBtn1 />
    </div>
  );
}

function Image() {
  return (
    <div className="-translate-x-1/2 absolute h-[312.283px] left-[calc(50%-0.24px)] overflow-clip top-[-23.74px] w-[209.492px]" data-name="image">
      <div className="-translate-x-1/2 absolute bg-[rgba(13,14,18,0.2)] h-[312.283px] left-1/2 top-0 w-[225.134px]" data-name="image" />
      <Container />
      <Group1 />
      <Frame1 />
      <Frame8 />
    </div>
  );
}

function Album() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-[22.47px] rounded-[55.865px] size-[31.284px] top-[309.9px]" data-name="album">
      <div aria-hidden="true" className="absolute border-[0.559px] border-[rgba(13,14,18,0.2)] border-solid inset-0 pointer-events-none rounded-[55.865px]" />
      <p className="font-['Rco:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0d0e12] text-[15.642px] text-center whitespace-nowrap"></p>
    </div>
  );
}

function ShutterButton() {
  return (
    <div className="-translate-x-1/2 absolute left-[calc(50%-0.52px)] size-[54.747px] top-[295.41px]" data-name="shutter button">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54.7473 54.7473">
        <g id="shutter button">
          <circle cx="27.3737" cy="27.3736" fill="var(--fill-0, #339BC9)" id="Ellipse 1" r="22.9045" />
          <circle cx="27.3737" cy="27.3737" id="Ellipse 2" r="27.0943" stroke="var(--stroke-0, #339BC9)" strokeWidth="0.558646" />
        </g>
      </svg>
    </div>
  );
}

function Scan() {
  return (
    <div className="-translate-x-1/2 absolute bg-white h-[366.153px] left-[calc(50%-0.9px)] overflow-clip rounded-tl-[22.346px] rounded-tr-[22.346px] shadow-[0px_11.426px_22.852px_0px_rgba(0,0,0,0.25)] top-[21.85px] w-[209.1px]" data-name="Scan">
      <Image />
      <Album />
      <ShutterButton />
      <div className="absolute h-[292.39px] left-[-0.05px] top-[-3.85px] w-[209.399px]" data-name="ChatGPT Image 2025年10月15日 16_18_28 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[107.42%] left-0 max-w-none top-0 w-full" src={imgChatGptImage202510151618281} />
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%-14.14px)] top-0">
      <Scan />
      <div className="absolute flex h-[16.798px] items-center justify-center left-[80.22px] top-0 w-[17.228px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-54.3deg]">
          <div className="h-[13.13px] relative w-[11.25px]">
            <div className="absolute inset-[-4.9%_-11.35%_-14.25%_-31.15%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0309 15.6446">
                <path d={svgPaths.p31822ef0} fill="var(--stroke-0, black)" id="Vector 141" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[17.951px] items-center justify-center left-[58.3px] top-[6.98px] w-[20.726px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-89.23deg]">
          <div className="h-[20.492px] relative w-[17.678px]">
            <div className="absolute inset-[-2.84%_-5.72%_-8.11%_-19.43%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.1253 22.7352">
                <path d={svgPaths.p7c85820} fill="var(--stroke-0, black)" id="Vector 142" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[17.016px] items-center justify-center left-[55.57px] top-[31.05px] w-[17.285px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-[129.18deg]">
          <div className="h-[13.13px] relative w-[11.25px]">
            <div className="absolute inset-[-4.9%_-11.35%_-14.25%_-31.15%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0309 15.6446">
                <path d={svgPaths.p31822ef0} fill="var(--stroke-0, black)" id="Vector 143" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="h-[25.844px] relative w-[43.9px]">
      <div className="absolute inset-[-6.93%_-1.84%_-2.97%_-2.11%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.6363 28.4032">
          <g id="Group 3275">
            <path d={svgPaths.p2cf3c600} fill="var(--stroke-0, black)" id="Vector 7" />
            <path d={svgPaths.p228b9000} fill="var(--stroke-0, black)" id="Vector 9" />
            <path d={svgPaths.p1967500} fill="var(--stroke-0, black)" id="Vector 8" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents h-[50.864px] left-[276.12px] top-[225.82px] w-[58.351px]">
      <div className="absolute flex h-[7.381px] items-center justify-center left-[316.09px] top-[245.49px] w-[5.133px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[-13.58deg]">
          <div className="bg-[#55a4c8] h-[6.709px] rounded-[2.414px] w-[3.66px]" />
        </div>
      </div>
      <div className="absolute flex h-[31.688px] items-center justify-center left-[281.76px] top-[235.41px] w-[47.062px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[7.98deg]">
          <Group />
        </div>
      </div>
      <div className="absolute flex h-[7.381px] items-center justify-center left-[291.15px] top-[251.51px] w-[5.133px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[-13.58deg]">
          <div className="bg-[#55a4c8] h-[6.709px] rounded-[2.414px] w-[3.66px]" />
        </div>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[247.91px] top-[211.98px]">
      <div className="absolute left-[247.91px] size-[99.214px] top-[211.98px]" data-name="ChatGPT Image 2025年10月15日 13_02_22 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgChatGptImage202510151302221} />
      </div>
      <Group2 />
    </div>
  );
}

export default function Intro() {
  return (
    <div className="bg-[#2389b9] relative size-full" data-name="Intro1">
      <div className="absolute h-[52px] left-0 top-0 w-[375px]" data-name="Status Bar">
        <Time />
        <Levels />
      </div>
      <Button />
      <Component />
      <Navbar />
      <IntroText />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[388px] left-1/2 overflow-clip top-[calc(50%-104px)] w-[375px]" data-name="Intro1">
        <Group4 />
        <Group3 />
      </div>
    </div>
  );
}