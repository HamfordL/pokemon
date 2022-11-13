import { useEffect, useState } from "react";

import { Spin } from "antd";

import { useParams, useNavigate } from "react-router-dom";

const PokemonDetails = () => {
  const urlParams = useParams();
  const [pokemon, setPokemon] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (!pokemon) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${urlParams.id}`)
        .then((res) => res.json())
        .then((pokemonDetails) =>
          Promise.all([
            pokemonDetails,
            fetch(pokemonDetails.species.url).then((res) => res.json()),
          ])
        )
        .then(([pokemonDetails, speciesDetails]) =>
          Promise.all([
            {
              ...pokemonDetails,
              species: {
                ...pokemonDetails.species,
                ...speciesDetails,
              },
            },
            fetch(speciesDetails.evolution_chain.url).then((res) => res.json()),
          ])
        )
        .then(([speciesDetails, evoDetails]) =>
          setPokemon({
            ...speciesDetails,
            evolution: evoDetails,
          })
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
      moves:
      <ol>
        {pokemon.moves.map(({ move: { name } }) => (
          <li key={name}>{name}</li>
        ))}
      </ol>
      <br />
      <br />
      evolution chain:
    </div>
  );
};

export default PokemonDetails;
