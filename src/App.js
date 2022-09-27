import React from 'react';
import './App.css';
import { connect, Provider } from 'react-redux'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import background from "./medical2.jpg";
import AdminDashboard from './components/admin/AdminDashboard';
import { Route, Routes } from 'react-router';
import AdminAllApprovedRequests from './components/admin/AdminAllApprovedRequests';
import AdminAllCreatedRequests from './components/admin/AdminAllCreatedRequests';
import AdminAllDeclinedRequests from './components/admin/AdminAllDeclinedRequests';
import AdminAllPendingRequests from './components/admin/AdminAllPendingRequests';
import AdminDonarRegistration from './components/admin/AdminDonarRegistration';
import AdminUserRegistration from './components/admin/AdminUserRegistration';
import AdminHospitalRegistration from './components/admin/AdminHospitalRegistration';
import AdminRegistration from './components/admin/AdminRegistration';
import AdminAllRequests from './components/admin/AdminAllRequests';
import AdminNGORestration from './components/admin/AdminNGORestration';

import NGODashboard from './components/NGO/NGODashboard';
import NGOAllApprovedRequests from './components/NGO/NGOAllApprovedRequests';
import NGOAllCreatedRequests from './components/NGO/NGOAllCreatedRequests';
import NGOAllDeclinedRequests from './components/NGO/NGOAllDeclinedRequests';
import NGOAllPendingRequests from './components/NGO/NGOAllPendingRequests';
import NGOAllRequests from './components/NGO/NGOAllRequests';
import NGORaiseRequestComponent from './components/NGO/NGORaiseRequestComponent';
import NGORestration from './components/NGO/NGORestration';

import HosDashboard from './components/Hos/HosDashboard';
import HosAllApprovedRequests from './components/Hos/HosAllApprovedRequests';
import HosAllCreatedRequests from './components/Hos/HosAllCreatedRequests';
import HosAllDeclinedRequests from './components/Hos/HosAllDeclinedRequests';
import HosAllPendingRequests from './components/Hos/HosAllPendingRequests';
import HosAllRequests from './components/Hos/HosAllRequests';
import HosRaiseRequestComponent from './components/Hos/HosRaiseRequestComponent';
import HosRestration from './components/Hos/HosRestration';

import DonarDashboard from './components/Donar/DonarDashboard';
import DonarAllApprovedRequests from './components/Donar/DonarAllApprovedRequests';
import DonarAllCreatedRequests from './components/Donar/DonarAllCreatedRequests';
import DonarAllDeclinedRequests from './components/Donar/DonarAllDeclinedRequests';
import DonarAllPendingRequests from './components/Donar/DonarAllPendingRequests';
import DonarAllRequests from './components/Donar/DonarAllRequests';
import DonarRaiseRequestComponent from './components/Donar/DonarRaiseRequestComponent';
import DonarRestration from './components/Donar/DonarRestration';

import UserDashboard from './components/User/UserDashboard';
import UserAllApprovedRequests from './components/User/UserAllApprovedRequests';
import UserAllCreatedRequests from './components/User/UserAllCreatedRequests';
import UserAllDeclinedRequests from './components/User/UserAllDeclinedRequests';
import UserAllPendingRequests from './components/User/UserAllPendingRequests';
import UserAllRequests from './components/User/UserAllRequests';
import UserRaiseRequestComponent from './components/User/UserRaiseRequestComponent';
import UserRestration from './components/User/UserRestration';
import LoginComponent from './components/LoginComponent';

function App() {
  const myStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  };
  return (
    <div className='container-fluid' style={myStyle}>

      {/* <Provider store={store} >
        <Counter></Counter>
      </Provider> */}
       <HeaderComponent />
       <Routes>

       <Route path="/adminDashboard" element={<AdminDashboard/>} />
       <Route path="/admin-all-requests" element={<AdminAllRequests/>} />
       <Route path="/admin-all-approved-req" element={<AdminAllApprovedRequests/>} />
       <Route path="/admin-all-created-req" element={<AdminAllCreatedRequests/>} />
       <Route path="/admin-all-declined-req" element={<AdminAllDeclinedRequests/>} />
       <Route path="/admin-all-pending-req" element={<AdminAllPendingRequests/>} />
       <Route path="/admin-createDonar" element={<AdminDonarRegistration/>} />
      <Route path="/admin-createUser" element={<AdminUserRegistration/>} />
      <Route path="/admin-createHospital" element={<AdminHospitalRegistration/>} />
      <Route path="/admin-createAdmin" element={<AdminRegistration/>} />
      <Route path="/admin-createNGO" element={<AdminNGORestration/>} />
    
    
   

       <Route path="/NGODashboard" element={<NGODashboard/>} />
       <Route path="/NGO-all-requests" element={<NGOAllRequests/>} />
       <Route path="/NGO-all-approved-req" element={<NGOAllApprovedRequests/>} />
       <Route path="/NGO-all-created-req" element={<NGOAllCreatedRequests/>} />
       <Route path="/NGO-all-declined-req" element={<NGOAllDeclinedRequests/>} />
       <Route path="/NGO-all-pending-req" element={<NGOAllPendingRequests/>} />
       <Route path="/NGO-raise-request" element={<NGORaiseRequestComponent/>} />
       <Route path="/NGO-createNGO" element={<NGORestration/>} />
      
       <Route path="/HosDashboard" element={<HosDashboard/>} />
       <Route path="/Hos-all-requests" element={<HosAllRequests/>} />
       <Route path="/Hos-all-approved-req" element={<HosAllApprovedRequests/>} />
       <Route path="/Hos-all-created-req" element={<HosAllCreatedRequests/>} />
       <Route path="/Hos-all-declined-req" element={<HosAllDeclinedRequests/>} />
       <Route path="/Hos-all-pending-req" element={<HosAllPendingRequests/>} />
       <Route path="/Hos-raise-request" element={<HosRaiseRequestComponent/>} />
       <Route path="/Hos-createHos" element={<HosRestration/>} />

       <Route path="/DonarDashboard" element={<DonarDashboard/>} />
       <Route path="/Donar-all-requests" element={<DonarAllRequests/>} />
       <Route path="/Donar-all-approved-req" element={<DonarAllApprovedRequests/>} />
       <Route path="/Donar-all-created-req" element={<DonarAllCreatedRequests/>} />
       <Route path="/Donar-all-declined-req" element={<DonarAllDeclinedRequests/>} />
       <Route path="/Donar-all-pending-req" element={<DonarAllPendingRequests/>} />
       <Route path="/Donar-raise-request" element={<DonarRaiseRequestComponent/>} />
       <Route path="/Donar-createDonar" element={<DonarRestration/>} />

       <Route path="/UserDashboard" element={<UserDashboard/>} />
       <Route path="/User-all-requests" element={<UserAllRequests/>} />
       <Route path="/User-all-approved-req" element={<UserAllApprovedRequests/>} />
       <Route path="/User-all-created-req" element={<UserAllCreatedRequests/>} />
       <Route path="/User-all-declined-req" element={<UserAllDeclinedRequests/>} />
       <Route path="/User-all-pending-req" element={<UserAllPendingRequests/>} />
       <Route path="/User-raise-request" element={<UserRaiseRequestComponent/>} />
       <Route path="/User-createUser" element={<UserRestration/>} />


       <Route path="/login" element={<LoginComponent/>} />



      </Routes>
      <FooterComponent /> 

  

    </div>


  );
} export default App;


///////