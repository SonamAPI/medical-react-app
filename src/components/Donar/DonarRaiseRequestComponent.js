import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import APICalls from '../../services/APICalls';
import Navigations from '../Navigations';



export default class DonarRaiseRequestComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMedicineID: "",
      sucessMesage: "",
      DOB: "",
      userAddress: "",
      referedDonarpital: "",
      medicineList: [],
      medicineDetails: {},
      medId: "",
      medicineName: "",
      medicineType: "",
      medicineQuantity: "",
      role: "",
      medicineExpiry: ""
    }
  }
  componentDidMount() {
    APICalls.getAllMedicines().then(
      (resp) =>
        this.setState({
          medicineList: resp.data
        })
    );
  }

  referedDonarpitalChange(e) {
    this.setState({
      referedDonarpital: e.target.value
    });
  }
  changeMedicineType(e) {
    this.setState({
      userName: e.target.value
    });
  }
  DOBChange(e) {
    this.setState({
      DOB: e.target.value
    });
  }
  changeMedicineQuantity(e) {
    this.setState({
      medicineQuantity: e.target.value
    });
  }
  changeRole(e) {
    this.setState({
      role: e.target.value
    });
  }
  submitForm(e) {
    e.preventDefault();
    // let DonarpitalObject = this.state.medicineDetails;
    let DonarpitalObject = {
      medId: this.state.medicineDetails.medId,
      medicineName: this.state.medicineDetails.medicineName,
      medicineType: this.state.medicineDetails.medicineType,
      medicineQuantity: this.state.medicineQuantity,
      medicineExpiry: this.state.medicineDetails.medicineExpiry,
      role: this.state.role,
      status: "Created"
    };
    console.log("inside submit : ", DonarpitalObject);
    APICalls.raiseRequest(DonarpitalObject).then(
      (resp) =>
        this.setState({
          sucessMesage: resp.data
        })
    )
      .catch(error => {
        this.setState({ sucessMesage: 'There was an error!' });
        console.error('There was an error!', error);
      });

      window.location="/dashboard";
  }

  getMedicineByID(e) {
    console.log(e.target.value);
    this.setState({
      selectedMedicineID: e.target.value
    })

    console.log('calling id: ', e.target.value);
    APICalls.getMedicineById(e.target.value).then(
      (resp) => {
        this.setState({
          medicineDetails: resp.data
        })
      }
    )
  }
  render() {
    return (
      <div>
        <Navigations></Navigations>
        <br></br>


        <br></br>




        <br></br>
        <div className="container">
          <div className="row center-align">
            
            
            <h4>Raise A Request To Donate The Medicines..</h4>
            
            <br></br><br></br>
            <div className="card col-md-6 offset-md-3 offset-md-3 opacity-10">
            <br></br><br></br>
              
              <br></br>
              <div className="card-body ">
                <form >
                  <div className="form-group" >
                    <label>Medicine Type: </label>
                    <input placeholder="Medicine Type" name="medicineType" className="form-control" value={this.state.medicineDetails.medicineType || ""} onChange={this.changeMedicineType.bind(this)} />
                  </div>
                  <br></br>
                  <div className="form-group">
                    <label> Medicine Name: </label>
                    <input placeholder="Medicine Name" name="medicineName" className="form-control" value={this.state.medicineDetails.medicineName || ""} onChange={this.DOBChange.bind(this)} />
                  </div><br></br>
                  <div className="form-group">
                    <label> Quantity: </label>
                    <input placeholder="Quantity" name="Quantity" className="form-control" value={this.state.medicineQuantity} onChange={this.changeMedicineQuantity.bind(this)} />
                  </div><br></br>
                  <div className="form-group">
                    <label> Role: </label>
                    <select id='options'   placeholder="Role" name="role" className="form-control" value={this.state.role} onChange={this.changeRole.bind(this)} >
                    <option  >Select</option>
                      <option value="User" >User</option>
                      <option value="Admin">Admin</option>
                      <option value="Donarpital">Donarpital</option>
                    </select>

                  </div><br></br>
                  <div className="form-group">
                    <label> Expiry: </label>
                    <input placeholder="Expiry" name="medicineExpiry" className="form-control" value={this.state.medicineDetails.medicineExpiry || ""} onChange={this.referedDonarpitalChange.bind(this)} />
                  </div><br></br>
                  <button className="btn btn-outline-primary"  onClick={this.submitForm.bind(this)}>Raise Request</button>
                  <button className="btn btn-outline-danger" style={{ marginLeft: "200px" }}>Cancel</button>
                </form>
                <Link to='/DonarDashboard'>Back</Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}