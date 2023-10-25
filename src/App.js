import React from "react";
import NavBars from "./componants/navbar/NavBars";
import './App.css'
import Banner from "./Banner/Banner";
import RowPoster from "./rowposter/RowPoster";
function App() {
  return (
    <div className="App">
      <NavBars></NavBars>
      <Banner></Banner>
      <RowPoster ></RowPoster>



    </div>
  );
}

export default App;
