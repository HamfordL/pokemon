import { Routes, Route } from "react-router-dom";
import { PageHeader, Col, Row, Divider } from "antd";

import PokemonList from "./views/pokemon-list";

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
            Generation 1 Pokemon
          </Divider>

          <PageHeader
            style={{ background: "orange", marginBottom: "2rem" }}
            title="Names"
          />

          <Routes>
            <Route path="/" exact element={<PokemonList />} />
          </Routes>
        </Col>
      </Row>
    </div>
  );
}

export default App;
