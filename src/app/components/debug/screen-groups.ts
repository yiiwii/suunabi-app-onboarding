export interface ScreenRouteInfo {
  path: string;
  name: string;
  nameJa: string;
  index: number;
}

export const allScreens: ScreenRouteInfo[] = [
  {
    path: '/home-v2',
    name: 'Home V2',
    nameJa: 'ホームV2',
    index: 0,
  },
  {
    path: '/question-book',
    name: 'Question Book',
    nameJa: '問題ノート',
    index: 1,
  },
  {
    path: '/settings',
    name: 'Settings',
    nameJa: '設定',
    index: 5,
  },
  {
    path: '/settings-unsubscribed',
    name: 'Settings Unsubscribed',
    nameJa: '設定（未購読）',
    index: 6,
  },
  {
    path: '/invite-friends',
    name: 'Invite Friends',
    nameJa: '友達招待',
    index: 7,
  },
  {
    path: '/camera',
    name: 'Camera',
    nameJa: 'カメラ',
    index: 8,
  },
  {
    path: '/question-report',
    name: 'Question Report',
    nameJa: '解説レポート',
    index: 9,
  },
  {
    path: '/camera-review',
    name: 'Camera Review',
    nameJa: '撮影確認',
    index: 10,
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
    index: 6,
  },
  {
    path: '/intro',
    name: 'Feature Intro 1',
    nameJa: '機能紹介1',
    index: 7,
  },
  {
    path: '/intro2',
    name: 'Feature Intro 2',
    nameJa: '機能紹介2',
    index: 8,
  },
  {
    path: '/intro3',
    name: 'Feature Intro 3',
    nameJa: '機能紹介3',
    index: 9,
  },
  {
    path: '/intro4',
    name: 'Feature Intro 4',
    nameJa: '機能紹介4',
    index: 10,
  },
  {
    path: '/grade-empty',
    name: 'Grade Selection',
    nameJa: '学年選択',
    index: 11,
  },
  {
    path: '/grade',
    name: 'Grade Selection (Selected)',
    nameJa: '学年選択（選択済み）',
    index: 12,
  },
  {
    path: '/elementary-grade',
    name: 'Elementary Grade Detail',
    nameJa: '小学何年生',
    index: 13,
  },
  {
    path: '/user-type',
    name: 'User Type',
    nameJa: 'ご利用理由',
    index: 14,
  },
  {
    path: '/discovery-source',
    name: 'Discovery Source',
    nameJa: '発見場所',
    index: 15,
  },
  {
    path: '/success',
    name: 'Completion',
    nameJa: '完了画面',
    index: 16,
  },
  {
    path: '/paywall',
    name: 'Trial Paywall',
    nameJa: '無料トライアル',
    index: 17,
  },
  {
    path: '/paywall-b',
    name: 'Trial Paywall B',
    nameJa: '無料トライアルB',
    index: 18,
  },
];
