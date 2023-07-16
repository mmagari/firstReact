import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import strContains from '../utils/strContains';

export const getFilteredCards = ({ cards, searchString }, columnId) =>
cards.filter(
    card =>
      card.columnId === columnId &&
      strContains(card.title, searchString)
  );
export const addColumn = (payload, listId) => ({ type: 'ADD_COLUMN', payload, listId });
export const addCard = (columnId, newCard) => ({ type: 'ADD_CARD', payload: { columnId, newCard } });
export const updateSearchString = searchString => ({ type: 'UPDATE_SEARCH', payload: searchString });
export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);
export const getColumnsByList = (state, listId) => state.columns.filter(column => column.listId === listId);
export const getAllLists = state => state.lists;
export const addList = (title, description) => ({type: 'ADD_LIST', payload: { title, description }});

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }]};
    case 'ADD_CARD':
      const { columnId, newCard } = action.payload;
      return {...state, cards: [ ...state.cards, { id: shortid(), columnId, title: newCard.title }]};
    case 'UPDATE_SEARCH':
      return {...state, searchString: action.payload,};
    case 'ADD_LIST':
      const {title, description} = action.payload;
      return {...state, lists: [ ...state.lists, { id: shortid(), title: title, description: description,},],};
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;