export type QuestionStatus = 'mastered' | 'pending';

export interface QuestionEntry {
  id: string;
  problem: string;
  capturedTime: string;
  capturedDate: string;
  status: QuestionStatus;
  favorited: boolean;
}

export interface CategoryFolder {
  id: string;
  name: string;
  bgColor: string;
  iconColor: string;
  questions: QuestionEntry[];
}

export const categoryFolders: CategoryFolder[] = [
  {
    id: 'quadratic',
    name: '一元二次方程',
    bgColor: '#e3f4fd',
    iconColor: '#339bc9',
    questions: [
      { id: 'q1', problem: '請分解這個一元二次方程 x²+2x+4', capturedTime: '16:38', capturedDate: '今日', status: 'mastered', favorited: true },
      { id: 'q2', problem: '求解 x²-5x+6=0', capturedTime: '15:22', capturedDate: '今日', status: 'mastered', favorited: false },
      { id: 'q3', problem: '化簡 (x+2)(x-3)', capturedTime: '09:15', capturedDate: '今日', status: 'pending', favorited: false },
      { id: 'q4', problem: '解方程 2x²+3x-2=0', capturedTime: '20:30', capturedDate: '昨日', status: 'pending', favorited: false },
    ],
  },
  {
    id: 'linear3',
    name: '三元一次方程',
    bgColor: '#fff3e0',
    iconColor: '#e8a030',
    questions: [
      { id: 'q5', problem: '請分解這個一元三次方程 x²+2x+4', capturedTime: '14:05', capturedDate: '今日', status: 'mastered', favorited: true },
      { id: 'q6', problem: '請分解這個一元三次方程 x²+2x+4', capturedTime: '13:40', capturedDate: '今日', status: 'pending', favorited: false },
      { id: 'q7', problem: '請分解這個一元三次方程 x²+2x+4', capturedTime: '11:20', capturedDate: '今日', status: 'pending', favorited: false },
    ],
  },
  {
    id: 'linear2',
    name: '二元一次方程',
    bgColor: '#f3e8ff',
    iconColor: '#9c5fc7',
    questions: [
      { id: 'q8', problem: '請分解這個一元二次方程 x²+2x+4', capturedTime: '16:00', capturedDate: '昨日', status: 'pending', favorited: false },
      { id: 'q9', problem: '求解連立方程式 2x+y=5、x-y=1', capturedTime: '14:30', capturedDate: '昨日', status: 'pending', favorited: false },
    ],
  },
  {
    id: 'combinations',
    name: '排列組合題',
    bgColor: '#e8f5e9',
    iconColor: '#3aa86f',
    questions: [
      { id: 'q10', problem: '有一個特別長的應用題，內容分成三段，第一段描述有一點長。', capturedTime: '10:00', capturedDate: '3月16日', status: 'pending', favorited: false },
    ],
  },
  {
    id: 'algebra',
    name: '代數題',
    bgColor: '#fce4ec',
    iconColor: '#d85a7a',
    questions: [
      { id: 'q11', problem: '求解 1+2+3^(23+12) = ?', capturedTime: '18:45', capturedDate: '3月15日', status: 'mastered', favorited: false },
      { id: 'q12', problem: '求解 13+2+3^(12/2) = ?', capturedTime: '17:30', capturedDate: '3月15日', status: 'pending', favorited: false },
      { id: 'q13', problem: '求解 3^(23+12) × 24 +(12+5) × 10 -23 = ?', capturedTime: '16:00', capturedDate: '3月15日', status: 'pending', favorited: false },
    ],
  },
];

export function getFavorites(): QuestionEntry[] {
  return categoryFolders.flatMap((c) => c.questions).filter((q) => q.favorited);
}
