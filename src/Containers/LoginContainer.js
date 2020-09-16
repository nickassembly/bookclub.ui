import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getCurrentBookId, getCurrentBookKey} from '../selectors/current';
import {Login} from '../actions/User';

const attemptUserLogin = (username, password) => (dispatch, getState) => {
  const state = getState();
  dispatch(Login(username, password));
};

function mapStateToProps(state, ownProps) {
  return {
    //emailRead: ownProps.emailRead,
    username: ownProps.username,
    token: ownProps.jwtToken
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({Login, userLogin}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserBooklist);
