import React, { useState } from "react";

function Counter () {
  const [number, setNumber] = useState(0);

  return (
    <div id="counter-container">
      <h2>Counter</h2>
      {/* we will be changing this state soon!! */}
      <h2>{number}</h2>

      <button onClick={
        () => { setNumber( number + 1 )}
      }>
        Increase
      </button>
      <button onClick={
        () => { setNumber( number - 1 ) }
      }>
        Decrease
      </button>
    </div>
  )
}

export default Counter;