import rawTokens from './suunabi.tokens.json';

type RawToken = {
  value: string | number | {
    fontSize?: number;
    fontFamily?: string;
    fontWeight?: number;
    lineHeight?: number;
    letterSpacing?: number;
  };
};

type RawTokenGroup = Record<string, RawToken | RawTokenGroup>;

function getToken(group: RawTokenGroup, path: string[]): RawToken | null {
  let current: RawToken | RawTokenGroup | undefined = group;

  for (const key of path) {
    if (!current || typeof current !== 'object' || !('value' in current) && !(key in current)) {
      return null;
    }

    current = (current as RawTokenGroup)[key];
  }

  return current && typeof current === 'object' && 'value' in current ? (current as RawToken) : null;
}

function tokenValue(path: string[], fallback: string) {
  const token = getToken(rawTokens as RawTokenGroup, path);
  return typeof token?.value === 'string' ? token.value : fallback;
}

function fontValue(path: string[], fallback: { fontSize: number; fontFamily: string; fontWeight: number; lineHeight: number; letterSpacing: number }) {
  const token = getToken(rawTokens as RawTokenGroup, path);
  return typeof token?.value === 'object' && token.value !== null ? { ...fallback, ...token.value } : fallback;
}

export const designTokens = {
  color: {
    black3: tokenValue(['color', 'black', '3'], '#0d0e1208'),
    black5: tokenValue(['color', 'black', '5'], '#0d0e120d'),
    black8: tokenValue(['color', 'black', '8'], '#0d0e1214'),
    black12: tokenValue(['color', 'black', '12'], '#0d0e121f'),
    black20: tokenValue(['color', 'black', '20'], '#0d0e1233'),
    black30: tokenValue(['color', 'black', '30'], '#0d0e124d'),
    black40: tokenValue(['color', 'black', '40'], '#0d0e1266'),
    black60: tokenValue(['color', 'black', '60'], '#0d0e1299'),
    black80: tokenValue(['color', 'black', '80'], '#0d0e12cc'),
    black100: tokenValue(['color', 'black', '100'], '#0d0e12ff'),
    backgroundPrimary: tokenValue(['color', 'background', 'primary'], '#f2fbffff'),
    backgroundSecondary: tokenValue(['color', 'background', 'secondary'], '#ffffffff'),
    accentPrimary: tokenValue(['color', 'accent colors', 'primary'], '#339bc9ff'),
    accentPrimary20: tokenValue(['color', 'accent colors', 'primary-20'], '#268bb933'),
    accentPrimary5: tokenValue(['color', 'accent colors', 'primary-5'], '#268bb90d'),
    accentPrimaryShadow: tokenValue(['color', 'accent colors', 'primary-shadow'], '#0371a4ff'),
    accentPrimaryShadow40: tokenValue(['color', 'accent colors', 'primary-shadow-40'], '#0371a466'),
    accentSecondary: tokenValue(['color', 'accent colors', 'secondary'], '#66b7d5ff'),
    success: tokenValue(['color', 'accent colors', 'success'], '#249176ff'),
    success20: tokenValue(['color', 'accent colors', 'success-20'], '#a2ffe833'),
    success80: tokenValue(['color', 'accent colors', 'success-80'], '#249176cc'),
    complimentary: tokenValue(['color', 'accent colors', 'complimentary'], '#ffd260ff'),
    complimentary20: tokenValue(['color', 'accent colors', 'complimentary-20'], '#ffd26033'),
    complimentary50: tokenValue(['color', 'accent colors', 'complimentary-50'], '#ffd26080'),
    complimentaryShadow: tokenValue(['color', 'accent colors', 'complimentary-shadow'], '#826007ff'),
    borderPrimaryLv1: tokenValue(['color', 'border', 'primary lv1'], '#f2fbffff'),
    borderPrimaryLv2: tokenValue(['color', 'border', 'primary lv2'], '#cce5f2ff'),
    borderPrimaryLv3: tokenValue(['color', 'border', 'primary lv3'], '#a2cce1ff'),
    borderAccentLv1: tokenValue(['color', 'border', 'accent lv1'], '#268bb90d'),
    borderAccentLv2: tokenValue(['color', 'border', 'accent lv2'], '#268bb933'),
    borderAccentLv3: tokenValue(['color', 'border', 'accent lv3'], '#268bb9ff'),
  },
  font: {
    bodyRegular: fontValue(['font', 'body', 'regular'], { fontSize: 16, fontFamily: 'Hiragino Sans', fontWeight: 400, lineHeight: 19.2, letterSpacing: 0 }),
    bodyBold: fontValue(['font', 'body', 'bold'], { fontSize: 16, fontFamily: 'Hiragino Sans', fontWeight: 700, lineHeight: 19.2, letterSpacing: 0 }),
    captionSmall: fontValue(['font', 'caption 1', 'small'], { fontSize: 14, fontFamily: 'Hiragino Sans', fontWeight: 400, lineHeight: 16.8, letterSpacing: 0 }),
    captionExtraSmall: fontValue(['font', 'caption 1', 'extra small'], { fontSize: 10, fontFamily: 'Hiragino Sans', fontWeight: 400, lineHeight: 12, letterSpacing: 0 }),
    titleRegular: fontValue(['font', 'title', 'regular'], { fontSize: 18, fontFamily: 'Hiragino Sans', fontWeight: 600, lineHeight: 21.6, letterSpacing: 0 }),
    largeTitle: fontValue(['font', 'large title', 'regular'], { fontSize: 24, fontFamily: 'Hiragino Sans', fontWeight: 700, lineHeight: 28.8, letterSpacing: 0 }),
    headline: fontValue(['font', 'headline', 'regular'], { fontSize: 36, fontFamily: 'Hiragino Sans', fontWeight: 700, lineHeight: 43.2, letterSpacing: 0 }),
  },
  radius: {
    button: '12px',
    card: '12px',
    badge: '5px',
    panel: '24px',
    pill: '999px',
  },
  shadow: {
    primaryInset: 'inset 0 -4px 0 0 var(--token-color-accent-primary-shadow)',
    successInset: 'inset 0 -4px 0 0 var(--token-color-success)',
    card: '0 12px 24px rgba(51,155,201,0.08)',
  },
  spacing: {
    2: '2px',
    4: '4px',
    5: '5px',
    8: '8px',
    10: '10px',
    12: '12px',
    16: '16px',
    20: '20px',
    24: '24px',
    34: '34px',
  },
} as const;

