import React from "react";
import { BrowserRouter as Router, Routes , Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Navigate to="/login/email" />} />
        <Route path="/login/email" element={<LoginPage/>}/>
        <Route path="/login/registration" element={<SignUpPage/>} />
      </Routes>
    </Router>
  );
}

export default App
