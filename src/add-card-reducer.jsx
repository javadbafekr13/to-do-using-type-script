import {
  ADD_CARD,
  EDIT_CARD,
  DELETE_CARD,
  PAY_WITH_CARD,
  UPDATE_CARD_CONTENT,
  START_EDITING,
  UPDATE_CARD_VALUE,
  UPDATE_CARD_NUMBER,
  STOP_EDITING,
} from "./add-card-actions";

const initialState = {
  cards: [],
  cardContent: "",
  cardNumber: "",
  cardValue: "",
  isEditing: false,
  editingCardId: null,
};
function cardsReducer(state = initialState, action) {
  switch (action.type) {
    case PAY_WITH_CARD:
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.id === action.payload.id
            ? { ...card, value: Math.max(0, +card.value - +action.payload.price) }
            : card
        ),
      };

    case ADD_CARD:
      return {
        ...state,
        cards: [...state.cards, action.payload],
      };
    case DELETE_CARD:
      return {
        ...state,
        cards: state.cards.filter((card) => card.id !== action.payload.id),
      };
    case EDIT_CARD:
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.id === action.payload.id
            ? {
                ...card,
                content: action.payload.content,
                number: action.payload.number,
                value: action.payload.value,
              }
            : card
        ),
      };
    // case UPDATE_CARD_CONTENT:
    //   return {
    //     ...state,
    //     cardContent: action.payload.content,
    //   };
    // case UPDATE_CARD_NUMBER:
    //   return {
    //     ...state,
    //     cardNumber: action.payload.number,
    //   };
    // case UPDATE_CARD_VALUE:
    //   return {
    //     ...state,
    //     cardValue: action.payload.value,
    //   };


//     case UPDATE_CARD_CONTENT:
//   return {
//     ...state,
//     cards: state.cards.map((card) => {
//       if (card.id === action.payload.id) {
//         return { ...card, content: action.payload.content };
//       }
//       return card;
//     }),
//   };
// case UPDATE_CARD_NUMBER:
//   return {
//     ...state,
//     cards: state.cards.map((card) => {
//       if (card.id === action.payload.id) {
//         return { ...card, number: action.payload.number };
//       }
//       return card;
//     }),
//   };
// case UPDATE_CARD_VALUE:
//   return {
//     ...state,
//     cards: state.cards.map((card) => {
//       if (card.id === action.payload.id) {
//         return { ...card, value: action.payload.value };
//       }
//       return card;
//     }),
//   };


// case UPDATE_CARD_CONTENT:
//   return {
//     ...state,
//     cardContent: action.payload.content,
//     cards: state.cards.map((card) => {
//       if (card.id === state.editingCardId) {
//         return { ...card, content: action.payload.content };
//       }
//       return card;
//     }),
//   };
// case UPDATE_CARD_NUMBER:
//   return {
//     ...state,
//     cardNumber: action.payload.number,
//     cards: state.cards.map((card) => {
//       if (card.id === state.editingCardId) {
//         return { ...card, number: action.payload.number };
//       }
//       return card;
//     }),
//   };
// case UPDATE_CARD_VALUE:
//   return {
//     ...state,
//     cardValue: action.payload.value,
//     cards: state.cards.map((card) => {
//       if (card.id === state.editingCardId) {
//         return { ...card, value: action.payload.value };
//       }
//       return card;
//     }),
//   };

case UPDATE_CARD_CONTENT:
  return {
    ...state,
    cardContent: action.payload.content,
    cards: state.cards.map((card) => {
      if (card.id === state.editingCardId) {
        return { ...card, content: action.payload.content };
      }
      return card;
    }),
  };
case UPDATE_CARD_NUMBER:
  return {
    ...state,
    cardNumber: action.payload.number,
    cards: state.cards.map((card) => {
      if (card.id === state.editingCardId) {
        return { ...card, number: action.payload.number };
      }
      return card;
    }),
  };
case UPDATE_CARD_VALUE:
  return {
    ...state,
    cardValue: action.payload.value,
    cards: state.cards.map((card) => {
      if (card.id === state.editingCardId) {
        return { ...card, value: action.payload.value };
      }
      return card;
    }),
  };


    case START_EDITING:
      return {
        ...state,
        isEditing: true,
        editingCardId: action.payload.id,
        cardContent: action.payload.content,
        cardNumber: action.payload.number,
        cardValue: action.payload.value,
      };
    case STOP_EDITING:
      return {
        ...state,
        isEditing: false,
        editingCardId: null,
        cardContent: "",
        cardNumber: "",
        cardValue: "",
      };
    default:
      return state;
  }
}

export default cardsReducer;
