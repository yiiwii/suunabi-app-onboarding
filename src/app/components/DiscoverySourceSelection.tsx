import { useState } from 'react';
import { useNavigate } from 'react-router';
import { DiscoverySourceQuestion } from './QuestionnaireScreens';

/**
 * DiscoverySourceSelection - Discovery source question
 * 
 * Asks where the user discovered the app (Instagram, Google, YouTube, etc.).
 * This is the final questionnaire screen in the onboarding flow.
 */
export default function DiscoverySourceSelection() {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  return (
    <DiscoverySourceQuestion
      onBack={() => navigate('/user-type')}
      onNext={() => navigate('/success')}
      onSelect={setSelectedValue}
      selectedValue={selectedValue}
    />
  );
}
