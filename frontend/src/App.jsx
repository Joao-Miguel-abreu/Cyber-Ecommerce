import React from "react";
import Navbar from "./components/NavBar/Navbar";
import Hero from "./components/NavBar/Hero";
import Analytics from "./components/NavBar/Analytics";
import Newsletter from "./components/NavBar/Newsletter";
import Cards from "./components/NavBar/Cards";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Analytics></Analytics>
      <Newsletter></Newsletter>
      <Cards></Cards>
      <Footer></Footer>
    </div>
  );
};

export default App;
