import axios from 'axios';

export const getPokemons = async (url) => {
    let pokemonArray = [];
    const response = await axios.get(url);
    if(response.data.results){
        for(const pokemon of response.data.results) {
            const [result] = await Promise.all([
                axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            ]);
            let obj = {
                "id":result.data.id,
                "name":result.data.name,
                "height":result.data.height,
                "weight":result.data.weight,
                "image":result.data?.sprites?.other?.dream_world?.front_default,
                "stats":result.data.stats,
                "abilities":result.data.abilities,
                "types":result.data.types
            }
            pokemonArray.push(obj);
        }
        return { nextUrl:response.data.next, result:pokemonArray }
    }
}