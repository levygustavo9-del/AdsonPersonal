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
                            Olá! Sou Adson, personal trainer com mais de 6 anos de experiência prática no universo do treinamento físico.
                        </p>
                        <p>
                            Mesmo antes de atuar profissionalmente, sempre estive envolvido com o estilo de vida fitness, desenvolvendo disciplina, constância e conhecimento na prática. Ao longo dos anos, essa paixão se transformou em trabalho, permitindo que eu ajudasse diretamente mais de 150 pessoas a evoluírem fisicamente, seja através de treinos personalizados, orientações ou acompanhamento.
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
                            Em formação em Educação Física (Bacharelado) e com experiência prática no treinamento de alunos iniciantes, intermediários e avançados, desenvolvi uma abordagem focada em resultados consistentes, respeitando a individualidade de cada pessoa. Meu objetivo é oferecer treinos direcionados, com acompanhamento real e foco na evolução segura e eficiente.
                        </p>
                    </div>

                    <div className="about-stats fade-in">
                        <div className="stat-card">
                            <h4>+150</h4>
                            <p>Pessoas impactadas</p>
                        </div>
                        <div className="stat-card">
                            <h4>6+ anos</h4>
                            <p>Vivência no treino</p>
                        </div>
                        <div className="stat-card">
                            <h4>100%</h4>
                            <p>Foco em resultados reais</p>
                        </div>
                        <div className="stat-card">
                            <h4>Treinos personalizados</h4>
                            <p>Para cada objetivo</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
