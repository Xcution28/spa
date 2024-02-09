import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import RegistrationPage from './components/RegistrationPage.jsx';

const App = () => {

    return (
        <Router>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/register" element={<RegistrationPage />} />
                    <Route path="/home" element={<HomePage />} />
                </Routes>
        </Router>
    );
};

export default App;
