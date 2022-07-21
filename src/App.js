import React, {useState, useEffect} from 'react';
import './App.css';
import About from './components/about/About';
import Carousel from './components/carousel/Carousel';
import Cover from './components/cover/Cover';
import Footer from './components/footer/Footer';
import Info from './components/Info/Info';
import NavBar from './NavBar/NavBar';


function App() {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScroll(position);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scroll])
  return (
    <>
      <NavBar scrolling = {scroll}/>
      <Cover/>
      <About/>
      <Carousel/>
      <Info/>
      <Footer/>

    </>
  );
}

export default App;
