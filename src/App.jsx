import { useState } from "react";
import HappyBirthday from "./components/HappyBirthday";
import { motion } from "framer-motion";
import conffeti from "canvas-confetti";
import "./App.css";

function App() {
  const [clicked, setClicked] = useState(false);

  const hadleClick = () => {
    setClicked(true);
    conffeti();
  };

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {!clicked && (
        <button onClick={hadleClick} className="button1">
          cliquez sur moi :3
        </button>
      )}
      {clicked && <HappyBirthday />}
    </motion.main>
  );
}

export default App;
