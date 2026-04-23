import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { CheckCircle2, ChevronDown, Circle, GripVertical, Navigation } from 'lucide-react';
import { DesignTokenPanel } from '../design-tokens/DesignTokenPanel';
import { allScreens, onboardingScreens, secondaryScreens, type ScreenRouteInfo } from './screen-groups';

function reorderArray<T>(arr: T[], from: number, to: number): T[] {
  const result = [...arr];
  const [removed] = result.splice(from, 1);
  result.splice(to, 0, removed);
  return result;
}

function ScreenButton({
  route,
  currentPath,
  onNavigate,
  dragHandle,
}: {
  route: ScreenRouteInfo;
  currentPath: string;
  onNavigate: (path: string) => void;
  dragHandle?: React.ReactNode;
}) {
  const isActive = route.path === currentPath;

  return (
    <button
      onClick={() => onNavigate(route.path)}
      className={`w-full text-left rounded-lg border transition-all ${
        isActive
          ? 'border-blue-500 bg-blue-50 shadow-sm'
          : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-gray-50'
      }`}
    >
      <div className="flex items-center gap-1 px-2 py-2.5">
        {dragHandle}
        <div className="mt-0.5 shrink-0">
          {isActive ? (
            <CheckCircle2 className="w-4 h-4 text-blue-600" />
          ) : (
            <Circle className="w-4 h-4 text-gray-400" />
          )}
        </div>
        <div className="flex-1 min-w-0 pl-1">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold text-gray-500">#{route.index}</span>
            <span className={`text-sm font-semibold ${isActive ? 'text-blue-700' : 'text-gray-900'}`}>
              {route.name}
            </span>
          </div>
          <div className="mt-0.5 text-xs text-gray-600">{route.nameJa}</div>
        </div>
      </div>
    </button>
  );
}

// ── Drag-to-reorder list ──────────────────────────────────────────────────────
function DraggableScreenList({
  screens,
  onReorder,
  currentPath,
  onNavigate,
}: {
  screens: ScreenRouteInfo[];
  onReorder: (items: ScreenRouteInfo[]) => void;
  currentPath: string;
  onNavigate: (path: string) => void;
}) {
  const dragRef      = useRef<{ fromIndex: number } | null>(null);
  const overIndexRef = useRef<number | null>(null);
  const [fromIndex,  setFromIndex]  = useState<number | null>(null);
  const [overIndex,  setOverIndex]  = useState<number | null>(null);

  useEffect(() => {
    function onMove(e: PointerEvent) {
      if (!dragRef.current) return;
      const el   = document.elementFromPoint(e.clientX, e.clientY);
      const item = el?.closest('[data-drag-idx]') as HTMLElement | null;
      if (item) {
        const idx = parseInt(item.dataset.dragIdx!, 10);
        overIndexRef.current = idx;
        setOverIndex(idx);
      }
    }

    function onUp() {
      if (!dragRef.current) return;
      const from = dragRef.current.fromIndex;
      const to   = overIndexRef.current ?? from;
      dragRef.current      = null;
      overIndexRef.current = null;
      setFromIndex(null);
      setOverIndex(null);
      if (to !== from) onReorder(reorderArray(screens, from, to));
    }

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup',   onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup',   onUp);
    };
  }, [screens, onReorder]);

  // Live-preview the reordered list while dragging
  const displayScreens = useMemo(() => {
    if (fromIndex === null || overIndex === null || fromIndex === overIndex) return screens;
    return reorderArray(screens, fromIndex, overIndex);
  }, [screens, fromIndex, overIndex]);

  return (
    <div className="space-y-2">
      {displayScreens.map((route, displayIndex) => {
        const originalIndex = screens.indexOf(route);
        const isDragging    = fromIndex !== null && originalIndex === fromIndex;

        return (
          <div
            key={route.path}
            data-drag-idx={displayIndex}
            className={isDragging ? 'opacity-40' : undefined}
          >
            <ScreenButton
              route={route}
              currentPath={currentPath}
              onNavigate={isDragging ? () => {} : onNavigate}
              dragHandle={
                <div
                  className="touch-none cursor-grab active:cursor-grabbing flex items-center text-gray-300 hover:text-gray-500 shrink-0 px-0.5"
                  onPointerDown={e => {
                    e.preventDefault();
                    dragRef.current      = { fromIndex: originalIndex };
                    overIndexRef.current = originalIndex;
                    setFromIndex(originalIndex);
                    setOverIndex(originalIndex);
                  }}
                >
                  <GripVertical className="h-4 w-4" />
                </div>
              }
            />
          </div>
        );
      })}
    </div>
  );
}

