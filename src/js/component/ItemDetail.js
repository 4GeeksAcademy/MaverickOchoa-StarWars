import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

import "../../styles/home.css";


const ItemDetail = () => {
    const { store } = useContext(Context)

    const { nature, id } = useParams()

    const [detail, setdetail] = useState(null)

    const findItem = () => {
        for (let endP of store.endpoints) {
            let result = store[endP].find((item) => item._id == id)
            console.log(result)
            setdetail(result)
        }
    }

    useEffect(() => {
        findItem()
    }, [store.people, store.planets])

    return (
        <>
            {
                nature === "people" ?
                    <div>
                        <h1>Poople</h1>

                        <div className="cards border border-danger mx-2 d-flex" >
                            <img src="https://starwars-visualguide.com/assets/img/characters/3.jpg" className="card-img-top m-3" alt="..." />
                            <div className="mt-3">
                                <h1>Name: {detail?.properties?.name}</h1>
                                <h4>Height: {detail?.properties?.height}</h4>
                                <h4>Hair: {detail?.properties?.hair_color}</h4>
                                <h4>Skin: {detail?.properties?.skin_color}</h4>
                                <h4>Eyes: {detail?.properties?.eye_color}</h4>
                                <h4>Birth Year: {detail?.properties?.birth_year}</h4>
                                <h4>Gender: {detail?.properties?.gender}</h4>

                                <h3>{detail?.description}</h3>
                            </div>


                        </div>
                        <p>{detail?.properties?.name}</p>
                    </div> :
                    nature === "planet" ?

                        <div>
                            <div className="cards border border-danger mx-2 d-flex" >
                                <img src="https://starwars-visualguide.com/assets/img/characters/3.jpg" className="card-img-top m-3" alt="..." />
                                <div className="mt-3">
                                    <h1>Name: {detail?.properties?.name}</h1>
                                    <h4>Diameter: {detail?.properties?.diameter}</h4>
                                    <h4>Rotation period: {detail?.properties?.rotation_period}</h4>
                                    <h4>Orbital period: {detail?.properties?.orbital_period}</h4>
                                    <h4>Gravity: {detail?.properties?.gravity}</h4>
                                    <h4>Population: {detail?.properties?.population}</h4>
                                    <h4>Climate: {detail?.properties?.climate}</h4>
                                    <h4>Terrain: {detail?.properties?.terrain}</h4>
                                    <h4>Surface Water: {detail?.properties?.surface_water}</h4>
                                    <h3>{detail?.description}</h3>

                                </div>
                            </div>


                        </div> : null
            }
        </>
    )
}

export default ItemDetail;