(() => {

  const startView = `
    <div class="screen screen-start" id="start">
      <header>
        <h1>Tic Tac Toe</h1>
        <div class="player-names">
        	<input type="text" placeholder="Player One" id="playerOne-name">
        	<input type="text" placeholder="Player Two" id="playerTwo-name">
        </div>
        <p class="intro-message">Pick an opponent</p>
        <a href="#" class="button btn-opp-human">Human</a>
        <a href="#" class="button btn-opp-computer">Computer</a>
        <a href="#" class="button btn-start">Start game</a>
      </header>
    </div>
  `;

  const winningView   = `
    <div class="screen screen-win" id="finish">
      <header>
        <h1>Tic Tac Toe</h1>
        <p class="message">Winner</p>
        <a href="#" class="button">New game</a>
      </header>
    </div>
  `;

  const htmlBoard   = `
    <div class="board" id="board">
      <header>
        <h1>Tic Tac Toe</h1>
        <ul>
          <li class="players" id="player1">
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-200.000000, -60.000000)" fill="#000000"><g transform="translate(200.000000, 60.000000)"><path d="M21 36.6L21 36.6C29.6 36.6 36.6 29.6 36.6 21 36.6 12.4 29.6 5.4 21 5.4 12.4 5.4 5.4 12.4 5.4 21 5.4 29.6 12.4 36.6 21 36.6L21 36.6ZM21 42L21 42C9.4 42 0 32.6 0 21 0 9.4 9.4 0 21 0 32.6 0 42 9.4 42 21 42 32.6 32.6 42 21 42L21 42Z"/></g></g></g></svg>
          </li>
          <li class="players" id="player2">
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="43" viewBox="0 0 42 43" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-718.000000, -60.000000)" fill="#000000"><g transform="translate(739.500000, 81.500000) rotate(-45.000000) translate(-739.500000, -81.500000) translate(712.000000, 54.000000)"><path d="M30 30.1L30 52.5C30 53.6 29.1 54.5 28 54.5L25.5 54.5C24.4 54.5 23.5 53.6 23.5 52.5L23.5 30.1 2 30.1C0.9 30.1 0 29.2 0 28.1L0 25.6C0 24.5 0.9 23.6 2 23.6L23.5 23.6 23.5 2.1C23.5 1 24.4 0.1 25.5 0.1L28 0.1C29.1 0.1 30 1 30 2.1L30 23.6 52.4 23.6C53.5 23.6 54.4 24.5 54.4 25.6L54.4 28.1C54.4 29.2 53.5 30.1 52.4 30.1L30 30.1Z"/></g></g></g></svg>
          </li>
        </ul>
      </header>
      <ul class="boxes">
        <li class="box"></li>
        <li class="box"></li>
        <li class="box"></li>
        <li class="box"></li>
        <li class="box"></li>
        <li class="box"></li>
        <li class="box"></li>
        <li class="box"></li>
        <li class="box"></li>
      </ul>
    </div>
  `;


  // The Player Object
  const playerObject = (() => {
    function playerObject(initialName, initialScore) {
      this.name = initialName || "None";
      this.score = initialScore || 0;
    }
    playerObject.prototype = { };
    return playerObject;
  })();



  // The Game Object
  const gameObject = (function(){

    // Call both player from the prototype player object
    function gameObject() {
      this.players = [
        new playerObject("playerOne", 0, false),
        new playerObject("playerTwo", 0, false)
      ];
      this.currentPlayer = 1;
      this.board = [0,0,0,0,0,0,0,0,0];
    }

    // The game object itself
    gameObject.prototype = {

      // This method:
        // Add both player.
        // Termine the first player as the current player
        // Empty the board game
      initializeGame : function() {
        this.playerOne = this.players[0].name;
        this.playerTwo = this.players[1].name;
        this.currentPlayer = 1;
        this.board = [0,0,0,0,0,0,0,0,0];
      }, // end: initializeGame Method

      // Define the maximun number of moves possible
      numberOfMovesLeft : function() {
        let count = 0;
        for (let i = 0; i < this.board.length; i++) {
          if (this.board[i] === 0) {
            count++;
          }
        }
        return count;
      }, // end: numberOfMovesLeft

      // This method helps to check quicker if the boar cells situation
      verifyTheCells : function(c1, c2, c3) {
        return (
          (this.board[c1] === this.board[c2])
          && (this.board[c2] === this.board[c3])
          && (this.board[c1] > 0)
        );
      }, // end: verifyTheCells


      // Define the winning situation according the cells which are not empty
      winningSituation : function() {
        let win = 0;
        if (this.verifyTheCells(0, 1, 2)) {
          win = this.board[1];
        } else if (this.verifyTheCells(3, 4, 5)) {
          win = this.board[3];
        } else if (this.verifyTheCells(6, 7, 8)) {
          win = this.board[6];
      } else if (this.verifyTheCells(0, 3, 6)) {
          win = this.board[0];
        } else if (this.verifyTheCells(1, 4, 7)) {
          win = this.board[1];
        } else if (this.verifyTheCells(2, 5, 8)) {
          win = this.board[2];
      } else if (this.verifyTheCells(0, 4, 8)) {
          win = this.board[0];
        } else if (this.verifyTheCells(2, 4, 6)) {
          win = this.board[2];
        }

        return win;
      }, // end: winningSituation



      // Define which players should be playing and the possible winning or not winning situation
      turningMove : function(playerMove) {
        if ((playerMove >=0 && playerMove <=8) && (this.board[playerMove] === 0)) {
          this.board[playerMove] = this.currentPlayer;
          const status = this.winningSituation();
          if (status === 0) {
            if (this.numberOfMovesLeft() > 0) {
              if (this.currentPlayer === 1) {
                this.currentPlayer = 2;
              } else {
                this.currentPlayer = 1;
              }
              return 0;
            } else {
              return 3;
            }
          } else {
            this.players[status-1].score++;
            return status;
          }
        } else {
          return 9;
        }
      }, // end: playMove

      // If the computer is playing, define what to do with it by lets it playing a random move
      computerMove : function() {
        var availMoves = [];
        for (var i = 0; i < this.board.length; i++) {
          if (this.board[i] === 0) {
            availMoves.push(i);
          }
        }
        return availMoves[Math.floor(Math.random() * availMoves.length)];
      } // end: computerMove
    };
    return gameObject;
  })();


  const ticTacToeGame = new gameObject();

  // This method starts the game
  function startingTheGame() {
    // Initialise the game
    ticTacToeGame.initializeGame();
    // Append the elements to thhe body
    $('body div').remove();
    $('body').append(htmlBoard);
    $('.players span').remove();
    // Show the name of both players
    $('#player1').prepend('<span>' + ticTacToeGame.playerOne + '</span>');
    $('#player2').prepend('<span>' + ticTacToeGame.playerTwo + '</span>');
    $('.box').attr('class', 'box');
    $('.box').css('background-image', '');
    // Start the game with the first player
    activatePlayer(1);
  }


  // This methods shows the end screen when the game is done
  function endingTheGame(status) {
    // Add the element to the body
    $('body div').remove();
    $('body').append(winningView);

    // Defining the variables needed
    let screen = '';
    let message = '';

    switch (status) {
      case 1:
        screen = 'screen-win-one';
        message = ticTacToeGame.playerOne + ' Won!';
        break;
      case 2:
        screen = 'screen-win-two';
        message = ticTacToeGame.playerTwo + ' Won!';
        break;
      case 3:
        screen = 'screen-win-tie';
        message = 'It\'s a Tie!';
        break;
    }

    // Then display the ending message
    $('.message').text(message);
    $('.screen').addClass(screen);
    $('.button').click(function() {
      startingTheGame();
    });
  }

  // Add style to the active player and remove style the unactive one
  function activatePlayer(p) {
    let $playerId;
    let $playerImage;
    let $playerClass;

    // Add the styles for both players (the icon, the id and the hover statement)
    if (p === 1) {
      $playerId = '#player1';
      $playerImage = 'img/o.svg';
      $playerClass = 'box-filled-1';
    } else {
      $playerId = '#player2';
      $playerImage = 'img/x.svg';
      $playerClass = 'box-filled-2';
    }

    // Activate the current player and unbind click and hover events
    $('.players').removeClass('active');
    $($playerId).addClass('active');
    $('.boxes li').unbind('mouseenter mouseleave');
    $('.boxes li').unbind('click');


    // When two players are playing together
    if (ticTacToeGame.players[p-1].name !== "Computer"){

      // Add a hover effect for the current player
      $('.boxes li:not(.box-filled-1, .box-filled-2, .box-filled-ai)').hover(function() {
        $(this).css('background-image', 'url(' + $playerImage + ')');
      }, function() {
        $(this).css('background-image', '');
      });
      $('.boxes li:not(.box-filled-1, .box-filled-2, .box-filled-ai)').click(function() {
        // When a move is made, update the grid
        var gameStatus = ticTacToeGame.turningMove($(this).index());
        $(this).addClass($playerClass);
        $(this).unbind('mouseenter mouseleave');

        // When a winning situation occurs
        if (gameStatus > 0 && gameStatus !== 9) {
          endingTheGame(gameStatus);
        } else {
          if (p === 1) {
            activatePlayer(2);
          } else {
            activatePlayer(1);
          }
        }
      });

    // When there is only one player
    } else {
    const AiMove = ticTacToeGame.computerMove();
      $('.box').eq(AiMove).addClass('box-filled-ai').css('background-image', 'url(' + $playerImage + ')');
      const gameStatus = ticTacToeGame.turningMove(AiMove);
      if (gameStatus > 0) {
        endingTheGame(gameStatus);
      } else {
          activatePlayer(1);
      }
    }
  }


  // Restart the game from the beginning
  $('body div').remove();
  $('body').append(startView);
  $('.player-names').hide();
  $('.btn-start').hide();

  // When there are two human players, ask for their names
  $('.btn-opp-human').click(function() {
    $('.button').hide();
    $('#start p').hide();
    $('.btn-start').show();
    $('.player-names').show().children().first().focus();
    // Then start the game
    $('#playerTwo-name').keyup(function(e) {
      if (e.which === 13) {
        $('.btn-start').trigger('click');
      }
    });
  });

  // When only the computer is choosen
  $('.btn-opp-computer').click(function() {
    $('.button').hide();
    $('#start p').hide();
    $('.btn-start').show();
    $('.player-names').show().children().first().focus();
    $('#playerTwo-name').hide().val('Computer');
    // Start game if pressing Enter in the name field
    $('#playerOne-name').keyup(function(e) {
      if (e.which === 13) {
        $('.btn-start').trigger('click');
      }
    });
  });

  // Start the game when clicking the start button
  $('.btn-start').click(function() {
    // Grab the players names before starting the game
    ticTacToeGame.players[0].name = $('.player-names input').eq(0).val() !== "" ? $('.player-names input').eq(0).val() : "Player One";
    ticTacToeGame.players[1].name = $('.player-names input').eq(1).val() !== "" ? $('.player-names input').eq(1).val() : "Player Two";
    startingTheGame();
  });

})();
