import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import APICalls from '../../services/APICalls';
import NGONavigations from '../NGO/NGONavigations';



export default class NGORaiseRequestComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMedicineID: "",
      sucessMesage: "",
      DOB: "",
      userAddress: "",
      referedUserpital: "",
      medicineList: [],
      medicineDetails: {},
     
      medicineName: "",
      medicineType: "",
      medicineQuantity: "",
      role: ""
    }
  }
  
  medicineNameChange(e) {
    
    this.setState({
      medicineName: e.target.value
    });
  }
  changeMedicineType(e) {
    
    this.setState({
      medicineType: e.target.value
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
    // let UserpitalObject = this.state.medicineDetails;
    let UserpitalObject = {
      medicineName: this.state.medicineName,
      medicineType: this.state.medicineType,
      medicineQuantity: this.state.medicineQuantity,
      role: "NGO",
      status: "Created"
    };
    console.log("inside submit : ", UserpitalObject);
    APICalls.raiseRequest(UserpitalObject).then(
      (resp) =>
        this.setState({
          sucessMesage: resp.data
        })
    )
      .catch(error => {
        this.setState({ sucessMesage: 'There was an error!' });
        console.error('There was an error!', error);
      });

      window.location="/NGODashboard";
  }


  render() {
    return (
      <div>
        <NGONavigations></NGONavigations>
        <br></br>
        <br></br>
        <br></br>
        <div className="container">
          <div className="row center-align">
            <div className="card col-md-6 offset-md-3 offset-md-3 opacity-10">
            <br></br>
            <h4>Raise A Request To Donate The Medicines..</h4>
              <div className="card-body ">
                <form >
                  <div className="form-group" >
                    <label>Medicine Type: </label>
                    <input placeholder="Medicine Type" name="medicineType" className="form-control" value={this.state.medicineType} onChange={this.changeMedicineType.bind(this)} />
                  </div>
                  <br></br>
                  <div className="form-group">
                    <label> Medicine Name: </label>
                    <input placeholder="Medicine Name" name="medicineName" className="form-control" value={this.state.medicineName } onChange={this.medicineNameChange  .bind(this)} />
                  </div><br></br>
                  <div className="form-group">
                    <label> Quantity: </label>
                    <input placeholder="Quantity" name="Quantity" className="form-control" value={this.state.medicineQuantity} onChange={this.changeMedicineQuantity.bind(this)} />
                  </div><br></br>
                  
                  <br></br>
                 
                  <button className="btn btn-outline-primary"  onClick={this.submitForm.bind(this)}>Raise Request</button>
                  <button className="btn btn-outline-danger" style={{ marginLeft: "200px" }}>Cancel</button>
                </form>
                <Link to='/NGODashboard'>Back</Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}