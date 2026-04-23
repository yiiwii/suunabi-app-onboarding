import { createHashRouter, Navigate, RouterProvider, useLocation, useNavigate, type ComponentType } from 'react-router';
import {
  BirthdayQuestion,
  AppleHealthPermissionQuestion,
  FirstQuestionMockup,
  GenderQuestion,
  HeightQuestion,
  NameQuestion,
  GlpDurationQuestion,
  GlpInitiationQuestion,
  GlpSupportValuePage,
  BehaviorConcernQuestion,
  BehaviorGoalQuestion,
  BehaviorTrackingStyleQuestion,
  BehaviorValuePage,
  FoodCorrelationValuePage,
  GeneratingPlanLoadingPage,
  ReportResultPage,
  SocialProofValuePage,
  PermissionValuePage,
  PaywallValuePage,
  SensoryFoodNoiseQuestion,
  SensorySideEffectQuestion,
  SensoryGridQuestion,
  SensoryPostMealQuestion,
  SideEffectCorrelationValuePage,
  TargetWeightQuestion,
  WeightQuestion,
  WelcomeValuePage,
  MultiSelectQuestion,
  NumericInputQuestion,
  OneWheelQuestion,
  TextInputQuestion,
  ThreeWheelQuestion,
  TwoWheelQuestion,
} from './GlowiseTemplates';

type FlowKey =
  | 'welcome'
  | 'permissions'
  | 'name'
  | 'gender'
  | 'birthday'
  | 'height'
  | 'weight'
  | 'target-weight'
  | 'glp-medication'
  | 'glp-duration'
  | 'glp-initiation'
  | 'glp-support'
  | 'glp-health-permission'
  | 'behavior-goal'
  | 'behavior-concern'
  | 'behavior-tracking'
  | 'behavior-value'
  | 'social-proof'
  | 'food-correlation-value'
  | 'side-effect-correlation-value'
  | 'generating-plan'
  | 'report'
  | 'sensory-food-noise'
  | 'sensory-side-effect'
  | 'sensory-post-meal'
  | 'sensory-grid'
  | 'paywall';

type FlowStep = {
  key: FlowKey;
  label: string;
  note: string;
  path: string;
  Component: ComponentType<any>;
  variants?: Array<{
    key: string;
    label: string;
    note: string;
  }>;
};

type FlowSection = {
  key: string;
  label: string;
  note: string;
  steps: FlowStep[];
};

type TemplateStep = {
  key: string;
  label: string;
  note: string;
  path: string;
  Component: ComponentType<any>;
};

type ResponseRow = {
  label: string;
  value: string;
};

