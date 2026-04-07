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
export default function App() {
  return <OnboardingFlow showDebug={true} deviceWidth={IOS_DEVICE_WIDTH} />;
}
