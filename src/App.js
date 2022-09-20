import { motion } from 'framer-motion';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='App'>
      <motion.div
      layout
      transition={{layout: {duration: 1 , type: 'spring'}}}
      className='card'
      style={{borderRadius : "1rem", boxShadow: '0px 10px 30px rgba(0,0,0,0.5'}}
      onClick={()=> setIsOpen(!isOpen)}
      >
        <motion.h2 layout="position">Curso da Trybe 🚀</motion.h2>
        {isOpen && ( 
        <motion.div
        className='expand'
        transition={{layout: {duration: 2 , type: 'spring'}}}
        initial={{opacity :0}}
        animate={{opacity: 1}}
        >
          <p>A porta de entrada‍ para sua carreira em tecnologia</p>
          <p>
            Uma formação completa em Desenvolvimento Web que te prepara e
            conecta com o mercado de trabalho em um período de 12 meses.
          </p>
        </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default App;
