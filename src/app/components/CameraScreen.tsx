import { useState } from 'react';
import { useNavigate } from 'react-router';
import { IOS_SAFE_AREA_TOP } from './preview/device';

// Figma assets (valid 7 days)
const imgBackground = 'https://www.figma.com/api/mcp/asset/745b7a54-fe64-45f5-a38d-5698761fe9a3';
const imgSubtract = 'https://www.figma.com/api/mcp/asset/627a3b4c-8063-44a1-b370-f9ffe4218206';
const imgCornerTL = 'https://www.figma.com/api/mcp/asset/27168271-f9b7-4b7d-864f-51479d341d89';
const imgCornerTR = 'https://www.figma.com/api/mcp/asset/5c86957b-7a2e-4fb9-afb8-254604850743';
const imgFocus = 'https://www.figma.com/api/mcp/asset/49016abb-5395-4e89-810a-c5d1c969c3a6';
const imgShutterButton = 'https://www.figma.com/api/mcp/asset/996233e9-2bff-4d37-923f-21148dbfb19d';

const CAMERA_H = 559; // px — height of the dark camera area
const MODES = ['問題の解答', '採点する', '空欄問題の解答'] as const;
const MODE_SPACING = 120; // px between mode centers

export default function CameraScreen() {
  const navigate = useNavigate();
  const [mode, setMode] = useState(1); // default: 採点する

  return (
    <div className="relative h-full w-full overflow-hidden bg-white">

      {/* ── Camera area ──────────────────────────────────────────────────────── */}
      <div
        className="absolute inset-x-0 top-0 overflow-hidden"
        style={{ height: CAMERA_H }}
      >
        {/* Background photo */}
        <img
          src={imgBackground}
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* Dark vignette overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(13,14,18,0.3)' }}
        />

        {/* Subtract mask — creates the bright rounded-rect cutout */}
        <img
          src={imgSubtract}
          alt=""
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ objectFit: 'fill' }}
        />

        {/* Corner bracket assets — positioned at the scan frame edges */}
        {/* Frame: left=28, top=116, width=320, height=328 */}
        <div
          className="absolute pointer-events-none"
          style={{ left: 28, top: 116, width: 320, height: 328 }}
        >
          {/* Top-left */}
          <img
            src={imgCornerTL}
            alt=""
            className="absolute"
            style={{ left: -1.5, top: -1.5, width: 46, height: 46 }}
          />
          {/* Top-right (flipped horizontally) */}
          <img
            src={imgCornerTR}
            alt=""
            className="absolute"
            style={{ right: -1.5, top: -1.5, width: 46, height: 46, transform: 'scaleX(-1)' }}
          />
          {/* Bottom-left (mirrored vertically) */}
          <img
            src={imgCornerTL}
            alt=""
            className="absolute"
            style={{ left: -1.5, bottom: -1.5, width: 46, height: 46, transform: 'scaleY(-1)' }}
          />
          {/* Bottom-right (mirrored both) */}
          <img
            src={imgCornerTR}
            alt=""
            className="absolute"
            style={{ right: -1.5, bottom: -1.5, width: 46, height: 46, transform: 'scale(-1,-1)' }}
          />
        </div>

        {/* Focus crosshair — centered in the scan frame */}
        <img
          src={imgFocus}
          alt=""
          className="absolute pointer-events-none"
          style={{ left: 178, top: 260, width: 18, height: 20 }}
        />

        {/* ── Top bar ──────────────────────────────────────────────────────── */}
        <div
          className="absolute inset-x-0 flex items-center justify-between px-[10px]"
          style={{ top: IOS_SAFE_AREA_TOP + 8, height: 56 }}
        >
          {/* Back / close */}
          <button
            onClick={() => navigate(-1)}
            className="w-[40px] h-[40px] flex items-center justify-center rounded-full"
          >
            <span className="font-['Rco',sans-serif] text-[24px] text-white leading-none">
              {'\uE92A'}
            </span>
          </button>

          {/* Tip pill */}
          <div
            className="flex items-center justify-center px-[10px] py-[2px] rounded-[13.5px] text-center"
            style={{ background: 'rgba(13,14,18,0.3)' }}
          >
            <p className="font-['Hiragino_Sans',sans-serif] text-[10px] text-white leading-snug">
              問題がはっきり写るように<br />角度を調整してね。
            </p>
          </div>

          {/* Help button */}
          <button className="w-[40px] h-[40px] flex items-center justify-center rounded-full">
            <span className="font-['Rco',sans-serif] text-[24px] text-white leading-none">
              {'\uE925'}
            </span>
          </button>
        </div>

        {/* ── Mode tabs (carousel) ─────────────────────────────────────────── */}
        <div
          className="absolute inset-x-0 overflow-hidden"
          style={{ top: CAMERA_H - 47, height: 47 }}
        >
          {MODES.map((label, i) => {
            const offset = (i - mode) * MODE_SPACING;
            const isActive = i === mode;
            return (
              <button
                key={label}
                onClick={() => setMode(i)}
                className="absolute flex flex-col items-center gap-[3px] transition-all duration-200"
                style={{
                  left: `calc(50% + ${offset}px)`,
                  transform: 'translateX(-50%)',
                  top: 0,
                  opacity: isActive ? 1 : 0.7,
                }}
              >
                <span
                  className="font-['Hiragino_Sans',sans-serif] text-[16px] text-white leading-none whitespace-nowrap"
                  style={{ fontWeight: isActive ? 700 : 400 }}
                >
                  {label}
                </span>
                <div
                  className="rounded-full"
                  style={{
                    width: 35,
                    height: 4,
                    background: 'white',
                    opacity: isActive ? 1 : 0,
                    transition: 'opacity 200ms',
                  }}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Bottom controls (white area) ─────────────────────────────────────── */}

      {/* Album button */}
      <button
        className="absolute flex items-center justify-center rounded-full border"
        style={{
          left: 41,
          top: 649,
          width: 56,
          height: 56,
          borderColor: 'rgba(13,14,18,0.3)',
        }}
      >
        <span className="font-['Rco',sans-serif] text-[28px] text-[#0d0e12] leading-none">
          {'\uE932'}
        </span>
      </button>

      {/* Shutter button */}
      <button
        onClick={() => navigate('/camera-review')}
        className="absolute"
        style={{
          left: '50%',
          top: 628,
          transform: 'translateX(-50%)',
          width: 98,
          height: 98,
        }}
      >
        <img src={imgShutterButton} alt="Shutter" className="w-full h-full" />
      </button>

    </div>
  );
}
