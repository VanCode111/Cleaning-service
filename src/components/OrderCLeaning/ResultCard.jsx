import React from "react";

function ResultCard({ next, text, resultPrice }) {
  return (
    <div className="result-card">
      <h2 className="result-card__sum">
        Стоимость <span>{resultPrice}₽</span>
      </h2>
      <button
        type="button"
        style={{ cursor: "pointer" }}
        onClick={next}
        className="button button_color_blue result-card__button"
      >
        {text}
      </button>
    </div>
  );
}

export default ResultCard;
