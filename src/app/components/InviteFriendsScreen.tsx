import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import { Copy, Info, Link2, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router';
import { IOS_SAFE_AREA_BOTTOM, IOS_SAFE_AREA_TOP } from './preview/device';

const sampleCode = 'SUU-8246';
const sampleWhitelistEnd = '2026.04.03 23:59';
const sampleRewardDays = 6;
const sampleLastRedeemedAt = '2026.03.15 18:24';
const inviteCodePattern = /^[A-Z0-9-]{4,16}$/;

function sanitizeInviteCode(value: string) {
  return value
    .toUpperCase()
    .replace(/\s+/g, '')
    .replace(/[^A-Z0-9-]/g, '')
    .slice(0, 16);
}

function SectionCard({
  title,
  description,
  children,
  className = '',
  titleClassName = '',
  descriptionClassName = '',
}: {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}) {
  return (
    <section className={`rounded-[16px] border border-[var(--token-color-border-primary-2)] bg-white p-4 shadow-[var(--token-shadow-card)] ${className}`}>
      <h2 className={`text-[18px] font-semibold text-[var(--token-color-black-100)] ${titleClassName}`}>{title}</h2>
      {description ? (
        <p className={`mt-1 text-[12px] leading-[1.55] text-[var(--token-color-black-60)] ${descriptionClassName}`}>{description}</p>
      ) : null}
      <div className="mt-4">{children}</div>
    </section>
  );
}

function PrimaryAction({
  children,
  disabled,
  onClick,
}: {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`h-14 w-full rounded-[12px] text-[16px] font-semibold transition ${
        disabled
          ? 'bg-[var(--token-color-black-12)] text-[var(--token-color-black-40)]'
          : 'bg-[var(--token-color-accent-primary)] text-white shadow-[var(--token-shadow-primary-inset)]'
      }`}
    >
      {children}
    </button>
  );
}

function StepItem({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-3">
      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--token-color-complimentary)] text-[13px] font-bold text-[var(--token-color-complimentary-shadow)]">
        {number}
      </div>
      <div>
        <div className="text-[18px] font-semibold text-[var(--token-color-black-100)]">{title}</div>
        <p className="mt-1 text-[13px] leading-[1.6] text-[var(--token-color-black-80)]">{description}</p>
      </div>
    </div>
  );
}

