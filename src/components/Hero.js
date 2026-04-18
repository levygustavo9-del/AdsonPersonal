import React from 'react';
import './Hero.css';

const Hero = ({ onContactClick }) => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <div className="hero-text">
                    <h1>Transforme seu Corpo, Transforme sua Vida</h1>
                    <p className="hero-subtitle">
                        Treinos personalizados com Adson, seu personal trainer que entende suas metas
                    </p>
                    <div className="hero-buttons">
                        <button className="btn btn-primary" onClick={onContactClick}>
                            Começar Agora
                        </button>
                        <button className="btn btn-secondary" onClick={() => {
                            const aboutSection = document.getElementById('about');
                            if (aboutSection) {
                                aboutSection.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}>
                            <i className="fas fa-arrow-down"></i> Saiba Mais
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
