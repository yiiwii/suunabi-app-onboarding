import svgPaths from "./svg-inl0bousmg";
import imgImage222 from "figma:asset/8b4e2fc1505b1592e791e405d046bb382a31a596.png";
import imgPose61 from "figma:asset/5d24cb127dbfc24bd41483f8e3f2c71595829598.png";

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
      <p className="font-['Hiragino_Sans:W7',sans-serif] relative shrink-0 text-[24px] w-full">学んだら、すぐ練習！</p>
      <div className="font-['Hiragino_Sans:W4',sans-serif] relative shrink-0 text-[18px] w-full">
        <p className="mb-0">解けるかどうか、</p>
        <p>一緒に確かめてみよう。</p>
      </div>
    </div>
  );
}

function BackBtn() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6.305px] relative rounded-[14.501px] shrink-0 size-[25.218px]" data-name="Back_btn">
      <p className="font-['Rco:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[15.131px] text-[rgba(13,14,18,0.8)] text-center tracking-[0.3026px] whitespace-nowrap"></p>
    </div>
  );
}

function BackBtn1() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6.305px] relative rounded-[14.501px] shrink-0 size-[25.218px]" data-name="Back_btn">
      <p className="font-['Rco:Regular',sans-serif] leading-[1.3] not-italic opacity-0 relative shrink-0 text-[15.131px] text-[rgba(13,14,18,0.8)] text-center tracking-[0.3026px] whitespace-nowrap"></p>
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute content-stretch flex h-[37.938px] items-center left-[0.18px] px-[12.609px] py-[8.826px] top-[6.9px] w-[261.258px]" data-name="Nav">
      <BackBtn />
      <div className="flex flex-[1_0_0] flex-col font-['Hiragino_Sans:W6',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[13.796px] text-[rgba(13,14,18,0.8)] text-center">
        <p className="leading-[normal]">三次方程式</p>
      </div>
      <BackBtn1 />
    </div>
  );
}

function IconoirSparkSolid() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[15.131px] top-[calc(50%+1.07px)]" data-name="iconoir:spark-solid">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.131 15.131">
        <g id="iconoir:spark-solid">
          <path d={svgPaths.p69aaa70} fill="var(--fill-0, #CCE5F2)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-full overflow-clip relative shrink-0 w-[15.131px]">
      <IconoirSparkSolid />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[2.522px] items-center relative shrink-0">
      <div className="flex flex-row items-center self-stretch">
        <Frame />
      </div>
      <p className="font-['Hiragino_Sans:W4','Noto_Sans_SC:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10.087px] text-[rgba(3,113,164,0.4)] text-center whitespace-nowrap">问问术老师</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-white col-1 h-[3.575px] ml-0 mt-0 rounded-[63.046px] row-1 w-[1.373px]" />
      <div className="bg-white col-1 h-[3.575px] ml-[7.41px] mt-0 rounded-[63.046px] row-1 w-[1.373px]" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[630.459px] shrink-0 size-[21.436px]">
      <p className="font-['Rco:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#339bc9] text-[15.131px] text-center tracking-[0.3026px] w-full"></p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white flex-[1_0_0] h-[30.262px] min-h-px min-w-px relative rounded-[630.459px]">
      <div aria-hidden="true" className="absolute border-[#339bc9] border-[0.63px] border-solid inset-0 pointer-events-none rounded-[630.459px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[12.609px] pr-[5.044px] py-[10.718px] relative size-full">
          <Frame5 />
          <Group1 />
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[211.204px]">
      <Frame1 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#f2fbff] bottom-[-176.67px] content-stretch flex h-[59.263px] items-start left-[calc(50%+0.39px)] px-[12.609px] py-[6.305px] w-[236.422px]">
      <Frame6 />
    </div>
  );
}

