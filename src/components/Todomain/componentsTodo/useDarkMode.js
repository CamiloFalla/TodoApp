// useDarkMode.js
import { useState, useEffect } from 'react';

function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedMode = localStorage.getItem('darkMode');
    return storedMode ? JSON.parse(storedMode) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prevMode) => !prevMode);

  return { isDarkMode, toggleDarkMode };
}

export { useDarkMode };