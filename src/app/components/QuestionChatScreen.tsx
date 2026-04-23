import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useLocation, useNavigate } from 'react-router';

import { IOS_SAFE_AREA_BOTTOM, IOS_SAFE_AREA_TOP } from './preview/device';

import imgQuestionChatGif from '../../assets/question-chat-hero.gif';

const NAV_HEIGHT = 60;
const STATUS_BAR_HEIGHT = IOS_SAFE_AREA_TOP;
const CONTENT_TOP = STATUS_BAR_HEIGHT + NAV_HEIGHT;
const COMPOSER_HEIGHT = 82 + IOS_SAFE_AREA_BOTTOM;
const COMPOSER_BASE_BOTTOM = IOS_SAFE_AREA_BOTTOM + 8;
const KEYBOARD_GAP = 10;
const KEYBOARD_HEIGHT = 284 + IOS_SAFE_AREA_BOTTOM;

type ChatMessage =
  | { id: string; role: 'user'; text: string }
  | { id: string; role: 'teacher'; text: string };

function NavBar({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="absolute inset-x-0 z-20 flex items-end bg-[var(--token-color-background-primary,#f2fbff)]"
      style={{ top: STATUS_BAR_HEIGHT, height: NAV_HEIGHT }}
    >
      <div className="flex h-[60px] w-full items-center px-[10px]">
        <button
          onClick={onClose}
          className="flex size-[40px] items-center justify-center rounded-full"
          type="button"
          aria-label="戻る"
        >
          <span className="font-['Rco',sans-serif] text-[24px] leading-none text-[var(--token-color-black-80,#0d0e12cc)]">
            {'\uE92A'}
          </span>
        </button>

        <div className="flex-1 text-center font-['Hiragino_Sans',sans-serif] text-[18px] font-semibold leading-none text-[var(--token-color-black-80,#0d0e12cc)]">
          すう先生に質問
        </div>

        <button
          className="flex size-[40px] items-center justify-center rounded-full"
          type="button"
          aria-hidden="true"
          tabIndex={-1}
        >
          <span className="font-['Rco',sans-serif] text-[24px] leading-none text-[var(--token-color-black-80,#0d0e12cc)] opacity-0">
            {'\uE92A'}
          </span>
        </button>
      </div>
    </div>
  );
}

