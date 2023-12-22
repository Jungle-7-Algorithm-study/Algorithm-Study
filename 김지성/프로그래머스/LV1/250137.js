function solution(bandage, health, attacks) {
  const [t, x, y] = bandage;
  let currentHealth = health;
  let continuousTime = 0;
  let attackIndex = 0;
  let currentTime = 0;

  while (currentTime <= attacks[attacks.length - 1][0] + t) {
      if (attackIndex < attacks.length && attacks[attackIndex][0] === currentTime) {
          currentHealth -= attacks[attackIndex][1];
          attackIndex++;
          continuousTime = 0;
      } else {
          if (continuousTime < t) {
              currentHealth = Math.min(currentHealth + x, health);
              continuousTime++;
          }
          if (continuousTime === t) {
              currentHealth = Math.min(currentHealth + y, health);
              continuousTime = 0;
          }
      }
      if (currentHealth <= 0) {
          return -1;
      }
      currentTime++;
  }
  return currentHealth;
}