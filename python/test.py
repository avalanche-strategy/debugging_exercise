from prime_counter import factor_battle
import time


def test_player_one_wins():
    assert factor_battle([4, 18, 96, 1281], [6, 8, 12, 30]) == "Player one wins"


def test_player_two_wins():
    assert factor_battle([6, 8, 12, 30], [4, 18, 96, 1281]) == "Player two wins"


def test_tie():
    assert factor_battle([24, 60, 6], [18, 96, 12]) == "It's a tie!"


def test_performance():
    player_one = [1821371232, 274913718419, 11781821371232, 123812381269]
    player_two = [128132912312, 1231238394, 123910310, 23417912]

    first_call_t0 = time.time()
    factor_battle(player_one, player_two)
    first_call_t1 = time.time()
    time_for_first_call = first_call_t1 - first_call_t0

    second_call_t0 = time.time()
    factor_battle(player_one, player_two)
    second_call_t1 = time.time()
    time_for_second_call = second_call_t1 - second_call_t0

    assert time_for_second_call < time_for_first_call / 100
