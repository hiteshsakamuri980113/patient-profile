import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PatientProfilePage from "./app/pages/PatientProfilePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/patients/1111" />} />
      <Route path="/patients/:id" element={<PatientProfilePage />} />
    </Routes>
  );
}

export default App;
