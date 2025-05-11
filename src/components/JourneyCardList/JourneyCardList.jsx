import { JourneyCard } from "../JourneyCard/JourneyCard";
import journeyData from "../../journey.json";

export const JourneyCardList = () => {
  return (
    <>
      {journeyData.map((journey, index) => (
        <JourneyCard key={index} journey={journey} index={index} />
      ))}
    </>
  );
};