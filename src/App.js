import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Appointments from './Component/Appointments';
import Demo from './Component/Demo';
import About from './Component/About';
import Contact from './Component/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Navigate to={'/home'} />}></Route>

          <Route path={'/'} element={<Home />}>
            <Route path={'home'} element={<Demo />}></Route>
            <Route path={'about'} element={<About />}></Route>
            <Route path={'contact'} element={<Contact />}></Route>
            <Route path={'appoiment'} element={<Appointments />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
