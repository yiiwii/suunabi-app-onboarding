import type { ComponentType } from 'react';
import {
  FirstQuestionMockup,
  MultiSelectQuestion,
  NumericInputQuestion,
  OneWheelQuestion,
  TextInputQuestion,
  ThreeWheelQuestion,
  TwoWheelQuestion,
} from './GlowiseTemplates';

const bgFigmaImage188 = 'https://www.figma.com/api/mcp/asset/9fff4866-4947-48fc-af67-7b11ba2e5dba';

type ShowcaseItem = {
  id: string;
  label: string;
  note: string;
  Component: ComponentType;
};

const showcaseItems: ShowcaseItem[] = [
  {
    id: 'single-select',
    label: 'Single choice',
    note: 'Medication picker with segmented control and one selected row.',
    Component: FirstQuestionMockup,
  },
  {
    id: 'multi-select',
    label: 'Multi select',
    note: 'Symptom checklist with selected state and neutral rows.',
    Component: MultiSelectQuestion,
  },
  {
    id: 'one-wheel',
    label: 'One wheel',
    note: 'Single-column picker for age, date, or duration prompts.',
    Component: OneWheelQuestion,
  },
  {
    id: 'two-wheel',
    label: 'Two wheel',
    note: 'Paired picker columns for compound values and units.',
    Component: TwoWheelQuestion,
  },
  {
    id: 'three-wheel',
    label: 'Three wheel',
    note: 'Three-column wheel for date-style onboarding inputs.',
    Component: ThreeWheelQuestion,
  },
  {
    id: 'numeric-input',
    label: 'Numeric input',
    note: 'Centered numeric entry with unit toggle chips.',
    Component: NumericInputQuestion,
  },
  {
    id: 'text-input',
    label: 'Text input',
    note: 'Inline text field with a keyboard mock for typing questions.',
    Component: TextInputQuestion,
  },
];

function ScaledPreview({ Component }: { Component: ComponentType }) {
  const scale = 0.72;
  const width = 375 * scale;
  const height = 812 * scale;

  return (
    <div className="overflow-hidden rounded-[28px] bg-[#e6edf5]" style={{ width, height }}>
      <div
        className="origin-top-left"
        style={{
          width: 375,
          height: 812,
          transform: `scale(${scale})`,
        }}
      >
        <Component />
      </div>
    </div>
  );
}

function TemplateCard({ label, note, Component }: ShowcaseItem) {
  return (
    <section className="overflow-hidden rounded-[32px] border border-white/70 bg-white/70 p-4 shadow-[0_24px_70px_rgba(30,57,48,0.08)] backdrop-blur">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6e8ca0]">
            Glowise
          </p>
          <h2 className="mt-2 text-[18px] font-semibold tracking-[-0.03em] text-[#13231d]">
            {label}
          </h2>
          <p className="mt-2 max-w-[300px] text-[13px] leading-[1.45] text-[rgba(13,14,18,0.58)]">
            {note}
          </p>
        </div>
        <span className="rounded-full bg-[#e6f3e0] px-3 py-1 text-[11px] font-semibold text-[#1e3930]">
          Template
        </span>
      </div>

      <div className="flex justify-center">
        <ScaledPreview Component={Component} />
      </div>
    </section>
  );
}

export default function GlowiseShowcase() {
  return (
    <div
      className="min-h-screen overflow-x-hidden px-4 py-6 text-[#13231d] sm:px-6 sm:py-8"
      style={{ fontFamily: "Figtree, Hiragino Sans, sans-serif" }}
    >
      <img alt="" aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 size-full object-cover" src={bgFigmaImage188} />
      <div className="mx-auto max-w-[1160px]">
        <header className="mb-8 rounded-[36px] border border-white/70 bg-white/60 px-6 py-6 shadow-[0_20px_60px_rgba(30,57,48,0.08)] backdrop-blur">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6e8ca0]">
            Glowise onboarding system
          </p>
          <div className="mt-3 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-[720px]">
              <h1
                className="text-[34px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#13231d] sm:text-[44px]"
                style={{ fontFamily: "Freigeist, Figtree, Hiragino Sans, sans-serif" }}
              >
                Reusable onboarding templates for conversational, list, and input questions.
              </h1>
              <p className="mt-4 max-w-[660px] text-[15px] leading-[1.55] text-[rgba(13,14,18,0.64)]">
                This starts Glowise as a component-driven onboarding kit. Each template mirrors the Figma system
                and can be reused later as an onboarding page, a flow step, or a standalone question module.
              </p>
            </div>
            <div className="rounded-[22px] bg-[#1e3930] px-4 py-3 text-white shadow-[inset_0_-4px_0_rgba(255,255,255,0.06)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
                Kit status
              </p>
              <p className="mt-1 text-[16px] font-semibold">7 templates ready</p>
            </div>
          </div>
        </header>

        <main className="grid gap-6 lg:grid-cols-2">
          {showcaseItems.map((item) => (
            <TemplateCard key={item.id} {...item} />
          ))}
        </main>
      </div>
    </div>
  );
}
