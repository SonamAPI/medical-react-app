import React, { Component } from 'react';
import Navigations from '../User/UserNavigations';
import AdminNavigations from './AdminNavigations';

class AdminDashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            role: "",
            flag: false,
            items: []
        }
    }


    showAllList() {
        this.setState({
            role: "admin",
            flag: true
        })
        window.location = '/admin-all-requests';
    }
    showApprovedList() {
        window.location = '/admin-all-approved-req';
    }
    showPendingList() {
        window.location = '/admin-all-pending-req';
    }
    showDeclinedList() {
        window.location = '/admin-all-declined-req';
    }
    showCreatedList() {
        window.location = '/admin-all-created-req';
    }

    createUser() {
        window.location = '/admin-createUser';
    }
    createHospital() {
        window.location = '/admin-createHospital';
    }
    createNGO() {
        window.location = '/createNGO';
    }
    createDonar() {
        window.location = '/admin-createDonar';
    }
    createAdmin() {
        window.location = '/admin-createAdmin';
    }


    render() {
        return (
            <div>
                <div >

                <AdminNavigations></AdminNavigations>



                    <h1 className="display-3 text-center">ADMIN DASHBOARD</h1>


                    <br></br><br></br><br></br>
                    <div className='container' style={{ "overflowX": "auto" }} >
                        <table className="table text-center" cellSpacing="0" cellPadding="0" style={{
                            "padding": "16px",

                        }}>
                            <tbody>
                                <tr >
                                    <th scope="col">
                                        <div className="card bg-light  text-dark" style={{
                                            "boxShadow": " 0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                                            "padding": "16px",
                                            "textAlign": "center",
                                            "backgroundColor": " #f1f1f1",
                                            "boxShadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2)"
                                        }} onClick={this.showAllList.bind(this)}>
                                            <h3>All List</h3>
                                            <p>See all things</p>

                                        </div>
                                    </th>
                                    <th scope="col">
                                        <div className="card bg-primary text-white" style={{
                                            "boxShadow": " 0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                                            "padding": "16px",
                                            "textAlign": "center",
                                            "backgroundColor": " #f1f1f1",
                                            "boxShadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2)"
                                        }} onClick={this.showApprovedList.bind(this)}>
                                            <h3>Approved List</h3>
                                            <p>See all approved things</p>

                                        </div>
                                    </th>
                                    <th scope="col">
                                        <div className="card bg-danger text-white" style={{
                                            "boxShadow": " 0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                                            "padding": "16px",
                                            "textAlign": "center",
                                            "backgroundColor": " #f1f1f1",
                                            "boxShadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2)"
                                        }} onClick={this.showDeclinedList.bind(this)}>
                                            <h3>Declined List</h3>
                                            <p>See all approved things</p>

                                        </div>
                                    </th>
                                    <th scope="col">
                                        <div className="card bg-success text-white" style={{
                                            "boxShadow": " 0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                                            "padding": "16px",
                                            "textAlign": "center",
                                            "backgroundColor": " #f1f1f1",
                                            "boxShadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2)"
                                        }} onClick={this.showCreatedList.bind(this)}>
                                            <h3>Created List</h3>
                                            <p>See all approved things</p>

                                        </div>
                                    </th>
                                    <th scope="col">
                                        <div className="card bg-warning text-white" style={{
                                            "boxShadow": " 0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                                            "padding": "16px",
                                            "textAlign": "center",
                                            "backgroundColor": " #f1f1f1",
                                            "boxShadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2)"
                                        }} onClick={this.showPendingList.bind(this)}>
                                            <h3>Pending List</h3>
                                            <p>See all pending things</p>

                                        </div>
                                    </th>
                                </tr><tr>
                                </tr>

                                {/* Registraion cards */}
                                <tr className='text-center'>
                                    <th scope="col">
                                        <div className="card bg-light text-secondary" style={{
                                            "boxShadow": " 0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                                            "padding": "16px",
                                            "textAlign": "center",
                                            "backgroundColor": " #f1f1f1",
                                            "boxShadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2)"
                                        }} onClick={this.createUser.bind(this)}>
                                            <h3>Register User</h3>
                                            <p>Create A New User</p>

                                        </div>
                                    </th>
                                    <th scope="col">
                                        <div className="card bg-light text-primary" style={{
                                            "boxShadow": " 0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                                            "padding": "16px",
                                            "textAlign": "center",
                                            "backgroundColor": " #f1f1f1",
                                            "boxShadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2)"
                                        }} onClick={this.createNGO.bind(this)}>
                                            <h3>Register NGO</h3>
                                            <p>Create A New NGO</p>

                                        </div>
                                    </th>
                                    <th scope="col">
                                        <div className="card bg-light text-success" style={{
                                            "boxShadow": " 0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                                            "padding": "16px",
                                            "textAlign": "center",
                                            "backgroundColor": " #f1f1f1",
                                            "boxShadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2)"
                                        }} onClick={this.createHospital.bind(this)}>
                                            <h3>Register Hospital</h3>
                                            <p>Create New Hospital</p>

                                        </div>
                                    </th>
                                    <th scope="col">
                                        <div className="card bg-light text-warming" style={{
                                            "boxShadow": " 0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                                            "padding": "16px",
                                            "textAlign": "center",
                                            "backgroundColor": " #f1f1f1",
                                            "boxShadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2)"
                                        }} onClick={this.createDonar.bind(this)}>
                                            <h3>Register Donar</h3>
                                            <p>Create New Donar</p>

                                        </div>
                                    </th>
                                    <th scope="col">
                                        <div className="card bg-light text-danger" style={{
                                            "boxShadow": " 0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                                            "padding": "16px",
                                            "textAlign": "center",
                                            "backgroundColor": " #f1f1f1",
                                            "boxShadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2)"
                                        }} onClick={this.createAdmin.bind(this)}>
                                            <h3>Create Admin</h3>
                                            <p>Create New Admin</p>

                                        </div>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>





                </div>
            </div>



        )
    }
}

export default AdminDashboard