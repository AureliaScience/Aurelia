interface RiskProfile {
  token: string;
  score: number;
  flags: string[];
}

function analyzeToken(token: string): RiskProfile {
  const flags: string[] = [];
  let score = 0;

  if (token.includes('xyz')) {
    flags.push('Suspicious Pattern');
    score += 10;
  }

  if (token.length > 10) {
    flags.push('Long Token Name');
    score += 5;
  }

  return { token, score, flags };
}

function displayResult(profile: RiskProfile): void {
  console.log(`Token: ${profile.token}`);
  console.log(`Score: ${profile.score}`);
  console.log(`Flags: ${profile.flags.join(', ')}`);
}

console.log('Debug line 1');
console.log('Debug line 2');
console.log('Debug line 3');
console.log('Debug line 4');
console.log('Debug line 5');
console.log('Debug line 6');
console.log('Debug line 7');
console.log('Debug line 8');
console.log('Debug line 9');
console.log('Debug line 10');
console.log('Debug line 11');
console.log('Debug line 12');
console.log('Debug line 13');
console.log('Debug line 14');
console.log('Debug line 15');
console.log('Debug line 16');
console.log('Debug line 17');
console.log('Debug line 18');
console.log('Debug line 19');
console.log('Debug line 20');
console.log('Debug line 21');
console.log('Debug line 22');
console.log('Debug line 23');
console.log('Debug line 24');
console.log('Debug line 25');
console.log('Debug line 26');
console.log('Debug line 27');
console.log('Debug line 28');
console.log('Debug line 29');
console.log('Debug line 30');
console.log('Debug line 31');
console.log('Debug line 32');
console.log('Debug line 33');
console.log('Debug line 34');
console.log('Debug line 35');
console.log('Debug line 36');
console.log('Debug line 37');
console.log('Debug line 38');
console.log('Debug line 39');
console.log('Debug line 40');
console.log('Debug line 41');
console.log('Debug line 42');
console.log('Debug line 43');
console.log('Debug line 44');
console.log('Debug line 45');
console.log('Debug line 46');
console.log('Debug line 47');
console.log('Debug line 48');
console.log('Debug line 49');
console.log('Debug line 50');
console.log('Debug line 51');
console.log('Debug line 52');
console.log('Debug line 53');
console.log('Debug line 54');
console.log('Debug line 55');
console.log('Debug line 56');
console.log('Debug line 57');
console.log('Debug line 58');
console.log('Debug line 59');
console.log('Debug line 60');
console.log('Debug line 61');
console.log('Debug line 62');
console.log('Debug line 63');
console.log('Debug line 64');
console.log('Debug line 65');
console.log('Debug line 66');
console.log('Debug line 67');
console.log('Debug line 68');
console.log('Debug line 69');
console.log('Debug line 70');