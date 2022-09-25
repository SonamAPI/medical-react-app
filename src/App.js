import React from 'react';
import './App.css';

import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import background from "./medical2.jpg";
import AdminDashboard from './components/admin/AdminDashboard';
import { Route, Routes } from 'react-router';
function App() {
  const myStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  };
  return (
    <div className='container-fluid' style={myStyle}>
      <HeaderComponent />
       <Routes>
       
       <Route path="/adminDashboard" element={<AdminDashboard/>} />
       <Route path="/adminDashboard" element={<AdminAllApprovedReq} />
      </Routes>
      <FooterComponent />
    </div>


  );
} export default App;