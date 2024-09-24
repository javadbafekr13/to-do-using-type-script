import React, { useEffect } from "react";
import { connect } from "react-redux";
import { addCard } from "./add-card-actions";
import { updateTime } from "./timeActions";
import { editCard } from "./add-card-actions";
import {
  deleteCard,
  updateCardContent,
  updateCardNumber,
  updateCardValue,
  startEditing,
  stopEditing,
} from "./add-card-actions";
import "./csss/card.css";
const AddCard = ({
  dispatch,
  cards,
  currentTime,
  cardContent,
  cardNumber,
  cardValue,
  isEditing,
  editingCardId,
}) => {
  const handleDeleteCard = (id) => {
    dispatch(deleteCard(id));
  };
  const startEdit = (card) => {
    dispatch(startEditing(card.id, card.content, card.number, card.value));
  };

  const submitEdit = () => {
    if (cardContent.trim() && cardNumber.trim() && cardValue.trim()) {
      dispatch(editCard(editingCardId, cardContent, cardNumber, cardValue));
      cancelEdit();
    } else {
      alert("Please fill in all fields");
    }
  };

  const cancelEdit = () => {
    dispatch(stopEditing());
  };
  const handleContentChange = (e) => {
    dispatch(updateCardContent(e.target.value));
  };

  const handleNumberChange = (e) => {
    dispatch(updateCardNumber(e.target.value));
  };

  const handleValueChange = (e) => {
    dispatch(updateCardValue(e.target.value));
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(updateTime());
    }, 1000);
    return () => clearInterval(intervalId);
  }, [dispatch]);
  const handleAddCard = () => {
    if (cardContent.trim() && cardNumber.trim() && cardValue.trim()) {
      dispatch(addCard(cardContent, cardNumber, cardValue));
      dispatch(updateCardContent(""));
      dispatch(updateCardNumber(""));
      dispatch(updateCardValue(""));
    } else {
      alert("dont left inputs empety");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="addcard">
        <p
          style={{
            color: "black",
            marginTop: "0px",
            marginBottom: "15px",
            fontSize: "30px",
          }}
        >
          Add your accont
        </p>
        <input
          style={{ width: "65%", border: "none", borderRadius: "4px" }}
          value={cardContent}
          maxLength={16}
          type="text"
          onChange={handleContentChange}
          placeholder="your name"
        />
        <input
          style={{ width: "65%", border: "none", borderRadius: "4px" }}
          value={cardNumber}
          // type="number"
          // min="1"
          // max="999"
          // onInput={(e) => {
          //   if (e.target.value.length > 16) {
          //     e.target.value = e.target.value.slice(0, 16);
          //   }
          // }}
          maxLength={16}
          type="text"
          pattern="\d*"
          onChange={handleNumberChange}
          placeholder="card number"
        />
        <input
          style={{ width: "65%", border: "none", borderRadius: "4px" }}
          type="number"
          min="1"
          max="999"
          onInput={(e) => {
            if (e.target.value.length > 16) {
              e.target.value = e.target.value.slice(0, 16);
            }
          }}
          value={cardValue}
          onChange={handleValueChange}
          placeholder="accont value"
        />
        <button className="addbuttom" onClick={handleAddCard}>
          Add Card
        </button>
      </div>

      <div className={cards.length > 0 ? "listShowAddcard" : "listHide"}>
        {isEditing ? (
          <div>
            <input
              style={{ width: "65%", border: "none", borderRadius: "4px" }}
              value={cardContent}
              maxLength={16}
              type="text"
              onChange={handleContentChange}
              placeholder="Edit name"
            />
            <input
              style={{ width: "65%", border: "none", borderRadius: "4px" }}
              value={cardNumber}
              type="number"
              min="1"
              max="999"
              onInput={(e) => {
                if (e.target.value.length > 16) {
                  e.target.value = e.target.value.slice(0, 16);
                }
              }}
              onChange={handleNumberChange}
              placeholder="Edit card number"
            />
            <input
              style={{ width: "65%", border: "none", borderRadius: "4px" }}
              type="number"
              min="1"
              max="999"
              onInput={(e) => {
                if (e.target.value.length > 16) {
                  e.target.value = e.target.value.slice(0, 16);
                }
              }}
              value={cardValue}
              onChange={handleValueChange}
              placeholder="Edit account value"
            />
            <div className="editeCancel">
              <button onClick={submitEdit}>Submit Edit</button>
              <button onClick={cancelEdit}>Cancel</button>
            </div>
          </div>
        ) : (
          cards.map((card) => (
            <div key={card.id}>
              <div className="card">
                <div className="buttonsAndChipset">
                  <div className="chip"></div>
                  <div className="buttomsEddit">
                    <button
                      style={{ backgroundColor: "yellow", color: "black" }}
                      onClick={() => startEdit(card)}
                    >
                      +
                    </button>
                    <button
                      style={{ backgroundColor: "red" }}
                      onClick={() => handleDeleteCard(card.id)}
                    >
                      X
                    </button>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",

                    justifyContent: "center",
                    gap: "4px",
                    alignItems: "center",
                  }}
                >
                  <h4>card number:</h4>
                  <div className="card-number">{card.number}</div>
                </div>
                <div className="card-details">
                  <div className="name">name:{card.content}</div>
                  <div className="expiry">
                    <p>{currentTime}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
// const mapStateToProps = (state) => ({
//   // cards: state.cardsReducer.cards,
//   cards: state.addcard.cards,
//   currentTime: state.time.currentTime,
//   cardContent: state.addcard.cards,
//   cardNumber: state.addcard.cards,
//   cardValue: state.addcard.cards,
//   isEditing: state.addcard.cards,
//   editingCardId: state.addcard.cards,
// });
const mapStateToProps = (state) => ({
  cards: state.addcard.cards,
  currentTime: state.time.currentTime,
  cardContent: state.addcard.cardContent,
  cardNumber: state.addcard.cardNumber,
  cardValue: state.addcard.cardValue,
  isEditing: state.addcard.isEditing,
  editingCardId: state.addcard.editingCardId,
});

export default connect(mapStateToProps)(AddCard);
