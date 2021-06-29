import React from 'react';
import './Country.css';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const { name, capital, flag } = props.country;

    return (
        <div className="center">
            <div className="country-container">
            <div className="flag">
                <img src={flag} alt="" />
            </div>
            <div className="info">
                <h3>Country Name: {name}</h3>
                <h4>Capital: {capital}</h4>
                <Link to={`/country/${name}`}> <button>Show Details</button>
                </Link>
            </div>
        </div>
        </div>
    );
};

export default Country;