import { useEffect, useState } from "react";
import axios from "axios";
import "./PokemonList.css";
import Pokemon from "../Pokemon/Pokemon";

function PokemonList() {
  // const [pokemonList, setPokemonList] = useState([]);
  // const [isloading, setIsloading] = useState(true);

  // const[pokedexUrl , setPokedexUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  // const[nextUrl ,setNextUrl] = useState('');  
  // const[prevUrl ,setPrevUrl] = useState('');  
  const [pokemonListState, setPokemonListState] = useState({
    pokemonList: [],
    isloading: true,
    pokedexUrl: 'https://pokeapi.co/api/v2/pokemon',
    nextUrl: '',
    prevUrl: ''

  });
  async function downloadPokemons() {
    // setIsloading(true)
    setPokemonListState({ ...pokemonListState, isloading: true });
    const response = await axios.get(pokemonListState.pokedexUrl); //this download the list of 20 pokemon

    const pokemonResults = response.data.results; //we get the array of pokemon from result
    console.log(response.data);
    // setNextUrl(response.data.next);
    // setPrevUrl(response.data.previous);
    setPokemonListState((state) => ({
      ...state,
      nextUrl: response.data.next,
      prevUrl: response.data.previous
    }));
    //iteration over the array of pokemon, and using their url, to create an array of promise
    //that will download those 20 pokemon
    const pokemonResultPromise = pokemonResults.map((pokemon) =>
      axios.get(pokemon.url)
    );
    //passsing that promise array to axios.all
    const pokemonData = await axios.all(pokemonResultPromise); //array of 20 pokemon detailed data
    console.log(pokemonData);

    //mow iterate on the data pf eac pokemon , and extract id , name , image , types
    const pokemonListResult = pokemonData.map((pokeData) => {
      const pokemon = pokeData.data;
      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other
          ? pokemon.sprites.other.dream_world.front_default
          : pokemon.sprites.front_shiny,
        type: pokemon.type,
      };
    });
    console.log(pokemonListResult);
    // setPokemonList(res);
    // setIsloading(false);
    setPokemonListState((state) => ({
      ...state,
      pokemonList: pokemonListResult,
      isloading: false
    }));
  }

  useEffect(() => {
    downloadPokemons();
  }, [pokemonListState.pokedexUrl]);
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
