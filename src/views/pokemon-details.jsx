import { useParams } from "react-router-dom";

const PokemonDetails = () => {
  const urlParams = useParams();

  return <div>Learn more details about pokemon #{urlParams.id}</div>;
};

export default PokemonDetails;
