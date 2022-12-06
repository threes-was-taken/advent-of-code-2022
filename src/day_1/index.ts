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

const getLoadedElf = (): void => {
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

  console.log('Highest calories carried by an elf: ', highestCalorieElf[0]);
};

getLoadedElf();

const getTopThreeElves = (): void => {
  const elvesArray = createElvesArray();

  const topThreeCalorieCount = elvesArray
    .map((elf) => elf.reduce((prev, curr) => prev + curr, 0))
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((prev, curr) => prev + curr, 0);

  console.log('Calorie count of top three elves: ', topThreeCalorieCount);
};

getTopThreeElves();
