import svgPaths from "./svg-p1oscginbg";

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

function icon() {
  return (
    <button className="content-stretch cursor-pointer flex gap-[20px] items-start relative shrink-0" data-name="左侧icon">
      <div className="flex flex-col font-['Rco:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-[rgba(13,14,18,0.8)] text-center tracking-[0.72px] whitespace-nowrap" role="button" tabIndex="0">
        <p className="leading-[normal]"></p>
      </div>
    </button>
  );
}

function icon1() {
  return <div className="content-stretch flex gap-[20px] items-start shrink-0 size-[24px]" data-name="右侧icon" />;
}

function Component1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center py-[2px] relative shrink-0 w-full" data-name="1-常规">
      <icon />
      <div className="flex flex-[1_0_0] flex-col font-['Hiragino_Sans:W5',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic opacity-0 relative text-[18px] text-[rgba(13,14,18,0.8)] text-center tracking-[0.54px]">
        <p className="leading-[1.5]">User Agreement and Privacy...</p>
      </div>
      <icon1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[30px] relative shrink-0 w-[374px]">
      <p className="font-['Hiragino_Sans:W7',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0d0e12] text-[24px] w-full">どこで私たちを『発見』しましたか？</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-px items-start left-0 pb-[10px] top-[52px] w-[375px]">
      <div className="h-[56px] relative shrink-0 w-full" data-name="Navbar">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[20px] py-[12px] relative size-full">
            <Component1 />
          </div>
        </div>
      </div>
      <Frame />
    </div>
  );
}

function Ques() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[335px]" data-name="Ques">
      <p className="font-['Hiragino_Sans:W5',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#0d0e12] text-[18px] tracking-[0.54px] w-[337px]">{`F&Q`}</p>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-col font-['Hiragino_Sans:W4',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0e12] text-[18px] whitespace-nowrap">
        <p className="leading-[normal]">Question title</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <p className="font-['Rco:Regular',sans-serif] h-[26px] leading-[1.3] not-italic relative text-[#0d0e12] text-[20px] text-center tracking-[0.4px] w-[32px]"></p>
        </div>
      </div>
    </div>
  );
}

function Ques1() {
  return (
    <div className="bg-[rgba(13,14,18,0.03)] relative rounded-[20px] shrink-0 w-full" data-name="Ques">
      <div aria-hidden="true" className="absolute border-[rgba(13,14,18,0.8)] border-b-[0.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[8px] relative w-full">
        <Title />
        <div className="flex flex-col font-['Hiragino_Sans:W4',sans-serif] h-[101px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(13,14,18,0.6)] tracking-[0.28px] w-full">
          <p className="leading-[1.2]">Lorem ipsum dolor sit amet consectetur. Dui aliquam integer posuere eget. Nisi magna fermentum id ut quam. Scelerisque dui eget interdum sem hac maecenas faucibus cras. In urna vel sem in a semper ut lobortis adipiscing. Nascetur nisl egestas quis ipsum in eu nunc.</p>
        </div>
      </div>
    </div>
  );
}

function Ques2() {
  return (
    <div className="bg-[rgba(13,14,18,0.03)] h-[57px] relative rounded-[20px] shrink-0 w-full" data-name="Ques">
      <div aria-hidden="true" className="absolute border-[rgba(13,14,18,0.8)] border-b-[0.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between not-italic p-[8px] relative size-full text-[#0d0e12]">
          <div className="flex flex-col font-['Hiragino_Sans:W4',sans-serif] justify-center leading-[0] relative shrink-0 text-[18px] whitespace-nowrap">
            <p className="leading-[normal]">Question title</p>
          </div>
          <p className="font-['Rco:Regular',sans-serif] h-[26px] leading-[1.3] relative shrink-0 text-[20px] text-center tracking-[0.4px] w-[32px]"></p>
        </div>
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[20px] opacity-0 top-[1227px] w-[335px]" data-name="Info">
      <Ques />
      <Ques1 />
      <Ques2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[19px] top-[249px] w-[335px]">
      <div className="bg-[#f2fbff] h-[56px] relative rounded-[12px] shrink-0 w-full" data-name="Btn">
        <div aria-hidden="true" className="absolute border border-[#268bb9] border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[12px] relative size-full">
            <p className="font-['Hiragino_Sans:W4',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0d0e12] text-[16px] text-center whitespace-nowrap">Instagram</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f2fbff] h-[56px] relative rounded-[12px] shrink-0 w-full" data-name="Btn">
        <div aria-hidden="true" className="absolute border border-[#268bb9] border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[12px] relative size-full">
            <p className="font-['Hiragino_Sans:W4',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0d0e12] text-[16px] text-center whitespace-nowrap">Google 検索</p>
          </div>
        </div>
      </div>
      <div className="bg-[#aee3fa] h-[56px] relative rounded-[12px] shrink-0 w-full" data-name="Btn">
        <div aria-hidden="true" className="absolute border border-[#268bb9] border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[12px] relative size-full">
            <p className="font-['Hiragino_Sans:W7',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0d0e12] text-[16px] text-center whitespace-nowrap">YouTube</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f2fbff] h-[56px] relative rounded-[12px] shrink-0 w-full" data-name="Btn">
        <div aria-hidden="true" className="absolute border border-[#268bb9] border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[12px] relative size-full">
            <p className="font-['Hiragino_Sans:W4',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0d0e12] text-[16px] text-center whitespace-nowrap">友達・クラスメートの紹介</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f2fbff] h-[56px] relative rounded-[12px] shrink-0 w-full" data-name="Btn">
        <div aria-hidden="true" className="absolute border border-[#268bb9] border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[12px] relative size-full">
            <p className="font-['Hiragino_Sans:W4',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0d0e12] text-[16px] text-center whitespace-nowrap">保護者同士の紹介</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f2fbff] h-[56px] relative rounded-[12px] shrink-0 w-full" data-name="Btn">
        <div aria-hidden="true" className="absolute border border-[#268bb9] border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[12px] relative size-full">
            <p className="font-['Hiragino_Sans:W4',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0d0e12] text-[16px] text-center whitespace-nowrap">その他</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="哪里发现">
      <div className="absolute h-[52px] left-0 top-0 w-[375px]" data-name="Status Bar">
        <Time />
        <Levels />
      </div>
      <Frame2 />
      <Info />
      <Frame1 />
      <div className="absolute bg-white bottom-0 content-stretch flex flex-col gap-[8px] items-center left-[-1px] pt-[8px] w-[375px]" data-name="Bottom Navigation">
        <div className="bg-[#339bc9] content-stretch flex h-[56px] items-center justify-center px-[12px] relative rounded-[12px] shrink-0 w-[335px]" data-name="Btn">
          <div aria-hidden="true" className="absolute border-[#0371a4] border-b-4 border-solid inset-[0_0_-4px_0] pointer-events-none rounded-[12px]" />
          <p className="font-['Hiragino_Sans:W7',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">確認</p>
        </div>
        <div className="h-[34px] relative shrink-0 w-full" data-name="滑动控件">
          <div className="absolute h-[34px] left-0 top-0 w-[375px]" data-name="控件框" />
          <div className="-translate-x-1/2 absolute bottom-[9px] left-[calc(50%+0.5px)] top-[20px] w-[134px]" data-name="Bar">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 134 5">
              <path clipRule="evenodd" d={svgPaths.p1b107900} fill="var(--fill-0, #0D0E12)" fillRule="evenodd" id="Bar" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}