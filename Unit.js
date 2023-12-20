const assert = require('assert');
const factorial = require('./factorial');

function test(description, actual, expected) {
  try {
    assert.strictEqual(actual, expected);
    console.log(`<3 Перевірка пройшла успішно: ${description}`);
  } catch (error) {
    console.error(`X Перевірка не пройшла: ${description}`);
    console.error(`   Очікувалось: ${expected}`);
    console.error(`   Отримано: ${actual}`);
  } 
}

test('Факторіал 10 має бути 3628800', factorial(10), 3628800);
