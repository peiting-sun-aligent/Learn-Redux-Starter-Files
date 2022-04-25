import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from '../actions/actionCreator';
import Main from './Main'
import comments from "../data/comments";

function mapStateToProps(state) {
    return {
        posts: state.post,
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators,dispatch)
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);
export default App;