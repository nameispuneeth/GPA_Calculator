import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './Components/Home.js'
import GotoCGPA from './Components/GotoCGPA';
import SGPA from './Components/Sgpa.js';
import CGPA from './Components/Cgpa.js';
import Error from './Components/Error.js';

function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gotocgpa" element={<GotoCGPA />} />
        <Route path="/sgpa" element={<SGPA />} />
        <Route path="/cgpa" element={<CGPA/>}/>
        <Route path="*" element={<Error/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
