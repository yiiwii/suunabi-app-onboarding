import { RouterProvider } from 'react-router';
import { IOS_DEVICE_WIDTH } from '../components/preview/device';
import { createOnboardingRouter } from './routes';

interface OnboardingFlowProps {
  showDebug?: boolean;
  deviceWidth?: number;
}

/**
 * OnboardingFlow - すうナビ (Su Navi) Onboarding Experience
 * 
 * This component encapsulates the complete onboarding flow for the
 * Japanese math tutoring app. It can be used standalone or within
 * a preview container.
 * 
 * Features:
 * - Splash screen with auto-transition
 * - Welcome screen with mascot introduction
 * - Feature demonstration
 * - Grade level selection (小学生, 中学生, 高校生, 大学生, その他)
 * - Optional debug panel for development
 * - Configurable device preview width
 */
export function OnboardingFlow({ showDebug = true, deviceWidth = IOS_DEVICE_WIDTH }: OnboardingFlowProps = {}) {
  const router = createOnboardingRouter(showDebug, deviceWidth);
  return <RouterProvider router={router} />;
}
