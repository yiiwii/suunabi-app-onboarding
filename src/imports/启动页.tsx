import { useEffect } from "react";
import { useNavigate } from "react-router";
import svgPaths from "./svg-kfggpzp95x";
import imgChatGptImage202510161608352 from "figma:asset/ddb2421b6a0ba9ba4e5e84a6ef7bdbe0d9501549.png";

function Group() {
  return (
    <div className="h-[44.755px] relative w-[76.021px]">
      <div className="absolute inset-[-6.08%_-1.6%_-2.61%_-1.85%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78.6445 48.6454">
          <g id="Group 3275">
            <path d={svgPaths.p3b4b5200} fill="var(--stroke-0, black)" id="Vector 7" />
            <rect fill="var(--fill-0, #55A4C8)" height="11.6187" id="Rectangle 3" rx="3.16873" transform="rotate(-21.5613 53.3215 15.973)" width="6.33746" x="53.3215" y="15.973" />
            <path d={svgPaths.p2c70b880} id="Vector 2" stroke="var(--stroke-0, #55A4C8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.10884" />
            <path d={svgPaths.p190e5000} fill="var(--stroke-0, black)" id="Vector 9" />
            <path d={svgPaths.p1afc4580} fill="var(--stroke-0, black)" id="Vector 8" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[29.94px] top-[23.56px]">
      <div className="absolute flex h-[69.561px] items-center justify-center left-[29.94px] top-[23.56px] w-[87.148px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[21.56deg]">
          <Group />
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[0.88px] top-[1.77px]">
      <div className="absolute flex items-center justify-center left-[0.88px] size-[145.279px] top-[1.77px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[145.279px]" data-name="ChatGPT Image 2025年10月16日 16_08_35 2">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgChatGptImage202510161608352} />
          </div>
        </div>
      </div>
      <Group1 />
      <div className="absolute left-[67.15px] mix-blend-multiply size-[11.754px] top-[17.15px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7541 11.7541">
          <g id="Ellipse 19" style={{ mixBlendMode: "multiply" }}>
            <circle cx="5.87703" cy="5.87703" fill="var(--fill-0, #FFEEA2)" r="5.87703" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[36.762px] items-center left-[60.67px] top-[calc(50%-22.58px)] w-[253.656px]">
      <div className="overflow-clip relative rounded-[44.114px] shrink-0 size-[147.047px]">
        <Group2 />
      </div>
    </div>
  );
}

export default function Component() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/welcome');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="bg-[#2389b9] relative size-full" data-name="启动页">
      <Frame />
    </div>
  );
}