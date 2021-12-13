import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Filter } from "./Filter";
import { raceData } from "../data/data.js";
const ListDiv = styled.div`
  width: 70%;
  margin: 2rem auto;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  li {
    width: 100%;
    background-color: white;
    display: flex;
    margin: 0;
    border: 2px solid black;
    padding: 0 15px;
    justify-content: space-around;
    list-style: none;
    :nth-child(even) {
      background-color: lightgrey;
    }
    p {
      width: 100%;
      text-align: center;
      font-size: 1rem;
      :nth-child(3) {
        color: red;
        padding: 0 0 0 20px;
      }
    }
    :hover {
      background-color: grey;
    }
  }
`;

const Resultater = () => {
  const places = Object.keys(raceData.locations);
  const [distanse, setDistanse] = useState(places[0]);
  const [land, setLand] = useState(false);
  const [antall, setAntall] = useState(10);
  const [runners, setRunners] = useState([]);

  const handleDistanceChange = (event) => {
    setDistanse(event.target.value);
  };
  const handleSetAntall = (event) => {
    setAntall(event.target.value);
  };

  const handleCountryChange = () => {
    if (!land) {
      setLand(true);
    } else {
      setLand(false);
    }
  };

  const randomNum = Math.floor(Math.random() * (200 - 30 + 1) + 30);

  //generer liste over løpere
  const makeList = () => {
    setRunners([]);
    if (land) {
      const runner = raceData.locations[distanse]
        .slice(0, antall)
        .filter((item) => item.person.country === "Norway");
      setRunners(runner);
    } else {
      const runner = raceData.locations[distanse].slice(0, antall);
      setRunners(runner);
    }
  };
  useEffect(() => {
    makeList();
  }, [land, antall, distanse]);

  return (
    <>
      <Filter
        handleDistanceChange={handleDistanceChange}
        handleSetAntall={handleSetAntall}
        handleCountryChange={handleCountryChange}
        land={land}
        antall={antall}
        raceData={raceData}
        distanse={distanse}
        places={places}
      />

      <motion.section>
        <ListDiv>
          {runners.map((runner) => (
            <motion.li
              initial={{
                opacity: 0,
                scale: 0.5,
                x: randomNum,
                y: -randomNum,
              }}
              animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                duration: 1,
              }}
              key={runner.uuid}
            >
              <p>{runner.rank}</p>
              <p>{runner.person.name}</p>
              <p>{runner.timeDifference}</p>
              {distanse === "10km" && runner.totalWorldCupPoints > 0 ? (
                <p>Poeng: {runner.totalWorldCupPoints}</p>
              ) : (
                <p>{runner.person.country}</p>
              )}
            </motion.li>
          ))}
        </ListDiv>
      </motion.section>
    </>
  );
};

export default Resultater;
