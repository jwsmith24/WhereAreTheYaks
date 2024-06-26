import './style.css';
const playerModule = require('../src/player');
const yakModule = require('../src/yak');
const [createTimer] = require('../src/timer');

const timerDisplay = document.getElementById('timer');

const p1BoardDisplay = document.getElementById('player1Board');

const gameStateButton = document.getElementById('stateButton');
const p1YakCount = document.getElementById('p1YakCount');

const player = playerModule.createPlayer(playerModule.playerType.REAL);

const tinyYak1 = document.getElementById('tinyYak1');
const smallYak1 = document.getElementById('smallYak1');
const mediumYak1 = document.getElementById('mediumYak1');
const largeYak1 = document.getElementById('largeYak1');

const gameState = {
  init: 'init',
  playing: 'playing',
  gameOver: 'gameOver',
};

let state;

initSession();
function initSession() {
  state = gameState.init;

  gameStateButton.addEventListener('click', () => {
    startGame();
    gameStateButton.style.display = 'none';
  });
}

function checkGameOver() {
  if (timer.seconds === 0 || player.board.yaksFound()) {
    endGame();
  }
}

function endGame() {
  console.log('game over!');
  timerDisplay.textContent = 'Game Over!';
  state = gameState.gameOver;
  timer.stop();
}

function updateTimer() {
  timerDisplay.textContent = `Time Remaining: ${timer.seconds}`;
  checkGameOver();
}

const timer = createTimer(updateTimer);
function startGame() {
  timer.start();
  populateBoards();
  updateYaks();
  initBoards();

  state = gameState.playing;
}

function nextTurn() {
  updateYaks();
  loadBoards();
  checkGameOver();
}

// rebuild boards after changes
function loadBoards() {
  clearBoards();
  p1BoardDisplay.appendChild(player.board.buildDisplay());
}

// build boards and add action listeners
function initBoards() {
  loadBoards();
  p1BoardDisplay.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('space')) {
      handleTurn(e.target.id);
    }
  });
}

function clearBoards() {
  p1BoardDisplay.innerHTML = '';
}

//todo: CHECK TO MAKE SURE TARGET ISN"T ALREADY HIT
// REVIEW LOGIC TO AVOID SHIPS OVERLAPPING
function handleTurn(target) {
  if (state === gameState.playing) {
    const attack = resolveSpace(target);
    const result = player.board.handleAttack(attack);
    player.attackLog.push({ attack, result });
    nextTurn();
  } else {
    console.log('Game is not currently active');
  }
}

function resetYaks() {
  tinyYak1.classList.remove('hidden');
  smallYak1.classList.remove('hidden');
  mediumYak1.classList.remove('hidden');
  largeYak1.classList.remove('hidden');
}

function hideYaks(yaks) {
  for (let yak of yaks) {
    switch (yak.length) {
      case 2:
        tinyYak1.classList.add('hidden');
        break;
      case 3:
        smallYak1.classList.add('hidden');
        break;
      case 4:
        mediumYak1.classList.add('hidden');
        break;
      case 5:
        largeYak1.classList.add('hidden');
    }
  }
}

function updateYaks() {
  const p1Yaks = player.board.yaks;
  console.log(p1Yaks);

  resetYaks();
  hideYaks(p1Yaks);
  p1YakCount.textContent = `Yaks Remaining: ${p1Yaks.length}`;
}

function resolveSpace(targetString) {
  const target = targetString.split(' ');
  const space = {
    y: target[0],
    x: target[1],
  };
  return space;
}

// randomly pick a starting point, then select legal coordinates based on yak size
function generateRandomOrigin() {
  const origin = {
    x: getRandomInt(),
    y: getRandomInt(),
  };
  return origin;
}

// generate random int between 0 and 9
function getRandomInt() {
  let random = Math.random();
  return Math.floor(random * 9);
}

function placeYak(yak) {
  let selecting = true;
  let origin;
  while (selecting) {
    origin = generateRandomOrigin();
    selecting = checkPlacement(yak, origin);
  }
}

function checkPlacement(yak, origin) {
  // Check if the origin is occupied

  if (player.board.board[origin.y][origin.x].yak !== 'empty') {
    return true;
  }

  // try to place in each direction. (add randomization later)
  const direction = randomizeDirection();
  const result = direction(yak.length, origin);
  console.log(result);
  if (result === false) {
    return true;
  } else {
    player.board.placeYak(result, yak);
    return false;
  }
}

function randomizeDirection() {
  switch (Math.floor(Math.random() * 4)) {
    case 0:
      return checkDown;
    case 1:
      return checkUp;
    case 2:
      return checkLeft;
    case 3:
      return checkRight;
  }
}

function checkLeft(length, origin) {
  let coordinates = [origin];
  for (let i = 1; i < length; i++) {
    coordinates.push({
      x: origin.x - i,
      y: origin.y,
    });

    if (origin.x - i < 0) {
      return false;
    }

    if (
      !player.board.board[origin.y][origin.x - i].yak &&
      player.board.board[origin.y][origin.x - i].yak !== 'empty'
    ) {
      return false;
    }
  }
  return coordinates;
}

function checkRight(length, origin) {
  let coordinates = [origin];
  for (let i = 1; i < length; i++) {
    coordinates.push({
      x: origin.x + i,
      y: origin.y,
    });

    if (origin.x + i >= 9) {
      return false;
    }

    if (
      !player.board.board[origin.y][origin.x + i].yak &&
      player.board.board[origin.y][origin.x + i].yak !== 'empty'
    ) {
      return false;
    }
  }
  return coordinates;
}

function checkDown(length, origin) {
  let coordinates = [origin];
  for (let i = 1; i < length; i++) {
    coordinates.push({
      x: origin.x,
      y: origin.y + i,
    });

    if (origin.y + i >= 9) {
      return false;
    }

    if (
      !player.board.board[origin.y + i][origin.x].yak &&
      player.board.board[origin.y + i][origin.x].yak !== 'empty'
    ) {
      return false;
    }
  }
  return coordinates;
}

function checkUp(length, origin) {
  let coordinates = [origin];
  for (let i = 1; i < length; i++) {
    coordinates.push({
      x: origin.x,
      y: origin.y - i,
    });

    if (origin.y - i < 0) {
      return false;
    }

    if (
      !player.board.board[origin.y - i][origin.x].yak &&
      player.board.board[origin.y - i][origin.x].yak !== 'empty'
    ) {
      return false;
    }
  }
  return coordinates;
}

function populateBoards() {
  placeYak(yakModule.createTinyYak());
  placeYak(yakModule.createLargeYak());
  placeYak(yakModule.createMediumYak());
  placeYak(yakModule.createSmallYak());

  console.log(player.board);
}
