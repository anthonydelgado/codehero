
const descriptions = {
	 '01': `
		// 	Overview

		// 	In this assignment, you'll build a professional portfolio site using HTML/CSS. These instructions include a short style guide; follow it to design an aesthetically pleasing layout while creating different kinds of complex HTML elements.

		// 	Before You Begin

		// 	Welcome to your first opportunity as a front-end web designer. You will be advocating for your most important client -- yourself! By making a portfolio, you'll take your first step toward building your web development brand

		// 	This will be one of your harder assignments, if only because you're just getting your feet wet in web design. Trust us, though: it will get easier. Invest your time in this assignment and it will pay dividends!

		// 	You'll have all the tools you need to complete this homework by the end of Saturday's class.

		// 	Instructions

		// 	Create a new repository in GitHub called Basic-Portfolio.

		// 	Clone this repository to your computer using the process we went over in class.

		// 	Navigate to the Basic-Portfolio folder that you just cloned onto your machine. Inside this folder, create the following:

		// 	3 HTML documents: index.html, contact.html and portfolio.html
		// 	A folder called assets.
		// 	Inside the assets directory, make two additional folders: css and images.
		// 	In the css folder, make a file called style.css.
		// 	In the css folder, make a file called reset.css and include the code found from the Meyerweb reset located here
		// 	In the images folder, save the images you plan on using (like your profile image, the placeholder images for the portfolio, and the social icon images).
		// 	Push the above changes to GitHub.

		// 	Make sure to git add . and git commit -m "initial site files" then type git push origin master to push your changes to your GitHub repo.

		// 	When you create a website, it's standard practice to code your HTML files before writing any CSS -- and to write up one HTML file before moving onto the next. Write your HTML semantically, too:

		// 	If something is a heading, you use a heading tag.
		// 	If something is a list, you use an unordered or ordered list tag.
		// 	So on and so forth.
		// 	The content for the index.html should be unique to you.

		// 	Write a paragraph or two about yourself. Make it fun, show your personality!
		// 	The main logo where it says "Your Name" should say your name. This may make the logo section smaller or wider depending on how long your name is, that is fine and expected.
		// 	Add, commit, and push your code to GitHub often, especially when you complete a page.
		// 	After all of your html is written, you can begin styling your pages using the style.css file you created.

		// 	Be sure to validate your html
		// 	Consult the specs below these instructions for advice on styling your CSS files.
		// 	Push your changes to Github.`,

	'02': `
		// Overview

		// In this assignment, you'll be making two different portfolios. The first is an update of the one you made in the last class--you'll enhance with a mobile-responsive layout. Then you'll make a second portfolio, this time with Bootstrap.

		// Remember

		// You will be fully capable of doing this homework by the end of Saturday's class.

		// Before You Begin

		// You've learned a ton of material in these past two weeks: HTML/CSS, GitHub, Heroku and Bootstrap. If you feel like you're falling behind, there's no need to panic. You'll have 22 weeks to digest this material and master at it.

		// We're diving into JavaScript next week, and the HTML/CSS will start getting less focus. Still, you'll find that a basic understanding of HTML/CSS will help you understand basic JavaScript operations.

		// Instructions

		// Create a new GitHub repository and name it Portfolio.

		// Clone this repository onto your computer.

		// cd your way into your cloned copy of the repository, then create the folders assignment1 and assignment2.

		// Copy the contents of Basic-Portfolio (your first homework solution) and paste the mentioned files into assignment1.

		// Note: Be sure not to include any dot files (e.g .git, .gitignore for example) from the Basic-Portfolio repo.
		// If you chose the Skeleton exercise for your first homework assignment, contact a TA, who will provide you with a template for your portfolio.
		// Assignment One Instructions - (No Bootstrap)

		// Inside your assignment1 folder, find your style.css file, it may be in assets/css. At the bottom of styles.css you will write your media queries.

		// Use three @media screen tags, each with one of these max-widths: 980px, 768px and 640px.
		// You use 980px because you never want any of the content to be cut off. Since the desktop layout is about 960px wide, you want the media queries to kick in before your content gets cut off.
		// 768px is about the width of a tablet and 640px is about the width of a phone in landscape
		// Make the layout match the following screenshots:

		// index.html: 980px, 768px, 640px
		// portfolio.html: 980px, 768px, 640px
		// contact.html: 980px, 768px, 640px
		// Make the position of the header static (the default positioning) when the screen is 640px wide. The header design takes up a lot of room; you don't want it to stick to the top of a small screen and leave no room for the rest of your site.

		// Be sure to include the viewport tag in all your html files, otherwise your media-queries won't function like you'd expect on mobile devices.

		// Protip: Use the Chrome extensions Window Resizer and Browser Width to see the browser dimensions in Chrome.*

		// Assignment Two Instructions (Bootstrap)

		// Create an assignment2 repo on GitHub and clone it to your computer. Inside your cloned repo, create index.html, portfolio.html and contact.html.

		// Find a Bootstrap theme that you like (or make your own!). There are plenty of free options available, or you can pay for one if you choose. Here are a few site where you can find themes.

		// Wrap Bootstrap
		// Boots Watch
		// Start Bootstrap
		// Theme Forest
		// Bootstrap Skins
		// Blacktie
		// Install the Bootstrap theme and add your portfolio content.

		// Be sure to leave space for your future projects.
		// Create the index.php and composer.json inside assignment2

		// Make sure you have <?php include_once("yourFileNameHere"); ?> and {} for those files.
		// Deploy your new Bootstrap-powered portfolio to Heroku. Remember:

		// heroku login
		// heroku create
		// git push heroku master`,

	'03': `
		// Overview

		// In this assignment, you'll create one of two possible computer games: Hangman or Psychic. These apps will run in the browser, and feature dynamically updated HTML powered by your JavaScript code.

		// Remember

		// You will be fully capable of doing this homework by the end of Saturday's class.

		// Before You Begin

		// Create a new GitHub repo called week-3-game, then clone it to your computer.

		// Inside your local week-3-game folder, create the following: index.html, composer.json and index.php

		// Fill in the appropriate content in the composer.json and index.php files to be able to deploy your game to Heroku when it is finished.
		// While still in your week-3-game directory, make a folder called assets.

		// cd your way into the assets folder, then make three additional folders: javascript, css and images.
		// In the javascript folder, make a file called game.js.
		// In the css folder, make a file called style.css.
		// Also in the css folder, make a file called reset.css. Paste into it the code from the Meyerweb reset stylesheet.
		// In the images folder, save whatever images you plan on using.
		// Push the above changes to GitHub.

		// Choose whichever game you'd like to make. Making the Psychic game will prove easier than coding Hangman. Yet the challenges inherit to the Hangman exercise will provide you a more comprehensive review of this week's material. We'd suggest at least trying Hangman first.

		// Note: There's no shame if you'd prefer submitting Psychic. Don't worry, it's still a proper challenge :)
		// Push your selected game to Heroku. Remember:

		// heroku login
		// heroku create
		// git push heroku master

		// Option One: Psychic Game (Easy)

		// Psychic

		// Watch the demo.

		// You're going to make a game just like the one in the video. Essentially, the app randomly picks a letter, and the user has to guess which letter the app chose. Put the following text on your page:

		// Guess what letter I'm thinking of

		// Wins: (# of times the user has guessed the letter correctly)

		// Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)

		// Guesses Left: (# of guesses left. This will update)

		// Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)

		// When the player wins, increase the Wins counter and start the game over again (without refreshing the page).

		// When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).

		// Option Two: Hangman Game (Moderate - Recommended)

		// Hangman

		// Watch the demo.

		// Choose a theme for your game! In the demo, we picked an 80s theme: 80s questions, 80s sound and an 80s aesthetic. You can choose any subject for your theme, though, so be creative!

		// Use key events to listen for the letters that your players will type.

		// Display the following on the page:

		// Press any key to get started!

		// Wins: (# of times user guessed the word correctly).

		// If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.

		// As the user guesses the correct letters, reveal them: m a d o _ _ a.

		// Number of Guesses Remaining: (# of guesses remaining for the user).

		// Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).

		// After the user wins/loses the game should automatically choose another word and make the user play it.

		// Hangman Game Bonuses

		// Play a sound or song when the user guesses their word correctly, like in our demo.
		// Write some stylish CSS rules to make a design that fits your game's theme.
		// HARD MODE: Organize your game code as an object, except for the key events to get the letter guessed. This will be a challenge if you haven't coded with JavaScript before, but we encourage anyone already familiar with the language to try this out.
		// Save your whole game and it's properties in an object.
		// Save any of your game's functions as methods, and call them underneath your object declaration using event listeners.
		// Don't forget to place your global variables and functions above your object.
		// Remember: global variables, then objects, then calls.
		// Definitely talk with a TA or your instructor if you get tripped up during this challenge.`,

	'04': `
		// Overview

		// In this assignment, you'll create another fun and interactive game for web browsers. This time, your app must dynamically update your HTML pages with the jQuery library.

		// Remember

		// You will be fully capable of doing this homework by the end of Saturday's class.

		// Before You Begin

		// Create a new GitHub repo called week-4-game, then clone it to your computer.

		// Inside the week-4-game folder, create the following: index.html, composer.json and index.php.

		// Place the appropriate content in the composer.json and index.php files, so you can deploy your game to Heroku.
		// Still inside the week-4-game directory, make a folder called assets.

		// Inside the assets directory, make three additional folders: javascript, css and images.
		// In the javascript folder, make a file called game.js.
		// In the css folder, make a file called style.css.
		// In the css folder, make a file called reset.css. Paste into it the code found from the Meyerweb Reset.
		// In the images folder, save any of the images you plan on using.
		// Push the above changes to GitHub.

		// Choose whichever game you want to make from the choices below. The CrystalsCollector game is easier than making the Star Wars RPG, but you'll get a more comprehensive review with the Star Wars exercise.

		// Option One: CrystalsCollector Game (Easy)

		// Crystal Collector

		// Watch the demo.

		// The player will have to guess the answer, just like in Hangman. This time, though, the player will guess with numbers instead of letters.

		// Here's how the app works:

		// There will be four crystals displayed as buttons on the page.

		// The player will be shown a random number at the start of the game.

		// When the player clicks on a crystal, it will add a specific amount of points to the player's total score.

		// Your game will hide this amount until the player clicks a crystal.
		// When they do click one, update the player's score counter.
		// The player wins if their total score matches the random number from the beginning of the game.

		// The player loses if their score goes above the random number.

		// The game restarts whenever the player wins or loses.

		// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
		// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

		// Game design notes:

		// The random number shown at the start of the game should be between 19 - 120.

		// Each crystal should have a random hidden value between 1 - 12.

		// Option Two: Star Wars RPG Game (Normal)

		// Star Wars

		// Watch the demo.

		// Here's how the app works:

		// When the game starts, the player will choose a character by clicking on the fighter's picture. The player will fight as that character for the rest of the game.

		// The player must then defeat all of the remaining fighters. Enemies should be moved to a different area of the screen.

		// The player chooses an opponent by clicking on an enemy's picture.

		// Once the player selects an opponent, that enemy is moved to a defender area.

		// The player will now be able to click the attack button.

		// Whenever the player clicks attack, their character damages the defender. The opponent will lose HP (health points). These points are displayed at the bottom of the defender's picture.
		// The opponent character will instantly counter the attack. When that happens, the player's character will lose some of their HP. These points are shown at the bottom of the player character's picture.
		// The player will keep hitting the attack button in an effort to defeat their opponent.

		// When the defender's HP is reduced to zero or below, remove the enemy from the defender area. The player character can now choose a new opponent.
		// The player wins the game by defeating all enemy characters. The player loses the game the game if their character's HP falls to zero or below.

		// Game design notes:

		// Each character in the game has 3 attributes: Health Points, Attack Power and Counter Attack Power.

		// Each time the player attacks, their character's Attack Power increases by its base Attack Power.

		// For example, if the base Attack Power is 6, each attack will increase the Attack Power by 6 (12, 18, 24, 30 and so on).
		// The enemy character only has Counter Attack Power.

		// Unlike the player's Attack Points, Counter Attack Power never changes.
		// The Health Points, Attack Power and Counter Attack Power of each character must differ.

		// No characters in the game can heal or recover Health Points.

		// A winning player must pick their characters wisely by first fighting an enemy with low Counter Attack Power. This will allow them to grind Attack Power and to take on enemies before they lose all of their Health Points. Healing options would mess with this dynamic.
		// Your players should be able to win and lose the game no matter what character they choose. The challenge should come from picking the right enemies, not choosing the strongest player.`,

	'05': `
		//Overview

		// In this assignment, You'll create a Trivia game using JavaScript for the logic and jQuery to manipulate HTML. Be sure to layout this app with valid HTML and stylish CSS.

		// Remember

		// You will be fully capable of doing this homework by the end of Saturday's class.

		// Before You Begin

		// Create a GitHub repo called TriviaGame, then clone the repo to your computer.

		// Create a file inside of the TriviaGame folder called index.html. This is where you'll mark up all of your HTML.

		// Don't forget to include a script tag with the jQuery library.
		// Create a folder inside of the TriviaGame folder called assets.

		// Inside assets, create three folders: css, javascript, images
		// In your css folder, create a style.css file.
		// In your javascript folder, create an app.js file; here you'll write all of your JavaScript and jQuery.
		// In your images folder, save whatever images you'd like to use in this exercise.
		// Choose a game to build from your options below.

		// Option One: Basic Quiz (Timed Form)

		// Basic

		// Click Here to Watch the Demo.

		// You'll create a trivia form with multiple choice or true/false options (your choice).

		// The player will have a limited amount of time to finish the quiz.

		// The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.
		// Don't let the player pick more than one answer per question.

		// Don't forget to include a countdown timer.

		// Option Two: Advanced Assignment (Timed Questions)

		// Advanced

		// Click Here to Watch the demo.

		// You'll create a trivia game that shows only one question until the player answers it or their time runs out.

		// If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

		// The scenario is similar for wrong answers and time-outs.

		// If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
		// If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.
		// On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).`,

	'06': `
		// Overview

		// In this assignment, you'll use the GIPHY API to make a dynamic web page that populates with gifs of your choice. To finish this task, you must call the GIPHY API and use JavaScript and jQuery to change the HTML of your site.

		// GIPHY

		// Before You Begin

		// Hit the GIPHY API.

		// Fool around with the GIPHY API. You can read more here.

		// Be sure to read about these GIPHY parameters (hint, hint):

		// q
		// limit
		// rating
		// Like many APIs, GIPHY requires developers to use a key to access their API data. Their public API Key is provided here.

		// Watch the demo video.

		// You should have a high-level understanding of how this assignment works before attempting to code it.
		// Instructions

		// Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called topics.

		// We chose animals for our theme, but you can make a list to your own liking.
		// Your app should take the topics in this array and create buttons in your HTML.

		// Try using a loop that appends a button for each string in the array.
		// When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.

		// When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

		// Under every gif, display its rating (PG, G, so on).

		// This data is provided by the GIPHY API.
		// Only once you get images displaying with button presses should you move on to the next step.
		// Add a form to your page takes the value from a user input box and adds it into your topics array. Then make a function call that takes each topic in the array remakes the buttons on the page.

		// Rejoice! You just made something really cool.`,

	'07': `
		// Overview

		// In this assignment, you'll indeed create another Rock Paper Scissors game. The catch? You're going to make this an online multiplayer game, all with the help of Firebase (and the rest of your web development repertoire)!

		// Remember

		// You will be fully capable of doing this homework by the end of Saturday's class.
		// Some Notes Before you begin

		// Whether you finish the game or not, you must hand in your code by < HEY, INSTRUCTOR: FILL THIS PART IN :) > to avoid having your work marked incomplete. We don't expect every student to finish this assignment. Still, we do want to see you program this game as best you can.
		// When Should You Be an Expert with the Concepts from This Homework?

		// By Week 9. Try your absolute best to finish this homework. Remember: you have two weeks to ace this exercise.

		// Setup

		// Create a GitHub repo called RPS-Multiplayer and clone it to your computer.

		// Create a file inside of your RPS-Multiplayer folder called index.html. This is where your page's HTML will go.

		// Don't forget to include jQuery and Firebase.
		// Inside RPS-Multiplayer, create your assets directory.

		// Create the folders and files you typically place in assets -- just like you had for the prior weeks' homework assignments.
		// Instructions

		// Create a game that suits this user story:

		// Only two users can play at the same time.

		// Both players pick either rock, paper or scissors. After the players make their selection, the game will tell them whether a tie occurred or if one player defeated the other.

		// The game will track each player's wins and losses.

		// Throw some chat functionality in there! No online multiplayer game is complete without having to endure endless taunts and insults from your jerk opponent.

		// Styling and theme are completely up to you. Get Creative!`,

	'10': `
		// Overview

		// In this assignment, you will make LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

		// Before You Begin

		// LIRI will display your latest tweets. If you don't already have an account on Twitter, make one and post a few tweets about your latest projects.

		// Make a new GitHub repository called liri-node-app and clone it to your computer.

		// To retrieve the data that will power this app, you'll need to send requests to the Twitter, Spotify and IMDB APIs. You'll find these Node packages crucial for your assignment.

		// Twitter
		// Spotify
		// Request
		// You'll use Request to grab data from the OMDB API.
		// Instructions

		// Make a .gitignore file and add the following lines to it.
		// keys.js
		// node_modules
		// .DS_Store
		// * You don't need .DS_Store in the .gitignore file if you're on a Windows Machine.
		// Make a JavaScript file named keys.js.
		// Inside keys.js your file will look like this:

		// console.log('this is loaded');

		// exports.twitterKeys = {
		//   consumer_key: '<input here>',
		//   consumer_secret: '<input here>',
		//   access_token_key: '<input here>',
		//   access_token_secret: '<input here>',
		// }
		// Get your Twitter API keys by following these steps:

		// Step One: Visit https://apps.twitter.com/app/new
		// Step Two: Fill out the form with dummy data. Type http://google.com in the Website input. Don't fill out the Callback URL input. Then submit the form.
		// Step Three: On the next screen, click the Keys and Access Tokens tab to get your consume key and secret.
		// Copy and paste them where the <input here> tags are inside your keys.js file.
		// Step Four: At the bottom of the page, click the Create my access token button to get your access token key and secret.
		// Copy the access token key and secret displayed at the bottom of the next screen. Paste them where the <input here> tags are inside your keys.js file.
		// Make a file called random.txt.

		// Inside of random.txt put the following in with no extra characters or white space:
		// spotify-this-song,"I Want it That Way"
		// Make a JavaScript file named liri.js.

		// At the top of the liri.js file, write the code you need to grab the data from keys.js. Then store the keys in a variable.

		// Make it so liri.js can take in one of the following commands:

		// my-tweets

		// spotify-this-song

		// movie-this

		// do-what-it-says

		// What Each Command Should Do

		// node liri.js my-tweets

		// This will show your last 20 tweets and when they were created at in your terminal/bash window.
		// node liri.js spotify-this-song '<song name here>'

		// This will show the following information about the song in your terminal/bash window

		// Artist(s)
		// The song's name
		// A preview link of the song from Spotify
		// The album that the song is from
		// if no song is provided then your program will default to

		// "The Sign" by Ace of Base
		// node liri.js movie-this '<movie name here>'

		// This will output the following information to your terminal/bash window:

		// Title of the movie.
		// Year the movie came out.
		// IMDB Rating of the movie.
		// Country where the movie was produced.
		// Language of the movie.
		// Plot of the movie.
		// Actors in the movie.
		// Rotten Tomatoes Rating.
		// Rotten Tomatoes URL.
		// If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

		// If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/
		// It's on Netflix!
		// node liri.js do-what-it-says

		// Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
		// It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
		// Feel free to change the text in that document to test out the feature for other commands.`,

	'11': `
		// Overview

		// In this assignment, you'll have three options for you to show off your skills with JavaScript constructors.

		// Options

		// Revisit your Hangman game from week two and empower it with JavaScript constructors. Unlike the original front-end app, this Hangman game will run entirely with Node.js.

		// Redo your Portfolio website with Javascript constructors.

		// Choose any previous assignment and redo with JavaScript constructors

		// Tips

		// Here's a quick review on JavaScript constructors. https://css-tricks.com/understanding-javascript-constructors/`,

	'12': `
		// Overview

		// In this activity, you'll be creating an Amazon-like storefront with the MySQL skills you learned this week. The app will take in orders from customers and deplete stock from the store's inventory. As a bonus task, you can program your app to track product sales across your store's departments and then provide a summary of the highest-grossing departments in the store.

		// Make sure you save and require the MySQL and Prompt npm packages in your homework files--your app will need them for data input and storage.

		// Submission Guide

		// Make sure you use the normal GitHub and Heroku process. This time, though, you need to include screenshots and/or a video showing us that you got the app working with no bugs. You can include these screenshots or a link to a video in a README.md file.

		// If you haven't written a markdown file yet, click here for a rundown, or just take a look at the raw file of these instructions.

		// Instructions:

		// Challenge #1: Customer View (Minimum Requirement)

		// Create a MySQL Database called Bamazon.

		// Then create a Table inside of that database called Products.

		// The products table should have each of the following columns:

		// ItemID (unique id for each product)

		// ProductName (Name of product)

		// DepartmentName

		// Price (cost to customer)

		// StockQuantity (how much of the product is available in stores)

		// Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).

		// Then create a Node application called BamazonCustomer.js. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

		// The app should then prompt users with two messages.

		// The first should ask them the ID of the product they would like to buy.
		// The second message should ask how many units of the product they would like to buy.
		// Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

		// If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.
		// However, if your store does have enough of the product, you should fulfill the customer's order.

		// This means updating the SQL database to reflect the remaining quantity.
		// Once the update goes through, show the customer the total cost of their purchase.
		// If this activity took you between 8-10 hours, then you've put enough time into this assignment. Feel free to stop here -- unless you want to take on the next challenge.
		// Challenge #2: Manager View (Next Level)

		// Create a new Node application called BamazonManager.js. Running this application will:

		// List a set of menu options:

		// View Products for Sale
		// View Low Inventory
		// Add to Inventory
		// Add New Product
		// If a manager selects View Products for Sale, the app should list every available item: the item IDs, names, prices, and quantities.

		// If a manager selects View Low Inventory, then it should list all items with a inventory count lower than five.

		// If a manager selects Add to Inventory, your app should display a prompt that will let the manager "add more" of any item currently in the store.

		// If a manager selects Add New Product, it should allow the manager to add a completely new product to the store.

		// If you finished Challenge #2 and put in all the hours you were willing to spend on this activity, then rest easy! Otherwise continue to the next and final challenge.
		// Challenge #3: Executive View (Final Level)

		// Create a new MySQL table called Departments. Your table should include the following columns:

		// DepartmentID

		// DepartmentName

		// OverHeadCosts (A dummy number you set for each department)

		// TotalSales

		// Modify your BamazonCustomer.js app so that when a customer purchases anything from the store, the program will calculate the total sales from each transaction.

		// Add the revenue from each transaction to the TotalSales column for the related department.
		// Make sure your app still updates the inventory listed in the Products column.
		// Create another Node app called BamazonExecutive.js. Running this application will list a set of menu options:

		// View Product Sales by Department
		// Create New Department
		// When an executive selects View Product Sales by Department, the app should display a summarized table in their terminal/bash window. Use the table below as a guide.

		// DepartmentID	DepartmentName	OverHeadCosts	ProductSales	TotalProfit
		// 01	Electronics	10000	20000	10000
		// 02	Clothing	60000	100000	40000
		// The TotalProfit should be calculated on the fly using the difference between OverheadCosts and ProductSales. TotalProfit should not be stored in any database. You should use a custom alias.

		// If you can't get the table to display properly after a few hours, then feel free to go back and just add TotalProfit to the Departments table.

		// Hint: You will need to use joins to make this work.

		// Hint: You may need to look into grouping in MySQL.

		// HINT: There may be an NPM package that can log the table to the console. What's is it? Good question :)`,

	'13': `
		// Overview

		// In this activity, you'll build a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

		// You will use Express to handle routing. Make sure you deploy your app to Heroku so other users can fill it out.

		// Before You Begin

		// Check out [this demo version of the site]](https://friend-finder.herokuapp.com/). Use this as a model for how we expect your assignment look and operate.

		// Create a folder called FriendFinder. Inside the folder, organize your directories so it matches the following:

		// FriendFinder
		//     - app
		//         - data
		//             - friends.js
		//         - public
		//             - home.html
		//             - survey.html
		//         - routing
		//             - api-routes.js
		//             - html-routes.js
		//     - node_modules
		//     - package.json
		//     - server.js
		// Instructions

		// Your survey should have 10 questions of your choosing. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

		// Your server.js file should require the basic npm packages we've used in class: express, body-parser and path.

		// Your html-routes.js file should include two routes:

		// A GET Route to /survey which should display the survey page.
		// A default USE route that leads to home.html which displays the home page.
		// Your api-routes.js file should contain two routes:

		// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
		// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
		// You should save the data in your app as an array of objects. Each of these objects should roughly follow the format below.

		// {
		//   "name":"Ahmed",
		//   "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
		//   "scores":[
		//      5,
		//      1,
		//      4,
		//      4,
		//      5,
		//      1,
		//      2,
		//      5,
		//      4,
		//      1
		//    ]
		// }
		// Determine the user's most compatible friend using the following as a guide:

		// Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
		// With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
		// Example:
		// User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
		// User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
		// Total Difference: 2 + 1 + 2 = 5
		// Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
		// The closest match will be the user with the least amount of difference.
		// Once you've found the current user's most compatible friend, display the result as a modal pop-up.

		// The modal should display both the name and picture of the closest match.`,

	'14': `
		// Overview

		// In this assignment, you'll create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). Be sure to follow the MVC design pattern; use Node and MySQL to query and route data in your app, and Handlebars to generate your HTML.

		// Remember

		// You will be fully capable of doing this homework by the end of Saturday's class.

		// Before You Begin

		// Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

		// Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.

		// Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page.

		// Your app will store every burger in a database, whether devoured or not.

		// Check out this video of the app for a run-through of how it works.

		// Instructions

		// App Setup

		// Create a GitHub repo called burger and clone it to your computer.

		// Make a package.json file by running npm init from the command line.

		// Install the Express npm package: npm install express --save.

		// Create a server.js file.

		// Install the Handlebars npm package: npm install express-handlebars --save.

		// Install the method-override npm package: npm install method-override --save.

		// Install the body-parser npm package: npm install body-parser --save.

		// Install MySQL npm package: npm install mysql --save.

		// Require the following npm packages inside of the server.js file:

		// express
		// method-override
		// body-parser
		// DB Setup:

		// Inside your burger directory, create a folder named db.

		// In the db folder, create a file named schema.sql. Write SQL queries this file that do the following:

		// Create the burgers_db.
		// Switch to or use the burgers_db.
		// Create a burgers table with these fields:
		// id: an auto incrementing int that serves as the primary key.
		// burger_name: a string.
		// devoured: a boolean.
		// date: a TIMESTAMP.
		// Still in the db folder, create a seeds.sql file. In this file, write insert queries to populate the burgers table with at least three entries.

		// Run the schema.sql and seeds.sql files into the mysql server from the command line

		// Now you're going to run these SQL files.

		// Make sure you're in the db folder of your app.

		// Start MySQL command line tool and login: mysql -u root -p.

		// With the mysql> command line tool running, enter the command source schema.sql. This will run your schema file and all of the queries in it -- in other words, you'll be creating your database.

		// Now insert the entries you defined in seeds.sql by running the file: source seeds.sql.

		// * Close out of the MySQL command line tool: exit.

		// Config Setup:

		// Inside your burger directory, create a folder named config.

		// Create a connection.js file inside config directory.

		// Inside the connection.js file, setup the code to connect Node to MySQL.

		// Export the connection.

		// Create an orm.js file inside config directory.

		// Import (require) connection.js into orm.js

		// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

		// selectAll()
		// insertOne()
		// updateOne()
		// Export the ORM object in module.exports.

		// Model setup:

		// Inside your burger directory, create a folder named models.

		// In models, make a burger.js file.

		// Inside burger.js, import orm.js into burger.js

		// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.

		// Export at the end of the burger.js file.

		// Controller setup:

		// Inside your burger directory, create a folder named controllers.

		// In controllers, create the burgers_controller.js file.

		// Inside the burgers_controller.js file, import the following:

		// Express
		// burger.js
		// Create the router for the app, and export the router at the end of your file.

		// View setup:

		// Inside your burger directory, create a folder named views.

		// Create the index.handlebars file inside views directory.

		// Create the layouts directory inside views directory.

		// Create the main.handlebars file inside layouts directory.

		// Setup the main.handlebars file so it's able to be used by Handlebars.

		// Setup the index.handlebars to have the template that Handlebars can render onto.

		// Create a button in index.handlebars that will submit the user input into the database.

		// Directory structure:

		// All the recommended files and directories from the steps above should look like the following structure:

		// .
		// ├── config
		// │   ├── connection.js
		// │   └── orm.js
		// │ 
		// ├── controllers
		// │   └── burgers_controller.js
		// │
		// ├── db
		// │   ├── schema.sql
		// │   └── seeds.sql
		// │
		// ├── models
		// │   └── burger.js
		// │ 
		// ├── node_modules
		// │ 
		// ├── package.json
		// │
		// ├── public
		// │   ├── assets
		// │   │   ├── css
		// │   │   │   └── burger_style.css
		// │   │   └── img
		// │   │       └── burger.png
		// │   └── test.html
		// │
		// ├── server.js
		// │
		// └── views
		//     ├── index.handlebars
		//     └── layouts
		//         └── main.handlebars`,

	'15': `
		// Overview

		// In this assignment, you're going to Sequelize the Burger app you made last week. We've split this exercise into three different tiers, all with different tasks and expectations. Finish whichever tier will provide you with the most reasonable challenge.

		// Remember

		// You will be fully capable of doing this homework by the end of Saturday's class.
		// Before you Begin

		// Create a new folder called sequelizedBurger
		// Copy the contents of your completed assignment from last week.
		// Remove the older git connection with rm -R .git.
		// Then connect this folder with a new github repo.
		// Run sequelize init to create the neccesary sequel files.

		// Note: If for any reason you don't have a finished assignment for last week, no problem. Message the instructor, who will provide you will a skeleton file to work of for this week.
		// Instructions

		// Put in your best efforts to complete one of these three challenge tiers:

		// Tier 1: Sequelized! (Easy to Moderate)

		// Remove all references to your vanilla MySQL queries and replace them with Sequelize queries.

		// That means:

		// Replacing your MySQL Burger model with a Sequelized equivalent.

		// Don't forget to edit the model and initial migration file to make the burger's devoured field carry a default value of false -- otherwise you might encounter bugs.
		// There's no option to include that default in the command line, so you'll need to open up Sublime to make this change.
		// Don't forget to sync the models!
		// Edit your new config.json file to include your database configurations. Place your JawsDB details in the production property of your json file; the details of your local database go in the developer property.

		// Remove your old ORM file, as well as any references to it in burgers_controller.js. Replace those references with Sequelize's ORM methods.

		// When you finish, your site should function just like your last one:

		// 1-Sequelized

		// Tier 2: Migrated! (Moderate to Hard)

		// Now that your burger app's ready, enter in some dummy data to test it out.

		// Using the Sequelize CLI, create a migration file that bulk inserts at least five burgers into your database.

		// 2-Migrated

		// Don't forget to define both the up and down methods in your migration file. If you create data when running sequelize db:migrate, you need to be able to remove that data with sequelize db:migrate:undo.

		// HERE'S THE REAL CHALLENGE: In your down method, how can you make sure that the ids of your burgers go back to the smallest available integer.

		// For example, say you have burgers in your database with ids 1, 2, 3, 4 and 5. Running sequelize db:migrate:undo will remove those burgers. But then sequelize db:migrate places them back into the database with ids 6, 7, 8, 9 and 10 -- even though there are no burgers with ids less than 6. How can you stop this id gap from occurring?
		// Tier 3: Associated! (Hard)

		// Add in an association of your choice to the project. This will involve creating at least one new model and connecting it with your Burger model.

		// Get creative! This solution is up to you.

		// For example, you could make a site that logs the names of the customers who eat your burgers. If you can't think of another type of association, try this one!

		// 3-Associated

		// If you do go select this tier, you must edit the handlebars files and CSS stylesheets to implement some sort of additional feature to the site. We don't want you to just connect two models and submit your project. Make your site do something relevant to this association.`,

	'18': `
		// Overview

		// In this assignment, you'll create a web app that lets users leave comments on the latest news. But you're not going to actually write any articles; instead, you'll flex your Mongoose and Cheerio muscles to scrape news from another site.

		// Remember

		// You will be fully capable of doing this homework by the end of Saturday's class.
		// Before You Begin

		// Create a GitHub repo for this assignment and clone it to your computer. Any name will do -- just make sure it's related to this project in some fashion.

		// Run npm init. When that's finished, install and save these npm packages:

		// express
		// express-handlebars
		// mongoose
		// body-parser
		// cheerio
		// request
		// NOTE: If you want to earn complete credit for your work, you must use all six of these packages in your assignment.
		// In order to deploy your project to Heroku, you must set up an mLab provision. mLab is remote MongoDB database that Heroku supports natively. Follow these steps to get it running:

		// Create a Heroku app in your project directory.
		// Run this command in your Terminal/Bash window:
		// heroku addons:create mongolab
		// This command will add the free mLab provision to your project.
		// You'll need to find the URI string that connects Mongoose to mLab. Run this command to grab that string:
		// heroku config | grep MONGODB_URI
		// Notice the value that appears after MONGODB_URI =>. This is your URI string. Copy it to a document for safekeeping.
		// When you’re ready to connect Mongoose with your remote database, simply paste the URI string as the lone argument of your mongoose.connect() function. That’s it!
		// Watch this demo of a possible submission.

		// Your site doesn't need to match the demo's style, but feel free to attempt something similar if you'd like. Otherwise, just be creative!
		// Instructions

		// Create an app that follows this user story:

		// Whenever a user visits your site, the app will scrape stories from a news outlet of your choice. The data should at least include a link to the story and a headline, but feel free to add more content to your database (photos, bylines, and so on).

		// Use Cheerio to grab the site content and Mongoose to save it to your MongoDB database.
		// All users can leave comments on the stories you collect. They should also be allowed to delete whatever comments they want removed. All stored comments should be visible to every user.

		// You'll need to use Mongoose's model system to associate comments with particular articles.
		// Tips

		// Go back to Saturday's activities if you need a refresher on how to partner one model with another.

		// Whenever you scrape a site for stories, make sure an article isn't already represented in your database before saving it; we don't want duplicates.

		// Don't just clear out your database and populate it with scraped articles whenever a user accesses your site.

		// If your app deletes stories every time someone visits, your users won't be able to see any comments except the ones that they post.`,

	'19': `
		// Overview

		// In this activity, you'll create a new React-based rendition of the New York Times Article Search application. This assignment requires you to create React components, work with helper functions, and utilize the React mounting lifecycle to query and display articles based on user searches. You'll also use Node, Express and MongoDB so that users can save articles to read later.

		// Instructions

		// Check out this mockup image. This explains how your site's components should function.

		// Create a MongoDB database called nytreact.

		// Using mongoose, then create an Article schema and model

		// Articles should have each of the following fields:

		// title (Title of the stored article from nytimes.com)

		// date (publish date and time of the article)

		// url (URL of the article on nytimes.com)

		// Creating documents in your articles collection similar to

		// {
		//   title: 'Ali Sells Jersey House And Moves to Chicago',
		//   date: '1974-07-18T00:00:00Z',
		//   url: 'http://query.nytimes.com/gst/abstract.html?res=9A0DE5D8173FEF34BC4052DFB166838F669EDE'
		// }
		// Create a Node/Express/Handlebars/MongoDB/ReactJS app called nytreact. This will be a recreation of the NYT Articles Search exercise application we built back in Week 6. Running this application will:

		// Create a Bootstrap layout similar to that displayed in HW_Assignment.png. This should be a SPA (Single Page Application) that uses react-router to navigate, hide and show your React components without changing the route within Express.

		// If you want to try out another CSS framework, feel free to use an alternative to Bootstrap.
		// You'll need several Express routes for your app:

		// /api/saved (get) - your components will use this to query MongoDB for all saved articles

		// /api/saved (post) - your components will use this to save an article to the database

		// /api/saved (delete) - your components will use this to delete a saved article in the database

		// * (get) - will load your single HTML page (with ReactJS) in public/index.html. Make sure you put this after all other GET routes

		// The layout should include three React Components named Main, Search and Saved.

		// Main - contains the main-container div that holds the main layout and navigation. This component should also be able to hold sub-components Search and Saved

		// Search - queries the NYT API for articles. Displays API search results from another possible Query component and Results component. Gives the user the ability to save an article to their Saved Articles.

		// Saved - displays the Saved Articles that were searched and stored in the database

		// Bonus: Live Updates to Saved Articles

		// Use React routing and socket.io to create a notification or a component that triggers whenever a user saves an article. Your message should include the title of the saved article.
		// Say you have multiple browsers open, each one visiting your site. If you save an article in one browser, then all of your browsers should notify you that a new article was saved.
		// Socket.io NPM package
`,

};




export { descriptions as default };