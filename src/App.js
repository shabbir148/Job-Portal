// src/App.js
import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        {/* Header */}
        <Header />
        <main>
          {/* Hero Section */}
          <Hero />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
