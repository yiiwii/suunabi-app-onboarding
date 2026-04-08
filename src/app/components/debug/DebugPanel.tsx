import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { CheckCircle2, ChevronDown, Circle, GripVertical, Navigation } from 'lucide-react';
import { DesignTokenPanel } from '../design-tokens/DesignTokenPanel';
import { allScreens, onboardingScreens, type ScreenRouteInfo } from './screen-groups';

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

  const [activeTab,        setActiveTab]        = useState<'screens' | 'tokens'>('screens');
  const [onboardingOpen,   setOnboardingOpen]   = useState(true);
  const [orderedAll,       setOrderedAll]       = useState(allScreens);
  const [orderedOnboarding,setOrderedOnboarding]= useState(onboardingScreens);

  const handleNavigate = (path: string) => navigate(path);

  const currentRoute = [...orderedAll, ...orderedOnboarding].find(r => r.path === currentPath);

  return (
    <section>
      <div className="mb-5 rounded-[14px] bg-slate-100 p-1">
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

          <div className="space-y-2">
            <div className="mb-3 text-xs font-semibold text-gray-500">ALL SCREENS</div>
            <DraggableScreenList
              screens={orderedAll}
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
        </>
      ) : (
        <DesignTokenPanel />
      )}
    </section>
  );
}
