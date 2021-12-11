import { motion } from "framer-motion";
import styled from "styled-components";
import snowFlake from "./img/snowflake.png";
import Snow from "./components/Snow"
import "./styles.scss";
import Resultater from "./components/Resultater";

const StyledSection = styled.section`
  width: 90%;
  margin: 1rem auto -3rem auto;
  text-align: center;
  img {
    width: 8%;
    z-index: 0;
    margin: 0 auto;
    padding: 0;
    opacity: 0.3;
  }
  h1 {
    z-index: 1;
    width: 100%;
    text-align: center;
    padding: 0;
    text-shadow: -25px 10px 10px #ced0d3;
    color: white;
    letter-spacing: -0.07em;
    font-size: 2rem;
    color: white;
  }
  @media screen and (max-width: 700px) {
    margin: 1rem auto -2rem auto;
    h1 {
      font-size: 1.5rem;
      margin: -1rem auto 0 auto;
    }
  }
`;

export default function App() {
  return (
    <>
      <StyledSection>
        <motion.img
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 0.4, y: 0 }}
          alt="snøkrystall"
          src={snowFlake}
        />
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Resultater 10 km for kvinner
        </motion.h1>
      </StyledSection>
      <Snow />
      <Resultater />
    </>
  );
}