export const designTokenVars: Record<string, string> = {
  '--token-font-family-base': designTokens.font.bodyRegular.fontFamily,
  '--token-color-black-3': designTokens.color.black3,
  '--token-color-black-5': designTokens.color.black5,
  '--token-color-black-8': designTokens.color.black8,
  '--token-color-black-12': designTokens.color.black12,
  '--token-color-black-20': designTokens.color.black20,
  '--token-color-black-30': designTokens.color.black30,
  '--token-color-black-40': designTokens.color.black40,
  '--token-color-black-60': designTokens.color.black60,
  '--token-color-black-80': designTokens.color.black80,
  '--token-color-black-100': designTokens.color.black100,
  '--token-color-background-primary': designTokens.color.backgroundPrimary,
  '--token-color-background-secondary': designTokens.color.backgroundSecondary,
  '--token-color-accent-primary': designTokens.color.accentPrimary,
  '--token-color-accent-primary-20': designTokens.color.accentPrimary20,
  '--token-color-accent-primary-5': designTokens.color.accentPrimary5,
  '--token-color-accent-primary-shadow': designTokens.color.accentPrimaryShadow,
  '--token-color-accent-secondary': designTokens.color.accentSecondary,
  '--token-color-success': designTokens.color.success,
  '--token-color-success-20': designTokens.color.success20,
  '--token-color-success-80': designTokens.color.success80,
  '--token-color-complimentary': designTokens.color.complimentary,
  '--token-color-complimentary-20': designTokens.color.complimentary20,
  '--token-color-complimentary-50': designTokens.color.complimentary50,
  '--token-color-complimentary-shadow': designTokens.color.complimentaryShadow,
  '--token-color-border-primary-1': designTokens.color.borderPrimaryLv1,
  '--token-color-border-primary-2': designTokens.color.borderPrimaryLv2,
  '--token-color-border-primary-3': designTokens.color.borderPrimaryLv3,
  '--token-color-border-accent-1': designTokens.color.borderAccentLv1,
  '--token-color-border-accent-2': designTokens.color.borderAccentLv2,
  '--token-color-border-accent-3': designTokens.color.borderAccentLv3,
  '--token-radius-button': designTokens.radius.button,
  '--token-radius-card': designTokens.radius.card,
  '--token-radius-badge': designTokens.radius.badge,
  '--token-radius-panel': designTokens.radius.panel,
  '--token-shadow-primary-inset': designTokens.shadow.primaryInset,
  '--token-shadow-card': designTokens.shadow.card,
};

export const tokenSections = [
  {
    title: 'Colors',
    items: [
      ['Accent / Primary', designTokens.color.accentPrimary],
      ['Accent / Shadow', designTokens.color.accentPrimaryShadow],
      ['Background / Primary', designTokens.color.backgroundPrimary],
      ['Background / Secondary', designTokens.color.backgroundSecondary],
      ['Text / 100', designTokens.color.black100],
      ['Text / 60', designTokens.color.black60],
      ['Border / Accent 3', designTokens.color.borderAccentLv3],
      ['Success', designTokens.color.success],
      ['Complimentary', designTokens.color.complimentary],
    ],
  },
  {
    title: 'Typography',
    items: [
      ['Large Title', `${designTokens.font.largeTitle.fontSize}px / ${designTokens.font.largeTitle.fontWeight}`],
      ['Title', `${designTokens.font.titleRegular.fontSize}px / ${designTokens.font.titleRegular.fontWeight}`],
      ['Body', `${designTokens.font.bodyRegular.fontSize}px / ${designTokens.font.bodyRegular.fontWeight}`],
      ['Body Bold', `${designTokens.font.bodyBold.fontSize}px / ${designTokens.font.bodyBold.fontWeight}`],
      ['Caption Small', `${designTokens.font.captionSmall.fontSize}px / ${designTokens.font.captionSmall.fontWeight}`],
      ['Caption XS', `${designTokens.font.captionExtraSmall.fontSize}px / ${designTokens.font.captionExtraSmall.fontWeight}`],
    ],
  },
  {
    title: 'Structure',
    items: [
      ['Radius / Button', designTokens.radius.button],
      ['Radius / Card', designTokens.radius.card],
      ['Radius / Badge', designTokens.radius.badge],
      ['Shadow / CTA', 'Inset -4px accent shadow'],
      ['Spacing / Base', designTokens.spacing[20]],
      ['Spacing / CTA Bottom', designTokens.spacing[34]],
    ],
  },
] as const;
