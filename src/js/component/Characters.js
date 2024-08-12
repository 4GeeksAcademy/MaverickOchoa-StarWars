import React, { useContext } from "react";

import { Context } from "../store/appContext";

import "../../styles/home.css";
import { Link } from "react-router-dom";



const Characters = () => {
	const { store, actions } = useContext(Context)
	return (
		<div className="container mt-5">
			<h1 className="m-5">Characters</h1>
			<div className="carrusel d-flex">
				{
					store.people.map((item) => {
						return (
							<div key={item._id} className="cards border border-danger mx-2" >
								<img src="https://starwars-visualguide.com/assets/img/characters/3.jpg" className="card-img-top p-2" alt="..." />
								<div className="m-3">
									<h5 className="">{item.properties.name}</h5>
									<p className="">Gender: {item.properties.gender}</p>
									<p className="">Hair color: {item.properties.hair_color}</p>
									<p className="">Eye color: {item.properties.eye_color}</p>
								</div>
								<div>
									<Link to={`/people/${item._id}`} className="btn btn-primary mx-5">Leer mas</Link>
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
};

export default Characters
