import { useLocation, useNavigate, useOutlet } from 'react-router';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { DebugPanel } from '../components/debug/DebugPanel';
import { Switch } from '../components/ui/switch';
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
import { StatusBarProvider } from '../components/preview/StatusBarContext';
import { designTokenVars } from '../design/tokens';

interface OnboardingLayoutProps {
  showDebug?: boolean;
  deviceWidth?: number;
}

type LayerState = {
  key: string;
  element: ReactNode;
};

function PageTransitionOutlet() {
  const outlet = useOutlet();
  const location = useLocation();
  const [activeLayer, setActiveLayer] = useState<LayerState>({
    key: location.key,
    element: outlet,
  });
  const [previousLayer, setPreviousLayer] = useState<LayerState | null>(null);
  const activeLayerRef = useRef(activeLayer);

  useEffect(() => {
    activeLayerRef.current = activeLayer;
  }, [activeLayer]);

  useEffect(() => {
    const current = activeLayerRef.current;
    if (location.key === current.key) return;

    setPreviousLayer(current);
    setActiveLayer({ key: location.key, element: outlet });

    const timeout = window.setTimeout(() => {
      setPreviousLayer(null);
    }, 280);

    return () => window.clearTimeout(timeout);
  }, [location.key, outlet]);

  return (
    <div className="relative h-full w-full overflow-hidden">
      {previousLayer && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ ...designTokenVars, animation: 'page-dissolve-out 280ms ease-out both' }}
        >
          {previousLayer.element}
        </div>
      )}
      <div
        key={activeLayer.key}
        className="absolute inset-0"
        style={{ ...designTokenVars, animation: 'page-dissolve-in 280ms ease-out both' }}
      >
        {activeLayer.element}
      </div>
    </div>
  );
}

/**
 * OnboardingLayout - Layout wrapper for onboarding routes
 * 
 * This component is rendered within the RouterProvider context,
 * allowing it to use React Router hooks for the debug panel.
 * It renders the current route via <Outlet /> alongside the debug panel.
 */
export function OnboardingLayout({ showDebug = true, deviceWidth = IOS_DEVICE_WIDTH }: OnboardingLayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const isCameraReview = location.pathname === '/camera-review';
  const searchParams = new URLSearchParams(location.search);
  const showHitAreas = searchParams.has('hitareas');

  if (!showDebug) {
    return (
      <div className="min-h-screen bg-white" style={designTokenVars}>
        <PageTransitionOutlet />
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-auto bg-[linear-gradient(180deg,#eef4f8_0%,#f7f9fb_100%)] px-5 py-6 sm:px-6 sm:py-8">
      <div className="mx-auto max-w-[1260px]">
        <div className="grid items-start gap-8 xl:grid-cols-[minmax(420px,1fr)_380px]">
          <div className="flex min-h-[calc(100vh-48px)] items-center justify-center rounded-[32px] border border-white/70 bg-[rgba(255,255,255,0.45)] p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm">
            <div className="relative">
              {isCameraReview && (
                <div className="absolute right-0 top-[-52px] flex items-center gap-3 rounded-full border border-white/80 bg-white/92 px-4 py-2 shadow-[0_12px_30px_rgba(15,23,42,0.10)] backdrop-blur">
                  <span className="text-[12px] font-medium text-slate-600">Hit Areas</span>
                  <Switch
                    checked={showHitAreas}
                    onCheckedChange={(checked) => {
                      const nextSearch = new URLSearchParams(location.search);
                      if (checked) {
                        nextSearch.set('hitareas', '1');
                      } else {
                        nextSearch.delete('hitareas');
                      }
                      navigate({
                        pathname: location.pathname,
                        search: nextSearch.toString() ? `?${nextSearch.toString()}` : '',
                      });
                    }}
                    aria-label="Toggle hit area debug overlay"
                  />
                </div>
              )}
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
                  <StatusBarProvider>
                    <DeviceSystemChrome />
                    <PageTransitionOutlet />
                  </StatusBarProvider>
                </div>
              </div>
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
