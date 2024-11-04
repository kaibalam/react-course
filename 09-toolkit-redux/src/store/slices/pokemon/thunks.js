import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

export const getPokemons = ( page = 0 ) => {
    // const url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`;
    return async ( dispatch, getState ) => {

        dispatch( startLoadingPokemons() );

        //TODO: realizar petición http
            // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
            // const data = await resp.json();
            // console.log(data);
            const { data } = await pokemonApi.get(`pokemon?limit=10&offset=${page * 10}`);
            // console.log(resp);
            const { results } = data;
            console.log(results);
        // dispatch( setPokemons() );

            dispatch( setPokemons({ pokemons: data.results, page: page + 1 }))

    }
}