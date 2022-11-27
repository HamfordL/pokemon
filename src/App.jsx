import { Routes, Route } from "react-router-dom";

import { Col, Row, Divider, Dropdown, Space } from "antd";

import { DownOutlined } from "@ant-design/icons";

import PokemonList from "./views/pokemon-list";
import PokemonDetails from "./views/pokemon-details";

import titleBanner from "./images/Pokemon.png";

//list out different gens of pokemon
//view different pokemons, that are in their respected gen as a grp
//dropdown button at top where the pokedex is

function App() {
  const items = [
    {
      label: (
        <a target="_blank" href="pokemonGeneration">
          Generation I
        </a>
      ),
      key: "0",
    },
    {
      label: (
        <a target="_blank" href="pokemonGeneration">
          Generation II
        </a>
      ),
      key: "1",
    },
    {
      label: (
        <a target="_blank" href="pokemonGeneration">
          Generation III
        </a>
      ),
      key: "2",
    },
    {
      label: (
        <a target="_blank" href="pokemonGeneration">
          Generation IV
        </a>
      ),
      key: "3",
    },
    {
      label: (
        <a target="_blank" href="pokemonGeneration">
          Generation V
        </a>
      ),
      key: "4",
    },
    {
      label: (
        <a target="_blank" href="pokemonGeneration">
          Generation VI
        </a>
      ),
      key: "5",
    },
    {
      label: (
        <a target="_blank" href="pokemonGeneration">
          Generation VII
        </a>
      ),
      key: "6",
    },
    {
      label: (
        <a target="_blank" href="pokemonGeneration">
          Generation VIII
        </a>
      ),
      key: "7",
    },
    {
      label: (
        <a target="_blank" href="pokemonGeneration">
          Generation IX
        </a>
      ),
      key: "8",
    },
  ];

  return (
    <div className="App">
      <Row
        style={{
          background: "lightblue",
          height: "100%",
          margin: "0px",
          color: "blue",
        }}
      >
        <Col offset={3} span={18}>
          <Divider
            style={{
              background: "black",
              color: "red",
              padding: 110,
              backgroundImage: `url(${titleBanner})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "auto",
              backgroundPosition: "center",
            }}
            level={1}
            orientation="C"
          ></Divider>
          <Dropdown
            menu={{
              items,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space
                style={{
                  background: "black",
                  padding: 20,
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Pokemon Generations
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          <br />
          <br />
          <Routes>
            <Route path="/" exact element={<PokemonList />} />
            <Route path="/pokemon/:id" exact element={<PokemonDetails />} />
          </Routes>
        </Col>
      </Row>
    </div>
  );
}

export default App;
