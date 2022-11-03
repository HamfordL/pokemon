import { useState } from 'react'

const pokemon = [
  {name:"Bulbasaur", type: "Grass", number: "1"},
  {name:"Ivysaur", type: "Grass", number: "2"},
  {name:"Venusaur", type: "Grass", number: "3"},
  {name:"Charmander", type: "Fire", number: "4"},
  {name:"Charmeleon", type: "Fire", number: "5"},
  {name:"Charizard", type: "Fire", number: "6"},
  {name:"Squirtle", type: "Water", number: "7"},
  {name:"Wartortle", type: "Water", number: "8"},
  {name:"Blastoise", type: "Water", number: "9"},
  {name:"Caterpie", type: "Bug", number: "10"},
  {name:"Metapod", type: "Grass", number: "11"},
  {name:"Butterfree", type: "Grass", number: "12"},
  {name:"Weedle", type: "Grass", number: "13"},
  {name:"Kakuna", type: "Fire", number: "14"},
  {name:"Beedrill", type: "Fire", number: "15"},
  {name:"Pidgey", type: "Fire", number: "16"},
  {name:"Pidgeotto", type: "Water", number: "17"},
  {name:"Pidgeot", type: "Water", number: "18"},
  {name:"Rattata", type: "Water", number: "19"},
  {name:"Raticate", type: "Bug", number: "20"},
  {name:"Spearow", type: "Grass", number: "21"},
  {name:"Fearow", type: "Grass", number: "22"},
  {name:"Ekans", type: "Grass", number: "23"},
  {name:"Arbok", type: "Fire", number: "24"},
  {name:"Pikachu", type: "Fire", number: "25"},
  {name:"Raichu", type: "Fire", number: "26"},
  {name:"Sandrew", type: "Water", number: "27"},
  {name:"Sandslash", type: "Water", number: "28"},
  {name:"Nidoran (F)", type: "Water", number: "29"},
  {name:"Nidorina", type: "Bug", number: "30"},
  {name:"Nidoqueen", type: "Grass", number: "31"},
  {name:"Nidoran (M)", type: "Grass", number: "32"},
  {name:"Nidorino", type: "Grass", number: "33"},
  {name:"Nidoking", type: "Fire", number: "34"},
  {name:"Clefairy", type: "Fire", number: "35"},
  {name:"Clefable", type: "Fire", number: "36"},
  {name:"Vulpix", type: "Water", number: "37"},
  {name:"Ninetales", type: "Water", number: "38"},
  {name:"Jigglypuff", type: "Water", number: "39"},
  {name:"Wigglytuff", type: "Bug", number: "40"},
  {name:"Zubat", type: "Grass", number: "41"},
  {name:"Golbat", type: "Grass", number: "42"},
  {name:"Oddish", type: "Grass", number: "43"},
  {name:"Gloom", type: "Fire", number: "44"},
  {name:"Vileplume", type: "Fire", number: "45"},
  {name:"Paras", type: "Fire", number: "46"},
  {name:"Parasect", type: "Water", number: "47"},
  {name:"Venonat", type: "Water", number: "48"},
  {name:"Venomoth", type: "Water", number: "49"},
  {name:"Diglett", type: "Bug", number: "50"},
  {name:"Dugtrio", type: "Grass", number: "51"},
  {name:"Meowth", type: "Grass", number: "52"},
  {name:"Persian", type: "Grass", number: "53"},
  {name:"Psyduck", type: "Fire", number: "54"},
  {name:"Golduck", type: "Fire", number: "55"},
  {name:"Mankey", type: "Fire", number: "56"},
  {name:"Primeape", type: "Water", number: "57"},
  {name:"Growlithe", type: "Water", number: "58"},
  {name:"Arcanine", type: "Water", number: "59"},
  {name:"Poliwag", type: "Bug", number: "60"},
  {name:"Poliwhirl", type: "Grass", number: "61"},
  {name:"Poliwrath", type: "Grass", number: "62"},
  {name:"Abra", type: "Grass", number: "63"},
  {name:"Kadabra", type: "Fire", number: "64"},
  {name:"Alakazam", type: "Fire", number: "65"},
  {name:"Machop", type: "Fire", number: "66"},
  {name:"Machoke", type: "Water", number: "67"},
  {name:"Machamp", type: "Water", number: "68"},
  {name:"Bellsprout", type: "Water", number: "69"},
  {name:"Weepinbell", type: "Bug", number: "70"},
  {name:"Victreebel", type: "Grass", number: "71"},
  {name:"Tentacool", type: "Grass", number: "72"},
  {name:"Tentacruel", type: "Grass", number: "73"},
  {name:"Geodude", type: "Fire", number: "74"},
  {name:"Graveler", type: "Fire", number: "75"},
  {name:"Golem", type: "Fire", number: "76"},
  {name:"Ponyta", type: "Water", number: "77"},
  {name:"Rapidash", type: "Water", number: "78"},
  {name:"Slowpoke", type: "Water", number: "79"},
  {name:"Slowbro", type: "Bug", number: "80"},
  {name:"Magnemite", type: "Grass", number: "81"},
  {name:"Magneton", type: "Grass", number: "82"},
  {name:"Farfetch'd", type: "Grass", number: "83"},
  {name:"Duduo", type: "Fire", number: "84"},
  {name:"Dudrio", type: "Fire", number: "85"},
  {name:"Seel", type: "Fire", number: "86"},
  {name:"Dewgong", type: "Water", number: "87"},
  {name:"Grimer", type: "Water", number: "88"},
  {name:"Muk", type: "Water", number: "89"},
  {name:"Shellder", type: "Bug", number: "90"},
  {name:"Cloyster", type: "Grass", number: "91"},
  {name:"Gastly", type: "Grass", number: "92"},
  {name:"Haunter", type: "Grass", number: "93"},
  {name:"Gengar", type: "Fire", number: "94"},
  {name:"Onix", type: "Fire", number: "95"},
  {name:"Drowzee", type: "Fire", number: "96"},
  {name:"Hypno", type: "Water", number: "97"},
  {name:"Krabby", type: "Water", number: "98"},
  {name:"Kingler", type: "Water", number: "99"},
  {name:"Voltorb", type: "Bug", number: "100"},
  {name:"Electrode", type: "Grass", number: "101"},
  {name:"Exeggcute", type: "Grass", number: "102"},
  {name:"Exeggutor", type: "Grass", number: "103"},
  {name:"Cubone", type: "Fire", number: "104"},
  {name:"Marowak", type: "Fire", number: "105"},
  {name:"Hitmonlee", type: "Fire", number: "106"},
  {name:"Hitmonchan", type: "Water", number: "107"},
  {name:"Lickitung", type: "Water", number: "108"},
  {name:"Koffing", type: "Water", number: "109"},
  {name:"Weezing", type: "Bug", number: "110"},
  {name:"Rhyhorn", type: "Grass", number: "111"},
  {name:"Rhydon", type: "Grass", number: "112"},
  {name:"Chansey", type: "Grass", number: "113"},
  {name:"Tangela", type: "Fire", number: "114"},
  {name:"Kangaskhan", type: "Fire", number: "115"},
  {name:"Horsea", type: "Fire", number: "116"},
  {name:"Seadra", type: "Water", number: "117"},
  {name:"Goldeen", type: "Water", number: "118"},
  {name:"Seaking", type: "Water", number: "119"},
  {name:"Staru", type: "Bug", number: "120"},
  {name:"Starmie", type: "Grass", number: "121"},
  {name:"Mr.Mime", type: "Grass", number: "122"},
  {name:"Scyther", type: "Grass", number: "123"},
  {name:"Jynx", type: "Fire", number: "124"},
  {name:"Electabuzz", type: "Fire", number: "125"},
  {name:"Magmar", type: "Fire", number: "126"},
  {name:"Pinsir", type: "Water", number: "127"},
  {name:"Tauros", type: "Water", number: "128"},
  {name:"Magikarp", type: "Water", number: "129"},
  {name:"Gyarados", type: "Bug", number: "130"},
  {name:"Lapras", type: "Grass", number: "131"},
  {name:"Ditto", type: "Grass", number: "132"},
  {name:"Eevee", type: "Grass", number: "133"},
  {name:"Vaporeon", type: "Fire", number: "134"},
  {name:"Jolteon", type: "Fire", number: "135"},
  {name:"Flareon", type: "Fire", number: "136"},
  {name:"Porygon", type: "Water", number: "137"},
  {name:"Omanyte", type: "Water", number: "138"},
  {name:"Omastar", type: "Water", number: "139"},
  {name:"Kabuto", type: "Bug", number: "140"},
  {name:"Kabutops", type: "Grass", number: "141"},
  {name:"Aerodactyl", type: "Grass", number: "142"},
  {name:"Snorlax", type: "Grass", number: "143"},
  {name:"Articuno", type: "Fire", number: "144"},
  {name:"Zapdos", type: "Fire", number: "145"},
  {name:"Moltres", type: "Fire", number: "146"},
  {name:"Dratini", type: "Water", number: "147"},
  {name:"Dragonair", type: "Water", number: "148"},
  {name:"Dragonite", type: "Water", number: "149"},
  {name:"Mewtwo", type: "Bug", number: "150"},
  {name:"Mew", type: "Bug", number: "151"}

]

const Row = (props) => {
  const {name, type} = props
  return(<tr>
    <td>{name}</td>
    <td>{type}</td>
  </tr>)
}

const Table = (props) => {
  const {data} = props
  
  console.log(data)
  
  return (<table>
    <tbody>
      {data.map(row => 
        <Row name = {row.name}
        type = {row.type}
        number = {row.number} />
      )}
    </tbody>
  </table>)
 }

function App() {

  const [rows, setRows] = useState(pokemon)

  return (
    <div className="App">
      <div>Generation 1 Pokemon</div>
      <Table data = {rows} />
    </div>
  );
}

export default App;
