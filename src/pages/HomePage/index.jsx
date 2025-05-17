import { JourneyPicker } from '../../components/JourneyPicker';
import { useState } from 'react';
import { JourneyDetail} from '../../components/JourneyDetail';

export const HomePage = () => {
  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (journeyData) => {
    setJourney(journeyData); // uložíme spojení
};

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />

      {journey && <JourneyDetail journey={journey} />}

    </main>
  );
};