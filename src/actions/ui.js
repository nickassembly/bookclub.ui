export const BOOK_SELECTED = 'BOOK_SELECTED';
export const BOOK_UNSELECTED = 'BOOK_UNSELECTED';

export function selectBook(bookKey: string) {
  return {
    type: BOOK_SELECTED,
    bookKey,
  };
}
export function unselectBook(bookKey: string) {
  return {
    type: BOOK_UNSELECTED,
    bookKey,
  };
}
