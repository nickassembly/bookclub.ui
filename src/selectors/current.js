import {createSelector} from 'reselect';

export const getCurrentUsername = createSelector([getUser], (user) => {
  if (!user || !user.loggedIn) {
    return 'System';
  }
  return user.loggedInAs;
});

export const getIsWebBookmarkDialogOpen = createSelector(
  [getCurrentUserData],
  (currentUserData) => {
    if (currentUserData === undefined || currentUserData.web === undefined) {
      return undefined;
    }
    return currentUserData.web.dialogIsOpen;
  }
);

export const getWebBookmarkDialogInfo = createSelector([getCurrentUserData], (currentUserData) => {
  if (
    currentUserData === undefined ||
    currentUserData.web === undefined ||
    currentUserData.web.bookmarkDialog === undefined
  ) {
    return undefined;
  }
  const bookmarkInfo = currentUserData.web.bookmarkDialog;
  console.log(bookmarkInfo);
  return bookmarkInfo;
});

export const getModalIsOpen = (state) => state.ui.modalIsOpen;

export const getIsWebBookmarkDialogOpen = createSelector(
  [getCurrentUserData],
  (currentUserData) => {
    if (currentUserData === undefined || currentUserData.web === undefined) {
      return undefined;
    }
    return currentUserData.web.dialogIsOpen;
  }
);
