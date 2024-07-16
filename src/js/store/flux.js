const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [

			],

			urlBase: 'https://www.swapi.tech/api',
			endPoints: ['people'],
			people: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			getInfo: async () => {
				let store = getStore()

				try {
					for (let endP of store.endPoints) {
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
			}
		}
	};
};

export default getState;
