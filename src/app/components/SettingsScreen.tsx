import { useNavigate } from 'react-router';
import { IOS_SAFE_AREA_TOP } from './preview/device';
import { BottomNavBar, BOTTOM_NAV_HEIGHT } from './BottomNavBar';
import crownIcon from '../../assets/settings-crown.png';

const HEADER_HEIGHT = IOS_SAFE_AREA_TOP + 80;

function ListRow({
  label,
  value,
  onClick,
}: {
  label: string;
  value?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex h-[64px] w-full items-center justify-between px-[20px] text-left"
    >
      <span className="font-['Hiragino_Sans',sans-serif] font-bold text-[16px] leading-normal text-[#0d0e12]">
        {label}
      </span>
      <div className="flex items-center gap-[4px]">
        {value && (
          <span className="font-['Hiragino_Sans',sans-serif] text-[16px] leading-normal text-[#969ca0]">
            {value}
          </span>
        )}
        <span className="font-['Rco',sans-serif] text-[16px] leading-none text-[rgba(13,14,18,0.4)]">
          {'\uE901'}
        </span>
      </div>
    </button>
  );
}

function ListGroup({
  items,
}: {
  items: Array<{ label: string; value?: string; onClick?: () => void }>;
}) {
  return (
    <div className="w-full overflow-hidden rounded-[12px] border border-[rgba(13,14,18,0.08)] bg-[#f2fbff]">
      {items.map((item, i) => (
        <div key={item.label}>
          {i > 0 && <div className="mx-[20px] h-px bg-[rgba(13,14,18,0.08)]" />}
          <ListRow {...item} />
        </div>
      ))}
    </div>
  );
}

export function SettingsScreenShell({ subscribed = true }: { subscribed?: boolean }) {
  const navigate = useNavigate();

  return (
    <div className="relative h-full w-full bg-white">
      {/* Blue header */}
      <div
        className="absolute inset-x-0 top-0 z-10 bg-[#2389b9]"
        style={{ paddingTop: IOS_SAFE_AREA_TOP }}
      >
        <div className="flex h-[80px] items-end pb-[16px] px-[20px]">
          <span className="font-['Hiragino_Sans',sans-serif] font-bold text-[24px] leading-normal text-white">
            設定
          </span>
        </div>
      </div>

      {/* Scrollable content */}
      <div
        className="h-full overflow-y-auto px-[20px]"
        style={{ paddingTop: HEADER_HEIGHT + 20, paddingBottom: BOTTOM_NAV_HEIGHT + 16 }}
      >
        <div className="flex flex-col gap-[20px]">
          {/* Subscription banner */}
          <div className="flex h-[80px] items-center justify-between rounded-[12px] bg-[#339bc9] px-[12px]">
            <div className="flex items-center gap-[10px]">
              <img src={crownIcon} alt="" className="h-[16px] w-[18px] object-contain" />
              <div className="flex flex-col gap-[5px]">
                <span className="font-['Hiragino_Sans',sans-serif] text-[18px] font-semibold leading-none text-white">
                  利用中
                </span>
                <span className="font-['Hiragino_Sans',sans-serif] text-[10px] leading-none text-white">
                  すべての機能が使えます
                </span>
              </div>
            </div>
            <button className="flex h-[30px] items-center rounded-[8px] border border-[#0371a4] border-b-4 bg-white px-[10px]">
              <span className="font-['Hiragino_Sans',sans-serif] text-[10px] text-[#0371a4]">
                プランを確認
              </span>
            </button>
          </div>

          {/* お友達紹介キャンペーン */}
          <ListGroup
            items={[
              { label: 'お友達紹介キャンペーン', onClick: () => navigate('/invite-friends') },
            ]}
          />

          {/* My Grade */}
          <ListGroup items={[{ label: 'My Grade', value: '小学1年生' }]} />

          {/* App info */}
          <ListGroup items={[{ label: 'アプリについて' }, { label: 'フィードバック' }]} />
        </div>
      </div>

      <BottomNavBar />
    </div>
  );
}

export default function SettingsScreen() {
  return <SettingsScreenShell subscribed />;
}
