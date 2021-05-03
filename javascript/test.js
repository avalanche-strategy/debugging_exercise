const { factorBattle } = require("./primeCounter");
const { expect } = require("@jest/globals");

test("test player one wins", () => {
  expect(factorBattle([4, 18, 96, 1281], [6, 8, 12, 30])).toEqual(
    "Player one wins"
  );
});

test("test player two wins", () => {
  expect(factorBattle([6, 8, 12, 30], [4, 18, 96, 1281])).toEqual(
    "Player two wins"
  );
});

test("test it's a tie", () => {
  expect(factorBattle([24, 60, 6], [18, 96, 12])).toEqual("It's a tie!");
});

test("test re-evaluations are fast", () => {
  const playerOne = [1821371232, 274913718419, 11781821371232, 123812381269];
  const playerTwo = [128132912312, 1231238394, 123910310, 23417912];

  const firstCallT0 = performance.now();
  factorBattle(playerOne, playerTwo);
  const firstCallT1 = performance.now();
  const timeForFirstCall = firstCallT1 - firstCallT0;

  const secondCallT0 = performance.now();
  factorBattle(playerOne, playerTwo);
  const secondCallT1 = performance.now();
  const timeForSecondCall = secondCallT1 - secondCallT0;

  expect(timeForSecondCall).toBeLessThan(timeForFirstCall / 100);
});
