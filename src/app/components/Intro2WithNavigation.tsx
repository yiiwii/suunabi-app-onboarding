import { useNavigate } from 'react-router';
import { Intro2Screen } from './FeatureIntroScreens';

/**
 * Intro2WithNavigation - Feature Intro 2 with navigation to Intro3
 * 
 * Wraps the imported Intro2 component and intercepts click events
 * to navigate to the next screen (Intro3) when the continue button is clicked.
 */
export default function Intro2WithNavigation() {
  const navigate = useNavigate();

  return (
    <Intro2Screen
      onBack={() => navigate('/intro')}
      onContinue={() => navigate('/intro3')}
      onSkip={() => navigate('/grade-empty')}
    />
  );
}
