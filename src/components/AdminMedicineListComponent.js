import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import APICalls from '../services/APICalls';



import RaiseRequestComponent from './RaiseRequestComponent';



class AdminMedicineListComponent extends Component {

  constructor(props) {

    super(props)
    this.raiseRequest = this.raiseRequest.bind(this);

    this.state = {
      selectedMedicineID: "",
      reqRaiseFlag: false,
      showTableFlag: false,
      roleForPendingRequest: 'donor',
      id: '',
      medicineName: "",
      medicineType: "",
      medicineExpiry: "",
      medicineQuantity: "",
      medicineList: []

    }
  }
  componentDidMount() {
    APICalls.getAllMedicines().then(
      (resp) => {
        this.setState({
          medicineList: resp.data
        })
      }

    );


  }

  medicineQuantityChange(e) {
    this.setState({
      medicineQuantity: e.target.value
    });
  }

  showTable() {
    this.setState({
      showTableFlag: true
    });
  }
  hideTable() {
    this.setState({
      showTableFlag: false
    });
  }

  medicineNameChange(e) {
    this.setState({
      medicineName: e.target.value
    });
  }

  medicineTypeChange(e) {
    this.setState({
      medicineType: e.target.value
    });
  }

  expDateChange(e) {
    this.setState({
      expDate: e.target.value
    });
  }

  submitForm(e) {
    e.preventDefault();
    let hospitalObject = {
      "name": this.state.medicineName,
      "regNo": this.state.medicineType,
      "address": this.state.expDate,
      "medicineQuantityName": this.state.medicineQuantity
    }
  }

  raiseRequest(medicineID) {
   

    
    window.location = '/admin-raise-request';

  }
  render() {
    return (
      <div>
      
        <br></br>

       


        {true ?
          <div className='container'>
            <h4 class="display-4 text-white">Here are all available  medicines.... </h4>

            <br></br>
            <div className='row '>
              <table className='table table-striped table-bordered text-white text-center rounded-4'>

                <thead>
                  <tr>
                    <th>ID</th>
                    <th> Medicine Name</th>
                    <th> Medicine Type Name</th>
                    <th> Expriy Date</th>
                    <th> Quantity</th>
                    <th> Raise Request</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.medicineList.map(
                      med =>
                        <tr >
                          <td> {med.medId} </td>
                          <td> {med.medicineName} </td>
                          <td> {med.medicineType}</td>
                          <td> {med.medicineExpiry}</td>
                          <td> {med.medicineQuantity}</td>
                          <td>
                            <button onClick={() => this.raiseRequest(med.medId)} className="btn btn-success">Raise Request </button></td>
                        </tr>
                    )
                  }
                </tbody>
              </table>

            </div>
          </div> : ''}


        {/* {this.state.roleForPendingRequest == 'donor' ? <div><button onClick={this.showTable.bind(this)}>See All Pending requests</button>  <button onClick={this.hideTable.bind(this)}>Hide  requests</button></div> : ''} */}


        

       
        <Link to='/adminDashboard'>Back</Link>
      </div>
    )
  }
}
export default AdminMedicineListComponent