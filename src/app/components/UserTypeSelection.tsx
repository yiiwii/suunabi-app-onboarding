import { useState } from 'react';
import { useNavigate } from 'react-router';
import { UserTypeQuestion } from './QuestionnaireScreens';

/**
 * UserTypeSelection - User identity question
 * 
 * Asks whether the user is using the app for themselves or for their child.
 * After selection and confirmation, navigates to the discovery source question.
 */
export default function UserTypeSelection() {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  return (
    <UserTypeQuestion
      onBack={() => navigate('/grade')}
      onNext={() => navigate('/discovery-source')}
      onSelect={setSelectedValue}
      selectedValue={selectedValue}
    />
  );
}
