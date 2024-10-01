import { useState, useContext, createContext } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('Georgian');

  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'Georgian' ? 'English' : 'Georgian'));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
