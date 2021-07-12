from cache_service import cache_function
import math


def count_non_trivial_factors(n):
    """
    Counts the number of non trivial factors of the input n. All numbers
    have at least two factors, 1 and the number itself. This counts up all the
    remaining factors.
    """
    count = 0
    sqrt = math.sqrt(n)

    # We start at 2 because we don't care about the trivial factor 1
    # We go until the sqrt of n because factors come in pairs
    # and every factor greater than the sqrt of n has a factor
    # less than the sqrt of n. This means we can count the number
    # of factors up to the sqrt of n, and double them to get the answer.
    for i in range(2, math.floor(sqrt) + 1):
        if n % i == 0:
            increment = 1 if i is sqrt else 2
            count += increment

    return count


def key_func(n):
    return f"factors-of-{n}"


cached_count_non_trivial_factors = cache_function(key_func, count_non_trivial_factors)

"""
 This function plays the factor battle game, each player submits a list
 of numbers, for each list we calculate the number of factors each
 number has. We sum the number of factors for each list. The player with
 the most factors wins!
 @param {Array} player_one_list - The first player's list of integers
 @param {Array} player_two_list - The second player's list of integers
"""


def factor_battle(player_one_list, player_two_list):
    player_one_sum = sum(
        [cached_count_non_trivial_factors(num) for num in player_one_list]
    )

    player_two_sum = sum(
        [cached_count_non_trivial_factors(num) for num in player_two_list]
    )

    if player_one_sum > player_two_sum:
        return "Player one wins"

    elif player_one_sum < player_two_sum:
        return "Player two wins"

    else:
        return "It's a tie!"
