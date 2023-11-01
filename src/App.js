import React from "react";
import NavBars from "./componants/navbar/NavBars";
import './App.css'
import {originals,action,comedy, horror, documents} from './url'
import Banner from "./Banner/Banner";
import RowPoster from "./rowposter/RowPoster";
import Foot from "./foot/Foot";
function App() {
  return (
    <div className="App">
      <NavBars></NavBars>
      <Banner></Banner>
      <RowPoster urls={originals} title='Netflix Originals' ></RowPoster>
      <RowPoster urls={action} title='action' isSmall></RowPoster>
      <RowPoster urls={comedy} title='comedy' isSmall></RowPoster>
      <RowPoster urls={horror} title='horror' isSmall></RowPoster>
      <RowPoster urls={documents} title='Documentaries' isSmall></RowPoster>
      <Foot></Foot>
      

      
      
      
    </div>
  );
}

export default App;
