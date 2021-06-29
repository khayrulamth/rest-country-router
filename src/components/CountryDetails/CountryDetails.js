import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CountryInfo from '../CountryInfo/CountryInfo';

const CountryDetails = () => {
    const [newCountry,setNewCountry] = useState([])
    const {countryCode} = useParams([]);

    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryCode}`;
        fetch(url)
        .then(res=>res.json())
        .then(data => {
            setNewCountry(data)
        })
    },[]);
    return (
        <div>
            {
                newCountry.map(country => <CountryInfo key={country.alpha3Code} country={country}>

                </CountryInfo>)
                
                
            }
        </div>
    );
};

export default CountryDetails;