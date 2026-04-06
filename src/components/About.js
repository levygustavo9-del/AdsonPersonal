import React from 'react';
import './About.css';

function About() {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-title">Sobre Adson</h2>

                <div className="about-content">
                    <div className="about-text fade-in-up">
                        <h3>Personal Trainer Especializado</h3>
                        <p>
                            Olá! Sou o Adson, personal trainer com anos de experiência e dedicação na transformação corporal
                            e desenvolvimento fitness. Minha missão é ajudar você a alcançar seus objetivos com treinos
                            personalizados, orientação nutricional e suporte constante.
                        </p>

                        <h4>Por que treinar comigo?</h4>
                        <ul className="benefits-list">
                            <li>
                                <i className="fas fa-check-circle"></i>
                                <span>Treinos 100% personalizados para seu objetivo</span>
                            </li>
                            <li>
                                <i className="fas fa-check-circle"></i>
                                <span>Orientação nutricional e acompanhamento</span>
                            </li>
                            <li>
                                <i className="fas fa-check-circle"></i>
                                <span>Motivação e suporte constante</span>
                            </li>
                            <li>
                                <i className="fas fa-check-circle"></i>
                                <span>Resultados comprovados com meus alunos</span>
                            </li>
                            <li>
                                <i className="fas fa-check-circle"></i>
                                <span>Flexibilidade de horários</span>
                            </li>
                            <li>
                                <i className="fas fa-check-circle"></i>
                                <span>Acompanhamento de progresso detalhado</span>
                            </li>
                        </ul>

                        <h4>Minha Experiência</h4>
                        <p>
                            Acumulo mais de 5 anos de experiência em treinamento personalizado, com centenas de alunos
                            satisfeitos e transformações impressionantes. Sou apaixonado por fitness e dedicado a cada
                            detalhe do seu progresso.
                        </p>
                    </div>

                    <div className="about-stats fade-in">
                        <div className="stat-card">
                            <h4>+500</h4>
                            <p>Alunos Treinados</p>
                        </div>
                        <div className="stat-card">
                            <h4>+1000</h4>
                            <p>Transformações Completadas</p>
                        </div>
                        <div className="stat-card">
                            <h4>5+</h4>
                            <p>Anos de Experiência</p>
                        </div>
                        <div className="stat-card">
                            <h4>100%</h4>
                            <p>Satisfação dos Clientes</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
