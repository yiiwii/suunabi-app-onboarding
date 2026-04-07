import { useState } from 'react';
import { useNavigate } from 'react-router';
import { IOS_SAFE_AREA_TOP, IOS_SAFE_AREA_BOTTOM } from './preview/device';

// Figma assets
const imgSubtract   = 'https://www.figma.com/api/mcp/asset/926d1d48-9752-439a-b4c2-6c3311d1a844';
const imgCornerTL   = 'https://www.figma.com/api/mcp/asset/7c855d4d-5ced-4e60-a0bb-6fdddfd1fad3';
const imgCornerTR   = 'https://www.figma.com/api/mcp/asset/58e06c16-3072-4278-b1bb-19dcccc3a2ef';

const CAMERA_H = 559; // dark photo area height

interface Region {
  id: number;
  // absolute px within camera area
  left: number;
  top: number;
  width: number;
  height: number;
}

// Preset positions (from Figma)
const SINGLE_REGIONS: Region[]   = [{ id: 1, left: 28,    top: 116.5, width: 320,     height: 119    }];
const MULTI_PRESETS:  Region[]   = [
  { id: 1, left: 28,    top: 116.5, width: 320,     height: 119    },
  { id: 2, left: 20.76, top: 253.5, width: 249.383, height: 91.683 },
];

let nextId = 3;

// Generates a new region stacked below the last one
function nextRegion(regions: Region[]): Region {
  const last = regions[regions.length - 1];
  const top  = last.top + last.height + 14;
  return { id: nextId++, left: 28, top, width: 260, height: 90 };
}

// ── Corner bracket overlay ────────────────────────────────────────────────────
function CornerBrackets({ width, height }: { width: number; height: number }) {
  const size = 46;
  const off  = -1.5;
  return (
    <>
      {/* TL */}
      <img src={imgCornerTL} alt="" className="absolute pointer-events-none"
        style={{ left: off, top: off, width: size, height: size }} />
      {/* TR */}
      <img src={imgCornerTR} alt="" className="absolute pointer-events-none"
        style={{ right: off, top: off, width: size, height: size, transform: 'scaleX(-1)' }} />
      {/* BL */}
      <img src={imgCornerTL} alt="" className="absolute pointer-events-none"
        style={{ left: off, bottom: off, width: size, height: size, transform: 'scaleY(-1)' }} />
      {/* BR */}
      <img src={imgCornerTR} alt="" className="absolute pointer-events-none"
        style={{ right: off, bottom: off, width: size, height: size, transform: 'scale(-1,-1)' }} />
      {/* suppress unused-var warnings */}
      <span style={{ display: 'none' }}>{width}{height}</span>
    </>
  );
}

// ── Single question region card ───────────────────────────────────────────────
function QuestionRegion({
  region,
  index,
  showRemove,
  onRemove,
}: {
  region: Region;
  index: number;
  showRemove: boolean;
  onRemove: () => void;
}) {
  return (
    <div
      className="absolute"
      style={{
        left:   region.left,
        top:    region.top,
        width:  region.width,
        height: region.height,
      }}
    >
      {/* Grey fill */}
      <div
        className="absolute inset-0 rounded-[20px]"
        style={{ background: 'rgba(217,217,217,0.45)' }}
      />
      {/* White border */}
      <div
        className="absolute inset-0 rounded-[20px]"
        style={{ border: '1.5px solid rgba(255,255,255,0.8)' }}
      />
      {/* Corner brackets */}
      <CornerBrackets width={region.width} height={region.height} />

      {/* Q# label */}
      <div
        className="absolute flex items-center justify-center rounded-full px-[10px]"
        style={{
          background: '#339bc9',
          height: 20,
          left: 8,
          top: 8,
        }}
      >
        <span className="font-['Rco',sans-serif] text-[12px] text-white leading-none">
          Q{index + 1}
        </span>
      </div>

      {/* × remove button */}
      {showRemove && (
        <button
          onClick={onRemove}
          className="absolute flex items-center justify-center rounded-full"
          style={{
            background: 'rgba(13,14,18,0.4)',
            width: 20,
            height: 20,
            right: 8,
            top: 8,
          }}
        >
          <span className="font-['Rco',sans-serif] text-[11px] text-white leading-none">{'\uE92A'}</span>
        </button>
      )}
    </div>
  );
}

