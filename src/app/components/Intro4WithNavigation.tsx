import { useNavigate } from 'react-router';
import { Intro4Screen } from './FeatureIntroScreens';

/**
 * Intro4WithNavigation - Feature Intro 4 with navigation to Grade Selection
 * 
 * Wraps the imported Intro4 component and intercepts click events
 * to navigate to the grade selection screen when the continue button is clicked.
 */
export default function Intro4WithNavigation() {
  const navigate = useNavigate();

  return (
    <Intro4Screen
      onBack={() => navigate('/intro3')}
      onContinue={() => navigate('/grade-empty')}
      onSkip={() => navigate('/grade-empty')}
    />
  );
}
