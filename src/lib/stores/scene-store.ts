import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface ArcadeMachine {
  id: string;
  name: string;
  modelUrl: string;
  category: string;
  price: number;
  features: string[];
}

interface SceneState {
  activeProduct: ArcadeMachine | null;
  loadedModels: Record<string, any>;
  isLoading: boolean;
  viewMode: '3d' | 'gallery' | 'specs';
  cameraPosition: [number, number, number];
  autoRotate: boolean;
  
  // Actions
  setActiveProduct: (product: ArcadeMachine | null) => void;
  addLoadedModel: (url: string, model: any) => void;
  setIsLoading: (loading: boolean) => void;
  setViewMode: (mode: '3d' | 'gallery' | 'specs') => void;
  setCameraPosition: (position: [number, number, number]) => void;
  setAutoRotate: (rotate: boolean) => void;
}

export const useSceneStore = create<SceneState>()(
  devtools(
    (set, get) => ({
      activeProduct: null,
      loadedModels: {},
      isLoading: false,
      viewMode: '3d',
      cameraPosition: [0, 0, 5],
      autoRotate: true,
      
      setActiveProduct: (product) => set({ activeProduct: product }),
      addLoadedModel: (url, model) => 
        set(state => ({ 
          loadedModels: { ...state.loadedModels, [url]: model } 
        })),
      setIsLoading: (loading) => set({ isLoading: loading }),
      setViewMode: (mode) => set({ viewMode: mode }),
      setCameraPosition: (position) => set({ cameraPosition: position }),
      setAutoRotate: (rotate) => set({ autoRotate: rotate }),
    }),
    { name: 'scene-store' }
  )
);