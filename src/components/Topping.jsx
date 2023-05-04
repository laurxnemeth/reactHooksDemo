import React from "react";

const Topping = (props) => {
  //props.topping
  //props.chosenTopping
  //props.setChosenTopping

  return (
    <div>
      <li className={ props.topping === props.chosenTopping ? "selected" : "" } onClick={() => {props.setChosenTopping(props.topping)}}
      > Topping: {props.topping}</li>
    </div>
  )
}

export default Topping;