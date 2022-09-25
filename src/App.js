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

    <AdminDashboard></AdminDashboard>
    
      <HeaderComponent />

       <Routes>
     
       <Route path="/admin-createUser" element={<AdminUserRegistration></AdminUserRegistration>} />
       <Route path="/admin-createUser" element={<Admin/>} />
       



      </Routes>
     

      <FooterComponent />
    </div>


  );
} export default App;