export interface ScreenRouteInfo {
  path: string;
  name: string;
  nameJa: string;
  index: number;
  nested?: boolean;
}

export const allScreens: ScreenRouteInfo[] = [
  {
    path: '/home-v2',
    name: 'Home V2',
    nameJa: 'ホームV2',
    index: 0,
  },
  {
    path: '/home-tutorial',
    name: 'Home Tutorial',
    nameJa: 'ホーム 教程',
    index: 1,
    nested: true,
  },
  {
    path: '/question-book',
    name: 'Question Book',
    nameJa: '問題ノート',
    index: 2,
  },
  {
    path: '/question-chat',
    name: 'Question Chat',
    nameJa: 'AI質問',
    index: 3,
  },
  {
    path: '/settings',
    name: 'Settings',
    nameJa: '設定',
    index: 6,
  },
  {
    path: '/invite-friends',
    name: 'Invite Friends',
    nameJa: '友達招待',
    index: 8,
  },
  {
    path: '/camera',
    name: 'Camera',
    nameJa: 'カメラ',
    index: 9,
  },
  {
    path: '/question-report',
    name: 'Question Report',
    nameJa: '解説レポート',
    index: 10,
  },
  {
    path: '/camera-review',
    name: 'Camera Review',
    nameJa: '撮影確認',
    index: 11,
  },
];

export const secondaryScreens: ScreenRouteInfo[] = [
  {
    path: '/settings-unsubscribed',
    name: 'Settings Unsubscribed',
    nameJa: '設定（未購読）',
    index: 7,
    nested: true,
  },
];

export const onboardingScreens: ScreenRouteInfo[] = [
  {
    path: '/',
    name: 'Splash Screen',
    nameJa: '起動画面',
    index: 5,
  },
  {
    path: '/welcome',
    name: 'Welcome',
    nameJa: 'ようこそ',
    index: 7,
  },
  {
    path: '/intro',
    name: 'Feature Intro 1',
    nameJa: '機能紹介1',
    index: 8,
  },
  {
    path: '/intro2',
    name: 'Feature Intro 2',
    nameJa: '機能紹介2',
    index: 9,
  },
  {
    path: '/intro3',
    name: 'Feature Intro 3',
    nameJa: '機能紹介3',
    index: 10,
  },
  {
    path: '/intro4',
    name: 'Feature Intro 4',
    nameJa: '機能紹介4',
    index: 11,
  },
  {
    path: '/grade-empty',
    name: 'Grade Selection',
    nameJa: '学年選択',
    index: 12,
  },
  {
    path: '/grade',
    name: 'Grade Selection (Selected)',
    nameJa: '学年選択（選択済み）',
    index: 13,
  },
  {
    path: '/elementary-grade',
    name: 'Elementary Grade Detail',
    nameJa: '小学何年生',
    index: 14,
  },
  {
    path: '/user-type',
    name: 'User Type',
    nameJa: 'ご利用理由',
    index: 15,
  },
  {
    path: '/discovery-source',
    name: 'Discovery Source',
    nameJa: '発見場所',
    index: 16,
  },
  {
    path: '/success',
    name: 'Completion',
    nameJa: '完了画面',
    index: 17,
  },
  {
    path: '/paywall',
    name: 'Trial Paywall',
    nameJa: '無料トライアル',
    index: 18,
  },
  {
    path: '/paywall-b',
    name: 'Trial Paywall B',
    nameJa: '無料トライアルB',
    index: 19,
  },
];
