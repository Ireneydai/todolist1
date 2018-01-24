import { connect } from 'react-redux'
import List from './List.js'
import actions from './actions.js';


const mapStateToProps = (state) => {
    return {
        todo: state.todo,
    }
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        increment: (...args) => dispatch(actions.increment(...args)),
        }
};


export default connect(mapStateToProps, mapDispatchToProps)(List)