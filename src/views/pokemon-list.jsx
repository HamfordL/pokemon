import { useEffect, useState } from "react";
import { Col, Row, Spin } from "antd";
import { useNavigate } from "react-router-dom";

const pokemonGeneration = [
  {
    limit: 151,
    offset: 0,
  },
  {
    limit: 100,
    offset: 151,
  },
  {
    limit: 135,
    offset: 251,
  },
  {
    limit: 107,
    offset: 386,
  },
  {
    limit: 156,
    offset: 493,
  },
  {
    limit: 72,
    offset: 649,
  },
  {
    limit: 88,
    offset: 721,
  },
  {
    limit: 96,
    offset: 809,
  },
  {
    limit: 103,
    offset: 905,
  },
];

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const navigateTo = useNavigate();

  useEffect(() => {
    if (!pokemons.length) {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
        .then((response) => response.json())
        .then((response) =>
          Promise.all(
            response.results.map((result) =>
              fetch(result.url).then((res) => res.json())
            )
          )
        )
        .then((data) => setPokemons(data));
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
          width: "100vw",
          height: "100vh",
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
