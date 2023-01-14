import React from "react";
import CardsCss from "./cards.module.css";
import { BiLike, BiDislike } from "react-icons/bi";

const Cards = ({ value }) => {
  const { name, date, img, describe, id } = value;
  const [value1, setvalue1] = React.useState(0);
  return (
    <div key={id} className={CardsCss.card}>
      <div>
        <img src={img} className={CardsCss.cardImage} />
      </div>

      <div>
        <p className={CardsCss.date}>{date}</p>
        <a className={CardsCss.link} href="#">
          <h1 className={CardsCss.name}>{name}</h1>
        </a>

        <p className={CardsCss.describe}>{describe}</p>
      </div>

      <div className={CardsCss.state}>
        <button className={CardsCss.btn} onClick={()=>setvalue1(value1 - 1)}>
          <BiDislike size={40} color="white" />
        </button>
        <p>{value1}</p>
        
        <button className={CardsCss.btn} onClick={()=>setvalue1(value1 + 1)}>
          <BiLike size={40} color="white" />
        </button>
      </div>
    </div>
  );
};

export default Cards;
