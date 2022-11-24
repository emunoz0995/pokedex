import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';
import encabezado from '../img/encabezado.png'

const Pokedex = () => {

    const userName = useSelector(state => state.name)
    const navigate = useNavigate();
    const [getPokemons, setGetPokemons] = useState([]);
    const [inputSearch, setinputSearch] = useState("");
    const [tipes, setTipes] = useState([]);


    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then(res => setGetPokemons(res.data.results));

        axios.get(`https://pokeapi.co/api/v2/type/`)
            .then(res => setTipes(res.data.results));
    }, [])

    const serchPokemon = () => {
        navigate(`/pokedex/${inputSearch}`)
    }

    const searchFilter = (e) => {
        axios.get(e.target.value)
            .then(res => setGetPokemons(res.data.pokemon))
    }


    const [page, setPage] = useState(1);
    const pokemonsPerPage = 5;
    const lastIndex = page * pokemonsPerPage;
    const firstIndex = lastIndex - pokemonsPerPage;
    const pokemonPaginated = getPokemons.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(getPokemons.length / pokemonsPerPage);

    const numbers = [];
    for (let i = 1; i <= totalPages; i++) {
        numbers.push(i);
    }
    return (
        <div className='pokedex-site'>
            <header>
                <img src={encabezado} alt="" />
                <Link to={'/'} className='exit-pokedex'>
                    <i className="fa-solid fa-xmark"></i>
                </Link>
            </header>
            <div className='body-pokedex'>

                <div>
                    <h3>Bienvenido {userName}</h3>
                    <p>aquí podrás encontrar tu pokemón favorito </p>
                    <div className="searching">
                        <div>
                            <input className='search-input' value={inputSearch} onChange={e => setinputSearch(e.target.value)} type="text" name="search" id="search" placeholder='Search...' />
                            <button className="search-button" onClick={serchPokemon}><i className="fa-sharp fa-solid fa-magnifying-glass"></i></button>
                        </div>
                        <select className='search-select' onChange={searchFilter} name="" id="">
                            {tipes.map(tipe => (
                                <option key={tipe.name} value={tipe.url}>{tipe.name}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <ul className='poke-card'>
                    {pokemonPaginated.map(pokemon => (
                        <PokemonCard
                            url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                            key={pokemon.url ? pokemon.url : pokemon.pokemon.url} />
                    ))}
                </ul>
                <div className="paginador">
                    <button className='paginate'
                        onClick={() => setPage(page - 1)}
                        disabled={page === 1}
                    ><i className="fa-solid fa-backward"></i></button>
                    {numbers.map(number => (
                        <button className='paginate-number' key={number} onClick={() => setPage(number)}>{number}</button>

                    ))}
                    <button className='paginate'
                        onClick={() => setPage(page + 1)}
                        disabled={page === totalPages}
                    ><i className="fa-solid fa-forward"></i></button>
                </div>

            </div>
        </div>
    );
};

export default Pokedex;