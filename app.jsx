import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <>
    <Navbar />
    <div className="container">
     <Hero />
     <Skills />
    </div>
    </>
  );
}

export default App;
