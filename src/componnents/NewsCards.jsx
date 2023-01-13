import React from "react";
import Card from "./Card";

function NewsCards() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Lates News</h1>
      <div className="cards">
        <Card />
      </div>
    </>
  );
}

export default NewsCards;
