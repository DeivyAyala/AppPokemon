import { Link } from "react-router-dom"

export const PokeCard = ({ id, name, image, types, height, weight }) => {


  return (
    <>
      <div className='pokemon'>
        <p className='pokemon-id-back'>#{id}</p>
        <div className='pokemon-imagen'>
          <img src={image}
          alt='pikachu'/>
        </div>

        <div className='pokemon-info'>
          <div className='nombre-contenedor'>
            <p className="pokemon-id">#{id}</p>
            <h2 className="pokemon-nombre">{name}</h2>
          </div>
          <div className="pokemon-tipo">
          {types.map((type, index) => (
            <p key={index} className={`${type} tipo`}>{type}</p>
          ))}
        </div>
          <div className="pokemon-stats">
            <Link to={`/poke/${id}`}
            className="pokemon-stat btn-salir primary">
              MAs...
            </Link>
          </div>
        </div>
      </div>
    </>
   
    
  )
}
