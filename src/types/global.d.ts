/// <reference types="react" />
/// <reference types="react-dom" />

import type Lenis from '@studio-freight/lenis';

declare global {
  interface Window {
    lenis?: Lenis;
    scrollToTop?: () => void;
  }
}

// Augmenter les types React pour suppressHydrationWarning
declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    suppressHydrationWarning?: boolean;
  }
}

// Types pour les animations Three.js
declare module '@react-three/fiber' {
  interface ThreeElements {
    orbitControls: any;
  }
}

export {};