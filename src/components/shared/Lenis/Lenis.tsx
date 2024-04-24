import { ReactLenis } from "@studio-freight/react-lenis";
import './_Lenis.scss';


function UseLenis({ children }: { children: React.ReactNode }) {

  const lenisOptions = {
  lerp: 0.075,
  smooth: true,
  smoothTouch: false,
  duration: 1,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}
export default UseLenis;

