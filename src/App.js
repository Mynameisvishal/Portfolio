import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Pricing from './components/Pricing';
import Services from './components/Services';
import Welcome from './components/Welcome';
import Work from './components/Work';
import {useState,useEffect} from "react";

function App() {
  const [activePage,setActivePage] = useState('');

  window.addEventListener('scroll',()=>{
    const scrolled = window.scrollY;
    const welcome = document.getElementById('welcome').offsetTop;
    const about = document.getElementById('about').offsetTop;
    const services = document.getElementById('services').offsetTop;
    const work = document.getElementById('work').offsetTop;
    const contact = document.getElementById('contact').offsetTop;
    console.log(about);
    if(scrolled >= welcome){
      setActivePage('welcome');
    }else if(scrolled >= about){
      setActivePage('about')
    }
    else if(scrolled >= services){
      setActivePage('services')
    }
    else if(scrolled >= work){
      setActivePage('work')

    }
    else if(scrolled >= contact){
      setActivePage('contact')
    }else{
      console.log('end of the page');
    }

  });


  // useEffect(() => {
   
    
  //   // if(window.pageYOffset >== welcome){

  //   // }
  //   console.log(window.scrollY);
  // },[window.scrollY]);

  return (
    <div className="App">
      <Header activePage={activePage}/>
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
