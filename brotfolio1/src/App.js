import logo from './logo.svg';
import './App.css';
import About from './pages/about';
import Contact from './pages/contact';

import Home from './pages/home';
import Protfolio from './pages/Protfolio';
import Services from './pages/services';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
      <Routes>
      <Route path='/' element={< Home />}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/Protfolio' element={<Protfolio/>}/>
      <Route path='/Services' element={<Services/>}/>
      </Routes>
      </BrowserRouter> 
      <Footer />
      </div>
  );
}

export default App;
