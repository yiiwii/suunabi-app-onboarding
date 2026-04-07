import { useNavigate } from 'react-router';
import { GradeSelectionQuestion } from './QuestionnaireScreens';

export default function GradeSelectionEmpty() {
  const navigate = useNavigate();

  return (
    <GradeSelectionQuestion
      onBack={() => navigate('/intro4')}
      onNext={() => undefined}
      onSelect={(value) => navigate('/grade', { state: { selected: value } })}
      selectedValue={null}
    />
  );
}
