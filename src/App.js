import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}