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

mafia('Факторіал 10 має бути 3628800', factorial(10), 3628800);
