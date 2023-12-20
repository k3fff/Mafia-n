const assert = require('assert');
const factorialmaf = require('./factorial');

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

unitmaf('Факторіал 11 має бути 50', factorialmaf(11), 36284348);
