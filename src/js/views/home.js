import React from "react";
import Characters from "../component/Characters";

import "../../styles/home.css";
import Planets from "../component/Planet";

export const Home = () => {

	return (
		< div className=" mt-5" >
			<Characters />
			<Planets />
		</div >
	)

};
