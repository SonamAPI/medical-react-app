import React, { Component } from 'react';
import { increment, decrement, reset } from './Actions';
import { connect } from 'react-redux';

 class Counter extends Component {
    render() {
        const {count,increment,decrement,reset} = this.props;
        return (
           <div className = "App">
             Variables:  <div>{count}</div>
              <div>
                 <button onClick = {increment}>INCREMENT BY 1</button>
              </div>
              <div>
                 <button onClick = {decrement}>DECREMENT BY 1</button>
              </div>
              <button onClick = {reset}>RESET</button>
           </div>
        );
     }
  }

  



 

   const mapStateToProps = (state) => {
      return {
          count: state.count
      };
    };
    const mapDispatchToProps = (dispatch) => {
      return {
         increment: () => dispatch(increment()),
         decrement: () => dispatch(decrement()),
         reset: () => dispatch(reset())
      };
    };


    export default connect(mapStateToProps, mapDispatchToProps)(Counter);