import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {

    const navigate = useNavigate();
    const onLogaout = () => {
        navigate('/login', {
            replace: true
        })
    }

    return (
        <nav>
            <div>
                <div className='nav-logaout'>
                <Link className='nav pokemon-imagen'  to="/">
                    <img src='/assets/logo.png' alt='Logo Pokemon' />
                </Link>
                <ul className='nav-entrar' >
                    <NavLink 
                    to="/buscar"
                    className='ov-btn-grow-ellipse'>
                        Buscar Pokemon
                    </NavLink>
                    <span className='span'>
                        Deivy Ayala 
                    </span>
                    <button 
                    className='btn logaout'
                    onClick={onLogaout}
                    >
                        Logaout
                    </button>
                </ul>
            </div>
                
            <div >
            </div>
                <div className='nav-lista '>
                    <NavLink 
                    className='btn btn-header ver-todo'
                    to="/verTodos">
                        ver todos
                    </NavLink>
                
                    <NavLink 
                    className="btn btn-header normal"
                    to="/normal">
                        normal
                    </NavLink>
                    
                    <NavLink 
                    className="btn btn-header fire"
                    to="/fire">
                        fire
                    </NavLink>

                    <NavLink 
                    className="btn btn-header water"
                    to="/water">
                        water
                    </NavLink>

                    <NavLink 
                    className="btn btn-header grass"
                    to="/grass">
                        grass
                    </NavLink>

                    <NavLink 
                    className="btn btn-header electric"
                    to="/electric">
                        electric
                    </NavLink>

                    <NavLink 
                    className="btn btn-header ice"
                    to="/ice">
                        ice
                    </NavLink>

                    <NavLink 
                    className="btn btn-header fighting"
                    to="/fighting">
                        fighting
                    </NavLink>

                    <NavLink 
                    className="btn btn-header poison"
                    to="/poison">
                        poison
                    </NavLink>

                    <NavLink 
                    className="btn btn-header ground"
                    to="/ground">
                        ground
                    </NavLink>

                    <NavLink 
                    className="btn btn-header flying"
                    to="/flying">
                        flying
                    </NavLink>

                    <NavLink 
                    className="btn btn-header psychic"
                    to="/psychic">
                        psychic
                    </NavLink>

                    <NavLink 
                    className="btn btn-header bug"
                    to="/bug">
                        bug
                    </NavLink>

                    <NavLink 
                    className="btn btn-header rock"
                    to="/rock">
                        rock
                    </NavLink>

                    <NavLink 
                    className="btn btn-header ghost"
                    to="/ghost">
                        ghost
                    </NavLink>

                    <NavLink 
                    className="btn btn-header dark"
                    to="/dark">
                        dark
                    </NavLink>

                    <NavLink 
                    className="btn btn-header dragon"
                    to="/dragon">
                        dragon
                    </NavLink>

                    <NavLink 
                    className="btn btn-header steel"
                    to="/steel">
                        steel
                    </NavLink>

                    <NavLink 
                    className="btn btn-header fairy"
                    to="/fairy">
                        fairy
                    </NavLink>

                </div>
            </div>

            
        </nav>
    )
}
