import React from 'react'
import { usePokemonData } from '../Hooks/usePokemonData'

export const getPokeByName = (name = '') => {
  const {pokemonData} = usePokemonData(200)
  name = name.toLocaleLowerCase().trim()
  
  if(name.length === 0) return [];

  return pokemonData.filter(poke => 
    poke.name.toLocaleLowerCase().trim().includes( name )
  )
}
