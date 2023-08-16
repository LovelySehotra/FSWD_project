
import "./PokemonList.css";
import Pokemon from "../Pokemon/Pokemon";
import usePokemonList from "../../hooks/usePokemonlist";

function PokemonList() {
  // const [pokemonList, setPokemonList] = useState([]);
  // const [isloading, setIsloading] = useState(true);

  // const[pokedexUrl , setPokedexUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  // const[nextUrl ,setNextUrl] = useState('');  
  // const[prevUrl ,setPrevUrl] = useState('');  

  const{pokemonListState,setPokemonListState} =usePokemonList(false);
 
  return (
    <div className="pokemon-list-wrapper">
      <div className="pokemon-wrapper">
        {pokemonListState.isloading
          ? "Loading ..."
          : pokemonListState.pokemonList.map((p) => (
            <Pokemon name={p.name} image={p.image} key={p.id} id={p.id} />
          ))}
      </div>
      <div className="controls">
        <button disabled={pokemonListState.prevUrl == null} onClick={() => {
          const urlToset = pokemonListState.prevUrl;
          setPokemonListState({ ...pokemonListState, pokedexUrl: urlToset })
        }}>Prev</button>
        <button disabled={pokemonListState.nextUrl == null} onClick={() => 
          {
            const urlToset = pokemonListState.nextUrl;
            setPokemonListState({ ...pokemonListState, pokedexUrl: urlToset })
          }}>Next</button>
      </div>
    </div>
  );
}
export default PokemonList;
