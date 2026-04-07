import { ReactNode } from 'react';
import { MobilePreview } from './MobilePreview';
import { DebugPanel } from '../debug/DebugPanel';
import {
  IOS_DEVICE_HEIGHT,
  IOS_DEVICE_WIDTH,
  IOS_DYNAMIC_ISLAND_HEIGHT,
  IOS_DYNAMIC_ISLAND_TOP,
  IOS_DYNAMIC_ISLAND_WIDTH,
  IOS_FRAME_RADIUS,
  IOS_SCREEN_RADIUS,
} from './device';
import { DeviceSystemChrome } from './DeviceSystemChrome';

interface PreviewWithDebugProps {
  children: ReactNode;
  deviceWidth?: number;
  showFrame?: boolean;
  showDebug?: boolean;
}

/**
 * PreviewWithDebug - Mobile preview container with debug controls
 * 
 * Displays a mobile app in a device frame alongside a debug panel
 * for easy navigation and testing of different app states/screens.
 */
export function PreviewWithDebug({ 
  children, 
  deviceWidth = IOS_DEVICE_WIDTH,
  showFrame = true,
  showDebug = true 
}: PreviewWithDebugProps) {
  if (!showDebug) {
    return (
      <MobilePreview deviceWidth={deviceWidth} showFrame={showFrame}>
        {children}
      </MobilePreview>
    );
  }

  return (
    <div className="min-h-screen overflow-x-auto bg-gradient-to-br from-gray-100 via-slate-100 to-gray-200 px-4 py-6 sm:px-6 sm:py-8">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid grid-cols-1 gap-6 items-start xl:grid-cols-[auto_minmax(320px,1fr)] xl:gap-8">
          {/* Mobile Preview */}
          <div className="flex justify-center xl:justify-start">
            <div className="relative">
              {/* Device Frame */}
              {showFrame ? (
                <div 
                  className="relative bg-black p-3 shadow-2xl"
                  style={{ width: deviceWidth + 24, borderRadius: IOS_FRAME_RADIUS }}
                >
                  {/* Screen */}
                  <div 
                    className="bg-white overflow-hidden relative"
                    style={{ width: deviceWidth, height: IOS_DEVICE_HEIGHT, borderRadius: IOS_SCREEN_RADIUS }}
                  >
                    {/* Dynamic island */}
                    <div
                      className="absolute left-1/2 z-50 -translate-x-1/2 rounded-full bg-black"
                      style={{
                        top: IOS_DYNAMIC_ISLAND_TOP,
                        width: IOS_DYNAMIC_ISLAND_WIDTH,
                        height: IOS_DYNAMIC_ISLAND_HEIGHT,
                      }}
                    />
                    <DeviceSystemChrome />
                    
                    {/* Content */}
                    <div className="w-full h-full overflow-hidden">
                      {children}
                    </div>
                  </div>
                </div>
              ) : (
                <div style={{ width: deviceWidth, height: IOS_DEVICE_HEIGHT }} className="overflow-hidden">
                  {children}
                </div>
              )}

              {/* Device buttons */}
              {showFrame && (
                <>
                  <div className="absolute -right-1 top-32 h-12 w-1 rounded-l bg-black" />
                  <div className="absolute -right-1 top-48 h-20 w-1 rounded-l bg-black" />
                  <div className="absolute -left-1 top-40 h-14 w-1 rounded-r bg-black" />
                </>
              )}
            </div>
          </div>

          {/* Debug Panel */}
          <div className="flex justify-center xl:justify-start xl:sticky xl:top-8">
            <DebugPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
