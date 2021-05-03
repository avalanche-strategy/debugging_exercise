const { cacheFunction } = require("./cacheService");

/**
 * Counts the number of non trivial factors of the input n. All numbers
 * have at least two factors, 1 and the number itself. This counts up all the
 * remaining factors.
 */
function countNonTrivialFactors(n) {
  let count = 0;
  const sqrt = Math.sqrt(n);

  // We start at 2 because we don't care about the trivial factor 1
  // We go until the sqrt of n because factors come in pairs
  // and every factor greater than the sqrt of n has a factor
  // less than the sqrt of n. This means we can count the number
  // of factors up to the sqrt of n, and double them to get the answer.
  for (i = 2; i <= Math.floor(sqrt); i++) {
    if (n % i === 0) {
      count += i === sqrt ? 1 : 2;
    }
  }

  return count;
}

function keyFunc(n) {
  return `factors-of-${n}`;
}

const cachedCountNonTrivialFactors = cacheFunction(
  keyFunc,
  countNonTrivialFactors
);

/**
 * This function plays the factor battle game, each player submits a list
 * of numbers, for each list we calculate the number of factors each
 * number has. We sum the number of factors for each list. The player with
 * the most factors wins!
 * @param {Array} playerOneList - The first player's list of integers
 * @param {Array} playerTwoList - The second player's list of integers
 */
function factorBattle(playerOneList, playerTwoList) {
  const playerOneSum = playerOneList.reduce(
    (sum, number) => sum + cachedCountNonTrivialFactors(number),
    0
  );

  const playerTwoSum = playerTwoList.reduce(
    (sum, number) => sum + cachedCountNonTrivialFactors(number),
    0
  );

  if (playerOneSum > playerTwoSum) {
    return "Player one wins";
  } else if (playerTwoSum > playerOneSum) {
    return "Player two wins";
  } else {
    return "It's a tie!";
  }
}

exports.factorBattle = factorBattle;
