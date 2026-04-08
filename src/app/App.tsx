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

  if (isMobile) {
    return (
      <div className="h-[100dvh] w-full overflow-hidden bg-black">
        <div className="h-full w-full overflow-hidden bg-white">
          <OnboardingFlow showDebug={false} deviceWidth={IOS_DEVICE_WIDTH} />
        </div>
      </div>
    );
  }

  return <OnboardingFlow showDebug={true} deviceWidth={IOS_DEVICE_WIDTH} />;
}
