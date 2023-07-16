import shortid from "shortid";
import strContains from '../utils/strContains';

const ADD_COLUMN = 'app/columns/ADD_COLUMN';
export const getFilteredCards = ({ cards, searchString }, columnId) =>
cards.filter(
    card =>
      card.columnId === columnId &&
      strContains(card.title, searchString)
  );

export const addColumn = (payload, listId) => ({ type: ADD_COLUMN, payload, listId });
export const getColumnsByList = (state, listId) => state.columns.filter(column => column.listId === listId);

const columnsReducer = (statePart = [], action) => {
  switch(action.type) {
    case ADD_COLUMN:
      return [...statePart, { ...action.payload,  id: shortid() }];
    default:
      return statePart;
  }
};

export default columnsReducer;