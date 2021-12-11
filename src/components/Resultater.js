import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { Filter } from "./Filter";
import {raceData} from "../data/data.js"
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
      :nth-child(3){
        color: red;
        padding: 0 0 0 20px;
      }
    }
  :hover {
    background-color: grey;
    
  }
`;

const Resultater = () => {
  const places = Object.keys(raceData.locations);
  const [distanse, setDistanse] = useState(places[0]);
  const [land, setLand] = useState(false);
  const [antall, setAntall] = useState(10);

  const handleDistanceChange = (event) => {
    setDistanse(event.target.value);
  };
  const handleSetAntall = (event) => {
    setAntall(event.target.value);
  };

  const handleCountryChange = () => {
    if (!land) {
      setLand(true);
      showNorwegians();
    } else {
      setLand(false);
    }
  };
  const showNorwegians = () => {
    const norwegianList = [];
    raceData.locations[distanse]
      .slice(0, antall)
      .map((norwegian) =>
        norwegian.person.country === "Norway"
          ? norwegianList.push(norwegian)
          : null
      );
    return norwegianList;
  };
  const randomNum = Math.floor(Math.random() * (200 - 30 + 1) + 30);
  const norwegianList = showNorwegians();

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
        {antall === "3" && !land ? (
          //bare topp 3, ikke sortert på land
          <ListDiv>
            {raceData?.locations[distanse].slice(0, antall).map((runners) => (
              <motion.li
                initial={{ opacity: 0, scale: 0.5, y: -randomNum }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, duration: 1 }}
                key={runners.uuid}
              >
                <p>{runners.person.name}</p>
                <p>{runners.timeDifference}</p>
                <p>{runners.person.country}</p>
                {distanse === "10km" && runners.totalWorldCupPoints < 0 ? (
                  <p>Poeng: {runners.totalWorldCupPoints}</p>
                ) : <p>{runners.person.country}</p>}
              </motion.li>
            ))}
          </ListDiv>
        ) : land ? (
          <ListDiv>
            {norwegianList.map((runners) => (
              <motion.li
                initial={{ opacity: 0, scale: 0.5, y: -randomNum }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, duration: 1 }}
                key={runners.uuid}
              >
                <p>{runners.rank}</p>
                <p>{runners.person.name}</p>
                <p>{runners.timeDifference}</p>
                {distanse === "10km" && runners.totalWorldCupPoints > 0 ? (
                  <p>Poeng: {runners.totalWorldCupPoints}</p>
                ) : <p>{runners.person.country}</p>}
              </motion.li>
            ))}
          </ListDiv>
        ) : (
          <ListDiv>
            {raceData?.locations[distanse].length > 0
              ? raceData?.locations[distanse]
                  .slice(0, antall)
                  .map((runners) => (
                    <motion.li
                      initial={{ opacity: 0, scale: 0.5, y: -randomNum }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        duration: 1
                      }}
                      key={runners.uuid}
                    >
                      <p>{runners.rank} </p>
                      <p>{runners.person.name}</p>
                      <p>{runners.timeDifference}</p>

                      {distanse === "10km" &&
                      runners.totalWorldCupPoints > 0 ? (
                        <p>Poeng: {runners.totalWorldCupPoints}</p>
                      ) : (
                        <p>{runners.person.country}</p>
                      )}
                    </motion.li>
                  ))
              : null}
          </ListDiv>
        )}
      </motion.section>
    </>
  );
};

export default Resultater;