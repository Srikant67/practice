import "./App.css";
import React, { useState } from "react";
import Tours from "./components/Tours";
import data from "./data"
function App() {
  const [tours,setTours] = useState(data);

  function removeTour(id){
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  function addTour(){
    setTours(-1);
  }

  if(tours=== -1){
    return(
      <div className="refresh">
        <h2>Paise hai kya bhosdike</h2>
        <button className="btn-white" onClick={() => setTours(data)}>Go Back</button>
      </div>
    )
  }

  if(tours.length === 0){
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="btn-white" onClick={() => setTours(data)}>Refresh</button>
      </div>
    )
  }


  return (
    <div className="app flex w-full justify-center">
      <Tours tours={tours} addTour={addTour} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;