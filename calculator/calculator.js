// js/calculator.js_순수 계산 로직 모듈

export function compute(a, b, op) {
  const numA = Number(a);
  const numB = Number(b);
  switch (op) {
    case 'add': return numA + numB;
    case 'subtract': return numA - numB;
    case 'multiply': return numA * numB;
    case 'divide': return numB === 0 ? NaN : numA / numB;
    default: return numB;
  }
}

export function toggleSign(currentStr) {
  if (currentStr === '0') return '0';
  return currentStr.startsWith('-') ? currentStr.slice(1) : '-' + currentStr;
}

export function computePercent(currentStr) {
  return String(Number(currentStr) / 100);
}