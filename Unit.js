const factorial = require('./factorial');
const assert = require('assert');

function mafia(description, actual, expected) {
  try {
    assert.strictEqual(actual, expected);
    console.log(`<3 Перевірка пройшла успішно: ${description}`);
  } catch (error) {
    console.error(`X Перевірка не пройшла: ${description}`);
    console.error(`   Очікувалось: ${expected}`);
    console.error(`   Отримано: ${actual}`);
  } 
}

mafia('Факторіал 12 має бути 3628438', factorial(12), 3628438);
