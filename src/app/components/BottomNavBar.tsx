import { useNavigate, useLocation } from 'react-router';
import { IOS_SAFE_AREA_BOTTOM } from './preview/device';

export const BOTTOM_NAV_HEIGHT = 49 + IOS_SAFE_AREA_BOTTOM + 1; // 1px top border

export function BottomNavBar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isHome = pathname === '/home-v2';
  const isBook = pathname.startsWith('/question-book') || pathname.startsWith('/question-folder');
  const isSettings = pathname.startsWith('/settings');

  return (
    <div
      className="absolute inset-x-0 bottom-0 z-30 overflow-hidden border-t border-[rgba(13,14,18,0.12)] bg-[#f2fbff] backdrop-blur-[50px]"
      style={{ minHeight: BOTTOM_NAV_HEIGHT, paddingBottom: IOS_SAFE_AREA_BOTTOM }}
    >
      <div className="flex h-[49px] items-start">
        {/* ホーム */}
        <button
          onClick={() => navigate('/home-v2')}
          className="flex flex-1 flex-col items-center justify-center gap-[3px] py-[7px]"
        >
          <span
            className="flex h-[25px] w-[20px] items-center justify-center font-['Rco',sans-serif] text-[24px] leading-none tracking-[-0.26px]"
            style={{ color: isHome ? '#339bc9' : 'rgba(13,14,18,0.4)' }}
          >
            {'\uE953'}
          </span>
          <span
            className="text-[10px] font-medium leading-[10px] tracking-[0.12px]"
            style={{ color: isHome ? '#339bc9' : 'rgba(13,14,18,0.3)' }}
          >
            ホーム
          </span>
        </button>

        {/* 過去問ノート */}
        <button
          onClick={() => navigate('/question-book')}
          className="flex flex-1 flex-col items-center justify-center gap-[3px] py-[7px]"
        >
          <span
            className="flex h-[25px] w-[20px] items-center justify-center font-['Rco',sans-serif] text-[24px] leading-none tracking-[-0.26px]"
            style={{ color: isBook ? '#339bc9' : 'rgba(13,14,18,0.4)' }}
          >
            {'\uE98F'}
          </span>
          <span
            className="text-[10px] font-medium leading-[10px] tracking-[0.12px]"
            style={{ color: isBook ? '#339bc9' : 'rgba(13,14,18,0.3)' }}
          >
            過去問ノート
          </span>
        </button>

        {/* 設定 */}
        <button
          onClick={() => navigate('/settings')}
          className="flex flex-1 flex-col items-center justify-center gap-[3px] py-[7px]"
        >
          <span
            className="flex h-[25px] w-[20px] items-center justify-center font-['Rco',sans-serif] text-[24px] leading-none tracking-[-0.26px]"
            style={{ color: isSettings ? '#339bc9' : 'rgba(13,14,18,0.4)' }}
          >
            {'\uE90D'}
          </span>
          <span
            className="text-[10px] font-medium leading-[10px] tracking-[0.12px]"
            style={{ color: isSettings ? '#339bc9' : 'rgba(13,14,18,0.3)' }}
          >
            設定
          </span>
        </button>
      </div>
    </div>
  );
}
