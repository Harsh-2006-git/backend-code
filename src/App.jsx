import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Auth from "./pages/auth";
import Home from "./pages/index";
import Navbar from "./pages/navbar";
import ProtectedRoute from "./components/PrivateRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <div className="app">
      <Navbar
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/auth"
          element={
            isAuthenticated ? (
              <Navigate to="/" />
            ) : (
              <Auth setIsAuthenticated={setIsAuthenticated} />
            )
          }
        />
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </div>
  );
}

export default App;
