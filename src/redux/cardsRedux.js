import shortid from "shortid";

const ADD_CARD = 'app/cards/ADD_CARD';
const TOGGLE_CARD_FAVORITE = 'app/cards/TOGGLE_CARD_FAVORITE';
const REMOVE_CARD = 'app/cards/REMOVE_CARD';

export const addCard = (columnId, newCard) => ({ type: ADD_CARD, payload: { columnId, newCard} });
export const toggleFavorite = (payload, id, isFavorite) => ({ type: TOGGLE_CARD_FAVORITE, payload, id, isFavorite });
export const getFavoriteCards = (state) => state.cards.filter((card) => card.isFavorite);
export const removeCard = (payload, id) => ({ type: REMOVE_CARD, payload, id });


const cardsReducer = (statePart = [], action) => {
  switch(action.type) {
    case ADD_CARD:
      return [...statePart, { ...action.payload.newCard, id: shortid(), isFavorite:false }];
    case TOGGLE_CARD_FAVORITE:
      return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
      case REMOVE_CARD:
        return statePart.filter((card) => card.id !== action.payload);
    default:
      return statePart;
  }
};

export default cardsReducer;