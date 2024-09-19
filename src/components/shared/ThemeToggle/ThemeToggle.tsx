import styles from './_ThemeToggle.module.scss';

import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    setTheme(currentTheme);
    document.body.setAttribute('data-bs-theme', currentTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.setAttribute('data-bs-theme', newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
    }
  };

  return (
    <div
      className={`${styles.themeToggle} ${styles[theme]}`}
      onClick={toggleTheme}
    >
      <i className={`${styles.moon} bi bi-moon-fill`}></i>
      <i className={`${styles.sun} bi bi-sun-fill`}></i>
    </div>
  );
};

export default ThemeToggle;
