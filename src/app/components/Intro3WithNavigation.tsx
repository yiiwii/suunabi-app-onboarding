import { useNavigate } from 'react-router';
import { Intro3Screen } from './FeatureIntroScreens';

/**
 * Intro3WithNavigation - Feature Intro 3 with navigation to Intro4
 * 
 * Wraps the imported Intro3 component and intercepts click events
 * to navigate to the next screen (Intro4) when the continue button is clicked.
 */
export default function Intro3WithNavigation() {
  const navigate = useNavigate();

  return (
    <Intro3Screen
      onBack={() => navigate('/intro2')}
      onContinue={() => navigate('/intro4')}
      onSkip={() => navigate('/grade-empty')}
    />
  );
}
