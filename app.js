// https://calculator.swiftutors.com/diluted-earnings-per-share-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const dilutedEarningsPerShareRadio = document.getElementById('dilutedEarningsPerShareRadio');
const netIncomeRadio = document.getElementById('netIncomeRadio');
const convertibleInstrumentsRadio = document.getElementById('convertibleInstrumentsRadio');
const averageSharesRadio = document.getElementById('averageSharesRadio');

let dilutedEarningsPerShare;
let netIncome = v1;
let convertibleInstruments = v2;
let averageShares = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

dilutedEarningsPerShareRadio.addEventListener('click', function() {
  variable1.textContent = 'Net Income ($)';
  variable2.textContent = 'Convertible Instruments';
  variable3.textContent = 'Average Shares';
  netIncome = v1;
  convertibleInstruments = v2;
  averageShares = v3;
  result.textContent = '';
});

netIncomeRadio.addEventListener('click', function() {
  variable1.textContent = 'Diluted Earnings Per Share ($)';
  variable2.textContent = 'Convertible Instruments';
  variable3.textContent = 'Average Shares';
  dilutedEarningsPerShare = v1;
  convertibleInstruments = v2;
  averageShares = v3;
  result.textContent = '';
});

convertibleInstrumentsRadio.addEventListener('click', function() {
  variable1.textContent = 'Diluted Earnings Per Share ($)';
  variable2.textContent = 'Net Income ($)';
  variable3.textContent = 'Average Shares';
  dilutedEarningsPerShare = v1;
  netIncome = v2;
  averageShares = v3;
  result.textContent = '';
});

averageSharesRadio.addEventListener('click', function() {
  variable1.textContent = 'Diluted Earnings Per Share ($)';
  variable2.textContent = 'Net Income ($)';
  variable3.textContent = 'Convertible Instruments';
  dilutedEarningsPerShare = v1;
  netIncome = v2;
  convertibleInstruments = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(dilutedEarningsPerShareRadio.checked)
    result.textContent = `Diluted Earnings Per Share = ${computeDilutedEarningsPerShare().toFixed(2)} $`;

  else if(netIncomeRadio.checked)
    result.textContent = `Net Income = ${computeNetIncome().toFixed(2)} $`;

  else if(convertibleInstrumentsRadio.checked)
    result.textContent = `Convertible Instruments = ${computeConvertibleInstruments().toFixed(2)}`;

  else if(averageSharesRadio.checked)
    result.textContent = `Average Shares = ${computeAverageShares().toFixed(2)}`;
})

// calculation

function computeDilutedEarningsPerShare() {
  return Number(netIncome.value) / (Number(convertibleInstruments.value) + Number(averageShares.value));
}

function computeNetIncome() {
  return Number(dilutedEarningsPerShare.value) * (Number(convertibleInstruments.value) + Number(averageShares.value));
}

function computeConvertibleInstruments() {
  return (Number(netIncome.value) / Number(dilutedEarningsPerShare.value)) - Number(averageShares.value);
}

function computeAverageShares() {
  return (Number(netIncome.value) / Number(dilutedEarningsPerShare.value)) - Number(convertibleInstruments.value);
}