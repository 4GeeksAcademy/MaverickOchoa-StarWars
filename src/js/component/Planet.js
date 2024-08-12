import React, { useContext } from "react";

import { Context } from "../store/appContext";

import "../../styles/home.css";
import { Link } from "react-router-dom";
const Planets = () => {

    const { store, actions } = useContext(Context)
    return (
        <div className="container mt-5">
            <h1 className="m-5">Planets</h1>
            <div className="carrusel d-flex">
                {
                    store.planets.map((item) => {
                        return (
                            <div key={item._id} className="cards border border-danger mx-2" >
                                <img src="https://starwars-visualguide.com/assets/img/characters/3.jpg" className="card-img-top p-2" alt="..." />
                                <div className="m-3">
                                    <h5 className="">{item.properties.name}</h5>
                                    <p className="">Population: {item.properties.population}</p>
                                    <p className="">Terrain: {item.properties.terrain}</p>
                                </div>
                                <div>
                                    <Link to={`/planet/${item._id}`} className="btn btn-primary mx-5">Leer mas</Link>
                                    <button
                                        onClick={() => actions.addFavorites(item)}
                                        className={store.favorites.includes(item) ? "text-danger" : ""}
                                    ><i class="far fa-heart"></i></button>
                                </div>

                            </div>

                        )
                    })
                }

            </div>
        </div>
    )
}

export default Planets