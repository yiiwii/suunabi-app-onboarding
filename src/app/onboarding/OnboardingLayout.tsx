import { Outlet } from 'react-router';
import { DebugPanel } from '../components/debug/DebugPanel';
import {
  IOS_DEVICE_HEIGHT,
  IOS_DEVICE_WIDTH,
  IOS_DYNAMIC_ISLAND_HEIGHT,
  IOS_DYNAMIC_ISLAND_TOP,
  IOS_DYNAMIC_ISLAND_WIDTH,
  IOS_FRAME_RADIUS,
  IOS_SCREEN_RADIUS,
} from '../components/preview/device';
import { DeviceSystemChrome } from '../components/preview/DeviceSystemChrome';
import { designTokenVars } from '../design/tokens';

interface OnboardingLayoutProps {
  showDebug?: boolean;
  deviceWidth?: number;
}

/**
 * OnboardingLayout - Layout wrapper for onboarding routes
 * 
 * This component is rendered within the RouterProvider context,
 * allowing it to use React Router hooks for the debug panel.
 * It renders the current route via <Outlet /> alongside the debug panel.
 */
export function OnboardingLayout({ showDebug = true, deviceWidth = IOS_DEVICE_WIDTH }: OnboardingLayoutProps) {
  if (!showDebug) {
    return (
      <div className="min-h-screen bg-white" style={designTokenVars}>
        <Outlet />
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-auto bg-[linear-gradient(180deg,#eef4f8_0%,#f7f9fb_100%)] px-5 py-6 sm:px-6 sm:py-8">
      <div className="mx-auto max-w-[1260px]">
        <div className="grid items-start gap-8 xl:grid-cols-[minmax(420px,1fr)_380px]">
          <div className="flex min-h-[calc(100vh-48px)] items-center justify-center rounded-[32px] border border-white/70 bg-[rgba(255,255,255,0.45)] p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm">
            <div className="relative">
              <div 
                className="relative bg-black p-3 shadow-2xl"
                style={{ width: deviceWidth + 24, borderRadius: IOS_FRAME_RADIUS }}
              >
                <div 
                  className="bg-white overflow-hidden relative"
                  style={{ width: deviceWidth, height: IOS_DEVICE_HEIGHT, borderRadius: IOS_SCREEN_RADIUS }}
                >
                  <div
                    className="absolute left-1/2 z-50 -translate-x-1/2 rounded-full bg-black"
                    style={{
                      top: IOS_DYNAMIC_ISLAND_TOP,
                      width: IOS_DYNAMIC_ISLAND_WIDTH,
                      height: IOS_DYNAMIC_ISLAND_HEIGHT,
                    }}
                  />
                  <DeviceSystemChrome />
                  <div className="h-full w-full overflow-hidden" style={designTokenVars}>
                    <Outlet />
                  </div>
                </div>
              </div>

              <div className="absolute -right-1 top-32 h-12 w-1 rounded-l bg-black" />
              <div className="absolute -right-1 top-48 h-20 w-1 rounded-l bg-black" />
              <div className="absolute -left-1 top-40 h-14 w-1 rounded-r bg-black" />
            </div>
          </div>

          <aside className="xl:sticky xl:top-6">
            <div className="max-h-[calc(100vh-48px)] overflow-hidden rounded-[28px] border border-white/80 bg-white/92 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.12)] backdrop-blur">
              <div className="mb-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">Panel</p>
                <h1 className="mt-2 text-[22px] font-bold text-slate-900">Debug Panel</h1>
              </div>
              <div className="max-h-[calc(100vh-180px)] overflow-y-auto pr-1">
                <DebugPanel />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
