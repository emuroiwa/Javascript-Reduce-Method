class TreeOfCities {

	constructor() {

		// A tree structure containing geographic items
		this.geographicData = [
			{
				name: "Asia",
				children: [
					{
						name: "Japan",
						children: [
							{
								name: "Tokyo",
								population: 33200000
							},
							{
								name: "Osaka/Kobe",
								population: 16425000
							}
						]
					},
					{
						name: "China",
						children: [
							{
								name: "Shanghai",
								population: 10000000
							},
							{
								name: "Shenzhen",
								population: 8000000
							}
						]
					}
				]
			},
			{
				name: "Europe",
				children: [
					{
						name: "France",
						children: [
							{
								name: "Ile de France",
								children: [
									{
										name: "Paris",
										population: 9645000
									},
									{
										name: "Val De Marne",
										children: [
											{
												name: "Creteil",
												population: 320000
											},
											{
												name: "Charenton Le Pont",
												population: 100000
											}
										]
									}
								]
							}
						]
					},
					{
						name: "Germany",
						children: [
							{
								name: "Berlin",
								population: 3675000
							},
							{
								name: "Frankfurt",
								population: 2260000
							}
						]
					}
				]
			},
			{
				name: "North America",
				children: [
					{
						name: "United States of America",
						children: [
							{
								name: "California",
								children: [
									{
										name: "Los Angeles",
										population: 11789000
									},
									{
										name: "San Francisco",
										population: 3229000
									},
									{
										name: "San Diego"
									}
								]
							},
							{
								name: "Washington",
								children: [
									{
										name: "Seattle",
										population: 2712000
									}
								]
							}
						]
					}
				]
			}
		]

	}

	// Return an object containing continent names as keys (you can assume 
	// continents are always top level), and total
	// population of any children as a value
	getPopulationByContinent() {
// create instance
 let b1 = new TreeOfCities()

 //recursive function getting population
 function getPopulation(arr, acc = 0) {
        return arr.reduce((a, c) => {
            a += (c.population || 0)
            return c.children ?  getPopulation(c.children, a) : a
        }, acc)
    }

//Loop to creat object with continets as key and total as value
var ContinentObj = {};
for(var i=0; i<b1.geographicData.length; i++){
    ContinentObj[b1.geographicData[i].name] = getPopulation([b1.geographicData[i]]);
}

//return the object
return ContinentObj


	}

}