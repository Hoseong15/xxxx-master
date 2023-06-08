import logo from './logo.svg';
import './App.css';
import Nav from './Game/Nav';
import { Route, Routes } from 'react-router-dom';
import { wrap } from 'framer-motion';
import { AnimatePresence, motion } from 'framer-motion';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Nav/>} />
      </Routes>
    </div>
  );
}

export default App;