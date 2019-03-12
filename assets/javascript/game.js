// 3. Here's how the app works:

//    * There will be four crystals displayed as buttons on the page.
// FOUR OBJECTS

//    * The player will be shown a random number at the start of the game.
//math.function display into $<div>

//    * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
//on.Click event 

//      * Your game will hide this amount until the player clicks a crystal.

//      * When they do click one, update the player's score counter.

//    * The player wins if their total score matches the random number from the beginning of the game.

//    * The player loses if their score goes above the random number.

//    * The game restarts whenever the player wins or loses.

//      * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

//    * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

// ##### Option 1 Game design notes

// * The random number shown at the start of the game should be between 19 - 120.

// * Each crystal should have a random hidden value between 1 - 12. 

wins = 0;
losses = 0;
currentPointsArray = [];

$("#wins").text('Wins: ' + wins);
$("#losses").text('Losses ' + losses);

var goalPoints = Math.floor(Math.random() * 90 + 10);
$("#goalPoints").text(goalPoints);

currentPoints = 0;
$("#currentPoints").text(currentPoints);

// var randomCrystalNumber = Math.floor(Math.random() * 12 + 1);
// console.log(randomCrystalNumber);

// NEED FOUR CRYSTAL OBJECTS
$(document).ready(function () {
    crystalNumberBlue = Math.floor(Math.random() * 12 + 1);
    crystalNumberGreen = Math.floor(Math.random() * 12 + 1);
    crystalNumberPurple = Math.floor(Math.random() * 12 + 1);
    crystalNumberRed = Math.floor(Math.random() * 12 + 1);

    var blueCrystal = {
        crystalNumberBlue
    }
    console.log(blueCrystal);

    var greenCrystal = {
        crystalNumberGreen
    }
    console.log(greenCrystal);

    var purpleCrystal = {
        crystalNumberPurple
    }
    console.log(purpleCrystal);

    var redCrystal = {
        crystalNumberRed
    }
    console.log(redCrystal);

    $(".crystalBtn").on("click", function() {
        console.log();

    });
});