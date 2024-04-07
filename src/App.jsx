import React from 'react';
import './App.css'
import NavBar from './components/navBar';
import Hero from './components/hero';
import AiTrends from './components/AiTrends';
import Blogs from './components/blogs';
import Chatbot from './components/chatBot'
import Consult from './components/consult'
import Footer from './components/footer'
function App() {
  return (
    <div>
    <NavBar/>
    
    <Hero/>
    <AiTrends/>
    <Blogs/>
    
    <Consult/>
    <Footer/>
    <Chatbot/>
    </div>
  );

}

export default App;
