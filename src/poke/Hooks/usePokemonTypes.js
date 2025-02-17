import { useEffect, useState } from "react"
import { getPokemonData } from "../helpers/getPokemonData";


export const usePokemonTypes = (type) => {

  const [pokemonList, setpokemonList] = useState([])
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
    }, []);

    // Filtrar pokemon segun el tipo selecionado 
    const filtrarPokemon = type.toLowerCase() === 'ver todo'
    ? pokemonList
    : pokemonList.filter((poke) => poke.types.includes(type))

  return {

    pokemon: filtrarPokemon,
    isLoading,
    error

  }
}
