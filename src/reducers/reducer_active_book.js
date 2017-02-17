// state arg is not app state, only the state this reducer is responsible for
//state = null, if arg comes in and is undefined (ie. before user has clicked on
// a book), set it to null.
export default function (state = null, action) {
  switch (action.type) {
  case 'BOOK_SELECTED':
    return action.payload;
  }

  return state;
}
