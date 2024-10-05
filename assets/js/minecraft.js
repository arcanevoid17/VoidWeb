document.addEventListener('DOMContentLoaded', function () {
    const currencyDropdown = document.getElementById('currencyDropdown');
    const locationDropdown = document.getElementById('locationDropdown');
    const currencyOptions = document.querySelectorAll('.currency-option');
    const locationOptions = document.querySelectorAll('.location-option');
    const plansContainer = document.getElementById('plansContainer');

    const savedCurrency = localStorage.getItem('currency') || 'PHP';
    const savedLocation = localStorage.getItem('location') || 'premium';

    let currentCurrency = savedCurrency;
    let currentLocation = savedLocation;

    const exchangeRates = {
        'PHP': 1,
        'USD': 0.85,
    };

    const updatePlans = () => {
        const plans = document.querySelectorAll('.plan');
        plans.forEach(plan => {
            if (plan.getAttribute('data-location') === currentLocation) {
                plan.style.display = 'block';
                const basePrice = parseFloat(plan.getAttribute('data-price'));
                const convertedPrice = (basePrice * exchangeRates[currentCurrency]).toFixed(2);
                plan.querySelector('.price').innerHTML = `${currentCurrency === 'PHP' ? '₱' : currentCurrency === 'USD' ? '$' : '$'}${convertedPrice} <span>/ monthly</span>`;
            } else {
                plan.style.display = 'none';
            }
        });
    };

    const saveToLocalStorage = () => {
        localStorage.setItem('currency', currentCurrency);
        localStorage.setItem('location', currentLocation);
    };

    const updateDropdownText = () => {
        currencyDropdown.innerText = currentCurrency === 'PHP' ? '₱' : currentCurrency === 'USD' ? '$' : '$';
        locationDropdown.innerText = currentLocation === 'premium' ? 'Premium Plans' : currentLocation === 'budge' ? 'Budget Plans' : 'France';
    };

    currencyOptions.forEach(option => {
        option.addEventListener('click', (event) => {
            event.preventDefault();
            currentCurrency = event.target.getAttribute('data-currency');
            updatePlans();
            saveToLocalStorage();
            updateDropdownText();
        });
    });

    locationOptions.forEach(option => {
        option.addEventListener('click', (event) => {
            event.preventDefault();
            currentLocation = event.target.getAttribute('data-location');
            updatePlans();
            saveToLocalStorage();
            updateDropdownText();
        });
    });

    updatePlans();
    updateDropdownText();
});