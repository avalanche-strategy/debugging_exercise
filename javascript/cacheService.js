// In a real web service we would use a key value store like redis.
// For this exercise we're caching in memory.
const IN_MEMORY_CACHE = {};

function cacheFunction(keyFunc, func) {
  return function wrapped(...args) {
    if (!IN_MEMORY_CACHE[keyFunc(...args)]) {
      IN_MEMORY_CACHE[keyFunc(...args)] = func(...args);
    }

    return IN_MEMORY_CACHE[keyFunc(...args)];
  };
}

exports.cacheFunction = cacheFunction;
