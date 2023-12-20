const assert = require('assert');
const factorial = require('./factorial');

// Функція для перевірки, чи результат очікується
function test(description, actual, expected) {
  try {
    assert.strictEqual(actual, expected);
    console.log(`✅ Перевірка пройшла успішно: ${description}`);
  } catch (error) {
    console.error(`❌ Перевірка не пройшла: ${description}`);
    console.error(`   Очікувалось: ${expected}`);
    console.error(`   Отримано: ${actual}`);
  } 
}

// Тести
test('Факторіал 0 має бути 1', factorial(0), 1);
test('Факторіал 1 має бути 1', factorial(1), 1);
test('Факторіал 5 має бути 120', factorial(5), 120);
test('Факторіал 10 має бути 3628800', factorial(10), 3628800);
