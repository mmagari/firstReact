import shortid from "shortid";
const ADD_LIST = 'app/lists/ADD_LIST';

export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);
export const getAllLists = state => state.lists;
export const addList = (title, description) => ({type: ADD_LIST, payload: { title, description }});

const listsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_LIST:
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  };
};

export default listsReducer;