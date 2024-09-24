export const UPDATE_CARD_CONTENT = "UPDATE_CARD_CONTENT";
export const UPDATE_CARD_NUMBER = "UPDATE_CARD_NUMBER";
export const UPDATE_CARD_VALUE = "UPDATE_CARD_VALUE";
export const START_EDITING = "START_EDITING";
export const STOP_EDITING = "STOP_EDITING";
export const ADD_CARD = "ADD_CARD";
export const EDIT_CARD = "EDIT_CARD";
export const DELETE_CARD = "DELETE_CARD";
export const PAY_WITH_CARD = "PAY_WITH_CARD";
// export const ADD_CARD_CONTENT="ADD_CARD_CONTENT";
// export const  ADD_CARD_NUMBER=" ADD_CARD_NUMBER";
// export const ADD_CARD_VALUE="ADD_CARD_VALUE";


function generateUniqueId() {
  return Math.random().toString(36).substr(2, 9);
}

export const addCard = (content, number, value) => ({
  type: ADD_CARD,
  payload: { id: generateUniqueId(),content, number, value },
});



export const editCard = (id, newContent, newNumber, newValue) => ({
  type: EDIT_CARD,
  payload: { id, content: newContent, number: newNumber, value: newValue },
});

export const startEditing = (id, content, number, value) => ({
  type: START_EDITING,
  payload: { id, content, number, value },
});

export const stopEditing = () => ({
  type: STOP_EDITING,
});

export function deleteCard(id) {
  return {
    type: DELETE_CARD,
    payload: { id },
  };
}

export function payWithCard(id, price) {
  return {
    type: PAY_WITH_CARD,
    payload: { id, price },
  };
}

export const updateCardContent = (content) => ({
  type: UPDATE_CARD_CONTENT,
  payload: { content },
});

export const updateCardNumber = (number) => ({
  type: UPDATE_CARD_NUMBER,
  payload: { number },
});

export const updateCardValue = (value) => ({
  type: UPDATE_CARD_VALUE,
  payload: { value },
});