const flowSections: FlowSection[] = [
  {
    key: 'value-pages',
    label: 'Value pages',
    note: 'Brand, permission, and conversion screens.',
    steps: [
      {
        key: 'welcome',
        label: 'Welcome',
        note: 'Value page intro.',
        path: '/welcome',
        Component: WelcomeValuePage,
      },
      {
        key: 'permissions',
        label: 'Permissions',
        note: 'Notification ask.',
        path: '/permissions',
        Component: PermissionValuePage,
      },
      {
        key: 'paywall',
        label: 'Paywall',
        note: 'Value page upsell.',
        path: '/paywall',
        Component: PaywallValuePage,
      },
    ],
  },
  {
    key: 'personal-info',
    label: 'Personal info',
    note: 'The profile questions you may reorder later.',
    steps: [
      {
        key: 'name',
        label: 'Name',
        note: 'First personal-info field.',
        path: '/name',
        Component: NameQuestion,
      },
      {
        key: 'gender',
        label: 'Gender',
        note: 'Single-select question.',
        path: '/gender',
        Component: GenderQuestion,
      },
      {
        key: 'birthday',
        label: 'Birthday',
        note: 'Three-wheel date picker.',
        path: '/birthday',
        Component: BirthdayQuestion,
      },
      {
        key: 'height',
        label: 'Height',
        note: 'Height measurement input.',
        path: '/height',
        Component: HeightQuestion,
      },
      {
        key: 'weight',
        label: 'Weight',
        note: 'Weight measurement input.',
        path: '/weight',
        Component: WeightQuestion,
      },
      {
        key: 'target-weight',
        label: 'Target weight',
        note: 'Numeric goal input.',
        path: '/target-weight',
        Component: TargetWeightQuestion,
      },
    ],
  },
  {
    key: 'glp-info',
    label: 'GLP-1 info',
    note: 'Medication and treatment history.',
    steps: [
      {
        key: 'glp-medication',
        label: 'Medication',
        note: 'GLP-1 picker.',
        path: '/glp-medication',
        Component: FirstQuestionMockup,
      },
      {
        key: 'glp-duration',
        label: 'Duration',
        note: 'How long have you been on it?',
        path: '/glp-duration',
        Component: GlpDurationQuestion,
      },
      {
        key: 'glp-initiation',
        label: 'Initiation',
        note: 'What nudged you to start?',
        path: '/glp-initiation',
        Component: GlpInitiationQuestion,
      },
      {
        key: 'glp-support',
        label: 'Support',
        note: 'Branch-specific value page.',
        path: '/glp-support',
        Component: GlpSupportValuePage,
        variants: [
          {
            key: 'clinician-initiated',
            label: 'Clinician-initiated',
            note: 'Adherence support variant.',
          },
          {
            key: 'self-initiated',
            label: 'Self-initiated',
            note: 'Social proof and lifestyle variant.',
          },
        ],
      },
    ],
  },
  {
    key: 'permissions',
    label: 'Permissions',
    note: 'Device permissions after GLP context.',
    steps: [
      {
        key: 'glp-health-permission',
        label: 'Apple Health',
        note: 'Health data permission.',
        path: '/glp-health-permission',
        Component: AppleHealthPermissionQuestion,
      },
    ],
  },
  {
    key: 'behavior-profile',
    label: 'Behavior profile',
    note: 'Primary goals, concerns, and tracking style.',
    steps: [
      {
        key: 'behavior-goal',
        label: 'Primary goal',
        note: 'What matters most right now.',
        path: '/behavior-goal',
        Component: BehaviorGoalQuestion,
      },
      {
        key: 'behavior-concern',
        label: 'Concerns',
        note: 'Multi-select concern probe.',
        path: '/behavior-concern',
        Component: BehaviorConcernQuestion,
      },
      {
        key: 'behavior-tracking',
        label: 'Tracking style',
        note: 'How you like to track progress.',
        path: '/behavior-tracking',
        Component: BehaviorTrackingStyleQuestion,
      },
      {
        key: 'sensory-grid',
        label: 'Calorie grid',
        note: 'How you feel about calorie counting.',
        path: '/sensory-grid',
        Component: SensoryGridQuestion,
      },
    ],
  },
  {
    key: 'protein-first-value',
    label: 'Protein-first value',
    note: 'Explains the protein-centric model.',
    steps: [
      {
        key: 'behavior-value',
        label: 'Value page',
        note: 'Explains the protein-centric model.',
        path: '/behavior-value',
        Component: BehaviorValuePage,
        variants: [
          {
            key: 'protein-first',
            label: 'Protein-first',
            note: 'Explains the protein-centric model.',
          },
          {
            key: 'calorie-context',
            label: 'Protein + calories',
            note: 'Explains the difference versus competitors.',
          },
        ],
      },
    ],
  },
  {
    key: 'sensory-profile',
    label: 'Sensory profile',
    note: 'Side effects, food noise, and appetite signal questions.',
    steps: [
      {
        key: 'sensory-side-effect',
        label: 'Side effect concern',
        note: 'What side effect worries you most.',
        path: '/sensory-side-effect',
        Component: SensorySideEffectQuestion,
      },
      {
        key: 'sensory-food-noise',
        label: 'Food noise',
        note: 'Current food-noise level.',
        path: '/sensory-food-noise',
        Component: SensoryFoodNoiseQuestion,
      },
      {
        key: 'sensory-post-meal',
        label: 'Post-meal',
        note: 'How your body feels after a big meal.',
        path: '/sensory-post-meal',
        Component: SensoryPostMealQuestion,
      },
    ],
  },
  {
    key: 'social-proof',
    label: 'Social proof',
    note: 'Reassurance and support framing.',
    steps: [
      {
        key: 'social-proof',
        label: 'Social proof',
        note: 'Reassurance and support framing.',
        path: '/social-proof',
        Component: SocialProofValuePage,
      },
    ],
  },
  {
    key: 'food-correlation-value',
    label: 'Food correlation value',
    note: 'Explains food-side-effect insights.',
    steps: [
      {
        key: 'food-correlation-value',
        label: 'Food correlation value',
        note: 'Explains food-side-effect insights.',
        path: '/food-correlation-value',
        Component: FoodCorrelationValuePage,
      },
    ],
  },
  {
    key: 'side-effect-correlation-value',
    label: 'Side effect correlations',
    note: 'Patterns between meals and symptoms.',
    steps: [
      {
        key: 'side-effect-correlation-value',
        label: 'Side effect correlations',
        note: 'Patterns between meals and symptoms.',
        path: '/side-effect-correlation-value',
        Component: SideEffectCorrelationValuePage,
      },
    ],
  },
  {
    key: 'plan-generation',
    label: 'Plan generation',
    note: 'Loading animation before the report.',
    steps: [
      {
        key: 'generating-plan',
        label: 'Generating plan',
        note: 'Two-frame loading transition.',
        path: '/generating-plan',
        Component: GeneratingPlanLoadingPage,
      },
    ],
  },
  {
    key: 'report',
    label: 'Report',
    note: 'Personalized summary and next step.',
    steps: [
      {
        key: 'report',
        label: 'Report',
        note: 'Generated report page.',
        path: '/report',
        Component: ReportResultPage,
      },
    ],
  },
];

