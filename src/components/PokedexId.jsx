import React from 'react';
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import pokemonLogo from '../img/pokemon_logo.png';


const PokedexId = () => {

    const { id } = useParams();

    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((res) => setPokemon(res.data));
    }, [id]);

    const backgroundCard = () => {
        let background = "";
        if (pokemon.types?.[0].type.name == "fire") {
            background = "linear-gradient(176.37deg, #F96D6F -32.26%, #E35825 22.55%, #E8AE1B 125.72%)";
        } else if (pokemon.types?.[0].type.name == "grass") {
            background = "linear-gradient(178.92deg, #7EC6C5 0.92%, #ABDAC6 47.96%, #CAE099 99.08%)";
        } else if (pokemon.types?.[0].type.name == "water") {
            background = "linear-gradient(179.57deg, #133258 -70.14%, #1479FB 56.16%, #82B2F1 214.85%)";
        } else if (pokemon.types?.[0].type.name == "bug") {
            background = "linear-gradient(177.56deg, #62DB60 -58.92%, #3BB039 16.57%, #AAFFA8 209.53%)";
        } else if (pokemon.types?.[0].type.name == "normal") {
            background = "linear-gradient(181.51deg, #735259 -6.44%, #BC6B7C 121.95%, #7C3F4C 186.11%)";
        } else if (pokemon.types?.[0].type.name == "poison") {
            background = "linear-gradient(177.03deg, #5B3184 -11.97%, #A564E3 71.28%, #CE9BFF 135.64%)";
        } else if (pokemon.types?.[0].type.name == "ground") {
            background = "linear-gradient(179.75deg, #654008 -19.96%, #895C1A 43.67%, #D69638 138.4%)";
        } else if (pokemon.types?.[0].type.name == "rock") {
            background = "linear-gradient(177.03deg, #7E7E7E -11.97%, #8D8D94 57.49%, #D3D3D3 135.64%)";
        } else if (pokemon.types?.[0].type.name == "ghost") {
            background = "linear-gradient(177.03deg, #323569 -11.97%, #454AA8 57.49%, #787DDA 135.64%)";
        } else if (pokemon.types?.[0].type.name == "dark") {
            background = "linear-gradient(177.03deg, #030706 -11.97%, #0D1211 57.49%, #5A5E5D 135.64%)";
        } else if (pokemon.types?.[0].type.name == "electric") {
            background = "linear-gradient(179.75deg, #0C1395 -19.96%, #2B319B 43.67%, #7075D9 138.4%)";
        } else if (pokemon.types?.[0].type.name == "steel") {
            background = "linear-gradient(179.75deg, #5E736C -19.96%, #728881 43.67%, #A8A8A8 138.4%)";
        } else if (pokemon.types?.[0].type.name == "psychic") {
            background = "linear-gradient(to top, #f247dd, #f779e5, #fba1ec, #fdc5f3, #fde8f9)";
        } else if (pokemon.types?.[0].type.name == "ice") {
            background = "linear-gradient(177.03deg, #6FBEDF -11.97%, #64CBF5 47.77%, #BDEBFE 136.72%)";
        } else if (pokemon.types?.[0].type.name == "fighting") {
            background = "linear-gradient(176.83deg, #96402A -8.78%, #F1613C 169.09%, #CB735D 242.33%)";
        } else if (pokemon.types?.[0].type.name == "dragon") {
            background = "linear-gradient(179.75deg, #478A93 -19.96%, #56A4AE 43.67%, #A2BEC1 138.4%)";
        } else if (pokemon.types?.[0].type.name == "fairy") {
            background = "linear-gradient(179.75deg, #971B45 -19.96%, #C23867 43.67%, #CD7D98 138.4%)";
        }
        return background;
    }
    const backgroundCard1 = () => {
        let background = "";
        if (pokemon.types?.[1]?.type.name == "fire") {
            background = "linear-gradient(176.37deg, #F96D6F -32.26%, #E35825 22.55%, #E8AE1B 125.72%)";
        } else if (pokemon.types?.[1]?.type.name == "grass") {
            background = "linear-gradient(178.92deg, #7EC6C5 0.92%, #ABDAC6 47.96%, #CAE099 99.08%)";
        } else if (pokemon.types?.[1]?.type.name == "water") {
            background = "linear-gradient(179.57deg, #133258 -70.14%, #1479FB 56.16%, #82B2F1 214.85%)";
        } else if (pokemon.types?.[1]?.type.name == "bug") {
            background = "linear-gradient(177.56deg, #62DB60 -58.92%, #3BB039 16.57%, #AAFFA8 209.53%)";
        } else if (pokemon.types?.[1]?.type.name == "normal") {
            background = "linear-gradient(181.51deg, #735259 -6.44%, #BC6B7C 121.95%, #7C3F4C 186.11%)";
        } else if (pokemon.types?.[1]?.type.name == "poison") {
            background = "linear-gradient(177.03deg, #5B3184 -11.97%, #A564E3 71.28%, #CE9BFF 135.64%)";
        } else if (pokemon.types?.[1]?.type.name == "ground") {
            background = "linear-gradient(179.75deg, #654008 -19.96%, #895C1A 43.67%, #D69638 138.4%)";
        } else if (pokemon.types?.[1]?.type.name == "rock") {
            background = "linear-gradient(177.03deg, #7E7E7E -11.97%, #8D8D94 57.49%, #D3D3D3 135.64%)";
        } else if (pokemon.types?.[1]?.type.name == "ghost") {
            background = "linear-gradient(177.03deg, #323569 -11.97%, #454AA8 57.49%, #787DDA 135.64%)";
        } else if (pokemon.types?.[1]?.type.name == "dark") {
            background = "linear-gradient(177.03deg, #030706 -11.97%, #0D1211 57.49%, #5A5E5D 135.64%)";
        } else if (pokemon.types?.[1]?.type.name == "electric") {
            background = "linear-gradient(179.75deg, #0C1395 -19.96%, #2B319B 43.67%, #7075D9 138.4%)";
        } else if (pokemon.types?.[1]?.type.name == "steel") {
            background = "linear-gradient(179.75deg, #5E736C -19.96%, #728881 43.67%, #A8A8A8 138.4%)";
        } else if (pokemon.types?.[1]?.type.name == "psychic") {
            background = "linear-gradient(to top, #f247dd, #f779e5, #fba1ec, #fdc5f3, #fde8f9)";
        } else if (pokemon.types?.[1]?.type.name == "ice") {
            background = "linear-gradient(177.03deg, #6FBEDF -11.97%, #64CBF5 47.77%, #BDEBFE 136.72%)";
        } else if (pokemon.types?.[1]?.type.name == "fighting") {
            background = "linear-gradient(176.83deg, #96402A -8.78%, #F1613C 169.09%, #CB735D 242.33%)";
        } else if (pokemon.types?.[1]?.type.name == "dragon") {
            background = "linear-gradient(179.75deg, #478A93 -19.96%, #56A4AE 43.67%, #A2BEC1 138.4%)";
        } else if (pokemon.types?.[1]?.type.name == "fairy") {
            background = "linear-gradient(179.75deg, #971B45 -19.96%, #C23867 43.67%, #CD7D98 138.4%)";
        }
        return background;
    }
    const colorTextCard = () => {
        let color = "";
        if (pokemon.types?.[0].type.name == "fire") {
            color = "#F96D6F";
        } else if (pokemon.types?.[0].type.name == "grass") {
            color = "#7EC6C5";
        } else if (pokemon.types?.[0].type.name == "water") {
            color = "#133258";
        } else if (pokemon.types?.[0].type.name == "bug") {
            color = "#62DB60";
        } else if (pokemon.types?.[0].type.name == "normal") {
            color = "#735259";
        } else if (pokemon.types?.[0].type.name == "poison") {
            color = "#5B3184";
        } else if (pokemon.types?.[0].type.name == "ground") {
            color = "#654008";
        } else if (pokemon.types?.[0].type.name == "rock") {
            color = "#7E7E7E";
        } else if (pokemon.types?.[0].type.name == "ghost") {
            color = "#323569";
        } else if (pokemon.types?.[0].type.name == "dark") {
            color = "#030706";
        } else if (pokemon.types?.[0].type.name == "electric") {
            color = "#0C1395";
        } else if (pokemon.types?.[0].type.name == "steel") {
            color = "#5E736C";
        } else if (pokemon.types?.[0].type.name == "psychic") {
            color = "#f247dd";
        } else if (pokemon.types?.[0].type.name == "ice") {
            color = "#6FBEDF";
        } else if (pokemon.types?.[0].type.name == "fighting") {
            color = "#96402A";
        } else if (pokemon.types?.[0].type.name == "dragon") {
            color = "#478A93";
        } else if (pokemon.types?.[0].type.name == "fairy") {
            color = "#971B45";
        }
        return color;
    }
    console.log(pokemon)
    return (
        <div className='pokedexid-site' style={{ background: backgroundCard() }}>
            <div className='container-info'  >
                <div className='pokemon-logo'>
                    <img src={pokemonLogo} alt="pokemon_logo" />
                </div>

                <img className='poke-img' src={pokemon.sprites?.other['official-artwork'].front_default} alt="" />

                <div className="info-card">
                    <h1 style={{ color: colorTextCard() }}>{pokemon.name}</h1>
                    <h3 ># {pokemon.id}</h3>
                    <div className="skill-pokemon">
                        <div className="poke-skill">
                            <h3 style={{ color: colorTextCard() }}>{pokemon.weight}</h3>
                            <p>Weight</p>

                        </div>
                        <div className="poke-skill">
                            <h3 style={{ color: colorTextCard() }}>{pokemon.height}</h3>
                            <p>Height</p>
                        </div>
                    </div>
                    <div className="container-undeline">
                        <div className='underline-info'></div>
                        <div className='underline-info'></div>
                    </div>
                </div>
                <div className="container-grid">
                    <div className="item-grid">
                        <h3>Tipo</h3>
                        <div className='underline-info'></div>
                        <div className='tipe'>
                            <p className='tipe-p' style={{ background: backgroundCard() }} >{pokemon.types?.[0].type.name} </p>
                            <p className='tipe-p' style={{ background: backgroundCard1() }}>{pokemon.types?.[1]?.type.name}</p>
                        </div>
                    </div>
                    <div className="item-grid">
                        <h3>Habilidades</h3>
                        <div className='underline-info'></div>
                        <div className='tipe'>
                            <p className='abilities-p'>{pokemon.abilities?.[0]?.ability.name} </p>
                            <p className='abilities-p'>{pokemon.abilities?.[1]?.ability.name}</p>
                        </div>
                    </div>
                </div>
                <Link to={`/pokedex/`} className='to-return' 
                       ><i className="fa-solid fa-arrow-left"></i>
                </Link>
            </div>
            <div className="movements-container">
                <h3>Movimientos</h3>
                <div className='underline'></div>
                <div className="movements-grid">
                    {pokemon.moves?.map(moves => (
                        <p key={moves.move?.name}>{moves.move?.name}</p>
                    ))}
                </div>
            </div>
           
        </div>
    );
};

export default PokedexId;