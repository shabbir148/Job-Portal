// src/App.js
import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header/Header';


const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        {/* Header */}
        <Header />
    
      </div>
    </ThemeProvider>
  );
};

export default App;