import React, { useState } from 'react';
import './Header.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false);
        }
    };

    return (
        <header className="header">
            <div className="container header-content">
                <div className="logo">
                    <h1>ADSON</h1>
                    <p className="tagline">Personal Trainer</p>
                </div>

                <button
                    className={`menu-toggle ${menuOpen ? 'active' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`nav ${menuOpen ? 'active' : ''}`}>
                    <button onClick={() => scrollToSection('hero')}>Início</button>
                    <button onClick={() => scrollToSection('about')}>Sobre</button>
                    <button onClick={() => scrollToSection('services')}>Serviços</button>
                    <button onClick={() => scrollToSection('comments')}>Depoimentos</button>
                    <a href="https://wa.me/558294004348" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
                        <i className="fab fa-whatsapp"></i> WhatsApp
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
