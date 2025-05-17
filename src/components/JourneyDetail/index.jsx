import React from 'react';
import { BusStop } from '../BusStop';
import './style.css';

export const JourneyDetail = ({ journey }) => {
  if (!journey || !journey.stops) {
    return null;
  }

  console.log('Data přijatá v JourneyDetail:', journey); 

  return (
    <div className="journey-detail container">
      <h3>Podrobnosti cesty</h3>
      <div className="stops">
        {journey.stops.map((stop) => (
          <BusStop
            key={stop.code}
            name={stop.city}
            station={stop.station}
            time={stop.time}
          />
        ))}
      </div>
    </div>
  );
};

