const $ = (id) => document.getElementById(id);

const target = $('target');
const measured = $('measured');
const units = $('units');
const newTarget = $('newTarget');
const compensated = $('compensated');

const shrinkAmount = $('shrinkAmount');
const shrinkRate = $('shrinkRate');
const scaleFactor = $('scaleFactor');
const scalePercent = $('scalePercent');

let lastScaleFactor = null;

function formatNumber(value, decimals = 4) {
  if (!Number.isFinite(value)) return '—';
  return Number(value.toFixed(decimals)).toString();
}

function calculate() {
  const targetVal = parseFloat(target.value);
  const measuredVal = parseFloat(measured.value);
  const unit = units.value;

  if (!targetVal || !measuredVal || targetVal <= 0 || measuredVal <= 0) {
    alert('Enter positive target and measured values.');
    return;
  }

  const shrink = targetVal - measuredVal;
  const shrinkPct = (shrink / targetVal) * 100;
  const factor = targetVal / measuredVal;
  const percent = factor * 100;

  lastScaleFactor = factor;

  shrinkAmount.textContent = `${formatNumber(shrink, 4)} ${unit}`;
  shrinkRate.textContent = `${formatNumber(shrinkPct, 4)}%`;
  scaleFactor.textContent = formatNumber(factor, 6);
  scalePercent.textContent = `${formatNumber(percent, 4)}%`;

  calculateNewPart();
}

function calculateNewPart() {
  const newVal = parseFloat(newTarget.value);
  if (!lastScaleFactor || !newVal || newVal <= 0) {
    compensated.value = '';
    return;
  }
  compensated.value = `${formatNumber(newVal * lastScaleFactor, 4)} ${units.value}`;
}

function clearAll() {
  [target, measured, newTarget].forEach(input => input.value = '');
  compensated.value = '';
  shrinkAmount.textContent = '—';
  shrinkRate.textContent = '—';
  scaleFactor.textContent = '—';
  scalePercent.textContent = '—';
  lastScaleFactor = null;
}

$('calc').addEventListener('click', calculate);
$('clear').addEventListener('click', clearAll);
newTarget.addEventListener('input', calculateNewPart);
[target, measured, units].forEach(el => el.addEventListener('input', () => {
  if (target.value && measured.value) calculate();
}));
