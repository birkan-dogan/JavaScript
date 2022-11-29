const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/*
1) Create one player array for each team (variables 'players1' and 'players2')
*/

const [players1, players2] = game.players;  // array destructuring
console.log(players1);
console.log(players2);

/*
2) The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
*/

const [gk, ...fieldPlayers] = players1;  // using rest pattern to collect all players (except gk) into fieldPlayers array
console.log(gk);
console.log(fieldPlayers);

/*
3) Create an array 'allPlayers' containing all players of both teams (22 players)
*/

const allPlayers = [...players1, ...players2];  // using spread operator
console.log(allPlayers);

/*
4) During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic
*/

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];  // using spread operator
console.log(players1Final);

/*
5) Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
*/

const { team1, x: draw, team2 } = game.odds;  // object destructuring
console.log(team1, draw, team2);

/*
6) Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
*/

// using rest parameters to accept any arbitrary amount of arguments in the functions
const printGoals = (goal, ...names) => {
  for (let i = 0; i < names.length; i++) {
    console.log(names[i], goal);
  }
};

printGoals(5, "Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(game.score[0], ...game.scored);

/*
7) The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator
*/

// using short-circuit

console.log(
  `${(team1 < team2 && "Bayern") || "Dortmund"} is more likely to win`
);

// challenge 2


// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

for (const [index, player] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${player}`);
}

/*
Goal 1: Lewandowski
Goal 2: Gnarby
Goal 3: Lewandowski
Goal 4: Hummels
*/

// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember

const odds = Object.values(game.odds);
let sumOfOdds = 0;

for (const x of odds) {
  sumOfOdds += x;
}

const average = sumOfOdds / odds.length;
console.log(average.toFixed(2)); // 3.69

/*
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw").
*/

const allOdd = Object.entries(game.odds);
console.log(allOdd);

for (const [team, odd] of allOdd) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd} `);
}

/*

4. Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this

{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}

*/

const scorers = {};
const keys = Object.keys(scorers);

for (const player of game.scored) {
  if (!keys.includes(player)) {
    scorers[player] = 1;
    keys.push(player);
  } else {
    scorers[player] += 1;
  }
}
console.log(scorers);

// {Lewandowski: 2, Gnarby: 1, Hummels: 1}

