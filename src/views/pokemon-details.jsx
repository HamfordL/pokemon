import { useEffect, useState } from "react";

import { Spin } from "antd";

import { useParams, useNavigate } from "react-router-dom";

const PokemonDetails = () => {
  const urlParams = useParams();
  const [pokemon, setPokemon] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (!pokemon) {
      fetch("https://pokeapi.co/api/v2/pokemon/" + urlParams.id)
        .then((response) => response.json())
        .then((data) => setPokemon(data));

      Promise.all();
      fetch()
        .then((res) => res.json())
        .then((res) =>
          fetch("https://pokeapi.co/api/v2/pokemon-species/" + urlParams.id)
            .then((res) => res.json())

            .then((species_res) =>
              fetch("https://pokeapi.co/api/v2/evolution-chain/" + urlParams.id)
            )
            .then((res) => res.json())
            .then((data) => setPokemon(data))
        );
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
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />{" "}
      <img src={pokemon.sprites.back_default} alt={pokemon.name} />{" "}
      <button onClick={() => navigate(-1)}>Go back</button>
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
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    </div>
  );
};

export default PokemonDetails;
