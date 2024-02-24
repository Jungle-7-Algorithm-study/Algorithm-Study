/**
 * https://leetcode.com/problems/find-the-highest-altitude
 */

/**
 * @param {number[]} gain 변화량 배열
 * @return {number} highest altitude
 */
var largestAltitude = function (gain) {
  let highestAltitude = 0;
  let currentAltitude = 0;

  gain.forEach((d) => {
    currentAltitude += d;
    highestAltitude = Math.max(highestAltitude, currentAltitude);
  });

  return highestAltitude;
};

console.log(largestAltitude([-5, 1, 5, 0, -7]));
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2]));
