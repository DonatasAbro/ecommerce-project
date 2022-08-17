import React from "react";

function Item({ name, picUrl, value, color, onClick }) {
  return (
    <div className="card col card-width-limits">
      <img
        className="card-img-top card-pic align-self-center"
        src={picUrl}
        alt="item image"
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit,
          minima?
        </p>
        <input
          type="button"
          className={color}
          name={name}
          value={value}
          onClick={onClick}
        />
      </div>
    </div>
  );
}

export default Item;
