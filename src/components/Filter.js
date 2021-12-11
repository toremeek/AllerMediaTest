import { FilterButtons } from "./FilterButtons";
import { Track } from "./Track";

export const Filter = ({
  handleDistanceChange,
  antall,
  handleSetAntall,
  handleCountryChange,
  raceData,
  distanse,
  places,
  land
}) => {
  return (
    <>
      <Track
        places={places}
        handleDistanceChange={handleDistanceChange}
        distanse={distanse}
      />
      <FilterButtons
        handleSetAntall={handleSetAntall}
        antall={antall}
        raceData={raceData}
        distanse={distanse}
        handleCountryChange={handleCountryChange}
        land={land}
      />
    </>
  );
};
