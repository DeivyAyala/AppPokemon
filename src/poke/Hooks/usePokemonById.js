import { useEffect, useState } from "react";
import { getPokemonData } from "../helpers/getPokemonData";


export const usePokemonById = (id) => {
    const [pokemonList, setpokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [pokemon, setPokemon] = useState(null);
  
    useEffect(() => {
        const fetchPokemon = async () => {
            setIsLoading(true); // Reiniciar el estado de carga
            setError(null);
          try {
              const data = await getPokemonData(200); // Obtiene datos de 200 Pokémon
                // console.log("Lista de Pokémon obtenida:", data);
                // console.log("IDs disponibles:", data.map(p => p.id)); // 🔍 Verificar IDs disponibles
                  setpokemonList(data);
                
              } catch (error) {
                  setError(error.message);
              } finally {
              setIsLoading(false);
                  }
          };
            fetchPokemon()
          
      }, [])
      
    useEffect(() => {
        if (pokemonList.length > 0) {
            // console.log("ID recibido:", id);
            const foundPokemon = pokemonList.find(poke => String(poke.id).padStart(3, '0') === id);
            // console.log("Pokémon encontrado:", foundPokemon);
            
            setPokemon(foundPokemon || null);
        }
    }, [id, pokemonList])
    
  
  
    return {
      pokemon,
      isLoading,
      error
  
    }
}
