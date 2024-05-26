import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoute } from "./comp/ProtectedRoute";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import Contact from "./pages/Contact";
import BasicSearch from "./pages/BasicSearch";
import AdvancedSearch from "./pages/AdvancedSearch";
import Search from "./pages/Search";
import LegacyPage from "./pages/LegacyPage";
import Gallery from "./pages/Gallery";
import { Login } from "./pages/Login";
import { Private } from "./pages/Private";
import SearchComponent from "./components/ui/SearchComponent"; // Import the SearchComponent
import VaseCard from "./components/ui/VaseCard"; // Import the VaseCard component

function App() {
  const [user, setUser] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setTimeout(() => {
        if (user) {
          setUser(user);
          setIsFetching(false);
          return;
        }
        setUser(null);
        setIsFetching(false);
      }, 1000); 
    });
    return () => unsubscribe();
  }, []);

  if (isFetching) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p>Loading</p>
      </div>
    );
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/basic" element={<BasicSearch />} />
          <Route path="/advanced" element={<AdvancedSearch />} />
          <Route path="/search" element={<Search />} />
          <Route path="/legacy" element={<LegacyPage />} />
          <Route path="/gallery" element={<Gallery />} />
          {!user && <Route path="/login" element={<Login />} />}
          <Route
            path="/private"
            element={
              <ProtectedRoute user={user}>
                <Private />
              </ProtectedRoute>
            }
          />
          {/* Add a new route for the search page */}
          <Route path="/search" element={<SearchComponent />} />
          {/* Redirect to home if logged in user tries to access the login page */}
          <Route
            path="/login"
            element={user ? <Navigate to="/home" /> : <Login />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