// ── Main panel ────────────────────────────────────────────────────────────────
export function DebugPanel() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const currentSearch = new URLSearchParams(location.search);
  const currentQuestionBookEmpty = currentSearch.get('empty');
  const currentHomeTutorialStep = currentPath === '/home-tutorial' ? currentSearch.get('step') ?? '1' : null;

  const [activeTab,        setActiveTab]        = useState<'screens' | 'tokens'>('screens');
  const [onboardingOpen,   setOnboardingOpen]   = useState(true);
  const [orderedAll,       setOrderedAll]       = useState(allScreens);
  const [orderedOnboarding,setOrderedOnboarding]= useState(onboardingScreens);

  const handleNavigate = (path: string) => navigate(path);

  const currentRoute = [...orderedAll, ...orderedOnboarding, ...secondaryScreens].find(r => r.path === currentPath);
  const visibleAllScreens = orderedAll.filter(r => !r.nested);
  const selectedPrimaryScreen =
    currentPath === '/home-tutorial' || currentPath === '/home-v2'
      ? 'home-v2'
      : currentPath === '/question-book'
        ? 'question-book'
        : currentPath === '/settings' || currentPath === '/settings-unsubscribed'
          ? 'settings'
        : null;
  const secondaryPanelTitle =
    selectedPrimaryScreen === 'home-v2'
      ? 'Home V2 States'
      : selectedPrimaryScreen === 'question-book'
        ? 'Question Book States'
        : selectedPrimaryScreen === 'settings'
          ? 'Settings States'
        : 'Secondary States';
  const secondaryPanelSubtitle =
    selectedPrimaryScreen === 'home-v2'
      ? 'Tutorial flow variants linked to Home V2.'
      : selectedPrimaryScreen === 'question-book'
        ? 'Content and empty-state variants linked to Question Book.'
        : selectedPrimaryScreen === 'settings'
          ? 'Subscribed and unsubscribed variants linked to Settings.'
        : 'Select a screen that has secondary variants.';
  const isQuestionBookContent = currentPath === '/question-book' && currentQuestionBookEmpty === 'content';
  const isQuestionBookAllEmpty = currentPath === '/question-book' && currentQuestionBookEmpty !== 'content';
  const isSettingsSubscribed = currentPath === '/settings';
  const isSettingsUnsubscribed = currentPath === '/settings-unsubscribed';

  return (
    <section>
      <div className="sticky top-0 z-20 mb-5 rounded-[14px] bg-slate-100 p-1 shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
        <div className="grid grid-cols-2 gap-1">
          <button
            onClick={() => setActiveTab('screens')}
            className={`rounded-[10px] px-3 py-2 text-sm font-semibold transition ${
              activeTab === 'screens' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'
            }`}
          >
            Screens
          </button>
          <button
            onClick={() => setActiveTab('tokens')}
            className={`rounded-[10px] px-3 py-2 text-sm font-semibold transition ${
              activeTab === 'tokens' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'
            }`}
          >
            Design Tokens
          </button>
        </div>
      </div>

      {activeTab === 'screens' ? (
        <>
          <div className="mb-4 flex items-center gap-2">
            <Navigation className="h-5 w-5 text-blue-600" />
            <h2 className="text-lg font-bold text-gray-900">Screens</h2>
          </div>

          <div className="mb-5 rounded-xl border border-blue-200 bg-blue-50 p-4">
            <div className="mb-1 text-xs font-semibold text-blue-700">CURRENT SCREEN</div>
            <div className="font-bold text-gray-900">{currentRoute?.name || 'Unknown'}</div>
            <div className="text-sm text-gray-600">{currentRoute?.nameJa}</div>
            <div className="mt-2 text-xs text-gray-500">
              Path: <code className="rounded bg-white px-1 py-0.5">{currentPath}</code>
            </div>
            <div className="mt-1 text-xs text-gray-500">
              Step: {currentRoute?.index ?? 0} of {allScreens.length + onboardingScreens.length}
            </div>
          </div>
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_336px]">
            <div className="space-y-2">
              <div className="mb-3 text-xs font-semibold text-gray-500">ALL SCREENS</div>
              <DraggableScreenList
                screens={visibleAllScreens}
                onReorder={setOrderedAll}
                currentPath={currentPath}
                onNavigate={handleNavigate}
              />

              <div className="pt-3">
                <button
                  onClick={() => setOnboardingOpen(v => !v)}
                  className="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-left"
                >
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Onboarding</div>
                    <div className="text-xs text-gray-500">{orderedOnboarding.length} screens</div>
                  </div>
                  <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${onboardingOpen ? 'rotate-180' : ''}`} />
                </button>
                {onboardingOpen && (
                  <div className="mt-2">
                    <DraggableScreenList
                      screens={orderedOnboarding}
                      onReorder={setOrderedOnboarding}
                      currentPath={currentPath}
                      onNavigate={handleNavigate}
                    />
                  </div>
                )}
              </div>
            </div>

            <aside className="lg:sticky lg:top-0 lg:self-start">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="mb-4">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                    Secondary panel
                  </div>
                  <div className="mt-1 text-lg font-bold text-slate-900">
                    {secondaryPanelTitle}
                  </div>
                  <div className="mt-1 text-sm leading-6 text-slate-500">
                    {secondaryPanelSubtitle}
                  </div>
                </div>

                {selectedPrimaryScreen === 'home-v2' ? (
                  <div className="space-y-3">
                    <button
                      onClick={() => navigate('/home-v2')}
                      className={`flex items-center justify-between rounded-xl border px-3 py-2.5 text-left transition ${
                        currentPath === '/home-v2'
                          ? 'border-sky-500 bg-sky-50 shadow-sm'
                          : 'border-slate-200 bg-slate-50 hover:border-sky-300 hover:bg-slate-100'
                      }`}
                    >
                      <div>
                        <div className="text-sm font-semibold text-slate-900">Default</div>
                        <div className="text-xs text-slate-500">Home V2 default state</div>
                      </div>
                      <span className={`rounded-full px-2 py-1 text-[11px] font-semibold ${currentPath === '/home-v2' ? 'bg-sky-100 text-sky-700' : 'bg-slate-100 text-slate-500'}`}>
                        {currentPath === '/home-v2' ? 'Active' : 'Go'}
                      </span>
                    </button>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                      <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                        Home Tutorial Flow
                      </div>
                      <div className="flex flex-col gap-2">
                        {[
                          { label: 'Step 1', query: '1', hint: 'Full dark overlay + tooltip' },
                          { label: 'Step 2', query: '2', hint: 'Callout over the capture card' },
                          { label: 'Step 3', query: '3', hint: 'Final prompt state' },
                        ].map((item) => {
                          const isActive = currentPath === '/home-tutorial' && currentHomeTutorialStep === item.query;
                          return (
                            <button
                              key={item.query}
                              onClick={() => navigate(`/home-tutorial?step=${item.query}`)}
                              className={`flex items-center justify-between rounded-lg border px-3 py-2 text-left transition ${
                                isActive
                                  ? 'border-sky-500 bg-white shadow-sm'
                                  : 'border-slate-200 bg-white hover:border-sky-300 hover:bg-slate-50'
                              }`}
                            >
                              <div>
                                <div className="text-sm font-semibold text-slate-900">{item.label}</div>
                                <div className="text-xs text-slate-500">{item.hint}</div>
                              </div>
                              <span className={`rounded-full px-2 py-1 text-[11px] font-semibold ${isActive ? 'bg-sky-100 text-sky-700' : 'bg-slate-100 text-slate-500'}`}>
                                {isActive ? 'Active' : 'Go'}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ) : selectedPrimaryScreen === 'question-book' ? (
                  <div className="space-y-3">
                    <button
                      onClick={() => navigate('/question-book?empty=content')}
                      className={`flex items-center justify-between rounded-xl border px-3 py-2.5 text-left transition ${
                        isQuestionBookContent
                          ? 'border-emerald-500 bg-emerald-50 shadow-sm'
                          : 'border-slate-200 bg-slate-50 hover:border-emerald-300 hover:bg-slate-100'
                      }`}
                    >
                      <div>
                        <div className="text-sm font-semibold text-slate-900">Content</div>
                        <div className="text-xs text-slate-500">Question Book with cards</div>
                      </div>
                      <span className={`rounded-full px-2 py-1 text-[11px] font-semibold ${isQuestionBookContent ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
                        {isQuestionBookContent ? 'Active' : 'Go'}
                      </span>
                    </button>

                    <button
                      onClick={() => navigate('/question-book?empty=all')}
                      className={`flex items-center justify-between rounded-xl border px-3 py-2.5 text-left transition ${
                        isQuestionBookAllEmpty
                          ? 'border-emerald-500 bg-emerald-50 shadow-sm'
                          : 'border-slate-200 bg-slate-50 hover:border-emerald-300 hover:bg-slate-100'
                      }`}
                    >
                      <div>
                        <div className="text-sm font-semibold text-slate-900">All Empty</div>
                        <div className="text-xs text-slate-500">Question Book fully empty page</div>
                      </div>
                      <span className={`rounded-full px-2 py-1 text-[11px] font-semibold ${isQuestionBookAllEmpty ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
                        {isQuestionBookAllEmpty ? 'Active' : 'Go'}
                      </span>
                    </button>
                  </div>
                ) : selectedPrimaryScreen === 'settings' ? (
                  <div className="space-y-3">
                    <button
                      onClick={() => navigate('/settings')}
                      className={`flex items-center justify-between rounded-xl border px-3 py-2.5 text-left transition ${
                        isSettingsSubscribed
                          ? 'border-sky-500 bg-sky-50 shadow-sm'
                          : 'border-slate-200 bg-slate-50 hover:border-sky-300 hover:bg-slate-100'
                      }`}
                    >
                      <div>
                        <div className="text-sm font-semibold text-slate-900">Subscribed</div>
                        <div className="text-xs text-slate-500">Standard settings screen</div>
                      </div>
                      <span className={`rounded-full px-2 py-1 text-[11px] font-semibold ${isSettingsSubscribed ? 'bg-sky-100 text-sky-700' : 'bg-slate-100 text-slate-500'}`}>
                        {isSettingsSubscribed ? 'Active' : 'Go'}
                      </span>
                    </button>

                    <button
                      onClick={() => navigate('/settings-unsubscribed')}
                      className={`flex items-center justify-between rounded-xl border px-3 py-2.5 text-left transition ${
                        isSettingsUnsubscribed
                          ? 'border-sky-500 bg-sky-50 shadow-sm'
                          : 'border-slate-200 bg-slate-50 hover:border-sky-300 hover:bg-slate-100'
                      }`}
                    >
                      <div>
                        <div className="text-sm font-semibold text-slate-900">Unsubscribed</div>
                        <div className="text-xs text-slate-500">Paywall prompt settings state</div>
                      </div>
                      <span className={`rounded-full px-2 py-1 text-[11px] font-semibold ${isSettingsUnsubscribed ? 'bg-sky-100 text-sky-700' : 'bg-slate-100 text-slate-500'}`}>
                        {isSettingsUnsubscribed ? 'Active' : 'Go'}
                      </span>
                    </button>
                  </div>
                ) : (
                  <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-500">
                    This screen does not have secondary states.
                  </div>
                )}
              </div>
            </aside>
          </div>
        </>
      ) : (
        <DesignTokenPanel />
      )}
    </section>
  );
}
