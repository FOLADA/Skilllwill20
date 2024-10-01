import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TODO from './ToDo.jsx';
import EditPage from './Pages/EditPage';
import Header from './Pages/Header.jsx';
import { LanguageProvider } from './hooks/useLanguage.js';

function App() {
  return (
    <LanguageProvider> 
      <Router>
        <Header /> 
        <Routes>
          <Route path="/" element={<TODO />} />
          <Route path="/edit" element={<EditPage />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
