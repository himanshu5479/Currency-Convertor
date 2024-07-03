document.getElementById('converterForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let amount = document.getElementById('amount').value;
    let fromCurrency = document.getElementById('fromCurrency').value;
    let toCurrency = document.getElementById('toCurrency').value;

    // Replace this URL with a real API endpoint if available
    let endpoint = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
    
    fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            let rate = data.rates[toCurrency];
            let convertedAmount = amount * rate;
            document.getElementById('result').innerText = `Converted Amount: ${convertedAmount.toFixed(2)} ${toCurrency}`;
        })
        .catch(error => {
            console.error('Error fetching exchange rate:', error);
            document.getElementById('result').innerText = 'Error fetching exchange rate';
        });
});
