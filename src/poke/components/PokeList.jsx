import  { useEffect, useState } from 'react'
import { PokeCard } from './PokeCard'
import { getPokemonData } from '../helpers/getPokemonData'
import { usePokemonTypes } from '../hooks'



export const PokeList = ({types}) => {

    // const [pokemon, setpokemon] = useState([])
    // const [isLoading, setisLoading] = useState(true)
    // const [error, seterror] = useState(null)

    // useEffect(() => {
    //     const fetchPokemon = async () => {
    //         try {
    //             const data = await getPokemonData(200);
    //             setpokemon(data);
    //             setisLoading(false);
    //         } catch (error) {
    //             seterror(error.message);
    //             setisLoading(false);
    //         }
    //     };

    //     fetchPokemon();
    // }, []);

    // if (isLoading) return <p>Cargando Pokémon...</p>;
    // if (error) return <p>Error: {error}</p>;

    

    const {pokemon, isLoading, error} = usePokemonTypes(types)

    // console.log(pokemon[24])  


    if (isLoading) return <p className='notificacion-poke'>Cargando Pokémon...</p>;
    if (error) return <p className='notificacion-Error'>Error: {error}</p>;

  return (

    <div className='pokemon-todos contenedor '>
            {
                pokemon.map(poke => (
                    <PokeCard key={poke.id}
                    {...poke}
                    />
                ))
            }
    </div>
  )
}
