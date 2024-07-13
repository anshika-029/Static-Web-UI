import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import Service from './pages/Service';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import TermsConditions from './pages/TermsConditions';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/service" element={<Service/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/termsConditions' element={<TermsConditions/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
