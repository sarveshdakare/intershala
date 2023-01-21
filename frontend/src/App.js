
import './App.css';
import Nav from './components/Nav';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Info from './components/Info';
import Contact from './components/Contact';

function App() {
  return (
    <div >
  <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<h1>hiiii</h1>}/>
      <Route path='/info' element={<Info/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