export default function InviteFriendsScreen() {
  const navigate = useNavigate();
  const [inviteCode, setInviteCode] = useState('');
  const [copyState, setCopyState] = useState<'idle' | 'success' | 'error'>('idle');
  const [bound, setBound] = useState(false);
  const [validationMessage, setValidationMessage] = useState('');
  const copyTimerRef = useRef<number | null>(null);

  const normalizedCode = sanitizeInviteCode(inviteCode);
  const isFormatValid = inviteCodePattern.test(normalizedCode);
  const canSubmit = !bound && isFormatValid;

  useEffect(() => {
    return () => {
      if (copyTimerRef.current) {
        window.clearTimeout(copyTimerRef.current);
      }
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(sampleCode);
      setCopyState('success');
    } catch {
      setCopyState('error');
    }

    if (copyTimerRef.current) {
      window.clearTimeout(copyTimerRef.current);
    }

    copyTimerRef.current = window.setTimeout(() => setCopyState('idle'), 1600);
  };

  const handleBind = () => {
    if (bound) return;

    if (!normalizedCode) {
      setValidationMessage('请输入邀请码。');
      return;
    }

    if (normalizedCode === sampleCode) {
      setValidationMessage('不能输入自己的邀请码。');
      return;
    }

    if (!isFormatValid) {
      setValidationMessage('邀请码格式不正确，请输入 4-16 位英文、数字或连字符。');
      return;
    }

    setInviteCode(normalizedCode);
    setValidationMessage('');
    setBound(true);
  };

  return (
    <div className="relative h-full w-full overflow-hidden bg-[linear-gradient(180deg,rgba(139,210,243,0.92)_0%,rgba(255,208,230,0)_34%),#ffffff]">
      <div
        className="relative z-10 h-full overflow-y-auto px-5"
        style={{ paddingTop: IOS_SAFE_AREA_TOP + 12, paddingBottom: IOS_SAFE_AREA_BOTTOM + 24 }}
      >
        <div className="flex h-14 items-center">
          <button
            onClick={() => navigate(-1)}
            className="flex h-8 w-8 items-center justify-center text-[rgba(13,14,18,0.8)]"
          >
            <span className="font-['Rco',sans-serif] text-[24px] leading-none tracking-[0.72px]" aria-hidden="true">
              
            </span>
          </button>
          <div className="flex-1 text-center text-[18px] font-semibold text-[rgba(13,14,18,0.8)]">邀请好友</div>
          <div className="w-8" />
        </div>

        <div className="mt-3 text-center">
          <h1 className="text-[24px] font-bold leading-[1.25] tracking-[0.07px] text-[var(--token-color-black-100)]">
            邀请好友
            <br />
            获取更多试用天数吧！
          </h1>
          <p className="mx-auto mt-3 max-w-[320px] text-[13px] leading-[1.6] text-[rgba(0,0,0,0.92)]">
            每一个有效新用户输入邀请码并验证成功后，您和被邀请人都可以获得 3 天免费试用！
          </p>
        </div>

        <div className="mt-8 space-y-[15px]">
          <SectionCard className="bg-[var(--token-color-background-primary)]" title="参与步骤">
            <div className="space-y-5">
              <StepItem
                number="1"
                title="发送邀请码"
                description="把你的邀请码复制并发送给还没有注册过 suunabi 的好友。"
              />
              <StepItem
                number="2"
                title="好友输入邀请码"
                description="对方完成注册并成功填写邀请码后，你和好友都能获得 3 天免费试用。"
              />
            </div>
          </SectionCard>

          <SectionCard className="bg-[var(--token-color-background-primary)]" title="奖励摘要">
            <div className="text-[11px] font-semibold text-[var(--token-color-accent-primary)]">当前已获得试用</div>
            <div className="mt-1 flex items-end justify-between gap-3">
              <div className="flex items-end gap-1">
                <span className="text-[32px] font-bold leading-none tracking-[0.4px] text-[var(--token-color-accent-primary-shadow)]">
                  {sampleRewardDays}
                </span>
                <span className="pb-[2px] text-[14px] font-semibold text-[var(--token-color-accent-primary)]">天</span>
              </div>
              <div className="rounded-full bg-white/40 px-3 py-1 text-[12px] font-semibold text-[var(--token-color-accent-primary-shadow)]">
                每邀请 1 人 +3天
              </div>
            </div>
          </SectionCard>

          <SectionCard
            className="border-[var(--token-color-accent-primary)] bg-[var(--token-color-accent-primary)] text-white"
            title="我的邀请码"
            titleClassName="text-[rgba(13,14,18,0.6)] text-center"
          >
            <div className="mx-auto mt-1 flex w-[233px] items-center justify-center gap-[10px] rounded-[8px] bg-white px-5 py-[7px]">
              <div className="truncate text-[28px] font-bold uppercase tracking-[2.62px] text-[var(--token-color-accent-primary-shadow)]">
                {sampleCode}
              </div>
              <button onClick={handleCopy} className="shrink-0 text-[var(--token-color-accent-primary-shadow)]" aria-describedby="copy-status" aria-label="复制邀请码">
                <Copy className="h-4 w-4" strokeWidth={2.1} />
              </button>
            </div>
            <div id="copy-status" className="mt-3 text-center text-[12px] leading-[1.5] text-white/78" aria-live="polite">
              {copyState === 'success' ? '邀请码已复制到剪贴板。' : copyState === 'error' ? '复制失败，请手动长按邀请码后再试。' : '复制后发给未注册好友，每成功 1 人再得 3 天'}
            </div>
          </SectionCard>

          <SectionCard
            className="bg-[var(--token-color-background-primary)]"
            title="收到的邀请码"
            titleClassName="text-[rgba(13,14,18,0.6)] text-center"
          >
            <div className="mx-auto mt-1 flex h-10 w-[233px] items-center gap-[10px] rounded-[8px] bg-white px-5">
              <Link2 className="h-4 w-4 shrink-0 text-[var(--token-color-black-40)]" strokeWidth={2.2} />
              <input
                value={inviteCode}
                onChange={(event) => {
                  setInviteCode(sanitizeInviteCode(event.target.value));
                  if (validationMessage) {
                    setValidationMessage('');
                  }
                }}
                disabled={bound}
                placeholder="例如：SUU-8246"
                maxLength={16}
                inputMode="text"
                autoCapitalize="characters"
                autoCorrect="off"
                spellCheck={false}
                aria-invalid={Boolean(validationMessage)}
                aria-describedby="invite-code-help invite-code-status"
                className="h-full w-full min-w-0 bg-transparent text-[18px] font-semibold uppercase tracking-[0.64px] text-[var(--token-color-black-100)] outline-none placeholder:text-[rgba(13,14,18,0.3)] disabled:cursor-not-allowed disabled:text-[var(--token-color-black-40)]"
              />
            </div>
            <div id="invite-code-help" className="mt-3 text-center text-[12px] leading-[1.5] text-[var(--token-color-black-40)]">
              仅支持 4-16 位英文、数字或连字符。
            </div>
            {validationMessage ? (
              <div id="invite-code-status" className="mt-2 rounded-[10px] bg-[rgba(255,210,96,0.22)] px-3 py-2 text-[12px] leading-[1.55] text-[var(--token-color-complimentary-shadow)]" role="alert">
                {validationMessage}
              </div>
            ) : null}
            {bound ? (
              <div className="mt-3 rounded-[12px] bg-[rgba(162,255,232,0.2)] px-3 py-3 text-[13px] leading-[1.6] text-[var(--token-color-success)]">
                <div className="flex items-center gap-2 font-semibold">
                  <Sparkles className="h-4 w-4" strokeWidth={2.1} />
                  完成兑换
                </div>
                <p className="mt-1 text-[12px] leading-[1.55] text-[var(--token-color-black-80)]">
                  你的朋友将获得 3 天免费试用。如果你也想获得试用，请把邀请码发送给还没有注册过 suunabi 的好朋友吧。
                </p>
              </div>
            ) : null}
            <div className="mt-3">
              <PrimaryAction disabled={!canSubmit || bound} onClick={handleBind}>
                {bound ? '已兑换' : '使用这个邀请码'}
              </PrimaryAction>
            </div>
          </SectionCard>

          <SectionCard className="bg-[var(--token-color-background-secondary)]" title="上一次邀请码被兑换">
            <div className="space-y-3">
              {[sampleLastRedeemedAt, sampleLastRedeemedAt].map((redeemedAt, index) => (
                <div key={`${redeemedAt}-${index}`} className="flex items-start justify-between gap-3">
                  <div className="min-w-0 truncate text-[14px] font-semibold text-[var(--token-color-black-100)]">{redeemedAt}</div>
                  <div className="shrink-0 rounded-full bg-[var(--token-color-success-20)] px-3 py-1 text-[12px] font-semibold text-[var(--token-color-success)]">
                    +3天试用
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="活动规则" description="详细条件放在这里，方便参加前确认。">
            <div className="space-y-3 text-[13px] leading-[1.65] text-[var(--token-color-black-80)]">
              <div className="flex gap-3">
                <div className="mt-[2px] rounded-full bg-[var(--token-color-accent-primary)] p-1 text-white">
                  <Info className="h-3 w-3" strokeWidth={2.3} />
                </div>
                <p>只有注册时间距离当前不超过 5 天，且尚未建立过邀请关系的新设备用户，才可以填写邀请码。</p>
              </div>
              <div className="flex gap-3">
                <div className="mt-[2px] rounded-full bg-[var(--token-color-accent-primary)] p-1 text-white">
                  <Info className="h-3 w-3" strokeWidth={2.3} />
                </div>
                <p>不能填写自己的邀请码。被邀请人只支持输入一次邀请码。</p>
              </div>
              <div className="flex gap-3">
                <div className="mt-[2px] rounded-full bg-[var(--token-color-accent-primary)] p-1 text-white">
                  <Info className="h-3 w-3" strokeWidth={2.3} />
                </div>
                <p>邀请人仅在“未订阅且未试用过”的情况下可以获得 3 天白名单。被邀请人只要满足条件，即可获得 3 天白名单。</p>
              </div>
            </div>
          </SectionCard>
        </div>
      </div>
    </div>
  );
}
