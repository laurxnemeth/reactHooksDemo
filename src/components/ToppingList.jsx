import React, { useState, useEffect } from "react";
import { Topping } from "./";

const ToppingList = () => {
  const [chosenTopping, setChosenTopping] = useState("cheese");
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() =>{
    const handleResizing = () => {
      setWindowHeight(window.innerHeight);
    }
    window.addEventListener("resize", handleResizing);

    console.log('without dependency array, on mount')
    // called only once, at the beginning of 1st render

    return () => {
      window.removeEventListener("resize", handleResizing);
      console.log('component is unmounting')
    }
  }, [windowHeight, chosenTopping]);

  useEffect(() => {
    console.log('no dependency array, runs every change');
  })

  useEffect(() => {
    console.log('with empty dependency array, runs only at start');
  }, [])

  return (
    <div>
      <h1>You chose {chosenTopping} as a Pizza Topping!!</h1>
      <ul>
        <Topping topping="pineapple" chosenTopping={ chosenTopping } setChosenTopping={ setChosenTopping } />
        <Topping topping="anchovies" chosenTopping={ chosenTopping } setChosenTopping={ setChosenTopping } />
        <Topping topping="bacon" chosenTopping={ chosenTopping } setChosenTopping={ setChosenTopping } />
        <Topping topping="glass" chosenTopping={ chosenTopping } setChosenTopping={ setChosenTopping } />
      </ul>
      <h2>The window size is: {windowHeight}</h2>
    </div>
  )
}

export default ToppingList;