function Component4X220X() {
  return (
    <div className="bg-white relative rounded-[6.305px] shrink-0 w-full" data-name="4x^2 + 20x + 16">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[6.305px] items-center justify-center px-[6.305px] py-[8.826px] relative w-full">
          <p className="font-['Hiragino_Sans:W4',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#0d0e12] text-[12.934px] w-[min-content]">この方程式を解いてみよう：</p>
          <div className="h-[43.524px] relative shrink-0 w-[110.905px]" data-name="image 222">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage222} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Component4X220X />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[211.204px]">
      <Frame2 />
    </div>
  );
}

function Btn() {
  return (
    <div className="bg-[#339bc9] content-stretch flex gap-[2.522px] h-[35.306px] items-center justify-center px-[7.566px] relative rounded-[7.566px] shrink-0 w-[211.204px]" data-name="Btn">
      <div aria-hidden="true" className="absolute border-[#0371a4] border-b-[2.522px] border-solid inset-[0_0_-2.522px_0] pointer-events-none rounded-[7.566px]" />
      <p className="font-['Rco:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[10.087px] text-center text-white tracking-[0.3026px] whitespace-nowrap"></p>
      <p className="font-['Hiragino_Sans:W7',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12.071px] text-center text-white whitespace-nowrap">答えを撮る</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[18.914px] h-[243.151px] items-center left-[calc(50%+0.18px)] px-[12.609px] top-[44.84px] w-[261.258px]">
      <Frame3 />
      <p className="font-['Hiragino_Sans:W4',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[12.934px] text-[rgba(13,14,18,0.8)] w-[min-content]">解き終わったら、答えを撮って、すう先生に見せてね。</p>
      <Btn />
    </div>
  );
}

function Btn1() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[2.522px] h-[35.306px] items-center justify-center left-[25.42px] px-[7.566px] rounded-[7.566px] top-[256.95px] w-[211.204px]" data-name="Btn">
      <div aria-hidden="true" className="absolute border-[rgba(38,139,185,0.2)] border-b-[2.522px] border-solid inset-[0_0_-2.522px_0] pointer-events-none rounded-[7.566px]" />
      <p className="font-['Rco:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#339bc9] text-[10.087px] text-center tracking-[0.3026px] whitespace-nowrap"></p>
      <p className="font-['Hiragino_Sans:W7',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#339bc9] text-[12.071px] text-center whitespace-nowrap">別の問題にする</p>
    </div>
  );
}

function HomePage() {
  return (
    <div className="-translate-x-1/2 absolute h-[309.543px] left-[calc(50%+0.42px)] overflow-clip rounded-tl-[17.245px] rounded-tr-[17.245px] shadow-[0px_9.36px_18.719px_0px_rgba(0,0,0,0.25)] top-[13.79px] w-[261.258px]" data-name="Home Page" style={{ backgroundImage: "linear-gradient(180deg, rgba(35, 137, 185, 0) 0%, rgba(35, 137, 185, 0.1) 110.6%), linear-gradient(90deg, rgb(242, 251, 255) 0%, rgb(242, 251, 255) 100%)" }}>
      <Nav />
      <Frame8 />
      <Frame7 />
      <Btn1 />
    </div>
  );
}

