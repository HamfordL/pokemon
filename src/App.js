import { useEffect, useState } from "react";
import { PageHeader, Col, Row, Divider } from "antd";

function App() {
  const [rows, setRows] = useState([]);

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
        <tbody
          style={{
            background: "black",
            color: "yellow",
            padding: 100,
            width: 100,
            height: 100,
          }}
          level={2}
        >
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
          <Divider
            style={{ background: "black", color: "yellow", padding: 25 }}
            level={1}
            orientation="C"
          >
            Generation 1 Pokemon
          </Divider>
          <PageHeader style={{ background: "orange" }} title="Names" />
          <Table data={rows} />
        </Col>
      </Row>
    </div>
  );
}

export default App;
