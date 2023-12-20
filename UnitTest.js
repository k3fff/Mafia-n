const factorial = require('./factorial');
const assert = require('assert');

function mafia(description, actual, expected) {
  try {
    assert.strictEqual(actual, expected);
    console.log(`<3 Перевірка вірна: ${description}`);
  } catch (error) {
    console.error(`X Перевірка не вірна: ${description}`);
    console.error(`   Очікували: ${expected}`);
    console.error(`   Отримали: ${actual}`);
  } 
}

mafia('Факторіал 12 має бути 3628438', factorial(12), 3628438);
