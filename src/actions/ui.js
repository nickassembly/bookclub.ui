import uuidByString from 'uuid-by-string';

export const ITEM_IS_LOADING = 'ITEM_IS_LOADING';
export const ITEM_DONE_LOADING = 'ITEM_DONE_LOADING';
export const WEB_ADD_BOOKMARK_DIALOG_OPEN = 'WEB_ADD_BOOKMARK_DIALOG_OPEN';
export const WEB_ADD_BOOKMARK_DIALOG_CLOSE = 'WEB_ADD_BOOKMARK_DIALOG_CLOSE';

export type bookmarkInfoType = {
  bookmarkId?: string,
  url: string,
  siteName: string,
  folderName: string,
};

export function itemIsLoading() {
  return {
    type: ITEM_IS_LOADING,
  };
}
export function itemIsDoneLoading() {
  return {
    type: ITEM_DONE_LOADING,
  };
}

export function closeWebAddBookmarkDialog(username: string) {
  return {
    type: WEB_ADD_BOOKMARK_DIALOG_CLOSE,
    username,
  };
}

export function createWebBookmarkWithUsername(username: string, bookmarkInfo: bookmarkInfoType) {
  // UUID.v1 is a timestamp based UUID, which is guaranteed to never collide with
  // any previously generated UUID (assuming UUIDs were not generated at nearly
  // the same time). Generate UUID ahead of creating bookmark and linking to
  // username
  //  Console.log(bookmarkInfo.foldername);
  bookmarkInfo.bookmarkId = uuidByString(`${bookmarkInfo.url}, ${bookmarkInfo.siteName}`);
}
