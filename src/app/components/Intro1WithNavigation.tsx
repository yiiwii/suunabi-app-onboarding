import { useNavigate } from 'react-router';
import { Intro1Screen } from './FeatureIntroScreens';

/**
 * Intro1WithNavigation - Feature Intro 1 with navigation to Intro2
 * 
 * Wraps the imported Intro1 component and intercepts click events
 * to navigate to the next screen (Intro2) when the continue button is clicked.
 */
export default function Intro1WithNavigation() {
  const navigate = useNavigate();

  return (
    <Intro1Screen
      onBack={() => navigate('/welcome')}
      onContinue={() => navigate('/intro2')}
      onSkip={() => navigate('/grade-empty')}
    />
  );
}
