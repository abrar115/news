import React from "react";

import { data } from "./database";

export default function Card() {
  return (
    <div className="card-news">
      {data.map((x) => (
        <div className="cards_news">
          <img className="news_image" src={x.image} alt="news" />
          <p>{x.paragraphe_1}</p>
        </div>
      ))}
    </div>
  );
}
