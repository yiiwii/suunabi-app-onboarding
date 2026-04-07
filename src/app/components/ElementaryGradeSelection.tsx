import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ElementaryGradeQuestion } from './QuestionnaireScreens';

/**
 * ElementaryGradeSelection - Specific elementary school grade selection
 * 
 * Shows detailed grade options for elementary school students (1st-6th grade).
 * After selection, navigates to the user type question.
 */
export default function ElementaryGradeSelection() {
  const navigate = useNavigate();
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null);

  return (
    <ElementaryGradeQuestion
      onBack={() => navigate('/grade')}
      onNext={() => navigate('/user-type')}
      onSelect={setSelectedGrade}
      selectedValue={selectedGrade}
    />
  );
}
