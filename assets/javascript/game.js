$(document).ready(function() {

	//Random number variables

	var randomNumber = 0;
	var patriotsNumber = 0;
	var chiefsNumber = 0;
	var cowboysNumber = 0;
	var ramsNumber = 0;

	function randomNumberGenerator() {

		//Generate random number function & add it to html

		randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
		console.log("The Random Number is: " + randomNumber);

		$("#randomNumberId").html(randomNumber);
	}

	//Function to generate random numbers for each team

	function randomTeamValuesGenerator() {

		patriotsNumber = Math.floor(Math.random() * 12) + 1;
		console.log("The Green Diamond's value is: " + patriotsNumber);

		chiefsNumber = Math.floor(Math.random() * 12) + 1;
		console.log("The Red Diamond's value is: " + chiefsNumber);

		cowboysNumber = Math.floor(Math.random() * 12) + 1;
		console.log("The Yellow Diamond's value is: " + cowboysNumber);

		ramsNumber = Math.floor(Math.random() * 12) + 1;
		console.log("The Purple Diamond's value is: " + ramsNumber);
	}

	//Initial random numbers to start game

	randomNumberGenerator();
	randomTeamValuesGenerator();


	//Score
	var yourScoreIs = 0;
	var wins = 0;
	var losses = 0;

	//Add value on click, score conditions - Patriots
	$("#patriotsLogo").on("click", function() {
		yourScoreIs = yourScoreIs + patriotsNumber;
		console.log(yourScoreIs);
		$("#yourScore").html(yourScoreIs);

		if (yourScoreIs === randomNumber) {
			wins = wins + 1;
			$("#wins").html("Wins: " + wins);
			$("#message").html("YOU WIN");
			console.log("YOU WIN");

			randomNumberGenerator();
			randomTeamValuesGenerator();
			yourScoreIs = 0;
			$("#yourScore").html(yourScoreIs);
		}

		if (yourScoreIs > randomNumber) {
			losses = losses + 1;
			$("#losses").html("Losses: " + losses);
			$("#message").html("YOU LOSE");
			console.log("YOU LOSE");

			randomNumberGenerator();
			randomTeamValuesGenerator();
			yourScoreIs = 0;
			$("#yourScore").html(yourScoreIs);
		}
	});

	//Chiefs
	$("#chiefsLogo").on("click", function() {
		yourScoreIs = yourScoreIs + chiefsNumber;
		console.log(yourScoreIs);
		$("#yourScore").html(yourScoreIs);

		if (yourScoreIs === randomNumber) {
			wins = wins + 1;
			$("#wins").html("Wins: " + wins);
			$("#message").html("YOU WIN");
			console.log("YOU WIN");

			randomNumberGenerator();
			randomTeamValuesGenerator();
			yourScoreIs = 0;
			$("#yourScore").html(yourScoreIs);
		}


		if (yourScoreIs > randomNumber) {
			losses = losses + 1;
			$("#losses").html("Losses: " + losses);
			$("#message").html("YOU LOSE");
			console.log("YOU LOSE");

			randomNumberGenerator();
			randomTeamValuesGenerator();
			yourScoreIs = 0;
			$("#yourScore").html(yourScoreIs);
		}
	});

	//Cowboys
	$("#cowboysLogo").on("click", function() {
		yourScoreIs = yourScoreIs + cowboysNumber;
		console.log(yourScoreIs);
		$("#yourScore").html(yourScoreIs);

		if (yourScoreIs === randomNumber) {
			wins = wins + 1;
			$("#wins").html("Wins: " + wins);
			$("#message").html("YOU WIN");
			console.log("YOU WIN");

			randomNumberGenerator();
			randomTeamValuesGenerator();
			yourScoreIs = 0;
			$("#yourScore").html(yourScoreIs);
		}

		if (yourScoreIs > randomNumber) {
			losses = losses + 1;
			$("#losses").html("Losses: " + losses);
			$("#message").html("YOU LOSE");
			console.log("YOU LOSE");

			randomNumberGenerator();
			randomTeamValuesGenerator();
			yourScoreIs = 0;
			$("#yourScore").html(yourScoreIs);
		}
	});

	//Rams
	$("#ramsLogo").on("click", function() {
		yourScoreIs = yourScoreIs + ramsNumber;
		console.log(yourScoreIs);
		$("#yourScore").html(yourScoreIs);

		if (yourScoreIs === randomNumber) {
			wins = wins + 1;
			$("#wins").html("Wins: " + wins);
			$("#message").html("YOU WIN");
			console.log("YOU WIN");

			randomNumberGenerator();
			randomTeamValuesGenerator();
			yourScoreIs = 0;
			$("#yourScore").html(yourScoreIs);
		}

		if (yourScoreIs > randomNumber) {
			losses = losses + 1;
			$("#losses").html("Losses: " + losses);
			$("#message").html("YOU LOSE");
			console.log("YOU LOSE");

			randomNumberGenerator();
			randomTeamValuesGenerator();
			yourScoreIs = 0;
			$("#yourScore").html(yourScoreIs);
		}
	});

	//Reset Game 
	$("#reset").on("click", function() {
		wins = 0;
		losses = 0;
		yourScoreIs = 0;
		$("#wins").html("Wins: " + 0);
		$("#losses").html("Losses: " + 0);
		$("#yourScore").html(yourScoreIs);
		$("#message").html();
		randomNumberGenerator();
		randomTeamValuesGenerator();
	});
});