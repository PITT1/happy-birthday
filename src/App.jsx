import { useState } from 'react';
import HappyBirthday from './components/HappyBirthday';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  const [clicked, setClicked] = useState(false);


  return (
    <motion.main initial={{opacity: 0}} animate={{opacity: 1}}>
    {!clicked && <button  onClick={() => {setClicked(true)}} className='button1'>cliquez sur moi :3</button>}
    { clicked && <HappyBirthday/>}
    </motion.main>
  )
}

export default App
