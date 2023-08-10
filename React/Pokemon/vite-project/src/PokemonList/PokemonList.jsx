import { useEffect, useState } from "react";
import axios from 'axios';
import '../PokemonList/PokemonList.css';
import Pokemon from "../Pokemon/Pokemon";


function PokemonList(){
    const [pokemonList,setPokemonList] = useState([]);
    const [isloading , setIsloading]= useState(true);

    const POKEDEX_URL ='https://pokeapi.co/api/v2/pokemon';
    async function downloadPokemons(){
        const response = await axios.get(POKEDEX_URL);//this download the list of 20 pokemon
        
       const pokemonResults = response.data.results;//we get the array of pokemon from result
       

       //iteration over the array of pokemon, and using their url, to create an array of promise
       //that will download those 20 pokemon
       const pokemonResultPromise = pokemonResults.map((pokemon)=>axios.get(pokemon.url));
       //passsing that promise array to axios.all
       const pokemonData = await axios.all(pokemonResultPromise);
       console.log(pokemonData);

       //mow iterate on the data pf eac pokemon , and extract id , name , image , types
       const res = pokemonData.map((pokeData)=>{
        const pokemon = pokeData.data;
        return {
            id :pokemon.id,
            name:pokemon.name,
            image :(pokemon.sprites.other)? pokemon.sprites.other.dream_world.front_default:pokemon.sprites.front_shiny,
            type :pokemon.type
        }

       });
       console.log(res);
       setPokemonList(res)
        setIsloading(false);
    }

    useEffect(()=>{
        downloadPokemons();
    },[]);
    return (
        <div className="pokemon-list-wrapper">
           <div>PokemonList </div> 
           {(isloading)?'Loading ...':
            pokemonList.map((p)=> <Pokemon name={p.name} image={p.image} key={p.id} />)
           }
        </div>


    )



}
export default PokemonList;