import React, { useEffect } from 'react'
import { usePokemonById } from '../Hooks/usePokemonById'
import { Navigate, useNavigate, useParams } from 'react-router-dom'


export const PokePage = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    // console.log("ID recibido desde URL (antes de conversión):", id);
    const { pokemon, isLoading, error } = usePokemonById(id);

    
    // useEffect(() => {
    //     if (!isLoading && !pokemon) {
    //         navigate("/verTodos", { replace: true });
    //     }
    // }, [isLoading, pokemon, navigate]);

    if (isLoading) return <p className='notificacion-poke'>Cargando Pokémon...</p>;
    if (error) return <p className='notificacion-Error'>Error: {error}</p>;
    if (!pokemon) return <p className='notificacion-Error'>Pokémon no encontrado</p>;

    // console.log("Pokémon en PokePage:", pokemon)

 

  return (

    <>
        <div className='contain'>
             {/* Contenedor de las dos columnas */}
            <div className='columns-container'>
                {/* Columna Izquierda */}
                <div className="pokemon ">
                    <p className="pokemon-id-back">#{pokemon.id}</p>
                    <div className="pokemon-imagen">
                        <img src={pokemon.image}
                        alt={pokemon.name}/>
                    </div>
                    
                    <div className="pokemon-info">
                        <div className="nombre-contenedor">
                            <p className="pokemon-id">#{pokemon.id}</p>
                            <h2 className="pokemon-nombre">{pokemon.name}</h2>
                        </div>
                        <div className="pokemon-tipo">
                        {pokemon.types && pokemon.types.map((t, index) => (
                                <p key={index} className={`${t} tipo`}>{t}</p>
                            ))}
                        </div>
                        <div className="pokemon-stats">
                            <p className="pokemon-stat">{pokemon.height}m</p>
                            <p className="pokemon-stat">{pokemon.weight}kg</p>
                        </div>
                    </div>
                    <div className='pokemon-stats'>
                        <button 
                        onClick={() => navigate(-1)}
                        className='pokemon-stat btn-salir primary'>
                            Regresar...
                        </button> 
                    </div>
                     
                    
                </div> 


                {/* Columna Derecha */}
                <div className='colum pokemon '> 
                    <div className={`hp-box ${pokemon.types[0]} tipo`}>
                        <p>hp: <span>{pokemon.hp}</span></p>
                    </div>
                    <div className="experencia-box">
                        <p>Experiencia: <span >{pokemon.exp}</span> </p>
                        {/* Estadísticas */}
                        <div className='stats-box'>
                            <h3>Estadísticas</h3>
                            <ul>
                                <li>Ataque: <span>{pokemon.ataque}</span></li>
                                <li>Defensa: <span>{pokemon.defensa}</span></li>
                                <li>Ataque Especial: <span>{pokemon.ataqueEsp}</span></li>
                                <li>Defensa Especial: <span>{pokemon.defensaEsp}</span></li>
                                <li>Velocidad: <span>{pokemon.velocidad}</span></li>
                            </ul>
                        </div>
                    </div>
                            {/* Imagenes */}
                    <div className='related-pokemon'>
                        
                        <div className='related-item'>
                            <img src={pokemon.img1} alt={pokemon.name} />
                            {/* <p>Raichu</p> */}
                        </div>
                        <div className='related-item'>
                            <img src={pokemon.img2} alt={`${pokemon.name} shiny`} />
                            {/* <p>Pichu</p> */}
                        </div>
                        <div className='related-item'>
                            <img src={pokemon.img3} alt={`${pokemon.name} back`} />
                            {/* <p>Emolga</p> */}
                        </div>
                        <div className='related-item'>
                            <img src={pokemon.img4} alt={`${pokemon.name} back shiny`} />
                            {/* <p>Morpeko</p> */}
                        </div>
                        {/* Habilidades */}
                    <div className='abilities-box'>
                        <h3>Habilidades</h3>
                        <ul>
                        {pokemon.habilidades.map((habilidad, i) => (
                                <li key={i}>{habilidad}</li>
                            ))}
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
