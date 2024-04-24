declare module '@studio-freight/lenis' {
    interface Lenis {
        raf(): void;
        destroy(): void;
    }
    export interface LenisOptions {
        smooth?: boolean;
        lerp?: number;
        smoothTouch?: boolean;
        duration?: number;
        easing?: (t: number) => number;
        direction?: 'vertical' | 'horizontal';
        touchMultiplier?: number;
    }
    export default class Lenis {
        constructor(options?: LenisOptions);
    }
}
