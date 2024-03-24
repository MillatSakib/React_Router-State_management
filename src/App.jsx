import Nav from "./Navbar/Nav";
import React from "react";
import PriceOptions from "./Price/PriceOptions";
import Phones from "./Phones/Phones";
function App() {
  return (
    <>
      <div>
        <Nav></Nav>
        <PriceOptions></PriceOptions>
        <Phones></Phones>
      </div>
    </>
  );
}

export default App;
