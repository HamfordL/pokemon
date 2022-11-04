import { useEffect, useState } from "react";
import { PageHeader, Col, Row, Divider, Table } from "antd";
import "./App.css";

function App() {
  const [rows, setRows, col] = useState([]);

  useEffect(() => {
    if (!rows.length) {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then((response) => response.json())
        .then((data) => setRows(data.results));
    }
  });

  if (!rows.length) {
    return <div>Loading pokemon data</div>;
  }

  const Abc = (props) => {
    const { name } = props;

    return (
      <tr>
        <td>{name}</td>
      </tr>
    );
  };

  const Table = (props) => {
    const { data } = props;

    console.log(data);

    return (
      <table>
        <tbody>
          {data.map((row) => (
            <Abc name={row.name} />
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="App">
      <Row>
        <Col span={4} />
        <Col span={18}>
          <Divider orientation="C">Generation 1 Pokemon</Divider>
          <PageHeader title="Names" />
          <Table data={rows} />
        </Col>
      </Row>
    </div>
  );
}

export default App;
