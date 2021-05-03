# Debugging Exercise

The following exercise is based on a bug we recently had in production. We took the bug out of its production context embedded it into
the following (somewhat silly) problem.

# Refresher on factors

In case you don't remember, every integer has some number of factors. Factors are numbers that evenly divide another number. For example,
the number 4 has 3 factors: 1, 2, 4 because those are the only numbers that evenly divide 4.

Every number has at least two factors, 1 and the number itself. Non-trivial factors are all factors except for 1 and the number itself.

# Factor battle

The code in this exercise lets users play a game called Factor Battle. It's a simple game where each player
chooses an array of numbers. For each number in the list we calculate the number of non-trivial factors it has.
We then sum the counts of non-trivial factors for each number in each player's list. The player with the most non-trivial factors wins!

# Issue in the code

Factoring large numbers is a slow computation, and quickly grows in time complexity as the number to factor grows.
In order to try and keep performance acceptable for the game, the engineers added a caching mechanism to store the
number of factors in memory so that if a number is ever used a second time, it is fast to calculate. This means
if two players play Factor Battle and don't change their lists for two games in a row, the second game should run
much much faster than the first game did because all the values are cached. However, something is wrong and
playing the game with the same arrays mutliple times is slow.

# Your task

Your goal is to uncover the issue that is causing this slowness. We've provided you with the code for:

1. Calculating factors
2. Playing the game
3. Caching the results

We also provide four tests. The first three are passing and test the correctness of the game code. The final test
checks to see if playing the game with the same lists twice in a row runs faster the second time. Currently this test
is failing. It's your job to figure out why, and fix the underlying issue.

This exercise is as much about thought process as it is about finding the underlying issue. Talk out loud where possible so
we can follow along. You can use any resources you'd like. Feel free to look things up, ask questions,
use debuggers, or console log all over the place. You should use whatever techniques you're most comfortable with.

# Setup

You'll need to run `yarn` in the javascript directory. Then to run tests you can use `yarn test`.

Good luck!
