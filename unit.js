const factorial = require('./factorialmaf');
const assert = require('assert');


function unitmaf(description, actual, expected) {
  try {
    assert.strictEqual(actual, expected);
    console.log(`<3 Перевірка успішна: ${description}`);
  } catch (error) {
    console.error(`X Перевірка не вiрна: ${description}`);
    console.error(`   Чекалося: ${expected}`);
    console.error(`   Отримано: ${actual}`);
  } 
}

unitmaf('Факторіал 11 має бути 50', factorial(11), 36284348);
