import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
	<div className="text-center mt-5">
		<div className="card" >
			<img src="https://starwars-visualguide.com/assets/img/characters/3.jpg" className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				<a href="#" className="btn btn-primary">Go somewhere</a>
			</div>
		</div>
	</div>
);
