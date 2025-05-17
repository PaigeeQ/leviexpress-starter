import { JourneyPicker } from '../../components/JourneyPicker';
import { useState } from 'react';


export const HomePage = () => {
  const [journey, setJourney] = useState(null);
  const handleJourneyChange = (journeyData) => {
    setJourney(journeyData); // uložíme spojení
  console.log('Spojení uloženo do stavu:', journeyData);
};

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />

      {journey && (
        <p>Nalezeno spojení s id {journey.journeyId}</p>
      )}
    </main>
  );
};