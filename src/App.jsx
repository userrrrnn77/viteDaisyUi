import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='bg-base-200 pt-16'>
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="projek">
        <Projects />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default App;
