import { useEffect, useState } from 'react';
import { OnboardingFlow } from './onboarding/OnboardingFlow';
import { IOS_DEVICE_WIDTH } from './components/preview/device';

/**
 * Main App Component
 * 
 * Currently displays the すうナビ onboarding flow with mobile preview
 * and debug panel for easy navigation between screens.
 * 
 * The architecture is modular:
 * - OnboardingFlow: Self-contained onboarding with router, preview, and debug panel
 * - Can be easily swapped with other onboarding flows
 * - Preview and debug features are configurable via props
 */
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

export default function App() {
  const isMobile = useIsMobileViewport();

  useEffect(() => {
    if (!isMobile) return;

    const { body, documentElement } = document;
    const prevBodyOverflow = body.style.overflow;
    const prevBodyOverscroll = body.style.overscrollBehavior;
    const prevBodyTouchAction = body.style.touchAction;
    const prevBodyUserSelect = body.style.userSelect;
    const prevBodyWebkitUserSelect = body.style.webkitUserSelect;
    const prevBodyWebkitTouchCallout = body.style.webkitTouchCallout;
    const prevHtmlOverflow = documentElement.style.overflow;
    const prevHtmlOverscroll = documentElement.style.overscrollBehavior;
    const prevHtmlUserSelect = documentElement.style.userSelect;
    const prevHtmlWebkitUserSelect = documentElement.style.webkitUserSelect;

    body.style.overflow = 'hidden';
    body.style.overscrollBehavior = 'none';
    body.style.touchAction = 'none';
    body.style.userSelect = 'none';
    body.style.webkitUserSelect = 'none';
    body.style.webkitTouchCallout = 'none';
    documentElement.style.overflow = 'hidden';
    documentElement.style.overscrollBehavior = 'none';
    documentElement.style.userSelect = 'none';
    documentElement.style.webkitUserSelect = 'none';

    return () => {
      body.style.overflow = prevBodyOverflow;
      body.style.overscrollBehavior = prevBodyOverscroll;
      body.style.touchAction = prevBodyTouchAction;
      body.style.userSelect = prevBodyUserSelect;
      body.style.webkitUserSelect = prevBodyWebkitUserSelect;
      body.style.webkitTouchCallout = prevBodyWebkitTouchCallout;
      documentElement.style.overflow = prevHtmlOverflow;
      documentElement.style.overscrollBehavior = prevHtmlOverscroll;
      documentElement.style.userSelect = prevHtmlUserSelect;
      documentElement.style.webkitUserSelect = prevHtmlWebkitUserSelect;
    };
  }, [isMobile]);

  if (isMobile) {
    return (
      <div className="h-[100dvh] w-full overflow-hidden bg-black touch-none select-none">
        <div className="h-full w-full overflow-hidden bg-white select-none">
          <OnboardingFlow showDebug={false} deviceWidth={IOS_DEVICE_WIDTH} />
        </div>
      </div>
    );
  }

  return <OnboardingFlow showDebug={true} deviceWidth={IOS_DEVICE_WIDTH} />;
}
