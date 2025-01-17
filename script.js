const conversionRates = {
    'USD': { 'USD': 1, 'INR': null, 'EUR': 0.85 },
    'INR': { 'USD': null, 'INR': 1, 'EUR': 0.0116 },
    'EUR': { 'USD': 1.18, 'INR': 86.5, 'EUR': 1 }
};

// Fetch latest USD to INR rate from the Flask server
fetch('/get-rate')
    .then(response => response.json())
    .then(data => {
        const rate = data.rate;
        conversionRates['USD']['INR'] = rate;
        conversionRates['INR']['USD'] = 1 / rate;
    })
    .catch(error => console.error('Error fetching the exchange rate:', error));

function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('Currency-from').value;
    const toCurrency = document.getElementById('Currency-to').value;

    if (amount === '' || isNaN(amount)) {
        document.getElementById('result').innerHTML = 'Please enter a valid number.';
        return;
    }

    const convertedAmount = (amount * conversionRates[fromCurrency][toCurrency]).toFixed(2);
    document.getElementById('result').innerHTML = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
}

function clearFields() {
    document.getElementById('amount').value = '';
    document.getElementById('Currency-from').selectedIndex = 0;
    document.getElementById('Currency-to').selectedIndex = 0;
    document.getElementById('result').innerHTML = '';
}

document.getElementById('convert').addEventListener('click', convertCurrency);
document.getElementById('clear').addEventListener('click', clearFields);
