import PropTypes from 'prop-types'
import React, { Component } from 'react'
import AllRequests from './AllRequests';
import UserProvider from './ConstantClass';
import DashBoardAdmin from './DashBoardAdmin';
import DashBoardUser from './DashBoardUser';

export default class LifeCycleDemo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      first
    }
  }

  componentDidMount() {
    console.log("componentDidMount");
  }



  render() {
    return (
      <div>
        {/* <UserProvider>
          <AllRequests></AllRequests>
          <DashBoardUser></DashBoardUser>
          <DashBoardAdmin></DashBoardAdmin>
        </UserProvider> */}




      </div>

    )
  }
}
