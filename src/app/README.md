# すうナビ (Su Navi) Onboarding - Development Environment

## Architecture Overview

This project features a modular architecture that separates the onboarding flow from the preview/debug environment, making it easy to swap onboarding flows or reuse components for other products.

### Component Structure

```
/src/app/
├── App.tsx                          # Main entry point
├── onboarding/                      # Onboarding-specific code (swappable)
│   ├── OnboardingFlow.tsx          # Onboarding router wrapper
│   └── routes.tsx                  # Onboarding route definitions
├── components/
│   ├── preview/                    # Reusable preview components
│   │   ├── MobilePreview.tsx       # Device frame container
│   │   └── PreviewWithDebug.tsx    # Preview + Debug panel combo
│   └── debug/
│       └── DebugPanel.tsx          # Interactive navigation panel
└── components/                      # Onboarding screen components
    ├── GradeSelection.tsx
    └── GradeSelectionEmpty.tsx
```

## Features

### 🎨 Mobile Preview Container
- iPhone-style device frame with notch
- Realistic shadows and hardware buttons
- Configurable device width (default: 375px)
- Optional frame visibility toggle

### 🐛 Debug Panel
- Real-time route tracking with visual highlighting
- One-click navigation to any screen
- Bilingual screen names (English/Japanese)
- Step progress indicator
- Route path and description display

### 🔄 Modular Onboarding Flow
- Self-contained router configuration
- Easy to swap with different onboarding flows
- Portable and reusable

## Usage Examples

### Standard Development Mode (with debug panel)
```tsx
// App.tsx
<PreviewWithDebug deviceWidth={375} showFrame={true} showDebug={true}>
  <OnboardingFlow />
</PreviewWithDebug>
```

### Presentation Mode (no debug panel)
```tsx
<PreviewWithDebug deviceWidth={375} showFrame={true} showDebug={false}>
  <OnboardingFlow />
</PreviewWithDebug>
```

### Fullscreen Mobile Mode (no frame)
```tsx
<MobilePreview showFrame={false}>
  <OnboardingFlow />
</MobilePreview>
```

### Standalone Onboarding (no preview)
```tsx
<OnboardingFlow />
```

### Different Product Onboarding
```tsx
<PreviewWithDebug>
  <DifferentProductOnboarding />
</PreviewWithDebug>
```

## Onboarding Flow

The すうナビ onboarding consists of 5 screens:

1. **Splash Screen** (`/`) - 起動画面
   - Auto-transitions after 2 seconds
   
2. **Welcome** (`/welcome`) - ようこそ
   - Mascot character introduction
   
3. **Feature Intro** (`/intro`) - 機能紹介
   - Camera-based math problem demonstration
   
4. **Grade Selection (Empty)** (`/grade-empty`) - 学年選択（未選択）
   - Grade selection interface with no option selected
   
5. **Grade Selection** (`/grade`) - 学年選択（選択済み）
   - Grade selection with 中学生 selected
   - Options: 小学生, 中学生, 高校生, 大学生, その他

## Development Tips

### Quick Navigation
- Use the debug panel to skip auto-transitions and jump directly to any screen
- Useful for testing specific interactions without waiting

### Testing Different States
- Navigate between `/grade-empty` and `/grade` to test empty vs selected states
- Test the splash screen transition by clicking "Splash Screen" in the debug panel

### Creating New Onboarding Flows
1. Create a new folder: `/src/app/new-product-onboarding/`
2. Add route definitions and flow component
3. Swap in `App.tsx`: `<OnboardingFlow />` → `<NewProductOnboarding />`
4. The preview container and debug panel work with any React Router setup

## Configuration

### Device Dimensions
- Default: 375px × 812px (iPhone dimensions)
- Customizable via `deviceWidth` prop
- Frame adds 24px padding (12px each side)

### Debug Panel
- Sticky positioning on desktop (lg+ breakpoints)
- Responsive: stacks vertically on mobile
- Auto-detects current route via `useLocation()`
- Uses `useNavigate()` for instant navigation
