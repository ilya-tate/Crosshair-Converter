const checkValues = (values, input) => {
  // Verify input in possible values
  return values.includes(input);
}

const checkGame = game => {
  // Verify input game
  const games = ['csgo', 'valorant'];
  return game.includes(game);
}

const enableOutline = (currGame, value) => {
  const possibleValues = [true, false];
  if (!checkValues(possibleValues, value) || !checkGame(currGame)) return;

  // Return crosshair enabled bool
  return value;
}

const enableDot = (currGame, value) => {
  const possibleValues = [true, false];
  if (!checkValues(possibleValues, value) || !checkGame(currGame)) return;  

  // Return center dot enabled bool
  return value;
}

const enableDynamic = (currGame, value) => {
  const possibleValues = [true, false];
  if (!checkInput(possibleValues, value) || !checkGame(currGame)) return;
  
  // Return dynamic movement correction enabled bool
  return value;
}

const opacity = (currGame, value) => {
  if (!checkGame(currGame) || isNaN(value)) return;
  value = +value;
  let newValue;
  let range = [];
  if (currGame === 'csgo') {
    for (i = 0; i <= 256; i++) range.push(i);
    if (!checkValues(range, value)) return;
    newValue = (value / 255).toFixed(3);
  } else if (currgame === 'valorant') {
    for (i = 0.0; i <= 1.001; i += .001) range.push(i);
    if (!checkValues(range, value)) return;
    newValue = value * 255;
  }

  return newValue;
}

const thickness = (currGame, value) => {
  if (!checkGame(currGame) || isNaN(value)) return;
  value = +value;
  let newValue;
  let range = [];
  if (currGame === 'csgo') {
    for (i =  0; i <= 101; i += .5) range.push(i);
    if (!checkValues(range, value)) return;
    newValue = value * 2;
  } else if (currGame === 'valorant') {
    for (i = 0; i <= 11; i++) range.push(i);
    if (!checkValues(range, value)) return;
    newValue = value / 2;
  }

  return newValue;
}

const length = (currGame, value) => {
  if (!checkGame(currGame) || isNaN(value)) return;
  value = +value;
  let newValue;
  let range = [];
  if (currGame === 'csgo') {
    for (i = 0; i <= 101; i++) range.push(i);
    if (!checkValues(range, value)) return;
    newValue = value * 2;
  } else if (currGame === 'valorant') {
    for (i = 0; i <= 21; i++) range.push(i);
    if (!checkValues(range, value)) return;
    newValue = value / 2;
  }

  return newValue;
}

const offset = (currGame, value) => {
  if (!checkGame(currGame) || isNaN(value)) return;
  value = +value;
  let newValue;
  let range = [];
  if (currGame === 'csgo') {
    for (i = -100; i <= 101; i++) range.push(i);
    if (!checkValues(range, value)) return;
    newValue = value + 4;
  } else if (game === 'valorant') {
    for (i = 0; i <= 21; i++) range.push(i);
    if (!checkValues(range, value)) return;
    newValue = value - 4;
  }
}
