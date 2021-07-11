import React from "react";

function RoomCard({ name, price, removeRoom, addRoom, id, amount }) {
  return (
    <div className="calc-card">
      <p className="calc-card__text ">{name}</p>
      <div className="calc-card__top">
        <button
          type="button"
          className="calc-card__button"
          onClick={() => removeRoom(id)}
        >
          -
        </button>
        <span>{amount}</span>
        <button className="calc-card__button" onClick={() => addRoom(id)}>
          +
        </button>
      </div>
    </div>
  );
}

export default RoomCard;
