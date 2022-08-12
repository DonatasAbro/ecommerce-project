import React from "react";

function Item({ name, isChecked, onChange }) {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          name={name}
          checked={isChecked}
          onChange={onChange}
        />
        {name}
      </label>
    </div>
  );
}

export default Item;
