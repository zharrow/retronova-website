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
      
      setActiveProduct: (product) => {
        const current = get().activeProduct;
        if (current !== product) {
          set({ activeProduct: product });
        }
      },
      
      addLoadedModel: (url, model) => 
        set(state => ({ 
          loadedModels: { ...state.loadedModels, [url]: model } 
        })),
        
      setIsLoading: (loading) => {
        const current = get().isLoading;
        if (current !== loading) {
          set({ isLoading: loading });
        }
      },
      
      setViewMode: (mode) => {
        const current = get().viewMode;
        if (current !== mode) {
          set({ viewMode: mode });
        }
      },
      
      setCameraPosition: (position) => {
        const current = get().cameraPosition;
        // Éviter les mises à jour si la position n'a pas vraiment changé
        if (current[0] !== position[0] || current[1] !== position[1] || current[2] !== position[2]) {
          set({ cameraPosition: position });
        }
      },
      
      setAutoRotate: (rotate) => {
        const current = get().autoRotate;
        if (current !== rotate) {
          set({ autoRotate: rotate });
        }
      },
    }),
    { name: 'scene-store' }
  )
);