function KeyboardSheet() {
  const rows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
  ];

  return (
    <div className="relative h-full w-full rounded-t-[24px] bg-[rgba(255,255,255,0.98)] shadow-[0_-14px_32px_rgba(51,155,201,0.12)]">
      <div className="flex justify-center pt-[8px]">
        <div className="h-[4px] w-[40px] rounded-full bg-[rgba(13,14,18,0.14)]" />
      </div>

      <div className="px-[10px] pt-[10px]">
        <div className="flex gap-[8px] overflow-hidden">
          {['式', '答案', '説明'].map((item) => (
            <button
              key={item}
              type="button"
              className="h-[30px] rounded-full bg-[rgba(51,155,201,0.08)] px-[12px] font-['Hiragino_Sans',sans-serif] text-[12px] leading-none text-[var(--token-color-accent-primary-shadow,#0371a4)]"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-[12px] space-y-[8px]">
          {rows.map((row, rowIndex) => (
            <div
              key={row[0]}
              className={`flex justify-center gap-[6px] ${rowIndex === 2 ? 'px-[22px]' : ''}`}
            >
              {row.map((key) => (
                <button
                  key={key}
                  type="button"
                  className="flex h-[44px] min-w-0 flex-1 items-center justify-center rounded-[12px] border border-[rgba(13,14,18,0.08)] bg-[rgba(13,14,18,0.03)] font-['Hiragino_Sans',sans-serif] text-[17px] leading-none text-[var(--token-color-black-80,#0d0e12cc)]"
                >
                  {key}
                </button>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-[8px] flex items-center gap-[8px]">
          <button
            type="button"
            className="h-[44px] w-[64px] rounded-[12px] border border-[rgba(13,14,18,0.08)] bg-[rgba(13,14,18,0.03)] font-['Hiragino_Sans',sans-serif] text-[13px] leading-none text-[var(--token-color-black-80,#0d0e12cc)]"
          >
            123
          </button>
          <button
            type="button"
            className="h-[44px] flex-1 rounded-[12px] border border-[rgba(13,14,18,0.08)] bg-[rgba(13,14,18,0.03)] font-['Hiragino_Sans',sans-serif] text-[13px] leading-none text-[var(--token-color-black-80,#0d0e12cc)]"
          >
            空白
          </button>
          <button
            type="button"
            className="h-[44px] w-[64px] rounded-[12px] bg-[var(--token-color-accent-primary,#339bc9)] font-['Hiragino_Sans',sans-serif] text-[13px] leading-none text-[var(--token-color-background-secondary,#fff)]"
          >
            改行
          </button>
        </div>
      </div>
    </div>
  );
}

function UserBubble({ text }: { text: string }) {
  return (
    <div className="flex justify-end">
      <div className="max-w-[292px] rounded-[18px] rounded-br-[4px] bg-[var(--token-color-accent-primary,#339bc9)] px-[14px] py-[12px] text-[var(--token-color-background-secondary,#fff)]">
        <p className="font-['Hiragino_Sans',sans-serif] text-[16px] leading-[1.5]">{text}</p>
      </div>
    </div>
  );
}

function TeacherText({ text }: { text: string }) {
  return (
    <div className="flex justify-start">
      <p className="max-w-[300px] font-['Hiragino_Sans',sans-serif] text-[16px] leading-[1.5] text-[var(--token-color-accent-primary-shadow,#0371a4)]">
        {text}
      </p>
    </div>
  );
}

function TeacherIntro() {
  return (
    <div className="pt-[4px] text-center">
      <p className="font-['Hiragino_Sans',sans-serif] text-[16px] font-semibold leading-[1.4] text-[var(--token-color-accent-primary-shadow,#0371a4)]">
        わからないところを教えてください。
      </p>
      <p className="mt-[6px] font-['Hiragino_Sans',sans-serif] text-[14px] leading-[1.5] text-[rgba(3,113,164,0.72)]">
        問題の式や途中式をそのまま送っても大丈夫です。
      </p>
    </div>
  );
}

export function QuestionChatComposer({
  keyboardOpen,
  setKeyboardOpen,
  composerRef,
  onSend,
}: {
  keyboardOpen: boolean;
  setKeyboardOpen: (open: boolean) => void;
  composerRef: React.RefObject<HTMLDivElement | null>;
  onSend: (text: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState('');
  const hasMessage = message.trim().length > 0;

  function focusInput() {
    inputRef.current?.focus();
    setKeyboardOpen(true);
  }

  function handleSend() {
    const text = message.trim();
    if (!text) return;
    onSend(text);
    setMessage('');
    setKeyboardOpen(true);
    inputRef.current?.focus();
  }

  return (
    <div className="bg-gradient-to-t from-[rgba(242,251,255,0.98)] from-[66%] to-[rgba(242,251,255,0)] pt-[8px]">
      <div className="px-[20px]">
        <div
          ref={composerRef}
          className="flex h-[48px] items-center rounded-full border border-[var(--token-color-accent-primary,#339bc9)] bg-[var(--token-color-background-secondary,#fff)] pl-[16px] pr-[6px]"
          role="group"
          aria-label="質問入力欄"
          onPointerDownCapture={(event) => {
            if (event.target === event.currentTarget) {
              focusInput();
            }
          }}
        >
          <div className="relative flex min-w-0 flex-1 items-center gap-[6px]">
            <input
              ref={inputRef}
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
                setKeyboardOpen(true);
              }}
              onFocus={() => setKeyboardOpen(true)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' && !event.nativeEvent.isComposing) {
                  event.preventDefault();
                  handleSend();
                }
              }}
              onBlur={() => {
                window.setTimeout(() => {
                  if (!composerRef.current?.contains(document.activeElement)) {
                    setKeyboardOpen(false);
                  }
                }, 0);
              }}
              aria-label="質問内容"
              placeholder="すう先生に質問する"
              className="min-w-0 flex-1 bg-transparent font-['Hiragino_Sans',sans-serif] text-[16px] leading-none text-[var(--token-color-accent-primary-shadow,#0371a4)] outline-none placeholder:text-[rgba(3,113,164,0.4)]"
            />
          </div>

          <button
            type="button"
            className={`relative z-10 flex size-[34px] items-center justify-center rounded-full transition-colors ${
              hasMessage
                ? 'bg-[var(--token-color-accent-primary,#339bc9)] text-[var(--token-color-background-secondary,#fff)]'
                : 'bg-[rgba(13,14,18,0.08)] text-[rgba(13,14,18,0.24)]'
            }`}
            aria-label="送信"
            disabled={!hasMessage}
            onClick={handleSend}
          >
            <span className="font-['Rco',sans-serif] text-[24px] leading-none">
              {'\uE96F'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function QuestionChatScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isClosing, setIsClosing] = useState(false);
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const composerRef = useRef<HTMLDivElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);
  const transitionState = location.state as { transition?: string } | null;
  const shouldEnterFromRight = transitionState?.transition === 'push-from-right';

  useEffect(() => {
    const node = messagesRef.current;
    if (!node) return;

    window.requestAnimationFrame(() => {
      node.scrollTo({
        top: node.scrollHeight,
        behavior: 'smooth',
      });
    });
  }, [keyboardOpen, messages]);

  function handleClose() {
    if (isClosing) return;
    setIsClosing(true);
  }

  function handleSend(text: string) {
    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text,
    };
    const teacherMessage: ChatMessage = {
      id: `teacher-${Date.now() + 1}`,
      role: 'teacher',
      text: 'もちろんです。式を送ってくれたら、順番に説明します。',
    };
    setMessages((current) => [...current, userMessage, teacherMessage]);
  }

  return (
    <motion.div
      className="relative h-full w-full overflow-hidden bg-[var(--token-color-background-primary,#f2fbff)]"
      initial={shouldEnterFromRight ? { x: '100%' } : false}
      animate={isClosing ? { x: '100%' } : { x: 0 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      onAnimationComplete={() => {
        if (isClosing) {
          navigate('/home-v2', { replace: true });
        }
      }}
    >
      <NavBar onClose={handleClose} />

      <div
        ref={messagesRef}
        className="absolute inset-x-0 overflow-y-auto"
        style={{
          top: CONTENT_TOP,
          bottom:
            (keyboardOpen
              ? KEYBOARD_HEIGHT + KEYBOARD_GAP
              : COMPOSER_BASE_BOTTOM) + COMPOSER_HEIGHT,
        }}
      >
        <div className="flex flex-col gap-[14px] px-[20px] pb-[24px] pt-[28px]">
          {messages.length === 0 ? (
            <>
              <div className="flex justify-center">
                <img
                  src={imgQuestionChatGif}
                  alt=""
                  className="h-[148px] w-[148px] rounded-[28px] object-cover"
                />
              </div>

              <TeacherIntro />
            </>
          ) : (
            <>
              <TeacherIntro />
              <div className="flex flex-col gap-[12px] pt-[6px]">
                {messages.map((message) =>
                  message.role === 'user' ? (
                    <UserBubble key={message.id} text={message.text} />
                  ) : (
                    <TeacherText key={message.id} text={message.text} />
                  ),
                )}
              </div>
            </>
          )}
        </div>
      </div>

      <motion.div
        className="absolute inset-x-0 z-20"
        animate={{
          bottom: keyboardOpen ? KEYBOARD_HEIGHT + KEYBOARD_GAP : COMPOSER_BASE_BOTTOM,
        }}
        transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
      >
        <QuestionChatComposer
          keyboardOpen={keyboardOpen}
          setKeyboardOpen={setKeyboardOpen}
          composerRef={composerRef}
          onSend={handleSend}
        />
      </motion.div>

      <AnimatePresence>
        {keyboardOpen && (
          <motion.div
            className="absolute inset-x-0 bottom-0 z-30"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            style={{ height: KEYBOARD_HEIGHT }}
          >
            <KeyboardSheet />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