function Group() {
  return (
    <div className="h-[25.75px] relative w-[43.739px]">
      <div className="absolute inset-[-6.69%_-1.78%_-2.88%_-2.04%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.4089 28.2142">
          <g id="Group 3275">
            <path d={svgPaths.p1b46ef00} fill="var(--stroke-0, black)" id="Vector 7" />
            <path d={svgPaths.p135a2200} fill="var(--stroke-0, black)" id="Vector 9" />
            <path d={svgPaths.p25037800} fill="var(--stroke-0, black)" id="Vector 8" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[268.17px] top-[289.12px]">
      <div className="absolute bg-[#55a4c8] h-[6.685px] left-[304.84px] rounded-[2.326px] top-[306.9px] w-[3.646px]" />
      <div className="absolute flex h-[40.022px] items-center justify-center left-[268.17px] top-[289.12px] w-[50.141px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[21.56deg]">
          <Group />
        </div>
      </div>
      <div className="absolute bg-[#55a4c8] h-[6.685px] left-[279.28px] rounded-[2.326px] top-[306.9px] w-[3.646px]" />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[251.5px] top-[268px]">
      <div className="absolute left-[251.5px] size-[100.02px] top-[268px]" data-name="pose 6 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPose61} />
      </div>
      <div className="absolute h-[8.084px] left-[299.13px] mix-blend-multiply top-[283.55px] w-[7.693px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.69254 8.08411">
          <g id="Ellipse 14" style={{ mixBlendMode: "multiply" }}>
            <ellipse cx="3.84627" cy="4.04205" fill="var(--fill-0, #FFEEA2)" rx="3.84627" ry="4.04205" />
          </g>
        </svg>
      </div>
      <Group2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%+16.91px)] top-[13.79px]">
      <HomePage />
      <Group3 />
    </div>
  );
}

export default function Intro() {
  return (
    <div className="bg-[#2389b9] relative size-full" data-name="Intro3">
      <div className="absolute h-[52px] left-0 top-0 w-[375px]" data-name="Status Bar">
        <Time />
        <Levels />
      </div>
      <Button />
      <Component />
      <Navbar />
      <IntroText />
      <div className="-translate-x-1/2 absolute h-[388px] left-1/2 overflow-clip top-[108px] w-[375px]" data-name="Intro4">
        <Group4 />
        <div className="absolute flex h-[30.995px] items-center justify-center left-[57.5px] top-[273.79px] w-[31.275px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-[-9.92deg]">
            <div className="h-[26.732px] relative w-[27.076px]">
              <div className="absolute inset-[-10.49%_-8.36%_-1.61%_-4.42%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.5373 29.968">
                  <path d={svgPaths.p26486180} fill="var(--stroke-0, black)" id="Vector 232" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[19.273px] items-center justify-center left-[334.02px] top-[77.23px] w-[19.485px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-[-175.53deg]">
            <div className="h-[17.914px] relative w-[18.144px]">
              <div className="absolute inset-[-16.78%_-13.05%_-2.8%_-8.93%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.1335 21.4203">
                  <path d={svgPaths.p1b530b80} fill="var(--stroke-0, black)" id="Vector 235" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[28.413px] items-center justify-center left-[83.95px] top-[268px] w-[35.296px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-[-9.92deg]">
            <div className="h-[23.292px] relative w-[31.76px]">
              <div className="absolute inset-[-16.81%_-1.27%_-5.22%_-4.71%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.6583 28.4225">
                  <path d={svgPaths.p8e94380} fill="var(--stroke-0, black)" id="Vector 233" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[17.219px] items-center justify-center left-[312.89px] top-[78.12px] w-[22.434px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-[-175.53deg]">
            <div className="h-[15.609px] relative w-[21.283px]">
              <div className="absolute inset-[-25.53%_-2.24%_-10.17%_-7.67%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.3926 21.1816">
                  <path d={svgPaths.pecda070} fill="var(--stroke-0, black)" id="Vector 236" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[95.799px] left-[82.68px] top-[271.97px] w-[188.229px]">
          <div className="absolute inset-[-1.27%_0_-3.69%_-1.35%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 190.679 100.549">
              <path d={svgPaths.p33e0c8f0} fill="var(--stroke-0, black)" id="Vector 234" />
            </svg>
          </div>
        </div>
        <div className="absolute flex h-[93.519px] items-center justify-center left-[212.5px] top-[3px] w-[138.13px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-[-165.62deg]">
            <div className="h-[64.197px] relative w-[126.137px]">
              <div className="absolute inset-[-1.89%_0_-5.56%_-2.17%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128.777 68.9812">
                  <path d={svgPaths.p816ab80} fill="var(--stroke-0, black)" id="Vector 237" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}