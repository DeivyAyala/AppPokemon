import { useEffect, useState } from "react"
import { getPokemonData } from "./getPokemonData";


export const getPokeById = (id) => {

    const [pokemonList, setpokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchPokemon = async () => {
        try {
            const data = await getPokemonData(200); // Obtiene datos de 200 Pokémon
                setpokemonList(data);
            } catch (error) {
                setError(error.message);
            } finally {
            setIsLoading(false);
                }
        };
            
        fetchPokemon()
    }, [])
    
    // Filtrar pokemon por segun su Id

    const filtrarPokeId = () => {
        return pokemonList.find(poke => poke.id === id)
    }


  return {
    pokemon:filtrarPokeId,
    isLoading,
    error

  }
}