// ── Segmented control ─────────────────────────────────────────────────────────
function SegmentedControl({
  value,
  onChange,
}: {
  value: 'single' | 'multi';
  onChange: (v: 'single' | 'multi') => void;
}) {
  const options: { key: 'single' | 'multi'; label: string }[] = [
    { key: 'single', label: 'Single Question'    },
    { key: 'multi',  label: 'Multiple Questions' },
  ];
  return (
    <div
      className="flex items-center w-full h-[32px] rounded-full p-[2px] gap-[4px]"
      style={{ background: 'rgba(102,183,213,0.2)' }}
    >
      {options.map(opt => {
        const active = value === opt.key;
        return (
          <button
            key={opt.key}
            onClick={() => onChange(opt.key)}
            className="flex flex-1 items-center justify-center h-full rounded-[20px] transition-all duration-150 px-[6px]"
            style={{ background: active ? '#339bc9' : 'transparent' }}
          >
            <span
              className="text-[13px] leading-none whitespace-nowrap overflow-hidden text-ellipsis font-['Hiragino_Sans',sans-serif]"
              style={{
                color:      active ? 'white' : '#0371a4',
                fontWeight: active ? 600 : 500,
              }}
            >
              {opt.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

// ── Main screen ───────────────────────────────────────────────────────────────
export default function CameraReviewScreen() {
  const navigate = useNavigate();
  const [mode,    setMode]    = useState<'single' | 'multi'>('multi');
  const [regions, setRegions] = useState<Region[]>(MULTI_PRESETS);

  function handleModeChange(m: 'single' | 'multi') {
    setMode(m);
    nextId = m === 'single' ? 2 : MULTI_PRESETS.length + 1;
    setRegions(m === 'single' ? SINGLE_REGIONS : MULTI_PRESETS);
  }

  function handleAddRegion() {
    setRegions(prev => [...prev, nextRegion(prev)]);
  }

  function handleRemove(id: number) {
    setRegions(prev => prev.filter(r => r.id !== id));
  }

  const BOTTOM_H = 56 + 8 + 56 + IOS_SAFE_AREA_BOTTOM + 16; // segmented + gap + confirm + home

  return (
    <div className="relative h-full w-full overflow-hidden bg-white">

      {/* ── Dark camera area ───────────────────────────────────────────────── */}
      <div
        className="absolute inset-x-0 top-0 overflow-hidden"
        style={{ height: CAMERA_H }}
      >
        {/* Solid dark bg (simulates camera) */}
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(13,14,18,0.85)' }}
        />

        {/* Subtract mask for visual atmosphere */}
        <img
          src={imgSubtract}
          alt=""
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ objectFit: 'fill', opacity: 0.6 }}
        />

        {/* Question regions */}
        {regions.map((r, i) => (
          <QuestionRegion
            key={r.id}
            region={r}
            index={i}
            showRemove={regions.length > 1}
            onRemove={() => handleRemove(r.id)}
          />
        ))}

        {/* Hint text */}
        <div
          className="absolute inset-x-0 flex items-center justify-center px-[30px]"
          style={{ top: 510 }}
        >
          <p
            className="font-['Hiragino_Sans',sans-serif] text-[16px] text-white text-center leading-normal"
            style={{ opacity: 0.7 }}
          >
            枠の大きさを調整してください。
          </p>
        </div>
      </div>

      {/* ── Top bar (overlaid on camera area) ──────────────────────────────── */}
      <div
        className="absolute inset-x-0 z-10 flex items-center px-[10px]"
        style={{ top: IOS_SAFE_AREA_TOP + 4, height: 56 }}
      >
        <button
          onClick={() => navigate(-1)}
          className="w-[40px] h-[40px] flex items-center justify-center rounded-full"
        >
          <span className="font-['Rco',sans-serif] text-[24px] text-white leading-none tracking-[0.48px]">
            {'\uE902'}
          </span>
        </button>
      </div>

      {/* ── Bottom white panel ─────────────────────────────────────────────── */}
      <div
        className="absolute inset-x-0 bottom-0 bg-white flex flex-col items-center"
        style={{ top: CAMERA_H }}
      >
        <div
          className="flex flex-col gap-[8px] items-center w-full px-[20px]"
          style={{ paddingTop: 20 }}
        >
          {/* Segmented control */}
          <SegmentedControl value={mode} onChange={handleModeChange} />

          {/* Add another question (multi mode only) */}
          {mode === 'multi' && (
            <button
              onClick={handleAddRegion}
              className="flex items-center justify-center gap-[4px] bg-white rounded-[12px] w-[335px] h-[56px]"
              style={{ border: '1px solid rgba(51,155,201,0.2)' }}
            >
              <span
                className="font-['Rco',sans-serif] text-[18px] leading-none tracking-[0.36px]"
                style={{ color: '#0371a4' }}
              >
                {'\uE957'}
              </span>
              <span
                className="font-['Hiragino_Sans',sans-serif] text-[16px] leading-none"
                style={{ color: '#0371a4' }}
              >
                もう1問追加
              </span>
            </button>
          )}
        </div>

        {/* Confirm button — pinned to bottom */}
        <div
          className="absolute inset-x-0 flex flex-col items-center gap-[8px]"
          style={{ bottom: IOS_SAFE_AREA_BOTTOM }}
        >
          <button
            onClick={() => navigate('/question-report')}
            className="flex items-center justify-center rounded-[12px] font-['Hiragino_Sans',sans-serif] font-bold text-[16px] text-white border-b-4"
            style={{
              width: 335,
              height: 56,
              background: '#339bc9',
              borderColor: '#0371a4',
            }}
          >
            確認
          </button>
          {/* Home bar */}
          <div
            className="rounded-full"
            style={{ width: 134, height: 5, background: '#0d0e12', opacity: 0.2 }}
          />
        </div>
      </div>

    </div>
  );
}
