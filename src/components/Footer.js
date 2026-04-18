import React from 'react';
import './Footer.css';

function Footer({ onContactClick }) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>ADSON</h3>
                        <p className="tagline-footer">Personal Trainer Profissional</p>
                        <p className="footer-description">
                            Transformando vidas através de treinos personalizados, dedicação e profissionalismo.
                        </p>
                        <div className="social-links">
                            <a href="https://www.instagram.com/adsonwsilva/" target="_blank" rel="noopener noreferrer" title="Instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="https://wa.me/558294004348" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                           
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>Links Rápidos</h4>
                        <ul>
                            <li><a href="#hero">Início</a></li>
                            <li><a href="#about">Sobre</a></li>
                            <li><a href="#services">Serviços</a></li>
                            <li><a href="#comments">Depoimentos</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Serviços</h4>
                        <ul>
                            <li><a href="#services">Treino Presencial</a></li>
                            <li><a href="#services">Orientação Nutricional</a></li>
                            <li><a href="#services">Consultoria Fitness</a></li>
                            <li><a href="#services">Acompanhamento Completo</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Contato</h4>
                        <ul className="contact-list">
                            <li>
                                <i className="fas fa-phone"></i>
                                <span><a href="tel:5511999999999">(82) 9400-4348</a></span>
                            </li>
                            <li>
                                <i className="fas fa-envelope"></i>
                                <span><a href="mailto:contato@adson.com">contato@adson.com</a></span>
                            </li>

                        </ul>
                        <button className="btn btn-primary btn-footer" >
                            <a href="https://wa.me/558294004348" target='_blank'><i className="fab fa-whatsapp"></i> Conversar</a>
                        </button>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-divider"></div>

                    <p className="footer-copy">
                        &copy; {currentYear} Adson - Personal Trainer. Todos os direitos reservados.
                    </p>

                    <div className="footer-dev">
                        <span>Desenvolvido com dedicação por</span>

                        <a
                            href="https://portifoliodevv.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="dev-link"
                        >
                            Lêvy Gustavo
                        </a>

                       
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
