import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getCurrentBookId, getCurrentBookKey} from '../selectors/current';
import {selectBook, unselectBook} from '../actions/ui';

const handleClickCheckBox = (checkedBook) => (dispatch, getState) => {
  const state = getState();
  const currentBookId = getCurrentBookId(state);
  const currentBookKey = getCurrentBookKey(state);
  if (!checkedBook) {
    dispatch(selectBook(currentBookKey));
  } else {
    dispatch(unselectBook(currentBookKey));
  }
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
  return bindActionCreators({handleClickCheckBox}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserBooklist);
