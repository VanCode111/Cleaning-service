import React from "react";
import window from "../../assets/img/window.png";

function CardService({
  name,
  img,
  price,
  addService,
  amout,
  id,
  removeService,
}) {
  return (
    <div className="card-service">
      <div className="card-service__price">{price}₽</div>
      <img src={window} alt="" className="card-service__img" />
      <p className="card-service__name">{name}</p>
      {amout < 1 && (
        <button
          type="button"
          onClick={() => addService(100, id)}
          style={{ cursor: "pointer" }}
          className="button button_color_blue card-service__button"
        >
          Добавить
        </button>
      )}
      {amout > 0 && (
        <div className="card-service__controllers">
          <button
            onClick={() => removeService(100, id)}
            type="button"
            className="card-service__button-conctroller"
          >
            -
          </button>
          <span>{amout}</span>
          <button
            onClick={() => addService(100, id)}
            className="card-service__button-conctroller"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}

export default CardService;
