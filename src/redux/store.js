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

export const getAllColumns = state => state.columns;
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = (columnId, newCard) => ({ type: 'ADD_CARD', payload: { columnId, newCard } });
export const updateSearchString = searchString => ({ type: 'UPDATE_SEARCH', payload: searchString });

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }]};
    case 'ADD_CARD':
      const { columnId, newCard } = action.payload;
      return {...state, cards: [ ...state.cards, { id: shortid(), columnId, title: newCard.title }]};
    case 'UPDATE_SEARCH':
      return {
        ...state,
        searchString: action.payload,
      };
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