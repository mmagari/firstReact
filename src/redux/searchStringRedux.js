const UPDATE_SEARCH = 'app/searchString/UPDATE_SEARCH';
export const updateSearchString = searchString => ({ type: UPDATE_SEARCH, payload: searchString });

const searchStringReducer = (statePart = '', action) => {
  switch(action.type) {
    case UPDATE_SEARCH:
      return action.payload
    default:
      return statePart;
  }
};

export default searchStringReducer;