
import Counter from '../Counter';
import { increment, decrement, reset } from '../Redux/Actions';
import { connect } from 'react-redux'
const mapStateToProps = (state) => {
    return {
        count: state
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