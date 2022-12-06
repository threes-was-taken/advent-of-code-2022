import fs from 'fs';
import path from 'path';

enum Opponent {
  ROCK = 'A',
  PAPER = 'B',
  SCISSORS = 'C',
}

enum Me {
  ROCK = 'X',
  PAPER = 'Y',
  SCISSORS = 'Z',
}

enum Outcome {
  LOSE = 0,
  DRAW = 3,
  WIN = 6,
}

enum ChoiceScore {
  ROCK = 1,
  PAPER = 2,
  SCISSORS = 3,
}

const createGamesArray = (): string[][] => {
  const input = fs.readFileSync(path.join(__dirname, 'input.txt'), { encoding: 'utf-8' });

  const gamesArray = input.split('\n').map((game) => {
    return game.split(' ');
  });

  return gamesArray;
};

const calculateTotalScore = (): void => {
  let totalScore = 0;
  const gamesArray = createGamesArray();

  gamesArray.forEach((game) => {
    const opponent = game[0];
    const me = game[1];

    switch (opponent) {
      case Opponent.ROCK:
        if (me === Me.ROCK) {
          totalScore = totalScore + Outcome.DRAW + ChoiceScore.ROCK;
        }
        if (me === Me.PAPER) {
          totalScore = totalScore + Outcome.WIN + ChoiceScore.PAPER;
        }
        if (me === Me.SCISSORS) {
          totalScore = totalScore + Outcome.LOSE + ChoiceScore.SCISSORS;
        }
        break;
      case Opponent.PAPER:
        if (me === Me.ROCK) {
          totalScore = totalScore + Outcome.LOSE + ChoiceScore.ROCK;
        }
        if (me === Me.PAPER) {
          totalScore = totalScore + Outcome.DRAW + ChoiceScore.PAPER;
        }
        if (me === Me.SCISSORS) {
          totalScore = totalScore + Outcome.WIN + ChoiceScore.SCISSORS;
        }
        break;
      case Opponent.SCISSORS:
        if (me === Me.ROCK) {
          totalScore = totalScore + Outcome.WIN + ChoiceScore.ROCK;
        }
        if (me === Me.PAPER) {
          totalScore = totalScore + Outcome.LOSE + ChoiceScore.PAPER;
        }
        if (me === Me.SCISSORS) {
          totalScore = totalScore + Outcome.DRAW + ChoiceScore.SCISSORS;
        }
        break;
      default:
        break;
    }
  });

  console.log('My total score is: ', totalScore);
};

calculateTotalScore();