const flowSteps = flowSections.flatMap((section) => section.steps);
const templateSteps: TemplateStep[] = [
  {
    key: 'single-select',
    label: 'Single select',
    note: 'Medication picker template.',
    path: '/templates/single-select',
    Component: FirstQuestionMockup,
  },
  {
    key: 'multi-select',
    label: 'Multi select',
    note: 'Checklist template.',
    path: '/templates/multi-select',
    Component: MultiSelectQuestion,
  },
  {
    key: 'one-wheel',
    label: 'One wheel',
    note: 'Single wheel template.',
    path: '/templates/one-wheel',
    Component: OneWheelQuestion,
  },
  {
    key: 'two-wheel',
    label: 'Two wheel',
    note: 'Dual wheel template.',
    path: '/templates/two-wheel',
    Component: TwoWheelQuestion,
  },
  {
    key: 'three-wheel',
    label: 'Three wheel',
    note: 'Triple wheel template.',
    path: '/templates/three-wheel',
    Component: ThreeWheelQuestion,
  },
  {
    key: 'numeric-input',
    label: 'Numeric input',
    note: 'Number entry template.',
    path: '/templates/numeric-input',
    Component: NumericInputQuestion,
  },
  {
    key: 'text-input',
    label: 'Text input',
    note: 'Keyboard entry template.',
    path: '/templates/text-input',
    Component: TextInputQuestion,
  },
];

const flowSequence: FlowStep[] = [
  flowSections[0].steps[0],
  flowSections[1].steps[0],
  flowSections[1].steps[1],
  flowSections[1].steps[2],
  flowSections[1].steps[3],
  flowSections[1].steps[4],
  flowSections[1].steps[5],
  flowSections[2].steps[0],
  flowSections[2].steps[1],
  flowSections[2].steps[2],
  flowSections[2].steps[3],
  flowSections[3].steps[0],
  flowSections[4].steps[0],
  flowSections[4].steps[1],
  flowSections[4].steps[2],
  flowSections[4].steps[3],
  flowSections[5].steps[0],
  flowSections[6].steps[0],
  flowSections[6].steps[1],
  flowSections[6].steps[2],
  flowSections[8].steps[0],
  flowSections[9].steps[0],
  flowSections[7].steps[0],
  flowSections[10].steps[0],
  flowSections[0].steps[1],
  flowSections[11].steps[0],
  flowSections[0].steps[2],
];

