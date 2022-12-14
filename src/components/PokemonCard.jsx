import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const PokemonCard = ({ url }) => {

    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        axios.get(url).then(res => setPokemon(res.data))
    }, [])

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

    return (

        <Link style={{ background: backgroundCard() }} className='card' to={`/pokedex/${pokemon.id}`} >
            <div style={{ background: backgroundCard() }} className="img-container">
                <img className='user-photo' src={pokemon.sprites?.other.dream_world.front_default
                } alt="" />
            </div>

            <div className="info-pokemon">
                <h1 style={{ color: colorTextCard()}}>{pokemon.name}</h1>
                <h3>{pokemon.types?.[0].type.name} / {pokemon.types?.[1]?.type.name} </h3>
                <p>Tipo</p>
                <div className='underline'></div>
                <div className="skill-container">
                    <div className="skill">
                        <p>HP</p>
                        <h3 style={{ color: colorTextCard()}}>{pokemon.stats?.[0].base_stat}</h3>
                        <p>DEFENSA</p>
                        <h3 style={{ color: colorTextCard()}}>{pokemon.stats?.[2].base_stat}</h3>
                    </div>
                    <div className="skill">
                        <p>ATAQUE</p>
                        <h3 style={{ color: colorTextCard()}}>{pokemon.stats?.[1].base_stat}</h3>
                        <p>VELOCIDAD</p>
                        <h3 style={{ color: colorTextCard()}}>{pokemon.stats?.[5].base_stat}</h3>
                    </div>

                </div>



            </div>

        </Link>
    );
};

export default PokemonCard;