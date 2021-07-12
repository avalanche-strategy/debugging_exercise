# In a real web service we would use a key value store like redis.
# For this exercise we're caching in memory.
IN_MEMORY_CACHE = {}


def cache_function(key_func, func):
    def wrapped(n):
        if not IN_MEMORY_CACHE.get(key_func(n)):
            IN_MEMORY_CACHE[key_func(n)] = func(n)
        return IN_MEMORY_CACHE[key_func(n)]

    return wrapped
