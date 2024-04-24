// import React, { useEffect, useRef } from 'react';
// import './_Cursor.scss';
// const Cursor: React.FC = () => {
//   const cursorRef = useRef<HTMLDivElement>(null);
//   const cursorBorderRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const cursor = cursorRef.current;
//     const cursorBorder = cursorBorderRef.current;

//     if (!cursor || !cursorBorder) {
//       console.error("Cursor or cursor border element not found");
//       return;
//     }

//     const cursorPos = { x: 0, y: 0 };
//     const cursorBorderPos = { x: 0, y: 0 };

//     const handleMouseMove = (e: MouseEvent) => {
//       cursorPos.x = e.clientX;
//       cursorPos.y = e.clientY;
//       cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
//     };

//     document.addEventListener("mousemove", handleMouseMove);

//     const animate = () => {
//       const easing = 8;
//       cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easing;
//       cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easing;

//       cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
//       requestAnimationFrame(animate);
//     };

//     requestAnimationFrame(animate);

//     document.querySelectorAll("[data-cursor]").forEach((item: Element) => {
//       item.addEventListener("mouseover", () => {
//         if (item instanceof HTMLElement) {
//           switch (item.dataset.cursor) {
//             case "pointer":
//               cursorBorder.style.backgroundColor = "rgba(255, 255, 255, .6)";
//               cursorBorder.style.setProperty("--size", "30px");
// cursorBorder.classList.add("cursor-pointer");
//               break;
//             case "pointer2":
//               cursorBorder.style.backgroundColor = "white";
//               cursorBorder.style.mixBlendMode = "difference";
//               cursorBorder.style.setProperty("--size", "80px");
// cursorBorder.classList.add("cursor-pointer2");
//               break;
//           }
//         }
//       });

//       item.addEventListener("mouseout", () => {
//         if (item instanceof HTMLElement) {
//           cursorBorder.style.backgroundColor = "unset";
//           cursorBorder.style.mixBlendMode = "unset";
//           cursorBorder.style.setProperty("--size", "50px");
//         }
//       });
//     });

//     return () => {
// document.removeEventListener("mousemove", handleMouseMove);
// };
// }, []);

// return (
//   <>
//     <div id="cursor" ref={cursorRef}></div>
//     <div id="cursor-border" ref={cursorBorderRef}></div>
//   </>
// );
// };

// export default Cursor;



import React, { useEffect, useRef } from 'react';
import './_Cursor.scss';
interface Position {
  x: number;
  y: number;
}

const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorBorderRef = useRef<HTMLDivElement>(null);
  const cursorPos = useRef<Position>({ x: 0, y: 0 });
  const cursorBorderPos = useRef<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      cursorPos.current.x = e.clientX;
      cursorPos.current.y = e.clientY;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    document.addEventListener('mousemove', updateCursorPosition);

    const loop = () => {
      const easing = 8;
      cursorBorderPos.current.x += (cursorPos.current.x - cursorBorderPos.current.x) / easing;
      cursorBorderPos.current.y += (cursorPos.current.y - cursorBorderPos.current.y) / easing;

      if (cursorBorderRef.current) {
        cursorBorderRef.current.style.transform = `translate(${cursorBorderPos.current.x}px, ${cursorBorderPos.current.y}px)`;
      }

      requestAnimationFrame(loop);
    };

    requestAnimationFrame(loop);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);
useEffect(() => {
  const handleMouseOver = (e: Event) => {
    const target = e.target as HTMLElement;
    const cursorType = target.dataset.cursor;
console.log('handleMouseOver', cursorType, cursorBorderRef.current);
    if (cursorType && cursorBorderRef.current) {
    console.log("hi");

        if (cursorType === 'pointer') {
          // cursorBorderRef.current.style.backgroundColor = 'rgba(255, 255, 255, .6)';
          // cursorBorderRef.current.style.setProperty('--size', '30px');
cursorBorderRef.current.classList.add("cursor-pointer");
        } else if (cursorType === 'pointer2') {
          // cursorBorderRef.current.style.backgroundColor = 'white';
          // cursorBorderRef.current.style.mixBlendMode = 'difference';
          // cursorBorderRef.current.style.setProperty('--size', '80px');
cursorBorderRef.current.classList.add("cursor-pointer-hover");
        }


    }
  };

  const handleMouseOut = (e: Event) => {
    const target = e.target as HTMLElement;
    const cursorType = target.dataset.cursor;
  console.log('handleMouseOut', cursorType, cursorBorderRef.current);
    if (cursorType && cursorBorderRef.current) {
     console.log("hello");

      if (cursorBorderRef.current) {
        // cursorBorderRef.current.style.backgroundColor = 'unset';
        // cursorBorderRef.current.style.mixBlendMode = 'unset';
        // cursorBorderRef.current.style.setProperty('--size', '10px');
cursorBorderRef.current.classList.remove("cursor-pointer-hover");
      }

    }
  };

  document.addEventListener('mouseover', handleMouseOver);
  document.addEventListener('mouseout', handleMouseOut);

  return () => {
    document.removeEventListener('mouseover', handleMouseOver);
    document.removeEventListener('mouseout', handleMouseOut);
  };
}, []);
//   useEffect(() => {
//     const handleMouseOver = (e: Event) => {
//       // Asserting that the event is a MouseEvent and the target is an HTMLElement
//       const event = e as MouseEvent;
//       const target = event.target as HTMLElement;

//       const cursorType = target.dataset.cursor;

//       if (cursorBorderRef.current) {
//         if (cursorType === 'pointer') {
//           cursorBorderRef.current.style.backgroundColor = 'rgba(255, 255, 255, .6)';
//           cursorBorderRef.current.style.setProperty('--size', '30px');
// cursorBorderRef.current.classList.add("cursor-pointer");
//         } else if (cursorType === 'pointer2') {
//           cursorBorderRef.current.style.backgroundColor = 'white';
//           cursorBorderRef.current.style.mixBlendMode = 'difference';
//           cursorBorderRef.current.style.setProperty('--size', '80px');
// cursorBorderRef.current.classList.add("cursor-pointer2");
//         }
//       }
//     };


//     const handleMouseOut = () => {
//       if (cursorBorderRef.current) {
//         cursorBorderRef.current.style.backgroundColor = 'unset';
//         cursorBorderRef.current.style.mixBlendMode = 'unset';
//         cursorBorderRef.current.style.setProperty('--size', '50px');
//       }
//     };

//     document.querySelectorAll('[data-cursor]').forEach((item) => {
//       item.addEventListener('mouseover', handleMouseOver);
//       item.addEventListener('mouseout', handleMouseOut);
//     });

//     return () => {
//       document.querySelectorAll('[data-cursor]').forEach((item) => {
//         item.removeEventListener('mouseover', handleMouseOver);
//         item.removeEventListener('mouseout', handleMouseOut);
//       });
//     };
//   }, []);

  return (
    <>
      <div id="cursor" ref={cursorRef}></div>
      <div id="cursor-border" ref={cursorBorderRef}></div>
    </>
  );
};

export default Cursor;