function getStepIndex(path: string) {
  return flowSequence.findIndex((step) => step.path === path);
}

function getNextPath(path: string) {
  const currentIndex = getStepIndex(path);
  return flowSequence[currentIndex + 1]?.path;
}

function getVariantKey(step: FlowStep, state: unknown) {
  if (step.path === '/glp-support') {
    const initiationChoice = (state as { initiationChoice?: string } | null)?.initiationChoice;
    return initiationChoice === 'My doctor recommended it' ? 'clinician-initiated' : 'self-initiated';
  }

  if (step.path === '/behavior-value') {
    return 'protein-first';
  }

  if (step.path === '/social-proof') {
    return 'social-proof';
  }

  if (step.path === '/generating-plan') {
    return 'generating-plan';
  }

  return undefined;
}

function getReportPreview(duration: unknown) {
  if (duration === 'Less than 1 month') {
    return { label: 'Early adaptation', description: 'Likely report: the first weeks after starting.' };
  }

  if (duration === '1-3 months') {
    return { label: 'Optimization', description: 'Likely report: progress is stabilizing.' };
  }

  if (duration === 'More than 3 months') {
    return { label: 'Sustainability', description: 'Likely report: habits and maintenance matter most.' };
  }

  return { label: 'Pre-start', description: 'Likely report: prepare before the first dose.' };
}

function getTolerancePreview(state: Record<string, unknown>) {
  const sideEffect = typeof state['sensory-side-effect'] === 'string' ? state['sensory-side-effect'] : '';
  const postMeal = typeof state['sensory-post-meal'] === 'string' ? state['sensory-post-meal'] : '';
  const concerns = Array.isArray(state['behavior-concern']) ? (state['behavior-concern'] as string[]) : [];

  if (sideEffect === 'Nausea' || sideEffect === 'Digestive discomfort' || postMeal === 'I feel it almost immediately') {
    return 'Low';
  }

  if (
    sideEffect === 'Fatigue' ||
    sideEffect === 'Muscle loss or weakness' ||
    postMeal === 'I get back to eating later' ||
    concerns.includes('Losing muscle or feeling weak')
  ) {
    return 'Medium';
  }

  return 'High';
}

function formatResponseValue(value: unknown) {
  if (value === undefined || value === null || value === '') {
    return '—';
  }

  if (Array.isArray(value)) {
    return value.length ? value.join(', ') : '—';
  }

  if (typeof value === 'object') {
    const record = value as Record<string, unknown>;
    const height = record.height ? String(record.height) : '';
    const weight = record.weight ? String(record.weight) : '';
    const parts = [height, weight].filter(Boolean);

    if (parts.length) {
      return parts.join(' / ');
    }

    return '—';
  }

  return String(value);
}

function buildResponseRows(state: Record<string, unknown>): ResponseRow[] {
  return [
    { label: 'Name', value: formatResponseValue(state.name) },
    { label: 'Gender', value: formatResponseValue(state.gender) },
    { label: 'Birthday', value: formatResponseValue(state.birthday) },
    { label: 'Height', value: formatResponseValue(state.height) },
    { label: 'Weight', value: formatResponseValue(state.weight) },
    { label: 'Target weight', value: formatResponseValue(state['target-weight']) },
    { label: 'GLP-1 medication', value: formatResponseValue(state['glp-medication']) },
    { label: 'GLP-1 duration', value: formatResponseValue(state['glp-duration']) },
    { label: 'Stage', value: getReportPreview(state['glp-duration']).label },
    { label: 'GLP path', value: formatResponseValue(state['glp-initiation']) },
    { label: 'Primary goal', value: formatResponseValue(state['behavior-goal']) },
    { label: 'Concerns', value: formatResponseValue(state['behavior-concern']) },
    { label: 'Tracking', value: formatResponseValue(state['behavior-tracking']) },
    { label: 'Side effect concern', value: formatResponseValue(state['sensory-side-effect']) },
    { label: 'Food noise', value: formatResponseValue(state['sensory-food-noise']) },
    { label: 'Post-meal response', value: formatResponseValue(state['sensory-post-meal']) },
    { label: 'Calorie grid', value: formatResponseValue(state['sensory-grid']) },
  ];
}

