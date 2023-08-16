import axios from "axios";
import { useEffect, useState } from "react";



function usePokemonList() {
    const [pokemonListState, setPokemonListState] = useState({
        pokemonList: [],
        isloading: true,
        pokedexUrl:'https://pokeapi.co/api/v2/pokemon',
        nextUrl: '',
        prevUrl: '',
        type:''

    });
    async function downloadPokemons() {
      
        //iteration over the array of pokemon, and using their url, to create an array of promise
        //that will download those 20 pokemon

        if(pokemonListState.type){
             const response = await axios.get(`https://pokeapi.co/api/v2/type/${pokemonListState.type}`);
            setPokemonListState((state)=>({
                ...state,
                pokemonList:response.data.pokemon
            }))

        }else{

              // setIsloading(true)
        setPokemonListState((state)=>({ ...state, isloading: true }));
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
    }

    useEffect(() => {
        downloadPokemons();
    }, [pokemonListState.pokedexUrl]);
    return{pokemonListState,setPokemonListState};
}
export default usePokemonList;