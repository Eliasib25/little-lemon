import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Hero from './components/Hero';
import Specials from './components/Specials';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <Specials />
        <Testimonials />
        <About />
      </Main>
      <Footer />
    </>
  );
}

export default App;
