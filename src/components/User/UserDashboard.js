import React, { Component } from 'react';
import UserNavigations from './UserNavigations';

class UserDashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            role: "",
            flag: false,
            items: []
        }
    }

    raiseRequst() {
        window.location = '/User-raise-request';
    }
    createUser() {
        window.location = '/User-createUser';
    }
    showAllList() {
        this.setState({
            role: "User",
            flag: true
        })
        window.location = '/User-raise-request';
    }
    showApprovedList() {
        window.location = '/User-all-approved-req';
    }
    showPendingList() {
        window.location = '/User-all-pending-req';
    }
    showDeclinedList() {
        window.location = '/User-all-declined-req';
    }
    showCreatedList() {
        window.location = '/User-all-created-req';
    }
    render() {
        return (
            <div>
                <div >

                    <UserNavigations></UserNavigations>



                    <h1 className="display-3 text-center">User Dashboard</h1>
                    <div class="row">
                        <div class="col-sm-4"></div>
                        <div class="col-sm-4">   <br></br><br></br></div>
                        <div class="col-sm-4"></div>
                    </div>

                    <br></br><br></br><br></br>
                    <div className='container' style={{ "overflowX": "auto" }} >
                        <table className="table text-center" cellSpacing="0" cellPadding="0" style={{
                            "padding": "16px",

                        }}>
                            <tbody>
                                <tr >
                                    <th scope="col">
                                        <div className="card text-white bg-success mb-3" style={{
                                            "boxShadow": " 0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                                            "padding": "16px",
                                            "textAlign": "center",
                                            "backgroundColor": " #f1f1f1",
                                            "boxShadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2)"
                                        }} onClick={this.showAllList.bind(this)}>
                                            <h3>Stock List</h3>
                                            <p>See all list</p>

                                        </div>
                                    </th>
                                    <th scope="col">
                                        <div className="card bg-light  text-dark" style={{
                                            "boxShadow": " 0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                                            "padding": "16px",
                                            "textAlign": "center",
                                            "backgroundColor": " #f1f1f1",
                                            "boxShadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2)"
                                        }} onClick={this.showAllList.bind(this)}>
                                            <h3>Raised Request</h3>
                                            <p>See all requests</p>

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
                                </tr>
                                <tr></tr>
                                <tr></tr>
                            </tbody>
                        </table>
                    </div>





                </div>

                <div class="row">
                        <div class="col-sm-4"></div>
                        <div class="col-sm-4">   <br></br><br></br></div>
                        <div class="col-sm-4"></div>
                    </div>
            </div>



        )
    }
}

export default UserDashboard