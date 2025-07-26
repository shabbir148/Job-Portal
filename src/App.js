// src/App.js
import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import JobSection from "./components/JobSection/JobSection";

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        {/* Header */}
        <Header />
        <main>
          {/* Hero Section */}
          <Hero />
          {/* Featured Jobs Section */}
          <JobSection />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
