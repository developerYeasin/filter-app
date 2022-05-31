import React from "react";



const ListItem = ({
  item: {
    title,
    serviceTime,
    deliveryFee,
    category,
    cuisine,
    rating,
    price,
    coverSrc,
  },
}) => {
  return (
    <div>
      <img src={coverSrc} alt="" className="w-full h-60" />
      <header className="flex justify-between items-center ">
        <h4>{title}</h4>
        <span className="">🌟{rating}</span>
      </header>
      <footer className="flex justify-between items-center ">
        <p>
          <b>{serviceTime}</b> <span>Devlivery Fee ${deliveryFee}</span>
        </p>
        <p>
          <b>${price}</b>
        </p>
      </footer>
    </div>
  );
};

export default ListItem;
