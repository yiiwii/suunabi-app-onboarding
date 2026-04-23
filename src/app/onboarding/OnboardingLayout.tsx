import { useLocation, useNavigate, useOutlet } from 'react-router';
import { useEffect, useRef, useState } from 'react';
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

function PageTransitionOutlet() {
  const outlet = useOutlet();

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="absolute inset-0" style={designTokenVars}>
        {outlet}
      </div>
    </div>
  );
}

function useIsMobileViewport() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(max-width: 767px)').matches;
  });

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)');
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  return isMobile;
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
  const isMobile = useIsMobileViewport();
  const isCameraReview = location.pathname === '/camera-review';
  const searchParams = new URLSearchParams(location.search);
  const showHitAreas = searchParams.has('hitareas');
  const layoutRef = useRef<HTMLDivElement | null>(null);
  const splitDragRef = useRef<{ startX: number; startRatio: number } | null>(null);
  const [layoutWidth, setLayoutWidth] = useState(0);
  const [splitRatio, setSplitRatio] = useState(0.58);

  useEffect(() => {
    const node = layoutRef.current;
    if (!node || typeof ResizeObserver === 'undefined') return;

    const update = () => setLayoutWidth(node.clientWidth);
    update();

    const observer = new ResizeObserver(update);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function onMove(event: PointerEvent) {
      if (!splitDragRef.current || !layoutWidth) return;

      const { startX, startRatio } = splitDragRef.current;
      const available = Math.max(layoutWidth, 0);
      if (!available) return;

      const minLeft = 420;
      const minRight = 360;
      const handleWidth = 18;
      const maxLeft = Math.max(minLeft, available - minRight - handleWidth);
      const delta = event.clientX - startX;
      const nextLeft = Math.min(maxLeft, Math.max(minLeft, available * startRatio + delta));
      const nextRatio = (nextLeft / available) || startRatio;

      setSplitRatio(Math.min(0.72, Math.max(0.42, nextRatio)));
    }

    function onUp() {
      splitDragRef.current = null;
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    }

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
  }, [layoutWidth]);

  const minLeft = 420;
  const minRight = 360;
  const handleWidth = 18;
  const availableWidth = Math.max(layoutWidth, 0);
  const maxLeft = availableWidth ? Math.max(minLeft, availableWidth - minRight - handleWidth) : minLeft;
  const leftPaneWidth = availableWidth
    ? Math.min(maxLeft, Math.max(minLeft, Math.round(availableWidth * splitRatio)))
    : 720;

  if (isMobile) {
    return (
      <div className="min-h-[100dvh] w-full overflow-hidden bg-white" style={designTokenVars}>
        <PageTransitionOutlet />
      </div>
    );
  }

  if (!showDebug) {
    return (
      <div className="min-h-screen bg-white" style={designTokenVars}>
        <PageTransitionOutlet />
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-auto bg-[linear-gradient(180deg,#eef4f8_0%,#f7f9fb_100%)] px-5 py-6 sm:px-6 sm:py-8">
      <div ref={layoutRef} className="w-full">
        <div className="flex items-stretch gap-4">
          <div
            className="flex min-h-[calc(100vh-48px)] shrink-0 items-center justify-center rounded-[32px] border border-white/70 bg-[rgba(255,255,255,0.45)] p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm"
            style={{ width: leftPaneWidth }}
          >
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

          <button
            type="button"
            aria-label="Resize split view"
            className="group relative mt-6 flex h-[calc(100vh-96px)] w-[18px] shrink-0 cursor-col-resize items-center justify-center"
            onPointerDown={event => {
              event.preventDefault();
              splitDragRef.current = { startX: event.clientX, startRatio: splitRatio };
              document.body.style.cursor = 'col-resize';
              document.body.style.userSelect = 'none';
            }}
          >
            <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-slate-300/70 transition-colors group-hover:bg-slate-500/70" />
            <span className="relative flex h-9 w-5 items-center justify-center rounded-full border border-white/80 bg-white/90 shadow-[0_8px_24px_rgba(15,23,42,0.12)] backdrop-blur">
              <span className="grid gap-[3px]">
                <span className="block h-[2px] w-2 rounded-full bg-slate-400" />
                <span className="block h-[2px] w-2 rounded-full bg-slate-400" />
                <span className="block h-[2px] w-2 rounded-full bg-slate-400" />
              </span>
            </span>
          </button>

          <aside className="min-w-0 flex-1 xl:sticky xl:top-6">
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
