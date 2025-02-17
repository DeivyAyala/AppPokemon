import { useEffect, useState } from "react";


export const usePokemonData = (limit = 200) => {
    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error("Error al obtener los Pokémon");
                }

                const data = await response.json();
                const pokemonDetails = await Promise.all(
                    data.results.map(async (pokemon) => {
                        const pokemonRes = await fetch(pokemon.url);
                        const pokemonInfo = await pokemonRes.json();
                        return {
                            id: pokemonInfo.id.toString().padStart(3, "0"),
                            name: pokemonInfo.name,
                            image: pokemonInfo.sprites.other["official-artwork"].front_default,
                            types: pokemonInfo.types.map(type => type.type.name),
                            height: pokemonInfo.height,
                            weight: pokemonInfo.weight,
                            exp: pokemonInfo.base_experience,
                            hp: pokemonInfo.stats[0].base_stat,
                            ataque: pokemonInfo.stats[1].base_stat,
                            defensa: pokemonInfo.stats[2].base_stat,
                            ataqueEsp: pokemonInfo.stats[3].base_stat,
                            defensaEsp: pokemonInfo.stats[4].base_stat,
                            velocidad: pokemonInfo.stats[5].base_stat,
                            habilidades: pokemonInfo.abilities.map(ability => ability.ability.name),
                            img1: pokemonInfo.sprites.front_default,
                            img2: pokemonInfo.sprites.front_shiny,
                            img3: pokemonInfo.sprites.back_default,
                            img4: pokemonInfo.sprites.back_shiny
                        };
                    })
                );

                setPokemonData(pokemonDetails);
            } catch (error) {
                console.error("Error al obtener los Pokémon:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemonData();
    }, [limit]);

  return {
    pokemonData, 
    loading, 
    error
  }
}
