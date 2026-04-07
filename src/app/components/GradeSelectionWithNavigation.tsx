import { useLocation, useNavigate } from 'react-router';
import { GradeSelectionQuestion } from './QuestionnaireScreens';

/**
 * GradeSelectionWithNavigation - Main grade level selection with navigation
 * 
 * Wraps the grade selection component and navigates to the elementary grade
 * detail screen when 小学生 is selected, or to the user type question for other grades.
 */
export default function GradeSelectionWithNavigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedGrade = (location.state as { selected?: string } | null)?.selected ?? null;

  const handleNext = () => {
    if (selectedGrade === null) {
      return;
    }

    if (selectedGrade === 'elementary') {
      navigate('/elementary-grade');
      return;
    }

    navigate('/user-type');
  };

  return (
    <GradeSelectionQuestion
      onBack={() => navigate('/intro4')}
      onNext={handleNext}
      onSelect={(value) => navigate('/grade', { replace: true, state: { selected: value } })}
      selectedValue={selectedGrade}
    />
  );
}
