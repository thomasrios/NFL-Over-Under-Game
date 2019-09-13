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

		$("#randomNumberId").html(randomNumber);
	}

	//Function to generate random numbers for each team

	function randomTeamValuesGenerator() {

		patriotsNumber = Math.floor(Math.random() * 12) + 1;

		chiefsNumber = Math.floor(Math.random() * 12) + 1;

		cowboysNumber = Math.floor(Math.random() * 12) + 1;

		ramsNumber = Math.floor(Math.random() * 12) + 1;
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
		$("#yourScore").html(yourScoreIs);

		if (yourScoreIs === randomNumber) {
			wins = wins + 1;
			$("#wins").html("Wins: " + wins);
			$("#message").html("YOU WIN");

			randomNumberGenerator();
			randomTeamValuesGenerator();
			yourScoreIs = 0;
			$("#yourScore").html(yourScoreIs);
		}

		if (yourScoreIs > randomNumber) {
			losses = losses + 1;
			$("#losses").html("Losses: " + losses);
			$("#message").html("YOU LOSE");

			randomNumberGenerator();
			randomTeamValuesGenerator();
			yourScoreIs = 0;
			$("#yourScore").html(yourScoreIs);
		}
	});

	//Chiefs
	$("#chiefsLogo").on("click", function() {
		yourScoreIs = yourScoreIs + chiefsNumber;
		$("#yourScore").html(yourScoreIs);

		if (yourScoreIs === randomNumber) {
			wins = wins + 1;
			$("#wins").html("Wins: " + wins);
			$("#message").html("YOU WIN");

			randomNumberGenerator();
			randomTeamValuesGenerator();
			yourScoreIs = 0;
			$("#yourScore").html(yourScoreIs);
		}


		if (yourScoreIs > randomNumber) {
			losses = losses + 1;
			$("#losses").html("Losses: " + losses);
			$("#message").html("YOU LOSE");

			randomNumberGenerator();
			randomTeamValuesGenerator();
			yourScoreIs = 0;
			$("#yourScore").html(yourScoreIs);
		}
	});

	//Cowboys
	$("#cowboysLogo").on("click", function() {
		yourScoreIs = yourScoreIs + cowboysNumber;
		$("#yourScore").html(yourScoreIs);

		if (yourScoreIs === randomNumber) {
			wins = wins + 1;
			$("#wins").html("Wins: " + wins);
			$("#message").html("YOU WIN");

			randomNumberGenerator();
			randomTeamValuesGenerator();
			yourScoreIs = 0;
			$("#yourScore").html(yourScoreIs);
		}

		if (yourScoreIs > randomNumber) {
			losses = losses + 1;
			$("#losses").html("Losses: " + losses);
			$("#message").html("YOU LOSE");

			randomNumberGenerator();
			randomTeamValuesGenerator();
			yourScoreIs = 0;
			$("#yourScore").html(yourScoreIs);
		}
	});

	//Rams
	$("#ramsLogo").on("click", function() {
		yourScoreIs = yourScoreIs + ramsNumber;
		$("#yourScore").html(yourScoreIs);

		if (yourScoreIs === randomNumber) {
			wins = wins + 1;
			$("#wins").html("Wins: " + wins);
			$("#message").html("YOU WIN");

			randomNumberGenerator();
			randomTeamValuesGenerator();
			yourScoreIs = 0;
			$("#yourScore").html(yourScoreIs);
		}

		if (yourScoreIs > randomNumber) {
			losses = losses + 1;
			$("#losses").html("Losses: " + losses);
			$("#message").html("YOU LOSE");

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