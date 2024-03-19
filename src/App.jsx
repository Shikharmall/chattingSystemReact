import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import ChatPage from "./pages/ChatPage";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <Routes>
      <Route exact path="/" element={<ChatPage />} />
    </Routes>
  );
}

export default App;
