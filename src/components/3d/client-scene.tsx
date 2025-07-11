'use client';

import dynamic from 'next/dynamic';
import { ComponentProps } from 'react';

// Import dynamique pour éviter les erreurs SSR
const SceneCanvas = dynamic(
  () => import('./scene-canvas').then(mod => ({ default: mod.SceneCanvas })),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-full glassmorphism rounded-lg flex items-center justify-center">
        <div className="text-4xl animate-spin">🎮</div>
      </div>
    )
  }
);

export function ClientScene(props: ComponentProps<typeof SceneCanvas>) {
  return <SceneCanvas {...props} />;
}