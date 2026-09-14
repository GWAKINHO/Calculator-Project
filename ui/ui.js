// js/ui.js_화면 렌더링 및 포맷팅 모듈

const exprEl = document.getElementById('expr');
const resultEl = document.getElementById('result');

const opSymbols = {
  add: '+',
  subtract: '−',
  multiply: '×',
  divide: '÷'
};

export function formatNumber(numStr) {
  if (numStr === 'Error') return numStr;
  const n = Number(numStr);
  if (!isFinite(n)) return 'Error';
  let s = n.toString();
  if (s.length > 12) {
    s = n.toPrecision(10).replace(/\.?0+$/, '');
    if (Math.abs(n) >= 1e12 || (Math.abs(n) < 1e-6 && n !== 0)) {
      s = n.toExponential(5);
    }
  }
  return s;
}

export function updateDisplay(current, previous, operator) {
  resultEl.textContent = formatNumber(current);

  if (previous !== null && operator) {
    exprEl.textContent = `${formatNumber(previous)} ${opSymbols[operator]}`;
  } else {
    exprEl.textContent = '';
  }

  // 활성화된 연산자 버튼 하이라이트
  document.querySelectorAll('.op').forEach(b => b.classList.remove('op-active'));
  if (operator) {
    const btn = document.querySelector(`[data-action="${operator}"]`);
    if (btn) btn.classList.add('op-active');
  }
}