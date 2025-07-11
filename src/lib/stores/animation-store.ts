import { create } from 'zustand';

interface AnimationState {
  isReady: boolean;
  currentAnimation: string | null;
  animationProgress: number;
  
  // Actions
  setIsReady: (ready: boolean) => void;
  setCurrentAnimation: (animation: string | null) => void;
  setAnimationProgress: (progress: number) => void;
}

export const useAnimationStore = create<AnimationState>((set) => ({
  isReady: false,
  currentAnimation: null,
  animationProgress: 0,
  
  setIsReady: (ready) => set({ isReady: ready }),
  setCurrentAnimation: (animation) => set({ currentAnimation: animation }),
  setAnimationProgress: (progress) => set({ animationProgress: progress }),
}));