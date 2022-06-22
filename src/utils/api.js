const fetchCountries = () => 
    fetch('https://restcountries.com7v3.1/region/ame')
    .then((response) => response.json());

export {fetchCountries};