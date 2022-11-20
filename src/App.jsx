import { Routes, Route } from "react-router-dom";
import { PageHeader, Col, Row, Divider } from "antd";

import PokemonList from "./views/pokemon-list";
import PokemonDetails from "./views/pokemon-details";

function App() {
  return (
    <div className="App">
      <Row>
        <Col offset={3} span={18}>
          <Divider
            style={{ background: "black", color: "red", padding: 25 }}
            level={1}
            orientation="C"
          >
            Generation 1 Pokedex
          </Divider>

          <PageHeader
            style={{ background: "orange", marginBottom: "2rem" }}
            title="Names"
          />

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
