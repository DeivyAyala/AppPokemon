import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getPokeByName } from '../helpers/getPokeByName';
import { useForm } from '../../hooks/useForm';
import { PokeCard } from '../components/PokeCard';

export const BuscarPage = () => {
 
  const navigate = useNavigate();
  const location = useLocation();

  const q = new URLSearchParams(location.search).get("q") || "";

  const pokemon = getPokeByName(q);
  // console.log({pokemon})

  const showSerch = (q.length == 0);
  const showError = (q.length > 0 && pokemon.length === 0);


  const {searchText, onInputChange, onResetForm} = useForm({
    searchText:'',
  })

  const onSearchSumbit = (e) => {
    e.preventDefault();
    // if (searchText.trim().length <= 1) return; // Evita búsquedas vacías
    navigate(`?q=${searchText.trim()}`)
    onResetForm()
  }

  return (
      <>
        <h1 className='titulo'>Buscar Pokemon </h1>
        <hr/>
        <div className="row">
          <div className="col-5">
            <h2 className='subtitulos'>Busquedas</h2>
            <hr/>
            <form  onSubmit={onSearchSumbit} className='form'>
              <div className='btn-bus'>
                <input
                  type='text'
                  placeholder='Busqueda de Pokemon'
                  className='form-label'
                  name='searchText'
                  autoComplete='off'
                  value={searchText}
                  onChange={onInputChange}
                />
              </div>
              <div className='btn-bus'>
                <button className='ov-btn-grow-ellipse btn-buscar'>
                  Buscar
                </button>
              </div>
              
            </form>
          </div>


          <div className="col-7">
            <h2 className='subtitulos'>Resultados</h2>
            <hr/>

            <div className='notificacion-buscar' style={{display: showSerch? '' : 'none'}}>
              Buscar un Pokemon
            </div>
            <div className='notificacion-Error' style={{display: showError ? '' : 'none' }}>
            Pokemon no encontrado! - <b>{q}</b></div>
      

          <div className='grid-pokemon'>
            {
              pokemon.map(poke => (
                <PokeCard key={poke.id} {...poke} />
              ))
            }

          </div>

         

          </div>
        </div>

    </>
  )
}
