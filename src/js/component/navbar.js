import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {

	const { store, actions } = useContext(Context)

	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<Link to="/" className="navbar-brand">Navbarhola</Link>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
						</li>
						<div>
							<form className="d-flex" role="search">
								<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
								<button className="btn btn-outline-success" type="submit">Search</button>
							</form>
						</div>

					</ul>

					<div className="btn-group">

						<button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
							Favorite {store.favorites.length}
						</button>
						<ul className="dropdown-menu dropdown-menu-end">
							{
								store.favorites.map((item) => {
									return (
										<li className="d-flex px-2">
											<a className="dropdown-item" href="#">{item.properties.name}</a>
											<span onClick={() => actions.deleteFav(item)}><i className="far fa-trash-alt"></i></span>
										</li>
									)
								})
							}

						</ul>
					</div>

				</div>
			</div>
		</nav>
	);
};
