import React from 'react';
import './CountryInfo.css';

const CountryInfo = (props) => {
    const {name,flag,capital,population,region,area,timezones} = props.country;
    return (
        <div className='countryInfo-container'>
            .
            <div className="info-container">
            <h1>Country Details : {name}</h1>
                <img style={{
                    height : '200px',
                    width : '400px',
                    
                    padding : '5px',                  
                }} 
                src={flag} alt="" />
                
                <h3>Name: {name}</h3>
                <p>Capital: {capital}</p>
                <p>Region: {region}</p>
                <p>Population: {population}</p>
                
                <p>Timezones: {timezones[0]}</p>
                <p>Area: {area}</p>
                

            </div>
        </div>
    );
};

export default CountryInfo;