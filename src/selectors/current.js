import {createSelector} from 'reselect';

// export const getUser = (state) => state.user;
// const getUserData = (state) => state.userData;

// export const getCurrentUsername = createSelector([getUser], (user) => {
//   if (!user || !user.loggedIn) {
//     return 'System';
//   }
//   return user.loggedInAs;
// });

// export const getWebBookmarkDialogInfo = createSelector([getCurrentUserData], (currentUserData) => {
//   if (
//     currentUserData === undefined ||
//     currentUserData.web === undefined ||
//     currentUserData.web.bookmarkDialog === undefined
//   ) {
//     return undefined;
//   }
//   const bookmarkInfo = currentUserData.web.bookmarkDialog;
//   console.log(bookmarkInfo);
//   return bookmarkInfo;
// });

// export const getCurrentUserData = createSelector(
//   [getCurrentUsername, getUserData],
//   (currentUsername, userData) => {
//     // If either currentUsername or userData is not found, return undefined
//     if (currentUsername === undefined || userData === undefined) {
//       return undefined;
//     }
//     // If currentUsername is not in the list of keys for userData, return undefined
//     if (Object.keys(userData).indexOf(currentUsername) === -1) {
//       return undefined;
//     }
//     // Return userData for currentUsername
//     return userData[currentUsername];
//   }
// );

export const getModalIsOpen = (state) => state.ui.modalIsOpen;

// export const getIsWebBookmarkDialogOpen = createSelector(
//   [getCurrentUserData],
//   (currentUserData) => {
//     if (currentUserData === undefined || currentUserData.web === undefined) {
//       return undefined;
//     }
//     return currentUserData.web.dialogIsOpen;
//   }
// );
