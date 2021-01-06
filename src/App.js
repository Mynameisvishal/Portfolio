import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Pricing from './components/Pricing';
import Services from './components/Services';
import Welcome from './components/Welcome';
import Work from './components/Work';

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <About />
      <Services />
      <Work />
      <Pricing />
      <Contact />
    </div>
  );
}

export default App;
