// import './App.css';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home/index.jsx';
import AdminPanel from './pages/AdminPanel/index.jsx';
// import NoPage from './pages/NoPage/index.jsx';
import Layout from './pages/Layout/index.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path=":panel" element={<AdminPanel />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;