import React, { useEffect, useState } from "react";
const axios = require("axios");

const List = () => {
  const [data, setData] = useState([]);
  const [secondState, setSecondState] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon/');
        console.log(res);
        setData(res.data.results)
      } catch(err) {
        console.error(err)
      }
    }
    fetchData();
  }, [secondState]);

  return (
    <div>
      <h1>Pokemon List</h1>
      <ul>
        { 
          data.map((pokemon, index) => { 
            // typically... we use the id of the data for the key
            // however, if it does not have an id, we use the index
            // in this case, if it did have an id...
            // key={pokemon.id} (the ideal situation)
            // key=pokemon-1 (what we have going on)
            return <li key={`pokemon-${index + 1}`}>{pokemon.name}</li>; 
          }) 
        }
      </ul>
      {/* secondState = false.... turn it into its opposite */}
      {/* setSecondState(!false) */}
      {/* secondSecondState(!true) */}
      <button onClick={() => setSecondState(!secondState)}>Press me to get info from DB again</button>
    </div>
  )
}

export default List;