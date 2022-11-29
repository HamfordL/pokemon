import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import { Col, Row, Divider, Select } from "antd";

import PokemonList from "./views/pokemon-list";
import PokemonDetails from "./views/pokemon-details";

import titleBanner from "./images/Pokemon.png";

export const pokemonGenerations = [
  {
    limit: 151,
    offset: 0,
    value: 0,
    label: "Generation I",
  },
  {
    limit: 100,
    offset: 151,
    value: 1,
    label: "Generation II",
  },
  {
    limit: 135,
    offset: 251,
    value: 2,
    label: "Generation III",
  },
  {
    limit: 108,
    offset: 386,
    value: 3,
    label: "Generation IV",
  },
  {
    limit: 155,
    offset: 494,
    value: 4,
    label: "Generation V",
  },
  {
    limit: 72,
    offset: 649,
    value: 5,
    label: "Generation VI",
  },
  {
    limit: 88,
    offset: 721,
    value: 6,
    label: "Generation VII",
  },
  {
    limit: 96,
    offset: 809,
    value: 7,
    label: "Generation VIII",
  },
  {
    limit: 103,
    offset: 905,
    value: 8,
    label: "Generation IX",
  },
];

function App() {
  const [generation, setGeneration] = useState(pokemonGenerations[0].value);
  const [pokemons, setPokemons] = useState([]);
  const handleChange = (selectedGeneration) => {
    setGeneration(selectedGeneration);
    setPokemons([]);
  };

  return (
    <div className="App">
      <Row
        style={{
          background: "lightblue",
          height: "100%",
          color: "blue",
        }}
      >
        <Col
          style={{
            background: "lightblue",
            height: "100%",
            color: "blue",
          }}
          offset={3}
          span={18}
        >
          <Divider
            style={{
              background: "black",
              padding: 150,
              backgroundImage: `url(${titleBanner})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "auto",
              backgroundPosition: "center",
            }}
            level={1}
            orientation="C"
          ></Divider>
          <Select
            options={pokemonGenerations}
            onChange={handleChange}
            value={generation}
            style={{
              padding: 1,
              fontSize: 25,
              color: "blue",
              background: "black",
            }}
          />
          <br />
          <br />
          <Routes>
            <Route
              path="/"
              exact
              element={
                <PokemonList
                  generation={generation}
                  pokemons={pokemons}
                  setPokemons={setPokemons}
                />
              }
            />
            <Route path="/pokemon/:id" exact element={<PokemonDetails />} />
          </Routes>
        </Col>
      </Row>
    </div>
  );
}

export default App;
