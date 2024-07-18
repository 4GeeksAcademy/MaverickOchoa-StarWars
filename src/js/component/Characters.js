import React, { useContext } from "react";

import { Context } from "../store/appContext";

import "../../styles/home.css";
import { Link } from "react-router-dom";



const Characters = () => {
	const { store } = useContext(Context)
	return (
		<div className="text-center mt-5">
				<div className="carousel-inner d-flex">
					{
						store.people.map((item) => {
							return (
								<div key={item._id} className=" active card" >
									<img src="https://starwars-visualguide.com/assets/img/characters/3.jpg" className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">{item.properties.nam}</h5>
										<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
										<Link to={`/people/${item._id}`} className="btn btn-primary">Leer mas</Link>
										<button>add favorites</button>
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
