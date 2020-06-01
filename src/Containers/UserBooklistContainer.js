import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getCurrentBookId, getCurrentBookKey} from '../selectors/current';
import {Delete} from '../actions/Books';

const deleteBook = (checkedBooks) => (dispatch, getState) => {
  const state = getState();
  checkedBooks.forEach(bookId => dispatch(Delete(bookId)));
};

function mapStateToProps(state, ownProps) {
  return {
    //emailRead: ownProps.emailRead,
    currentBookKey: ownProps.currentBookKey,
    selectedBooks: state.ui.bookSelectedList,
    checkedBook: ownProps.bookChecked,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({deleteBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserBooklist);
