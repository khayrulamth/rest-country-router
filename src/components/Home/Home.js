import React from 'react';
import { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const [countries,setCountries] = useState([])
  useEffect(() =>{
    const url = 'https://restcountries.eu/rest/v2/all';
    fetch(url)
    .then(response => response.json())
    .then(data => setCountries(data))
  },[]);
    return (
        <div>
            <h2 className="center">Total Countries: {countries.length}</h2>
            {
                countries.map(country => <Country key={country.alpha3Code} country={country}></Country>)
            }
        </div>
    );
};

export default Home;