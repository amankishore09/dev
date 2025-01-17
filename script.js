// Example conversion rates (for demonstration purposes)
const conversionRates = {
    'USD': {
        'USD': 1,
        'INR': 73.5,
        'EUR': 0.85
    },
    'INR': {
        'USD': 0.0136,
        'INR': 1,
        'EUR': 0.0116
    },
    'EUR': {
        'USD': 1.18,
        'INR': 86.5,
        'EUR': 1
    }
};

// Function to convert currency
function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('Currency-from').value;
    const toCurrency = document.getElementById('Currency-to').value;

    if (amount === '' || isNaN(amount)) {
        document.getElementById('result').innerHTML = 'Please enter a valid number.';
        return;
    }

    const fromCurrencyText = document.getElementById('Currency-from').options[document.getElementById('Currency-from').selectedIndex].text;
    const toCurrencyText = document.getElementById('Currency-to').options[document.getElementById('Currency-to').selectedIndex].text;

    const convertedAmount = (amount * conversionRates[fromCurrencyText][toCurrencyText]).toFixed(2);

    document.getElementById('result').innerHTML = `${amount} ${fromCurrencyText} = ${convertedAmount} ${toCurrencyText}`;
}

// Function to clear input fields and result
function clearFields() {
    document.getElementById('amount').value = '';
    document.getElementById('Currency-from').selectedIndex = 0;
    document.getElementById('Currency-to').selectedIndex = 0;
    document.getElementById('result').innerHTML = '';
}

// Event listeners for buttons
document.getElementById('convert').addEventListener('click', convertCurrency);
document.getElementById('clear').addEventListener('click', clearFields);
