import React from 'react'
import { Navbar } from '../../ui'
import { Bug, Dark, Dragon, Electric, Fairy, Fighting, Fire,  Flying,  Ghost,  Grass, Ground, Ice, Normal, Poison, Psychic, Rock, Steel, VerTodos, Water } from '../page'
import { Navigate, Route, Routes } from 'react-router-dom'
import { PokePage } from '../page/PokePage'
import { BuscarPage } from '../page/BuscarPage'

export const PokeRouters = () => {
  return (
    <>
        <div className="contenedor">
            <Navbar/>
            <Routes>
                <Route path="bug" element={<Bug/>} />
                <Route path="dark" element={<Dark/>} />
                <Route path="dragon" element={<Dragon/>} />
                <Route path="electric" element={<Electric/>} />
                <Route path="fairy" element={<Fairy/>} />
                <Route path="fighting" element={<Fighting/>} />
                <Route path="fire" element={<Fire/>} />
                <Route path="flying" element={<Flying/>} />
                <Route path="ghost" element={<Ghost/>} />
                <Route path="grass" element={<Grass/>} />
                <Route path="ground" element={<Ground/>} />
                <Route path="ice" element={<Ice/>} />
                <Route path="normal" element={<Normal/>} />
                <Route path="normal" element={<Normal/>} />
                <Route path="poison" element={<Poison/>} />
                <Route path="psychic" element={<Psychic/>} />
                <Route path="rock" element={<Rock/>} />
                <Route path="steel" element={<Steel/>} />
                <Route path="verTodos" element={<VerTodos/>} />
                <Route path="water" element={<Water/>} />

                {/*serch, Hero by name */}

                <Route path="poke/:id" element={<PokePage/>} />
                <Route path="buscar" element={<BuscarPage/>} />


                

                {/* <Route path="serch" element={<SerchPage />} />
                <Route path="hero/:id" element={<HeroPage />} /> */}
                
                <Route path="/" element={<Navigate to="/verTodos"/>} />
            </Routes>
        </div>
    </>
  )
}
