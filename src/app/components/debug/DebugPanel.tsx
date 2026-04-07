import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { CheckCircle2, ChevronDown, Circle, Navigation } from 'lucide-react';
import { DesignTokenPanel } from '../design-tokens/DesignTokenPanel';
import { allScreens, onboardingScreens, type ScreenRouteInfo } from './screen-groups';

function ScreenButton({
  route,
  currentPath,
  onNavigate,
}: {
  route: ScreenRouteInfo;
  currentPath: string;
  onNavigate: (path: string) => void;
}) {
  const isActive = route.path === currentPath;

  return (
    <button
      key={route.path}
      onClick={() => onNavigate(route.path)}
      className={`w-full text-left rounded-lg border px-3 py-2.5 transition-all ${
        isActive
          ? 'border-blue-500 bg-blue-50 shadow-sm'
          : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-gray-50'
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="mt-0.5">
          {isActive ? (
            <CheckCircle2 className="w-4 h-4 text-blue-600" />
          ) : (
            <Circle className="w-4 h-4 text-gray-400" />
          )}
        </div>
        <div className="flex-1 min-w-0">
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

/**
 * DebugPanel - Interactive navigation panel for onboarding development
 * 
 * Features:
 * - Shows current screen status with highlighting
 * - Quick navigation to any screen with one click
 * - Displays both English and Japanese screen names
 * - Shows route paths and step progress
 * - Real-time route tracking
 * 
 * Perfect for:
 * - Testing different user flows
 * - Demonstrating the onboarding to stakeholders
 * - Debugging screen transitions
 * - Skipping auto-transitions during development
 */
export function DebugPanel() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const [onboardingOpen, setOnboardingOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<'screens' | 'tokens'>('screens');

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const currentRoute = [...allScreens, ...onboardingScreens].find(r => r.path === currentPath);

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
            {allScreens.map((route) => (
              <ScreenButton key={route.path} route={route} currentPath={currentPath} onNavigate={handleNavigate} />
            ))}

            <div className="pt-3">
              <button
                onClick={() => setOnboardingOpen((value) => !value)}
                className="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-left"
              >
                <div>
                  <div className="text-sm font-semibold text-gray-900">Onboarding</div>
                  <div className="text-xs text-gray-500">{onboardingScreens.length} screens</div>
                </div>
                <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${onboardingOpen ? 'rotate-180' : ''}`} />
              </button>
              {onboardingOpen ? (
                <div className="mt-2 space-y-2">
                  {onboardingScreens.map((route) => (
                    <ScreenButton key={route.path} route={route} currentPath={currentPath} onNavigate={handleNavigate} />
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </>
      ) : (
        <div>
          <DesignTokenPanel />
        </div>
      )}
    </section>
  );
}
