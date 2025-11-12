import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";

function LocationLogger() {
  const location = useLocation();
  React.useEffect(() => {
    console.log("📍 Current route:", location.pathname);
  }, [location]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      {/* 🧠 Logs route changes in your browser console */}
      <LocationLogger />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
