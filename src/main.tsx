import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginComponent from './components/LoginComponent';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginComponent />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
