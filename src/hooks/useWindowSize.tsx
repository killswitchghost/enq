
import { useEffect } from 'react';

type ViewSize = 'xxxl' | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';

const useWindowSize = (): void => {
  useEffect(() => {
    const updateBodyAttribute = (): void => {
      const viewSize: ViewSize = getWindowViewSize();
      document.body.setAttribute('data-view', viewSize);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateBodyAttribute);
      updateBodyAttribute();

      return (): void => {
        window.removeEventListener('resize', updateBodyAttribute);
        document.body.removeAttribute('data-view');
      };
    }
  }, []);
};

const getWindowViewSize = (): ViewSize => {
  if (typeof window === 'undefined') {
    return 'xs';
  }

  if (window.innerWidth >= 1600) return 'xxxl';
  if (window.innerWidth >= 1400) return 'xxl';
  if (window.innerWidth >= 1200) return 'xl';
  if (window.innerWidth >= 992) return 'lg';
  if (window.innerWidth >= 768) return 'md';
  if (window.innerWidth >= 576) return 'sm';
  return 'xs';
};

export default useWindowSize;
