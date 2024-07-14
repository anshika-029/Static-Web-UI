// import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import Service from './pages/Service';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import TermsConditions from './pages/TermsConditions';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import About from './pages/About';
import Blog from './pages/Blog';
import Consulting from './pages/Consulting';
import Resources from './pages/Resources'
import Accounting from './pages/Accounting'
import Marketing from './pages/Marketing'
import Carrers from './pages/Carrers';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/service" element={<Service/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/termsconditions' element={<TermsConditions/>}/>
    <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/marketing' element={<Marketing/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/carrers' element={<Carrers/>}/>
    <Route path='/consulting' element={<Consulting/>}/>
    <Route path='/resources' element={<Resources/>}/>
    <Route path='/accounting' element={<Accounting/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
