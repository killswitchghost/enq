import { useEffect } from 'react';
import styles from './_GradientSpheres.module.scss';

const GradientSpheres = () => {
  useEffect(() => {
    const gradients: string[] = [
      'linear-gradient(208deg, rgba(255, 40, 40, 1) 19.19%, rgba(255, 100, 40, 1) 30%, rgba(255, 248, 85, 1) 70.68%)',
      'linear-gradient(208deg, rgba(255, 248, 85, 1) 19.19%, rgba(128, 227, 242, 1) 40%, rgba(0, 227, 242, 1) 70.68%)',
      'linear-gradient(180deg, rgba(98, 67, 255, 1) 0%, rgba(150, 67, 255, 1) 50%, rgba(255, 40, 40, 1) 100%)',
      'linear-gradient(180deg, rgba(98, 67, 255, 1) 0%, rgba(50, 134, 255, 1) 50%, rgba(0, 227, 242, 1) 100%)',
      'linear-gradient(180deg, rgba(71, 155, 128, 1) 0%, rgba(0, 192, 227, 1) 50%, rgba(0, 227, 242, 1) 100%)'
    ];

    function random(min: number, max: number): number {
      return Math.random() * (max - min) + min;
    }

    function randomGradient(): string {
      return gradients[Math.floor(random(0, gradients.length))];
    }

    function createSphere() {
      const sphere = document.createElement('div');
      sphere.className = styles.gradientSphere;

      const size = random(300, 600);

      sphere.style.width = `${size}px`;
      sphere.style.height = `${size}px`;
      sphere.style.borderRadius = '50%';

      const pageHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      );

      sphere.style.left = `${random(0, window.innerWidth - size)}px`;
      sphere.style.top = `${random(0, pageHeight - size)}px`;

      const gradient = randomGradient();

      sphere.style.background = gradient;

      sphere.style.position = 'absolute';
      sphere.style.filter = `blur(${random(80, 100)}px)`;
      sphere.style.zIndex = '-1';

      document.body.appendChild(sphere);
    }

    for (let i = 0; i < 10; i++) {
      createSphere();
    }
  }, []);

  return null;
};

export default GradientSpheres;
