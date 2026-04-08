import { useContext } from 'react';
import {
  IOS_HOME_INDICATOR_BOTTOM,
  IOS_HOME_INDICATOR_HEIGHT,
  IOS_HOME_INDICATOR_WIDTH,
  IOS_STATUS_BAR_LEADING,
  IOS_STATUS_BAR_HEIGHT,
  IOS_STATUS_BAR_TRAILING,
} from './device';
import { StatusBarContext } from './StatusBarContext';

export function DeviceSystemChrome() {
  const { config } = useContext(StatusBarContext);
  const color = config.light ? 'white' : 'var(--token-color-black-100)';

  return (
    <>
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[110]" style={{ height: IOS_STATUS_BAR_HEIGHT, color }}>
        <p
          className="absolute font-[system-ui,-apple-system,BlinkMacSystemFont,'SF_Pro_Display','Segoe_UI',sans-serif] text-[15px] font-semibold leading-none tracking-[-0.2px] tabular-nums"
          style={{ left: IOS_STATUS_BAR_LEADING, top: 17, color }}
        >
          9:41
        </p>

        <div
          className="absolute flex items-center gap-[7px]"
          style={{ right: IOS_STATUS_BAR_TRAILING, top: 17, color }}
        >
          <svg aria-hidden="true" width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="7.5" width="3" height="3.5" rx="1.1" fill="currentColor" />
            <rect x="5.25" y="5.5" width="3" height="5.5" rx="1.1" fill="currentColor" />
            <rect x="9.5" y="3.25" width="3" height="7.75" rx="1.1" fill="currentColor" />
            <rect x="13.75" y="1" width="3" height="10" rx="1.1" fill="currentColor" />
          </svg>

          <svg aria-hidden="true" width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 3.5C4.4 0.9 10.6 0.9 14 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M3.1 5.9C5.5 4 9.5 4 11.9 5.9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M5.45 8.2C6.65 7.25 8.35 7.25 9.55 8.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <circle cx="7.5" cy="9.2" r="1.15" fill="currentColor" />
          </svg>

          <svg aria-hidden="true" width="27" height="13" viewBox="0 0 27 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="22" height="11" rx="3.2" stroke="currentColor" strokeWidth="1.25" />
            <rect x="3" y="3" width="16.5" height="7" rx="2" fill="currentColor" />
            <rect x="24.25" y="4.1" width="1.8" height="4.1" rx="0.9" fill="currentColor" opacity="0.45" />
          </svg>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 z-[120] flex justify-center"
        style={{ bottom: IOS_HOME_INDICATOR_BOTTOM }}
      >
        <div
          className="rounded-full"
          style={{
            width: IOS_HOME_INDICATOR_WIDTH,
            height: IOS_HOME_INDICATOR_HEIGHT,
            background: 'rgba(0,0,0,0.2)',
          }}
        />
      </div>
    </>
  );
}
