const apiEndpoint = 'https://api.exchangerate-api.com/v4/latest/EUR';
let exchangeRates, currencies;

function convert() {
  const amount = document.getElementById('amount').value;
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;
  const result = amount * exchangeRates[to] / exchangeRates[from];
  document.getElementById('result').innerHTML = `${amount} ${from} = ${result} ${to}`;
}

function populateCurrencies() {
  currencies = Object.keys(exchangeRates);
  const fromSelect = document.getElementById('from');
  const toSelect = document.getElementById('to');
  currencies.forEach(currency => {
    const option = document.createElement('option');
    option.value = currency;
    option.text = currency;
    if (currency === 'EUR') {
      option.selected = true;
    }
    fromSelect.appendChild(option);
  });
  currencies.forEach(currency => {
    const option = document.createElement('option');
    option.value = currency;
    option.text = currency;
    if (currency === 'DKK') {
      option.selected = true;
    }
    toSelect.appendChild(option);
  });
}

fetch(apiEndpoint)
  .then(response => response.json())
  .then(data => {
    exchangeRates = data.rates;
    populateCurrencies();
  })
  .catch(error => console.error(error));

  
