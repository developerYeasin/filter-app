import React from "react";

const CusinesFilter = ({ handleCusines, cusines }) => {
  return (
    <div>
      {cusines.map((cusine, i) => (
        <div
          className="flex items-center pl-3"
          key={i}
          //   onClick={() => handleCusines(cusine.id)}
        >
          <input
            type="checkbox"
            id={`cusines${cusine.id}`}
            className="checked:bg-blue-500"
            checked={cusine.checked}
            onChange={() => handleCusines(cusine.id)}
          />
          <label
            htmlFor={`cusines${cusine.id}`}
            className="ml-4"
            // onClick={() => handleCusines(cusine.id)}
          >
            {cusine.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CusinesFilter;
