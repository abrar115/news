import React from "react";
import Header from "./Header";
import Homepage from "./Homepage";
import ImageSlider from "./ImageSlider"
import NewsCards from "./NewsCards";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <Header />
      {/* <Homepage /> */}
         <ImageSlider />
      <NewsCards />
      <Footer />
    </div>
  );
}
