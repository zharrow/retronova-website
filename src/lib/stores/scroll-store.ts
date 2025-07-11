import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface ScrollState {
  scrollY: number;
  activeSection: number;
  isScrolling: boolean;
  sections: string[];
  
  // Actions
  setScrollY: (y: number) => void;
  setActiveSection: (section: number) => void;
  setIsScrolling: (scrolling: boolean) => void;
  setSections: (sections: string[]) => void;
  goToSection: (sectionIndex: number) => void;
}

export const useScrollStore = create<ScrollState>()(
  devtools(
    (set, get) => ({
      scrollY: 0,
      activeSection: 0,
      isScrolling: false,
      sections: ['hero', 'concept', 'products', 'features', 'contact'],
      
      setScrollY: (y: number) => set({ scrollY: y }),
      setActiveSection: (section: number) => set({ activeSection: section }),
      setIsScrolling: (scrolling: boolean) => set({ isScrolling: scrolling }),
      setSections: (sections: string[]) => set({ sections }),
      
      goToSection: (sectionIndex: number) => {
        const element = document.getElementById(get().sections[sectionIndex]);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          set({ activeSection: sectionIndex });
        }
      },
    }),
    { name: 'scroll-store' }
  )
);