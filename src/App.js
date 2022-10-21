import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Footer />
    </div>

  );
}

export default App;
