# Glowise Onboarding Templates

This repository now starts the **Glowise** onboarding template kit.

## What is included

- A shared question shell that matches the Figma onboarding style
- Reusable templates for:
  - single choice questions
  - multi-select questions
  - one-, two-, and three-column wheel inputs
  - numeric input questions
  - free-text input questions
- A showcase screen that previews all templates as components

## Run locally

```bash
npm install
npm run dev
```

## Structure

- `src/app/App.tsx` renders the Glowise showcase
- `src/app/glowise/GlowiseTemplates.tsx` contains the reusable onboarding templates
- `src/app/glowise/GlowiseShowcase.tsx` shows the template gallery

