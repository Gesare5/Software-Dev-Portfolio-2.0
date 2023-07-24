import React from 'react';
// import { createTheme, MuiThemeProvider } from '@material-ui/core';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import './App.css';
// import About from './components/About/About';
// import Background from './components/Background/Background';
// import Canvas from './components/Hero/Canvas';
// import Nav from './components/Nav/Nav';
// import Services from './components/Services/Services';
// import Work from './components/Work/Work';
// import Skills from './components/Skills/Skills';
// import Contact from './components/Contact/Contact';
import color from './colors/colors';
// import { ReactP5Wrapper } from 'react-p5-wrapper';
// import sketch from './components/Hero/sketch';
import SketchComponent from './components/Hero/SketchComponent';
// import Footer from './components/Nav/Footer';
// import Hero from './components/Hero/Hero';


const theme = createTheme(color());

function App() {
  return (
    // <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <Canvas /> */}
        {/* <Nav /> */}
        {/* <Hero id='hero' />
        <About id='about' />
        <Services id='services' />
        <Background id='background' />
        <Skills id='skills' />
        <Work id='work' />
        <Contact id='contact' />
        <Footer /> */}
        {/* <ReactP5Wrapper sketch={sketch} /> */}
        <SketchComponent />
      </div>
    </ThemeProvider>
    // </MuiThemeProvider>
  );
}

export default App;


// const theme = createTheme({
//   typography: {
//     "fontFamily": `'Bona Nova', serif`,
//     "fontSize": 16,
//     "fontWeightRegular": 400,
//     "fontWeightBold": 700,
//   },
//   palette: {
//     text: {
//       primary: 'rgba(7, 0, 59, 1)',
//     },
//   },
// });