import { useEffect } from 'react';
import styles from './_GradientSpheres.module.scss';

const GradientSpheres = () => {
  useEffect(() => {
    const gradients: string[] = [
      'linear-gradient(208deg, rgba(255, 40, 40, 1) 19.19%, rgba(255, 55, 40, 1) 22%, rgba(255, 70, 40, 1) 25%, rgba(255, 85, 40, 1) 27%, rgba(255, 100, 40, 1) 30%, rgba(255, 140, 62, 1) 40%, rgba(255, 180, 85, 1) 50%, rgba(255, 214, 85, 1) 60%, rgba(255, 248, 85, 1) 70.68%)',
      'linear-gradient(208deg, rgba(255, 248, 85, 1) 19.19%, rgba(232, 243, 124, 1) 25%, rgba(210, 238, 164, 1) 30%, rgba(169, 233, 203, 1) 35%, rgba(128, 227, 242, 1) 40%, rgba(96, 227, 242, 1) 47%, rgba(64, 227, 242, 1) 55%, rgba(32, 227, 242, 1) 63%, rgba(0, 227, 242, 1) 70.68%)',
      'linear-gradient(180deg, rgba(98, 67, 255, 1) 0%, rgba(109, 67, 255, 1) 12%, rgba(120, 67, 255, 1) 25%, rgba(135, 67, 255, 1) 37%, rgba(150, 67, 255, 1) 50%, rgba(175, 60, 140, 1) 62%, rgba(200, 53, 120, 1) 75%, rgba(227, 46, 80, 1) 87%, rgba(255, 40, 40, 1) 100%)',
      'linear-gradient(180deg, rgba(98, 67, 255, 1) 0%, rgba(85, 84, 255, 1) 12%, rgba(74, 101, 255, 1) 25%, rgba(62, 117, 255, 1) 37%, rgba(50, 134, 255, 1) 50%, rgba(37, 157, 251, 1) 62%, rgba(25, 180, 248, 1) 75%, rgba(12, 204, 245, 1) 87%, rgba(0, 227, 242, 1) 100%)',
      'linear-gradient(180deg, rgba(71, 155, 128, 1) 0%, rgba(53, 164, 153, 1) 12%, rgba(35, 174, 177, 1) 25%, rgba(18, 183, 202, 1) 37%, rgba(0, 192, 227, 1) 50%, rgba(0, 200, 230, 1) 62%, rgba(0, 209, 234, 1) 75%, rgba(0, 218, 238, 1) 87%, rgba(0, 227, 242, 1) 100%)'
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
      sphere.className = `${styles.gradientSphere} gradient-sphere`;

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
