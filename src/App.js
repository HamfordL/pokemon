import { useEffect, useState } from "react";
import "./App.css";

const Row = (props) => {
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
          <Row name={row.name} />
        ))}
      </tbody>
    </table>
  );
};

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

  return (
    <div className="App">
      <div>Generation 1 Pokemon</div>
      <Table data={rows} />
    </div>
  );
}

export default App;
