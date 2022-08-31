import React from "react";

function Item({
  name,
  picUrl,
  btnText,
  color,
  onClick,
  amount,
  onSubtract,
  onAdd,
}) {
  return (
    <div className="card col card-width-limits">
      <img
        className="card-img-top card-pic align-self-center"
        src={picUrl}
        alt={`${name} image`}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit,
          minima?
        </p>
        <div className="d-flex justify-content-between">
          <input
            type="button"
            className={color}
            name={name}
            value={btnText}
            onClick={onClick}
          />
          <div className="btn-group" role="group">
            <button
              type="button"
              onClick={onSubtract}
              className="btn btn-danger"
            >
              <b>-</b>
            </button>
            <button type="button" disabled className="btn btn-light">
              <b>{amount}</b>
            </button>
            <button type="button" onClick={onAdd} className="btn btn-success">
              <b>+</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
