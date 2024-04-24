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
          className={`theme-toggle-btn ${theme}-theme`}
          onClick={toggleTheme} 
          aria-label="Toggle theme"
        >
           <i className="bi bi-moon-fill"></i>    
        <i className="bi bi-sun-fill"></i>
         
        </div>
    );
};

export default ThemeToggle;
