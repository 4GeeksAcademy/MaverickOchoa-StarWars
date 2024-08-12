const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [

			],

			urlBase: 'https://www.swapi.tech/api',
			endpoints: ['people', 'planets'],
			people: [],
			planets: [],
			vehicles: [],
			favorites: []

		},
		actions: {

			getInfo: async () => {
				let store = getStore()

				try {
					for (let endP of store.endpoints) {
						let response = await fetch(`${store.urlBase}/${endP}`)
						let data = await response.json()

						for (let item of data.results) {
							let responseChar = await fetch(`${item.url}`)
							let dataChar = await responseChar.json()
							setStore({
								[endP]: [...store[endP], dataChar.result]
							})
						}
					}

				} catch (error) {

				}
			},
			addFavorites: (fav) => {
				let store = getStore()

				let exists = store.favorites.some((item) => item._id == fav._id)
				if (exists) {
					let newFav = store.favorites.filter((item) => item._id != fav._id)
					setStore({
						favorites: newFav
					})
				} else {
					setStore({
						favorites: [...store.favorites, fav]
					})
				}
			},

			deleteFav: (fav) => {
				let store = getStore()

				let newFav = store.favorites.filter((item) => item._id != fav._id)
				setStore({
					favorites: newFav
				})
			}
		}
	};
};

export default getState;
