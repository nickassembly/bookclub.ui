import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import AddBookForm from '../Components/AddBookForm';
// import { createBookWithUsername } from '../actions/ui';
import { getCurrentUsername, getBookInfo } from '../selectors/current';

const handleRequestSave = (bookInfo) => (dispatch, getState) => {
   const state = getState();
   const username = getCurrentUsername(state);
   // dispatch(createBookWithUsername(username, bookmarkInfo));
};

function mapStateToProps(state, ownProps) {
  const currentUsername = getCurrentUsername(state);
  let bookInfo = getBookInfo(state);
  if (bookInfo === undefined) {
     bookInfo = {bookId: '', title: '', author: '', isbn: ''};
  }
  return {};
}

function mapDispatchToProps(dispatch, ownProps) {
  return bindActionCreators(
     {
       handleRequestSave
     },
     dispatch
   );
 }

export default connect(mapStateToProps, mapDispatchToProps)(AddBookForm);
