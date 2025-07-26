// src/App.js
import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import JobSection from "./components/JobSection/JobSection";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import CompaniesSection from "./components/CompaniesSection/CompaniesSection";

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
          {/* How It Works Section */}
          <HowItWorks />
          {/* Top Companies Section */}
          <CompaniesSection />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
