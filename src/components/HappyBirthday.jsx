import "../App.css";
import chems from "../../public/chems1.jpg";
import { motion } from "framer-motion";

const HappyBirthday = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="birthday"
    >
      <motion.h1
        transition={{ delay: 0.2 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Feliz cumpleaños Doly!! :D
      </motion.h1>
      <motion.img
        transition={{ delay: 0.6, duration: 1 }}
        initial={{ scale: 0, rotate: 360 }}
        animate={{ scale: 1, rotate: 0 }}
        src={chems}
        alt="el perrito chems de cumpleaños :D"
      />
      <motion.h2
        transition={{ delay: 1.5 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        No cuentes tus años solamente, haz que tus años cuenten!! :D
        gracias por todo, perdon por tan poco 
      </motion.h2>
    </motion.div>
  );
};

export default HappyBirthday;
