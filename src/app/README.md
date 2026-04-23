# Glowise App Structure

The app is organized as a template kit with a mockup view for the first onboarding question.

## Layout

```
src/app/
├── App.tsx
├── glowise/
│   ├── GlowiseMockup.tsx     # Desktop-style mockup for the first question
│   ├── GlowiseTemplates.tsx   # Shared shell and reusable question templates
│   ├── GlowiseShowcase.tsx    # Gallery preview of all templates
│   └── index.ts               # Barrel exports
├── components/
│   ├── preview/               # Existing preview helpers, still available for reuse
│   └── ui/                    # Shared UI primitives
└── onboarding/                # Legacy Su Navi onboarding flow, kept for reference
```

## Design intent

- Match the Glowise Figma system closely
- Keep each question style reusable as a standalone component
- Preserve the existing mockup-friendly, component-first structure
