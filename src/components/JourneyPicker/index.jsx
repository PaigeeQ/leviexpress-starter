import React, { useEffect, useState } from 'react';
import './style.css';

export const JourneyPicker = ({ onJourneyChange }) => {
  const [ fromCity, setFromCity ] = useState('');
  const [ toCity, setToCity ] = useState('');
  const [ date, setDate ] = useState();
  const [ cities, setCities ] = useState([]);
  const [dates, setDates] = useState([]);
  

  useEffect(() => {
    const fetchCities = async () => {
      const response = await fetch('https://apps.kodim.cz/daweb/leviexpress/api/cities');
      const data = await response.json();
      console.log('Města z API:', data);
      setCities(data.results);
    };
  
    fetchCities(); // volání té funkce uvnitř useEffect
  }, []);

  useEffect(() => {
    const fetchDate = async () => {
      const response = await fetch('https://apps.kodim.cz/daweb/leviexpress/api/dates');
      const data = await response.json();
      console.log('Data z API:', data);
      setDates(data.results);
    };
  
    fetchDate(); // volání té funkce uvnitř useEffect
  }, []);

    // // useEffect se spustí jen při prvním vykreslení komponenty
    // useEffect(() => {
    //   console.log('useEffect spuštěn – načítám města jen jednou');
    //   setCities([
    //     { name: 'Praha', code: 'CZ-PRG' },
    //     { name: 'Brno', code: 'CZ-BRQ' },
    //   ]);
    // }, []); // ← důležité! prázdné pole závislostí = efekt se spustí jen jednou
  

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Odesílám formulář s cestou');
    console.log('From:', fromCity);
    console.log('To:', toCity);
    console.log('Date:', date);
  };

  const CityOptions = ({ cities }) => {
  
    return (
      <>
        {cities.map((city) => (
          <option key={city.code} value={city.code}>
            {city.name}
          </option>
        ))}
      </>
    );
  };

  const DatesOptions = ({ dates }) => {
  
    return (
      <>
        <option value="">Vyberte</option>
        {dates.map((date) => (
            <option key={date.dateBasic} value={date.dateBasic}>
        {date.dateCs}
          </option>
        ))}
      </>
    );
  };

  return (
    <div className="journey-picker container">
      <h2 className="journey-picker__head">Kam chcete jet?</h2>
      <div className="journey-picker__body">
        <form className="journey-picker__form" onSubmit={handleSubmit}>
          <label>
            <div className="journey-picker__label">Odkud:</div>
            <select
              value={fromCity}
              onChange={(e) => setFromCity(e.target.value)}
            >
              <option value="">Vyberte</option>
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Kam:</div>
            <select
             value={toCity}
             onChange={(e) => setToCity(e.target.value)} 
            >
              <option value="">Vyberte</option>
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Datum:</div>
            <select
              value={date}
              onChange={(e) => setDate(e.target.value)}
            >
              <DatesOptions dates={dates} />
            </select>
          </label>
          <div className="journey-picker__controls">
            <button className="btn" type="submit">
              Vyhledat spoj
            </button>
          </div>
        </form>
        <img className="journey-picker__map" src="/map.svg" alt="mapa" />
      </div>
    </div>
  );
};
