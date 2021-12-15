import { motion } from "framer-motion";
import styled from "styled-components";

const ButtonSection = styled.section`
  width: 100%;
  margin: auto;
  justify-content: center;
  display: flex;
  button {
    border: 0;
    margin: 0 0.5rem;
    padding: 5px 15px;
    border-radius: 6px;
    color: white;
    background-color: #29abe2;
    font-size: 1.3rem;
  }
  .activeButton {
    border: 3px solid white;
  }
  @media screen and (max-width: 700px) {
    width: 100%;
    margin: auto;
    button {
      min-width: 46%;
      margin: 5px;
      padding: 5px 0;
      font-size: 1rem;
    }
  }
`;

export const FilterButtons = ({
  handleSetAntall,
  raceData,
  distanse,
  handleCountryChange,
  land,
  antall,
}) => {
  return (
      <ButtonSection>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          <motion.button
            className={antall === "3" ? "activeButton" : null}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9, rotate: 0 }}
            type="button"
            value={3}
            onClick={handleSetAntall}
          >
            Topp 3
          </motion.button>
          <motion.button
            className={antall === "10" ? "activeButton" : null}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9, rotate: 0 }}
            type="button"
            value={10}
            onClick={handleSetAntall}
          >
            Topp 10
          </motion.button>
          <motion.button
            className={antall > 10 ? "activeButton" : null}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9, rotate: 0 }}
            type="button"
            value={raceData.locations[distanse].length}
            onClick={handleSetAntall}
          >
            Alle løpere
          </motion.button>
          <motion.button
            className={land ? "activeButton" : null}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9, rotate: 0 }}
            type="button"
            onClick={handleCountryChange}
          >
            Vis for {land === false ? "Norge" : "alle land"}
          </motion.button>
        </motion.div>
      </ButtonSection>
  );
};
