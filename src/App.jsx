import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Section from "./components/Section";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <Main />
      <Section />
      <Navbar />
      <Footer/>
    </div>
  );
}
