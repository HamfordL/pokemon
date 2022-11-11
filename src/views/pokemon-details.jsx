import { useEffect, useState } from "react";
import { Spin } from "antd";

import { useParams } from "react-router-dom";

const PokemonDetails = () => {
  const urlParams = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    if (!pokemon) {
      fetch("https://pokeapi.co/api/v2/pokemon/" + urlParams.id)
        .then((response) => response.json())
        .then((data) => setPokemon(data));
    }
  });
  if (!pokemon) {
    return (
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Spin size="large" tip="Loading pokemon data" />
      </div>
    );
  }

  return (
    <div>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <img src={pokemon.sprites.back_default} alt={pokemon.name} />
      <br />
      name: {pokemon.name}
      <br />
      <br />
      type: {pokemon.types.map((typeObject) => typeObject.type.name).join(", ")}
      <br />
      <br />
      moves:{" "}
      {pokemon.moves.map((moveObject) => moveObject.move.name).join(", ")}
      <br />
      <br />
      evolution chain:{" "}
    </div>
  );
};

export default PokemonDetails;
