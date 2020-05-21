import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import AddBookForm from '../Components/AddBookForm';
import {
  closeWebAddBookmarkDialog,
  // createWebBookmarkWithUsername,
  itemIsLoading,
  itemIsDoneLoading,
} from '../actions/ui';
import type {bookmarkInfoType} from '../actions/ui';

import {
  getCurrentUsername,
  getWebBookmarkDialogInfo,
  getModalIsOpen,
  getIsWebBookmarkDialogOpen,
} from '../selectors/current';

const handleRequestSave = (bookmarkInfo: bookmarkInfoType) => (dispatch, getState) => {
  dispatch(itemIsLoading());
  const state = getState();
  const username = getCurrentUsername(state);
  dispatch(createWebBookmarkWithUsername(username, bookmarkInfo));
  dispatch(itemIsDoneLoading());
  dispatch(closeWebAddBookmarkDialog(username, bookmarkInfo));
};

function mapStateToProps(state, ownProps) {
  const currentUsername = getCurrentUsername(state);
  const webDialogIsOpen = getIsWebBookmarkDialogOpen(state);
  let bookmarkInfo = getWebBookmarkDialogInfo(state);
  if (bookmarkInfo === undefined) {
    bookmarkInfo = {bookmarkId: '', url: '', siteName: '', folderName: ''};
  }
  return {
    AddBookFormIsOpen,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return bindActionCreators(
    {
      handleRequestCancel,
      handleRequestSave,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(WebAddBookmarkDialog);
