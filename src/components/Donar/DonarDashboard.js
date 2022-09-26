import React, { Component } from 'react';
import Navigations from '../Navigations';

class DonarDashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            role: "",
            flag: false,
            items: []
        }
    }

    raiseRequst() {
        window.location = '/Donar-raise-request';
    }

  

    createDonar(){
        window.location = '/Donar-createDonar';

    }
    showAllList() {
        this.setState({
            role: "Donar",
            flag: true
        })
        window.location = '/Donar-all-requests';
    }
    showApprovedList() {
        window.location = '/Donar-all-approved-req';
    }
    showPendingList() {
        window.location = '/Donar-all-pending-req';
    }
    showDeclinedList() {
        window.location = '/Donar-all-declined-req';
    }
    showCreatedList() {
        window.location = '/Donar-all-created-req';
    }


    




    render() {
        return (
            <div>
                <div >

                    <Navigations></Navigations>



                    <h1 className="display-3 text-center">Donar Dashboard</h1>


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
                                <tr>
                                    <th scope="col">
                                        <div className="card bg-light text-primary" style={{
                                            "boxShadow": " 0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                                            "padding": "16px",
                                            "textAlign": "center",
                                            "backgroundColor": " #f1f1f1",
                                            "boxShadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2)"
                                        }} onClick={this.createDonar.bind(this)}>
                                            <h3>Create Donar</h3>
                                            <p>Create A New Donar</p>

                                        </div>
                                    </th>
                                    <th scope="col">
                                    <div className="card bg-primary text-white" style={{
                                        "boxShadow": " 0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                                        "padding": "16px",
                                        "textAlign": "center",
                                        "backgroundColor": " #f1f1f1",
                                        "boxShadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2)"
                                    }} onClick={this.raiseRequst.bind(this)}>
                                        <h3>Raise a Request</h3>
                                        <p>to donate</p>


                                    </div>
                                </th>

                                </tr>
                                <tr></tr>
                            </tbody>
                        </table>
                    </div>





                </div>
            </div>



        )
    }
}

export default DonarDashboard