
export function selectBook(book) {
  console.log('A book has been selected:', book.title);
  //selectBook is an action creator it needs to retrun an actions
  //an object with a type propertyy
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
