import React, {useState} from "react";
import { Topping } from "./";

const ToppingList = () => {
  const [chosenTopping, setChosenTopping] = useState("cheese");

  return (
    <div>
      <h1>You chose {chosenTopping} as a Pizza Topping!!</h1>
      <ul>
        <Topping topping="pineapple" chosenTopping={ chosenTopping } setChosenTopping={ setChosenTopping } />
        <Topping topping="anchovies" chosenTopping={ chosenTopping } setChosenTopping={ setChosenTopping } />
        <Topping topping="bacon" chosenTopping={ chosenTopping } setChosenTopping={ setChosenTopping } />
        <Topping topping="glass" chosenTopping={ chosenTopping } setChosenTopping={ setChosenTopping } />
      </ul>
    </div>
  )
}

export default ToppingList;