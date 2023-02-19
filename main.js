//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector("button").addEventListener("click", getDrink);

function getDrink() {
	document.getElementById("drink-list").innerHTML = "";

	let drink = document.querySelector("input").value;

	fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
		.then((res) => res.json()) // parse response as JSON
		.then((data) => {
			console.log(data.drinks);
			// go through each drink object in the arr of objects
			data.drinks.forEach((drink) => {
				// create a drink element div
				const drinkElement = document.createElement("div");
				// adding class of drink to the drink elemenet
				drinkElement.classList.add("card-body");

				drinkElement.classList.add("card");
				drinkElement.classList.add("drink");
				// creating h2 for name element
				const nameElement = document.createElement("h2");
				//getting content for the name element from the drink obj
				nameElement.textContent = drink.strDrink;
				// appending name elem to the drnk elem
				nameElement.classList.add("card-title");
				drinkElement.appendChild(nameElement);
				// create image element
				const imageElement = document.createElement("img");
				// sets image source to the thumbnail image in the obj
				imageElement.src = drink.strDrinkThumb;
				// adding image element to the drink elem
				imageElement.classList.add("card-img-top");
				drinkElement.appendChild(imageElement);
				// creating a new arr for ingredients
				const ingredients = [];
				// looping though each ingredient item
				for (let i = 1; i <= 15; i++) {
					// declaring what each ingredit is, while iterating through each drink
					let ingredient = drink[`strIngredient${i}`];
					//if the item is an ingredient
					if (ingredient) {
						// push ingredient to the ingredients arr
						ingredients.push(ingredient);
					}
				}
				// joined the ingrediets arr with a comma added it to var
				const ingredientList = ingredients.join(", ");
				// create div for instructions
				const instructions = document.createElement("div");
				// create instructions from the list of ingredients
				instructions.textContent = ingredientList;
				// append it to the ingredients list
				instructions.classList.add("card-text");
				drinkElement.appendChild(instructions);
				// create a parag element
				const instructionsElement = document.createElement("p");
				// let text content should be the instructions property of the drink ob
				instructionsElement.textContent = drink.strInstructions;
				// add it to the drink element
				drinkElement.appendChild(instructionsElement);

				// // Add the element for the drink to render on the page
				const drinkListElement = document.getElementById("drink-list");
				// append to the elem
				drinkListElement.appendChild(drinkElement);

				// console.log(drinkListElement);
			});
		})
		.catch((err) => {
			console.log(`error ${err}`);
		});
}
