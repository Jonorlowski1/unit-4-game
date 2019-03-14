resetGame();

$(".crystalBtn").on('click', function () {
  var crystalValue = $(this).find('img').attr('data-crystalvalue');
  crystalValue = parseInt(crystalValue);
  currentPoints += crystalValue;
  $("#currentPoints").text(currentPoints);

  if (currentPoints === goalPoints) {
    resetGame();
  }
  if (currentPoints > goalPoints) {
    resetGame();
  }
  console.log(crystalValue);
  console.log('Current Points: ' + currentPoints);
  console.log('Goal Points: ' + goalPoints);
});

wins = 0;
losses = 0;

function resetGame() {
  $(document).ready(function () {
    crystalNumberBlue = Math.floor(Math.random() * 12 + 1);
    crystalNumberGreen = Math.floor(Math.random() * 12 + 1);
    crystalNumberPurple = Math.floor(Math.random() * 12 + 1);
    crystalNumberRed = Math.floor(Math.random() * 12 + 1);

    var crystalNumberArray = [crystalNumberBlue, crystalNumberGreen, crystalNumberPurple, crystalNumberRed];
    // console.log(crystalNumberArray);

    if (currentPoints === goalPoints) {
      wins = wins + 1;
    }

    if (currentPoints > goalPoints) {
      losses = losses + 1;
    }

    $("#wins").text('Wins: ' + wins);
    $("#losses").text('Losses ' + losses);

    goalPoints = Math.floor(Math.random() * 100 + 19);
    $("#goalPoints").text(goalPoints);
    // console.log('GOAL POINTS: ' + goalPoints);

    currentPoints = 0;
    $('#currentPoints').text(currentPoints);

    for (i = 0; i < crystalNumberArray.length; i++) {
      var crystalNumber = i + 1;
      var crystalImg = $('#' + crystalNumber + '.crystalImg');
      crystalImg.attr('data-crystalvalue', crystalNumberArray[i]);
      console.log(crystalNumberArray[i]);
    }
  });
};