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
import DigitalMarketingManager from './pages/DigitalMarketingManager';
import SocialMediaManager from './pages/SocialMediaManager';
import EmailMarketingManager from './pages/EmailMarketingManager';
import Seo from './pages/Seo';
import ContentMaker from './pages/ContentMaker';
import Crm from './pages/Crm';
import DigitalAnalytics from './pages/DigitalAnalytics';
import LogoDesigner from './pages/LogoDesigner';


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
    <Route path='/digitalmarketingmanager' element={<DigitalMarketingManager/>}/>
    <Route path='/socialmediamanager' element={<SocialMediaManager/>}/>
    <Route path='/emailmarketingmanager' element={<EmailMarketingManager/>}/>
    <Route path='/seo' element={<Seo/>}/>
    <Route path='/contentmaker' element={<ContentMaker/>}/>
    <Route path='/crm' element={<Crm/>}/>
    <Route path='/digitalanalytics' element={<DigitalAnalytics/>}/>
    <Route path='/logodesigner' element={<LogoDesigner/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
