const MISS = 5, HIT = 1;

function solution(cacheSize, cities) {
  if (cacheSize === 0)
    return MISS * cities.length;

  let ans = 0;
  const cache = new Set();

  cities.map((item) => item.toLowerCase())
    .forEach((city) => {
      // cache hit
      if (cache.has(city)) {
        ans += HIT;
        cache.delete(city);
        cache.add(city);
      }

      // 1) cache miss: 존재하지 않고, 캐시가 꽉 찼을 때
      if (!cache.has(city) && cache.size === cacheSize) {
        ans += MISS;
        // set은 인덱스 개념이 없으므로 cache를 배열로 바꾼 후 첫번째 원소 삭제
        cache.delete(Array.from(cache)[0]);
        cache.add(city);
      }

      // 2) cache miss: 존재하지 않고, 캐시 자리가 아직 남았을 때
      if (!cache.has(city) && cache.size < cacheSize) {
        ans += MISS;
        cache.add(city);
      }
    })
  return ans;
}