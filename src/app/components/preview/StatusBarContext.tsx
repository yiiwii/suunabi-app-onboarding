import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface StatusBarConfig {
  light: boolean;             // true = white text/icons (for dark backgrounds)
  hideHomeIndicator: boolean; // true = hide the bottom home indicator
}

const defaults: StatusBarConfig = { light: false, hideHomeIndicator: false };

interface ContextValue {
  config: StatusBarConfig;
  setConfig: (c: Partial<StatusBarConfig>) => void;
  resetConfig: () => void;
}

export const StatusBarContext = createContext<ContextValue>({
  config: defaults,
  setConfig: () => {},
  resetConfig: () => {},
});

export function StatusBarProvider({ children }: { children: ReactNode }) {
  const [config, setConfigState] = useState<StatusBarConfig>(defaults);

  function setConfig(c: Partial<StatusBarConfig>) {
    setConfigState(prev => ({ ...prev, ...c }));
  }

  function resetConfig() {
    setConfigState(defaults);
  }

  return (
    <StatusBarContext.Provider value={{ config, setConfig, resetConfig }}>
      {children}
    </StatusBarContext.Provider>
  );
}

/** Call inside a screen component to configure the status bar while mounted. */
export function useStatusBar(config: Partial<StatusBarConfig>) {
  const { setConfig, resetConfig } = useContext(StatusBarContext);
  useEffect(() => {
    setConfig(config);
    return () => resetConfig();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
