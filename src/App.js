import logo from './logo.svg';
import './App.css';
import Main from './Game/Main.jsx'
import Nav from './Game/Nav'
import { Route, Routes,BrowserRouter } from 'react-router-dom';
import { wrap } from 'framer-motion';
import { AnimatePresence, motion } from 'framer-motion';



function App() {
  return (
    <div className="App">
      {/* <Nav/> */}
      <Routes>
        <Route path='/' element={<Main/>} />
      </Routes>
    </div>
  );
}

export default App;