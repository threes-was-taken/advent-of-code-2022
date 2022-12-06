import fs from 'fs';
import path from 'path';

const createElvesArray = (): number[][] => {
  const input = fs.readFileSync(path.join(__dirname, 'input.txt'), { encoding: 'utf-8' });
  let elveNumber = 0;
  const elvesArray: number[][] = [[]];

  input.split('\n').forEach((cal) => {
    if (!cal) {
      elveNumber += 1;
      elvesArray[elveNumber] = [];
    } else {
      elvesArray[elveNumber].push(Number(cal));
    }
  });

  return elvesArray;
};

const getLoadedElf = (): number => {
  const elvesArray = createElvesArray();

  const highestCalorieElf = elvesArray.reduce(
    (prev, curr) => {
      const prevSum = prev.reduce((prevCal, currCal) => prevCal + currCal, 0);
      const currSum = curr.reduce((prevCal, currCal) => prevCal + currCal, 0);

      if (prevSum < currSum) {
        return [currSum];
      }

      return [prevSum];
    },
    [0]
  );

  return highestCalorieElf[0];
};

console.log(getLoadedElf());
