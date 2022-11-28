import { useEffect } from "react";
import { Col, Row, Spin } from "antd";
import { useNavigate } from "react-router-dom";

import { pokemonGenerations } from "../App";

const PokemonList = (props) => {
  const selectedGeneration = props.generation;
  const generation = pokemonGenerations[selectedGeneration];
  const pokemons = props.pokemons;

  const navigateTo = useNavigate();

  useEffect(() => {
    if (!pokemons.length) {
      fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${generation.limit}&offset=${generation.offset}`
      )
        .then((response) => response.json())
        .then((response) =>
          Promise.all(
            response.results.map((result) =>
              fetch(result.url).then((res) => res.json())
            )
          )
        )
        .then((data) => props.setPokemons(data));
    }
  });

  if (!pokemons.length) {
    return (
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          background: "lightblue",
        }}
      >
        <Spin size="large" tip="Loading pokemon data" />
      </div>
    );
  }

  return (
    <Row gutter={[16, 16]}>
      {pokemons.map((pokemon) => (
        <Col key={pokemon.name} span={6}>
          <div
            style={{
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              padding: "1rem",
            }}
            onClick={() => navigateTo(`/pokemon/${pokemon.id}`)}
          >
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            {pokemon.name}
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default PokemonList;
