import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
const One = React.lazy(() => import("pages/One"));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/one" element={<One />} />
          <Route path="/*" element={<Navigate to="/one" />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default ProjectRoutes;
