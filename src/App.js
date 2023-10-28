import React from "react";
import NavBars from "./componants/navbar/NavBars";
import './App.css'
import {originals,action} from './url'
import Banner from "./Banner/Banner";
import RowPoster from "./rowposter/RowPoster";
function App() {
  return (
    <div className="App">
      <NavBars></NavBars>
      <Banner></Banner>
      <RowPoster urls={originals} title='Netflix Originals' ></RowPoster>
      <RowPoster urls={action} title='action' isSmall></RowPoster>




    </div>
  );
}

export default App;
