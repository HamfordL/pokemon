import { useEffect, useState } from "react";
import { PageHeader, Col, Row, Divider, Spin } from "antd";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    if (!pokemons.length) {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
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
    <div className="App">
      <Row>
        <Col offset={3} span={18}>
          <Divider
            style={{ background: "black", color: "red", padding: 25 }}
            level={1}
            orientation="C"
          >
            Generation 1 Pokemon
          </Divider>

          <PageHeader style={{ background: "orange" }} title="Names" />

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
                >
                  <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                  {pokemon.name}
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default App;
