import React, { useContext } from "react";

import { Context } from "../store/appContext";

import "../../styles/home.css";



const Characters = () => {
	const { store } = useContext(Context)
	return (
		<div className="text-center mt-5">


			<div id="carouselExampleCaptions" className="carousel slide">
				<div className="carousel-indicators">
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
					<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
				</div>
				<div className="carousel-inner">
					{
						store.people.map((item) => {
							return (
								<div key={item._id} className="card" >
									<img src="https://starwars-visualguide.com/assets/img/characters/3.jpg" className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">{item.properties.nam}</h5>
										<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
										<a href="#" className="btn btn-primary">Go somewhere</a>
									</div>
								</div>

							)
						})
					}
					<div className="carousel-item">
						<img src="https://starwars-visualguide.com/assets/img/characters/3.jpg" className="d-block w-100" alt="..." />
						<div className="carousel-caption d-none d-md-block">
							<h5>Second slide label</h5>
							<p>Some representative placeholder content for the second slide.</p>
						</div>
					</div>
					<div className="carousel-item">
						<img src="https://starwars-visualguide.com/assets/img/characters/3.jpg" className="d-block w-100" alt="..." />
						<div className="carousel-caption d-none d-md-block">
							<h5>Third slide label</h5>
							<p>Some representative placeholder content for the third slide.</p>
						</div>
					</div>
				</div>
				<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>

		</div>
	)
};

export default Characters
