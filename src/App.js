import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Pricing from './components/Pricing';
import Services from './components/Services';
import Welcome from './components/Welcome';
import Work from './components/Work';
import Aos from 'aos';
import {useState,useEffect} from "react";

function App() {
  const [activePage,setActivePage] = useState('welcome');
  const [click, setClick] = useState(false);

  useEffect(()=>{
    Aos.init({
      duration:1700,
      offset: 0,
      disable: function() {
        var maxWidth = 900;
        return window.innerWidth < maxWidth;
      }
    })
  },[])

  window.addEventListener('scroll',()=>{
    const scrolled = window.scrollY;
    const welcome = document.getElementById('welcome').offsetHeight -20;
    const about = document.getElementById('about').offsetHeight;
    const services = document.getElementById('services').offsetHeight;
    const work = document.getElementById('work').offsetHeight;
    const pricing = document.getElementById('pricing').offsetHeight;
    const contact = document.getElementById('contact').offsetHeight;
    const two = welcome + about;
    const three = two +services;
    const four = three + work + pricing;
    const five = four + contact;
    // Aos.refresh();
    if(scrolled <= welcome){
      setActivePage('welcome');
    }else if(scrolled <= two){
      setActivePage('about');
    }
    else if(scrolled <= three){
      setActivePage('services');
    }
    else if(scrolled <= four){
      setActivePage('work');

    }
    else if(scrolled <= five){
      setActivePage('contact');
    }else{
    }

  });

  window.removeEventListener('scroll',()=>{});

  // useEffect(() => {
   
    
  //   // if(window.pageYOffset >== welcome){

  //   // }
  //   console.log(window.scrollY);
  // },[window.scrollY]);

  return (
    <div className="App">
      <Header activePage={activePage} click={click} setClick={setClick}/>
      <Welcome />
      <About />
      <Services />
      <Work />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
