import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Comments from './components/Comments';
import Modal from './components/Modal';
import Footer from './components/Footer';

function App() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="App">
            <Header />
            <Hero onContactClick={() => setShowModal(true)} />
            <About />
            <Services onContactClick={() => setShowModal(true)} />
            <Comments />
            {showModal && <Modal onClose={() => setShowModal(false)} />}
            <Footer onContactClick={() => setShowModal(true)} />
        </div>
    );
}

export default App;
