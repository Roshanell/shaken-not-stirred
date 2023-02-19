# Shaken Not Stirred

This application allows the user to search for cocktail recipies using keywords and displays information about the drink which includes the following: name, ingredients, instructions, and image.

**Link to project:** coming soon

![gif of site]()

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, cocktaildb api

The application starts by creating a search box and a "Search" button using the DOM. When the user enters a keyword or name into the search box and clicks the "Search" button, the application uses the fetch method to connect to thecocktaildb.com API and retrieve information about cocktails matching the search term.

Once the data is retrieved, the application uses a for-each loop and a for loop to iterate through each item in the array of objects returned by the API. For each drink, the application creates a new HTML element using the DOM and populates it with the relevant data, such as the drink's name, photo, ingredients, and instructions. The resulting HTML elements are then rendered on the screen using the DOM.

## Optimizations

1. Add more search options, such as searching by ingredient or category
2. Add a feature to allow users to save their favorite drinks
3. Improve the user interface and design

## Lessons Learned:

Throughout building this project, I learned the following:

1. How to use the fetch method to connect to an external API and retrieve data
2. How to parse JSON data using the .json() method
3. How to use a for-each loop and a for loop to iterate through an array of objects
4. How to create and manipulate HTML elements using the DOM
5. How to display information on the screen using the DOM

## Examples:

Take a look at these couple examples that I have in my own portfolio:
