import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addCard } from "./add-card-actions";
import { updateTime } from "./timeActions";
import { editCard } from "./add-card-actions";
import { deleteCard } from "./add-card-actions";
import { payWithCard } from "./add-card-actions";
import Counter from "./counterTypeScript"; 
import Counter2 from './counterTypeScriptUsingReducer';
import "./csss/card.css";
const Paing = ({ dispatch, cards, currentTime }) => {
  const [cardContent, setCardContent] = useState("");
  const [cardvalue, setcardvalue] = useState("");
  const [cardnumber, setcardnumber] = useState("");
  const [editingCardId, setEditingCardId] = useState(null);
  const [Price, setPrice] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(updateTime());
    }, 1000);
    return () => clearInterval(intervalId);
  }, [dispatch]);

  const paying = () => {
    const priceValue = parseFloat(Price);

    const cardValueNumber = parseFloat(cardvalue);
    if (!isNaN(priceValue) && priceValue > 0 && cardValueNumber >= Price) {
      dispatch(payWithCard(editingCardId, priceValue));
      setPrice("");
    } else {
      alert("Please enter a valid price or check the card value.");
    }
  };

  const ChosenCard = (card) => {
    setCardContent(card.content);
    setcardnumber(card.number);
    setcardvalue(card.value);
    setEditingCardId(card.id);
  };

  return (
    <div
      style={{
        display: "flex",

       padding:"100px",
       justifyContent:"space-between",
       alignContent:"center",
      gap:"100px"
      }}
    >
      {/* <Counter/>
      <Counter2/> */}
      <div className="addcard">
        <p
          style={{
            color: "black",
            marginTop: "0px",
            marginBottom: "15px",
            fontSize: "30px",
          }}
        >
          Payment service
        </p>
        <input
          style={{ width: "65%", border: "none", borderRadius: "4px" }}
          value={cardContent}
          maxLength={16}
          type="text"
          onChange={(e) => setCardContent(e.target.value)}
          placeholder="your name"
        />
        <input
          style={{ width: "65%", border: "none", borderRadius: "4px" }}
          value={cardnumber}
          type="number"
          min="1"
          max="999"
          onInput={(e) => {
            if (e.target.value.length > 16) {
              e.target.value = e.target.value.slice(0, 16);
            }
          }}
          onChange={(e) => setcardnumber(e.target.value)}
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
          value={cardvalue}
          onChange={(e) => setcardvalue(e.target.value)}
          placeholder="accont value"
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
          value={Price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="price"
        />
        <button className="addbuttom" onClick={paying}>
          Pay
        </button>
      </div>

      <div className={cards.length > 0 ? "listShow" : "listHide"}>
        <div className= {cards.length > 0 ?"listHeather":"listhid"}>
       <p className={cards.length>0?"":"dontShowText"}>select your card for payment</p>
        </div>
        {cards.map((card) => (
          <div key={card.id}>
            <div onClick={() => ChosenCard(card)} className="card2">
              <div className="buttonsAndChipset">
                <div className="chip"></div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  width: "90%",

                  gap: "2px",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",

                    justifyContent: "center",
                    width: "90%",

                    gap: "2px",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <h4>card number:</h4>
                  <div className="card2-number">{card.number}</div>
                </div>
                <div
                  style={{
                    display: "flex",

                    justifyContent: "center",
                    width: "90%",

                    gap: "2px",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <h4>value:</h4>
                  <div className="card2-number">{card.value}</div>
                </div>
              </div>

              <div className="card2-details">
                <div className="name">name:{card.content}</div>
                <div className="expiry">
                  {" "}
                  <p>{currentTime}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  cards: state.addcard.cards,
  currentTime: state.time.currentTime,
});
export default connect(mapStateToProps)(Paing);
