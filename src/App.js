import React from "react";
import "./styles.css";
import PortalsDemo from "./Components/PortalsDemo";
import Hero from "./Components/Hero";
import ErrorBoundary from "./Components/ErrorBoundary";

export default function App() {
  return (
    <div className="App">
      {/* <PortalsDemo /> */}
      <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary>
    </div>
  );
}
