import './App.css';
import About from './components/About';
import Header from './components/Header';
import Services from './components/Services';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <About />
      <Services />
    </div>
  );
}

export default App;
