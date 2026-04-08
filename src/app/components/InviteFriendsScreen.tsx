import { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { IOS_SAFE_AREA_BOTTOM, IOS_SAFE_AREA_TOP } from './preview/device';

import imgBgCherry  from '../../assets/invite-bg-cherry.png';
import imgPromotion from '../../assets/invite-promotion.png';

const INVITE_CODE = 'A2EK2G';

const RULES = [
  'まだすうナビを使っていない友だちとは、新規登録から5日以内で、かつ招待関係が未成立のユーザーを指します。',
  '招待される側は、招待特典を受け取れるのは1回限りですが、その後は招待する側として特典を獲得できます。',
  '招待する側は、招待人数に上限はなく、招待するたびに特典を獲得できます。',
];

const NOTES = [
  '新規登録から5日以内が対象です。',
  '特典の受け取りは1人1回限りです。',
  '招待人数に制限はありません。',
];

const HISTORY = [
  { date: '2026.03.15 18:24', reward: '3日間トライアル' },
  { date: '2026.03.15 18:24', reward: '3日間トライアル' },
];

// ── Small reusable card wrapper ───────────────────────────────────────────────
function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-[12px] ${className}`}
      style={{ boxShadow: '0px 4px 10px 0px rgba(0,0,0,0.05)' }}
    >
      {children}
    </div>
  );
}

// ── Main screen ───────────────────────────────────────────────────────────────
export default function InviteFriendsScreen() {
  const navigate = useNavigate();
  const [inputCode, setInputCode]   = useState('');
  const [applied,   setApplied]     = useState(false);
  const [copied,    setCopied]      = useState(false);
  const copyTimerRef = useRef<number | null>(null);

  function handleCopy() {
    navigator.clipboard.writeText(INVITE_CODE).catch(() => {});
    setCopied(true);
    if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
    copyTimerRef.current = window.setTimeout(() => setCopied(false), 1600);
  }

  function handleApply() {
    if (!inputCode.trim() || applied) return;
    setApplied(true);
  }

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#cce5f2]">

      {/* Cherry blossom hero background */}
      <div className="absolute top-0 inset-x-0 h-[230px] pointer-events-none overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #90d3f3 0%, #cce5f2 100%)' }} />
        <img
          src={imgBgCherry}
          alt=""
          className="absolute pointer-events-none"
          style={{ width: '91.63%', height: '148.71%', left: '8.73%', top: '-7.05%' }}
        />
      </div>

      {/* Scrollable content */}
      <div
        className="absolute inset-0 overflow-y-auto"
        style={{ paddingTop: IOS_SAFE_AREA_TOP + 56 + 47, paddingBottom: IOS_SAFE_AREA_BOTTOM + 40 }}
      >
        {/* Heading */}
        <div className="px-[16px] mb-[15px]">
          <h1
            className="font-['Hiragino_Sans',sans-serif] font-bold text-[24px] text-[#0d0e12] leading-normal"
            style={{ textShadow: '2px 2px 0px white' }}
          >
            友達を招待して<br />無料トライアルをゲット！
          </h1>
          <div className="mt-[10px]">
            <span
              className="inline-flex items-center px-[10px] py-[4px] rounded-[12px] bg-[#ffe2f0]"
              style={{ boxShadow: '0px 1px 4px 0px rgba(0,0,0,0.13)' }}
            >
              <span
                className="font-['Hiragino_Sans',sans-serif] font-bold text-[10px] text-[#e0627a]"
                style={{ textShadow: '1px 1px 0px white' }}
              >
                2026年 春限定
              </span>
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-[12px] px-[16px]">

          {/* ── Trial days ────────────────────────────────────────────────── */}
          <Card className="relative bg-white px-[16px] pt-[12px] pb-[12px] overflow-hidden">
            <p className="font-['Hiragino_Sans',sans-serif] font-bold text-[14px] text-[#0d0e12]">無料トライアル残り日数</p>
            <div className="flex items-end gap-[4px] mt-[8px]" style={{ height: 32 }}>
              <span className="font-['Inter',sans-serif] font-bold text-[32px] leading-none text-[#339bc9] tracking-[0.4px]">0</span>
              <span className="font-['Hiragino_Sans',sans-serif] font-bold text-[14px] text-[#339bc9] pb-[2px]">天</span>
            </div>
            <p className="font-['Hiragino_Sans',sans-serif] text-[10px] text-[rgba(13,14,18,0.2)] mt-[4px]">友達1人につき＋3日</p>
            <img
              src={imgPromotion}
              alt=""
              className="absolute pointer-events-none"
              style={{ right: -4, bottom: -4, width: 183, height: 130, objectFit: 'cover' }}
            />
          </Card>

          {/* ── How-to steps ──────────────────────────────────────────────── */}
          <Card className="bg-white px-[16px] pt-[12px] pb-[16px]">
            <div className="flex flex-col gap-[20px]">
              {[
                {
                  n: '1',
                  title: '招待コードを送る',
                  body: 'まだすうナビを使っていない友だちに、あなたの専用コードを送りましょう。',
                },
                {
                  n: '2',
                  title: '特典ゲット！',
                  body: null,
                  bodyRich: (
                    <p className="font-['Hiragino_Sans',sans-serif] text-[14px] text-[rgba(13,14,18,0.8)] leading-normal mt-[4px]">
                      <span className="font-bold">あなたがプラン未登録の場合：</span>友だちとあなたの両方に3日間無料体験をプレゼント（※招待ごとに加算）。
                      <br />
                      <span className="font-bold">あなたがプラン契約中の場合：</span>友だちのみ3日間無料体験をプレゼント。
                    </p>
                  ),
                },
              ].map(step => (
                <div key={step.n} className="flex gap-[8px]">
                  <div className="flex items-center justify-center rounded-full bg-[#0371a4] shrink-0 w-[24px] h-[24px]">
                    <span className="font-['Hiragino_Sans',sans-serif] font-bold text-[16px] text-[#f2fbff]">{step.n}</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-['Hiragino_Sans',sans-serif] font-bold text-[16px] text-[#339bc9]">{step.title}</p>
                    {step.body && (
                      <p className="font-['Hiragino_Sans',sans-serif] text-[14px] text-[rgba(13,14,18,0.8)] leading-normal mt-[4px]">{step.body}</p>
                    )}
                    {step.bodyRich}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* ── My invite code (blue) ─────────────────────────────────────── */}
          <Card className="bg-[#339bc9] px-[16px] pt-[12px] pb-[12px]">
            <p className="font-['Hiragino_Sans',sans-serif] font-bold text-[14px] text-white text-center">招待コード</p>
            <div className="relative flex items-center justify-center gap-[10px] bg-[#f2fbff] rounded-[12px] h-[48px] mt-[12px] px-[20px]">
              <span className="font-['Hiragino_Sans',sans-serif] font-semibold text-[24px] text-[#339bc9] tracking-[4.8px]">
                {INVITE_CODE}
              </span>
              <button
                onClick={handleCopy}
                className="absolute right-[4px] top-[4px] flex items-center justify-center w-[40px] h-[40px]"
              >
                <span className="font-['Rco',sans-serif] text-[20px] text-[#339bc9] leading-none tracking-[8px]">{'\uE906'}</span>
              </button>
            </div>
            {copied && (
              <p className="font-['Hiragino_Sans',sans-serif] text-[12px] text-white/80 text-center mt-[8px]">
                コピーしました！
              </p>
            )}
          </Card>

          {/* ── Input invite code ─────────────────────────────────────────── */}
          <Card className="bg-white px-[16px] pt-[12px] pb-[12px]">
            <p className="font-['Hiragino_Sans',sans-serif] font-bold text-[14px] text-[#0d0e12]">招待コードをお持ちですか？</p>
            <div className="flex gap-[12px] mt-[12px]" style={{ height: 48 }}>
              <div className="flex-1 bg-[#f2fbff] rounded-[12px] flex items-center px-[20px] overflow-hidden min-w-0">
                <input
                  value={inputCode}
                  onChange={e => setInputCode(e.target.value)}
                  disabled={applied}
                  placeholder="コードを入力してください"
                  className="w-full bg-transparent font-['Hiragino_Sans',sans-serif] text-[16px] text-[#0d0e12] outline-none placeholder:text-[rgba(13,14,18,0.3)] disabled:text-[rgba(13,14,18,0.4)]"
                />
              </div>
              <button
                onClick={handleApply}
                disabled={applied || !inputCode.trim()}
                className="flex items-center justify-center px-[20px] rounded-[12px] border-b-4 shrink-0"
                style={{
                  height: 44,
                  background: applied ? 'rgba(51,155,201,0.5)' : '#339bc9',
                  borderColor: '#0371a4',
                }}
              >
                <span className="font-['Hiragino_Sans',sans-serif] font-bold text-[16px] text-white">
                  {applied ? '適用済み' : '適用'}
                </span>
              </button>
            </div>
          </Card>

          {/* ── Reward rules ──────────────────────────────────────────────── */}
          <Card className="bg-white px-[16px] pt-[12px] pb-[20px]">
            <p className="font-['Hiragino_Sans',sans-serif] font-bold text-[14px] text-[#0d0e12]">特典の受取ルール：</p>
            <div className="flex flex-col gap-[12px] mt-[12px]">
              {RULES.map((text, i) => (
                <div key={i} className="flex gap-[8px] items-start">
                  <span className="font-['Rco',sans-serif] text-[20px] text-[#339bc9] leading-none shrink-0">{'\uE92B'}</span>
                  <p className="font-['Hiragino_Sans',sans-serif] text-[14px] text-[rgba(13,14,18,0.8)] leading-normal">{text}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* ── Notes ─────────────────────────────────────────────────────── */}
          <Card className="bg-white px-[16px] pt-[12px] pb-[20px]">
            <p className="font-['Hiragino_Sans',sans-serif] font-bold text-[14px] text-[#0d0e12]">注意事项：</p>
            <div className="flex flex-col gap-[12px] mt-[12px]">
              {NOTES.map((text, i) => (
                <div key={i} className="flex gap-[8px] items-start">
                  <span className="font-['Rco',sans-serif] text-[20px] text-[#339bc9] leading-none shrink-0">{'\uE922'}</span>
                  <p className="font-['Hiragino_Sans',sans-serif] text-[14px] text-[rgba(13,14,18,0.8)] leading-normal">{text}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* ── Redemption history ────────────────────────────────────────── */}
          <Card className="bg-white px-[16px] pt-[12px] pb-[12px]">
            <p className="font-['Hiragino_Sans',sans-serif] font-bold text-[14px] text-[#0d0e12]">招待コード利用履歴</p>
            <div className="flex flex-col mt-[12px]">
              {HISTORY.map((entry, i) => (
                <div key={i} className="flex items-center justify-between py-[4px]">
                  <span className="font-['Hiragino_Sans',sans-serif] text-[14px] text-[#a2cce1]">{entry.date}</span>
                  <span className="font-['Hiragino_Sans',sans-serif] font-semibold text-[12px] text-[#0371a4]">{entry.reward}</span>
                </div>
              ))}
            </div>
          </Card>

        </div>
      </div>

      {/* Fixed navbar */}
      <div
        className="absolute inset-x-0 flex items-center px-[10px]"
        style={{ top: IOS_SAFE_AREA_TOP, height: 56 }}
      >
        <button onClick={() => navigate(-1)} className="w-[40px] h-[40px] flex items-center justify-center">
          <span className="font-['Rco',sans-serif] text-[24px] text-[rgba(13,14,18,0.8)] leading-none tracking-[0.72px]">
            {'\uE92A'}
          </span>
        </button>
      </div>

    </div>
  );
}
