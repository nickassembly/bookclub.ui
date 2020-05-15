import {createSelector} from 'reselect';

export const getCurrentBookKey = createSelector(
  [getCurrentEmailAccount, getCurrentEmails],
  (currentEmailAccount, currentEmails) => {
    if (currentEmailAccount === undefined || currentEmails === undefined) {
      return undefined;
    }
    if (currentEmailAccount.ui.currentEmailKey === '') {
      return undefined;
    }
    return currentEmailAccount.ui.currentEmailKey;
  }
);

export const getCurrentEmailAccountId = createSelector(
  [getCurrentUserData, getCurrentEmailAccountIds],
  (currentUserData, currentEmailAccountIds) => {
    if (currentUserData === undefined || currentEmailAccountIds === undefined) {
      return undefined;
    }
    let currentEmailAccountId = currentUserData.email.ui.currentEmailAccount;
    if (currentEmailAccountId === '') {
      currentEmailAccountId = currentEmailAccountIds[0];
    }
    // TODO when creating email account, check to see if it is first email
    // account / if no current email account is set, then set to self, so that
    // the state variable is always set

    // Handle case where email account ID is not in current email account
    return currentEmailAccountId;
  }
);

export const getCurrentEmailAccount = createSelector(
  [getCurrentEmailAccountId, getEmailAccounts],
  (currentEmailAccountId, emailAccounts) => {
    if (currentEmailAccountId === undefined || emailAccounts === undefined) {
      return undefined;
    }
    const currentEmailAccount = emailAccounts[currentEmailAccountId];
    return currentEmailAccount;
  }
);

export const getCurrentEmails = createSelector(
  [getCurrentFolder, getEmails],
  (currentFolder, emails) => {
    if (currentFolder === undefined || currentFolder === '' || currentFolder.emails === undefined) {
      return undefined;
    }
    if (currentFolder.emails.length === 0) {
      return undefined;
    }
    const currentEmails = currentFolder.emails.map((e) => emails[e]);
    return currentEmails;
  }
);

export const getCurrentEmailAccountIds = createSelector([getCurrentUserData], (currentUserData) => {
  // If currentUserData is not found, return undefined
  if (currentUserData === undefined) {
    return undefined;
  }
  return currentUserData.email.accounts;
});

export const getCurrentUsername = createSelector([getUser], (user) => {
  if (!user || !user.loggedIn) {
    return 'System';
  }
  return user.loggedInAs;
});

export const getCurrentUserData = createSelector(
  [getCurrentUsername, getUserData],
  (currentUsername, userData) => {
    // If either currentUsername or userData is not found, return undefined
    if (currentUsername === undefined || userData === undefined) {
      return undefined;
    }
    // If currentUsername is not in the list of keys for userData, return undefined
    if (Object.keys(userData).indexOf(currentUsername) === -1) {
      return undefined;
    }
    // Return userData for currentUsername
    return userData[currentUsername];
  }
);

export const getCurrentFolder = createSelector(
  [getCurrentEmailAccount, getCurrentFolderIndex],
  (currentEmailAccount, currentFolderIndex) => {
    if (currentFolderIndex === undefined) {
      return 0;
    }
    return currentEmailAccount.folders[currentFolderIndex];
  }
);

export const getCurrentFolderIndex = createSelector(
  [getCurrentEmailAccount],
  (currentEmailAccount) => {
    // If there are no folders, then cannot have a current folder, return
    // undefined.
    if (!currentEmailAccount || currentEmailAccount.folders.length === 0) {
      return undefined;
    }
    const currentFolderName = currentEmailAccount.ui.currentEmailFolder;
    // If there is no current folder name set, then default to showing first
    // folder
    if (currentFolderName === '') {
      return 0;
    }
    // Look up index for the current folder name
    const currentFolderIndex = currentEmailAccount.folders.findIndex(
      (x) => x.name === currentFolderName
    );
    // If -1, then not found, so default to returning first folder, otherwise
    // return found folder index
    return currentFolderIndex === -1 ? 0 : currentFolderIndex;
  }
);

export const getEmailAccounts = (state) => state.emailAccounts;
const getEmails = (state) => state.emails;
const getUserData = (state) => state.userData;
