// js/main.js_진입점 및 이벤트 조율
import { compute, toggleSign, computePercent } from './calculator.js';
import { updateDisplay } from './ui.js';

let current = '0';
let previous = null;
let operator = null;
let overwrite = true;

function render() {
  updateDisplay(current, previous, operator);
}

function clearAll() {
  current = '0';
  previous = null;
  operator = null;
  overwrite = true;
}

function inputDigit(d) {
  if (overwrite) {
    current = d === '.' ? '0.' : d;
    overwrite = false;
  } else {
    if (d === '.' && current.includes('.')) return;
    if (current === '0' && d !== '.') current = d;
    else current += d;
  }
}

function setOperator(op) {
  if (operator && !overwrite) {
    const result = compute(previous, current, operator);
    current = isFinite(result) ? String(result) : 'Error';
    previous = current;
  } else {
    previous = current;
  }
  operator = op;
  overwrite = true;
}

function equals() {
  if (operator === null || previous === null) return;
  const result = compute(previous, current, operator);
  current = isFinite(result) ? String(result) : 'Error';
  previous = null;
  operator = null;
  overwrite = true;
}

// 마우스 클릭 이벤트
document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    const action = btn.dataset.action;

    if (!isNaN(Number(action)) || action === '0') {
      if (current === 'Error') clearAll();
      inputDigit(action);
    } else if (action === 'decimal') {
      if (current === 'Error') clearAll();
      inputDigit('.');
    } else if (['add', 'subtract', 'multiply', 'divide'].includes(action)) {
      if (current === 'Error') return;
      setOperator(action);
    } else if (action === 'equals') {
      equals();
    } else if (action === 'clear') {
      clearAll();
    } else if (action === 'sign') {
      current = toggleSign(current);
    } else if (action === 'percent') {
      current = computePercent(current);
    }
    render();
  });
});

// 키보드 단축키 이벤트
window.addEventListener('keydown', (e) => {
  const map = {
    '+': 'add', '-': 'subtract', '*': 'multiply', '/': 'divide',
    'Enter': 'equals', '=': 'equals', 'Escape': 'clear', '%': 'percent'
  };
  if (e.key >= '0' && e.key <= '9') {
    document.querySelector(`[data-action="${e.key}"]`)?.click();
  } else if (e.key === '.') {
    document.querySelector('[data-action="decimal"]')?.click();
  } else if (map[e.key]) {
    document.querySelector(`[data-action="${map[e.key]}"]`)?.click();
  }
});

render();