function ResponsePanel({
  state,
  activeStepIndex,
  totalSteps,
  onReset,
}: {
  state: Record<string, unknown>;
  activeStepIndex: number;
  totalSteps: number;
  onReset: () => void;
}) {
  const stage = getReportPreview(state['glp-duration']);
  const tolerance = getTolerancePreview(state);
  const rows = buildResponseRows(state);

  return (
    <div className="flex min-h-0 w-[280px] flex-col overflow-hidden rounded-[28px] border border-white/70 bg-white/75 shadow-[0_24px_70px_rgba(30,57,48,0.08)] backdrop-blur">
      <div className="shrink-0 p-4 pb-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6e8ca0]">Responses</p>
        <h2
          className="mt-2 text-[20px] font-semibold tracking-[-0.03em] text-[#13231d]"
          style={{ fontFamily: 'Freigeist, Figtree, Hiragino Sans, sans-serif' }}
        >
          What the report sees
        </h2>
        <p className="mt-2 text-[13px] leading-[1.45] text-[rgba(13,14,18,0.6)]">
          See the captured answers that shape the next report before you finish the flow.
        </p>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto px-4 pb-4">
        <div className="rounded-[20px] bg-[rgba(30,57,48,0.05)] p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[rgba(13,14,18,0.55)]">
            Flow progress
          </p>
          <p className="mt-1 text-[14px] font-semibold text-[#1e3930]">
            Step {activeStepIndex + 1} of {totalSteps}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            <span className="rounded-full bg-[#1e3930] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
              {stage.label}
            </span>
            <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1e3930]">
              Predicted tolerance: {tolerance}
            </span>
          </div>

          <p className="mt-3 text-[13px] leading-[1.45] text-[rgba(13,14,18,0.72)]">{stage.description}</p>
        </div>

        <div className="mt-4 grid gap-2">
          {rows.map((row) => (
            <div
              key={row.label}
              className="flex items-start justify-between gap-3 rounded-[16px] border border-[rgba(30,57,48,0.08)] bg-white px-3 py-2"
            >
              <span className="text-[12px] font-medium leading-[1.35] text-[rgba(13,14,18,0.58)]">
                {row.label}
              </span>
              <span className="max-w-[140px] text-right text-[13px] font-semibold leading-[1.35] text-[#13231d]">
                {row.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="shrink-0 border-t border-[rgba(30,57,48,0.08)] p-4">
        <button
          type="button"
          onClick={onReset}
          className="flex h-[44px] w-full items-center justify-center rounded-[14px] border border-[rgba(30,57,48,0.14)] bg-white text-[14px] font-medium text-[#1e3930] transition hover:bg-[rgba(30,57,48,0.03)]"
        >
          Reset prototype
        </button>
      </div>
    </div>
  );
}

function FlowShell() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentState = (location.state as Record<string, unknown> | null) ?? {};
  const activeStep = flowSteps.find((step) => step.path === location.pathname) ?? flowSteps[0];
  const activeTemplate = templateSteps.find((step) => step.path === location.pathname);
  const ActiveComponent = (activeTemplate?.Component ?? activeStep.Component) as ComponentType<any>;
  const activeStepIndex = getStepIndex(activeStep.path);
  const isTemplatePreview = Boolean(activeTemplate);
  const activeVariantKey = getVariantKey(activeStep, currentState);

  return (
    <div
      className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top,_#eef7ff_0%,_#f7fbff_34%,_#edf4f0_100%)] px-4 py-6 text-[#13231d] sm:px-6 sm:py-8"
      style={{ fontFamily: 'Figtree, Hiragino Sans, sans-serif' }}
    >
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-6 xl:flex-row xl:items-center xl:justify-center">
        <div className="flex flex-1 items-center justify-center overflow-x-auto">
          <div className="flex flex-col gap-3">
            <ActiveComponent
              onNext={
                isTemplatePreview
                  ? undefined
                  : (value?: any) => {
                      const nextPath = getNextPath(activeStep.path);
                      const nextState =
                        value === undefined
                          ? currentState
                          : {
                              ...currentState,
                              [activeStep.key]: value,
                            };

                      if (activeStep.path === '/glp-initiation' && value) {
                        navigate('/glp-support', {
                          state: {
                            ...currentState,
                            initiationChoice: value,
                            [activeStep.key]: value,
                          },
                        });
                        return;
                      }
                      if (nextPath) {
                        navigate(nextPath, { state: nextState });
                      }
                    }
              }
            />
            {isTemplatePreview ? (
              <div className="text-center text-[12px] font-medium uppercase tracking-[0.18em] text-[#6e8ca0]">
                Template preview
              </div>
            ) : (
              <div className="text-center text-[12px] font-medium uppercase tracking-[0.18em] text-[#6e8ca0]">
                Step {activeStepIndex + 1} of {flowSequence.length}
              </div>
            )}
          </div>
        </div>

        <aside className="w-full shrink-0 xl:w-[968px]">
          <div className="sticky top-6 flex h-[calc(100vh-3rem)] min-h-0 gap-4">
            <ResponsePanel
              activeStepIndex={activeStepIndex}
              onReset={() => navigate('/welcome', { replace: true, state: {} })}
              state={currentState}
              totalSteps={flowSequence.length}
            />

            <div className="flex min-h-0 w-[320px] flex-col overflow-hidden rounded-[28px] border border-white/70 bg-white/75 shadow-[0_24px_70px_rgba(30,57,48,0.08)] backdrop-blur">
              <div className="shrink-0 p-4 pb-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6e8ca0]">
                  Debug panel
                </p>
                <h2
                  className="mt-2 text-[20px] font-semibold tracking-[-0.03em] text-[#13231d]"
                  style={{ fontFamily: 'Freigeist, Figtree, Hiragino Sans, sans-serif' }}
                >
                  Onboarding flow
                </h2>
                <p className="mt-2 text-[13px] leading-[1.45] text-[rgba(13,14,18,0.6)]">
                  Jump to any part of the onboarding flow and refine the screens later.
                </p>
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto px-4 pb-4">
                <div className="flex flex-col gap-2">
                  {flowSequence.map((step) => {
                    const active = step.path === activeStep.path;
                    const index = getStepIndex(step.path);
                    const section = flowSections.find((candidate) => candidate.steps.some((sectionStep) => sectionStep.path === step.path));
                    const showDivider =
                      section && section.key !== 'value-pages' && section.steps[0].path === step.path;
                    const activeVariant = active ? getVariantKey(step, location.state) : undefined;

                    return (
                      <div key={step.key} className="space-y-2">
                        {showDivider ? (
                          <button
                            type="button"
                            onClick={() => navigate(section.steps[0].path)}
                            className="w-full rounded-[12px] px-1 pt-2 text-left transition hover:bg-white/40"
                          >
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6e8ca0]">
                              {section.label}
                            </p>
                          </button>
                        ) : null}

                        <button
                          type="button"
                          onClick={() => navigate(step.path)}
                          className={`w-full rounded-[14px] border px-3 py-2 text-left transition ${
                            active
                              ? 'border-[#1e3930] bg-[#1e3930] text-white shadow-[inset_0_-4px_0_rgba(255,255,255,0.06)]'
                              : 'border-white/80 bg-white/70 text-[#13231d] hover:bg-white'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex min-w-0 items-center gap-3">
                              <span
                                className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold uppercase tracking-[0.16em] ${
                                  active ? 'bg-white/14 text-white' : 'bg-white/80 text-[#6e8ca0]'
                                }`}
                              >
                                {index + 1}
                              </span>
                              <span
                                className={`truncate text-[14px] font-semibold tracking-[-0.01em] ${
                                  active ? 'text-white' : 'text-[#13231d]'
                                }`}
                              >
                                {step.label}
                              </span>
                            </div>

                            {active ? (
                              <span className="rounded-full bg-white/12 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
                                Active
                              </span>
                            ) : null}
                          </div>
                        </button>

                        {step.variants?.length ? (
                          <div className="grid gap-1 pl-4">
                            {step.variants.map((variant) => {
                              const variantActive = activeVariant === variant.key;
                              return (
                                <button
                                  key={variant.key}
                                  type="button"
                                  onClick={() => navigate(step.path)}
                                  className={`rounded-[12px] border px-2 py-2 text-left transition ${
                                    variantActive
                                      ? 'border-[#1e3930] bg-[#f1f7f4]'
                                      : 'border-white/70 bg-white/55 hover:bg-white/80'
                                  }`}
                                >
                                  <div className="flex items-center justify-between gap-2">
                                    <span className="truncate text-[11px] font-semibold leading-tight text-[#13231d]">
                                      {variant.label}
                                    </span>
                                    {variantActive ? (
                                      <span className="rounded-full bg-[#1e3930] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-white">
                                        Active
                                      </span>
                                    ) : null}
                                  </div>
                                  <div className="mt-2 flex items-center gap-2">
                                    <div className="h-8 w-8 shrink-0 rounded-[8px] bg-[linear-gradient(180deg,rgba(190,224,147,0.9),rgba(30,57,48,0.08))]" />
                                    <p className="text-[10px] leading-[1.35] text-[rgba(13,14,18,0.58)]">
                                      {variant.note}
                                    </p>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="flex min-h-0 w-[320px] flex-col overflow-hidden rounded-[28px] border border-white/70 bg-white/75 shadow-[0_24px_70px_rgba(30,57,48,0.08)] backdrop-blur">
              <div className="shrink-0 p-4 pb-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6e8ca0]">
                  Template pages
                </p>
                <h2
                  className="mt-2 text-[18px] font-semibold tracking-[-0.03em] text-[#13231d]"
                  style={{ fontFamily: 'Freigeist, Figtree, Hiragino Sans, sans-serif' }}
                >
                  Reusable question screens
                </h2>
                <p className="mt-2 text-[13px] leading-[1.45] text-[rgba(13,14,18,0.6)]">
                  Preview the reusable template pages independently from the flow.
                </p>
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto px-4 pb-4">
                <div className="flex flex-col gap-2">
                  {templateSteps.map((step) => {
                    const active = step.path === location.pathname;
                    return (
                      <button
                        key={step.key}
                        type="button"
                        onClick={() => navigate(step.path)}
                        className={`w-full rounded-[14px] border px-3 py-2 text-left transition ${
                          active
                            ? 'border-[#1e3930] bg-[#1e3930] text-white shadow-[inset_0_-4px_0_rgba(255,255,255,0.06)]'
                            : 'border-white/80 bg-white/70 text-[#13231d] hover:bg-white'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span
                            className={`truncate text-[14px] font-semibold tracking-[-0.01em] ${
                              active ? 'text-white' : 'text-[#13231d]'
                            }`}
                          >
                            {step.label}
                          </span>

                          {active ? (
                            <span className="rounded-full bg-white/12 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
                              Active
                            </span>
                          ) : null}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

const router = createHashRouter([
  {
    path: '/',
    element: <FlowShell />,
    children: [
      {
        index: true,
        element: <Navigate to="/welcome" replace />,
      },
      {
        path: 'height-weight',
        element: <Navigate to="/height" replace />,
      },
      {
        path: 'glowise',
        element: <Navigate to="/welcome" replace />,
      },
      ...flowSteps.map((step) => ({
        path: step.path.replace(/^\//, ''),
        element: <step.Component />,
      })),
      ...templateSteps.map((step) => ({
        path: step.path.replace(/^\//, ''),
        element: <step.Component />,
      })),
      {
        path: '*',
        element: <Navigate to="/welcome" replace />,
      },
    ],
  },
]);

export default function GlowiseMockup() {
  return <RouterProvider router={router} />;
}
