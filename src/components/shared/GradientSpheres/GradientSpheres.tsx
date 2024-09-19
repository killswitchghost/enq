// import { useEffect } from 'react';
// import styles from './_GradientSpheres.module.scss'; // Assuming you have a CSS Module file

// // GradientSpheres component
// const GradientSpheres = () => {
//   useEffect(() => {
//     // Array of predefined linear gradient color combinations with opacity
//     const gradients: string[] = [
//       'linear-gradient(208deg, rgba(255, 40, 40, 1) 19.19%, rgba(255, 248, 85, 1) 70.68%)', // yellow-red, red-yellow
//       'linear-gradient(208deg, rgba(255, 248, 85, 1) 19.19%, rgba(0, 227, 242, 1) 70.68%)', // blue-yellow, yellow-blue
//       'linear-gradient(180deg, rgba(98, 67, 255, 1) 0%, rgba(255, 40, 40, 1) 100%)', // red-purple, purple-red
//       'linear-gradient(180deg, rgba(98, 67, 255, 1) 0%, rgba(0, 227, 242, 1) 100%)', // blue-purple, purple-blue
//       'linear-gradient(180deg, rgba(71, 155, 128, 1) 0%, rgba(0, 227, 242, 1) 100%)' // blue-green, green-blue
//     ];

//     // Function to generate a random number between a min and max
//     function random(min: number, max: number): number {
//       return Math.random() * (max - min) + min;
//     }

//     // Function to pick a random gradient from the predefined list
//     function randomGradient(): string {
//       return gradients[Math.floor(random(0, gradients.length))];
//     }

//     // Function to create a random sphere with a linear gradient
//     function createSphere() {
//       const sphere = document.createElement('div');
//       sphere.className = styles.gradientSphere; // Assign the scoped class from CSS Modules

//       const size = random(300, 600); // Size for the sphere

//       // Set styles for the sphere
//       sphere.style.width = `${size}px`;
//       sphere.style.height = `${size}px`;
//       sphere.style.borderRadius = '50%'; // Make sure the div is circular

//       // Calculate the full page height (not just viewport height)
//       const pageHeight = Math.max(
//         document.body.scrollHeight,
//         document.documentElement.scrollHeight
//       );

//       // Randomize position across the whole body height
//       sphere.style.left = `${random(0, window.innerWidth - size)}px`;
//       sphere.style.top = `${random(0, pageHeight - size)}px`;

//       // Pick one random gradient from the predefined list
//       const gradient = randomGradient();

//       // Set the background to a linear gradient
//       sphere.style.background = gradient;

//       sphere.style.position = 'absolute'; // Ensure the sphere is positioned relative to the whole page
//       sphere.style.filter = `blur(${random(60, 90)}px)`; // Add blur for a soft look
//       sphere.style.zIndex = '-1'; // Ensure spheres are behind content

//       document.body.appendChild(sphere);
//     }

//     // Generate multiple spheres (randomized only once)
//     for (let i = 0; i < 10; i++) {
//       // Increase number of spheres for more coverage
//       createSphere();
//     }
//   }, []); // Empty dependency array ensures the effect runs once on mount

//   return null; // This component does not render any visible elements directly
// };

// export default GradientSpheres;
import { useEffect } from 'react';
import styles from './_GradientSpheres.module.scss'; // Assuming you have a CSS Module file

// GradientSpheres component
const GradientSpheres = () => {
  useEffect(() => {
    // Array of predefined linear gradient color combinations with more stops for smoother transitions
    const gradients: string[] = [
      'linear-gradient(208deg, rgba(255, 40, 40, 1) 19.19%, rgba(255, 100, 40, 1) 30%, rgba(255, 248, 85, 1) 70.68%)', // yellow-red, red-yellow with intermediate stop
      'linear-gradient(208deg, rgba(255, 248, 85, 1) 19.19%, rgba(128, 227, 242, 1) 40%, rgba(0, 227, 242, 1) 70.68%)', // blue-yellow, yellow-blue with intermediate stop
      'linear-gradient(180deg, rgba(98, 67, 255, 1) 0%, rgba(150, 67, 255, 1) 50%, rgba(255, 40, 40, 1) 100%)', // red-purple, purple-red with intermediate stop
      'linear-gradient(180deg, rgba(98, 67, 255, 1) 0%, rgba(50, 134, 255, 1) 50%, rgba(0, 227, 242, 1) 100%)', // blue-purple, purple-blue with intermediate stop
      'linear-gradient(180deg, rgba(71, 155, 128, 1) 0%, rgba(0, 192, 227, 1) 50%, rgba(0, 227, 242, 1) 100%)' // blue-green, green-blue with intermediate stop
    ];

    // Function to generate a random number between a min and max
    function random(min: number, max: number): number {
      return Math.random() * (max - min) + min;
    }

    // Function to pick a random gradient from the predefined list
    function randomGradient(): string {
      return gradients[Math.floor(random(0, gradients.length))];
    }

    // Function to create a random sphere with a linear gradient
    function createSphere() {
      const sphere = document.createElement('div');
      sphere.className = styles.gradientSphere; // Assign the scoped class from CSS Modules

      const size = random(300, 600); // Size for the sphere

      // Set styles for the sphere
      sphere.style.width = `${size}px`;
      sphere.style.height = `${size}px`;
      sphere.style.borderRadius = '50%'; // Make sure the div is circular

      // Calculate the full page height (not just viewport height)
      const pageHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      );

      // Randomize position across the whole body height
      sphere.style.left = `${random(0, window.innerWidth - size)}px`;
      sphere.style.top = `${random(0, pageHeight - size)}px`;

      // Pick one random gradient from the predefined list
      const gradient = randomGradient();

      // Set the background to a linear gradient
      sphere.style.background = gradient;

      sphere.style.position = 'absolute'; // Ensure the sphere is positioned relative to the whole page
      sphere.style.filter = `blur(${random(80, 100)}px)`; // Increase the blur for a softer gradient transition
      sphere.style.zIndex = '-1'; // Ensure spheres are behind content

      document.body.appendChild(sphere);
    }

    // Generate multiple spheres (randomized only once)
    for (let i = 0; i < 10; i++) {
      // Increase number of spheres for more coverage
      createSphere();
    }
  }, []); // Empty dependency array ensures the effect runs once on mount

  return null; // This component does not render any visible elements directly
};

export default GradientSpheres;
