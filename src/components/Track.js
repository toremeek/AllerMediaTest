import track from "../img/track2.png";
import smallTrack from "../img/trackSmall.png";
import tree from "../img/tree.png";
import { motion } from "framer-motion";
import useWindowDimensions from "../hooks/useWindowDimensions";
export const Track = ({ places, handleDistanceChange, distanse }) => {
  const { width } = useWindowDimensions();

  const getImage = () => {
    if (width > 700) {
      return track;
    } else {
      return smallTrack;
    }
  };
  const image = getImage();

  return (
    <>
      <section className="trackSection">
        <img className="track" alt="bilde med distanser" src={image} />

        {places?.length > 0
          ? places.map((place, i) => (
              <motion.button
                className={distanse === place ? "aktiv" : null}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9, rotate: 45 }}
                initial={{ opacity: 0, y: -200, rotate: 180 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  duration: 2
                }}
                key={i}
                type="button"
                value={place}
                onClick={handleDistanceChange}
              >
                {place === "10km" ? "Mål" : place}
              </motion.button>
            ))
          : null}
        <motion.img
          className="treeOne"
          alt="snødekt tre"
          src={tree}
          initial={{ scale: 0, y: 300 }}
          animate={{ scale: 1, y: 0 }}
          transition={{
            type: "spring",
            dealy: 1,
            stiffness: 100,
            duration: 3
          }}
        />
        <motion.img
          className="treeTwo"
          alt="snødekt tre"
          src={tree}
          initial={{ scale: 0, y: 300 }}
          animate={{ scale: 1, y: 0 }}
          transition={{
            type: "spring",
            delay: 2.5,
            stiffness: 200,
            duration: 2.9
          }}
        />
        <motion.img
          className="treeThree"
          alt="snødekt tre"
          src={tree}
          initial={{ scale: 0, x: -500 }}
          animate={{ scale: 1, x: 0 }}
          transition={{ type: "spring", delay: 2, stiffness: 100, duration: 2 }}
        />
      </section>
    </>
  );
};
