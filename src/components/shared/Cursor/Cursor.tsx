import React, { useEffect, useRef } from 'react';
import styles from './_Cursor.module.scss';

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
      cursorBorderPos.current.x +=
        (cursorPos.current.x - cursorBorderPos.current.x) / easing;
      cursorBorderPos.current.y +=
        (cursorPos.current.y - cursorBorderPos.current.y) / easing;

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

      if (cursorType && cursorBorderRef.current) {
        if (cursorType === 'pointer') {
          cursorBorderRef.current.classList.add(styles.cursorPointer);
        } else if (cursorType === 'pointer2') {
          cursorBorderRef.current.classList.add(styles.cursorPointerHover);
        }
      }
    };

    const handleMouseOut = (e: Event) => {
      const target = e.target as HTMLElement;
      const cursorType = target.dataset.cursor;

      if (cursorType && cursorBorderRef.current) {
        cursorBorderRef.current.classList.remove(styles.cursorPointerHover);
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      <div className={styles.cursor} ref={cursorRef}></div>
      <div className={styles.cursorBorder} ref={cursorBorderRef}></div>
    </>
  );
};

export default Cursor;
