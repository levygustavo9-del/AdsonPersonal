import React, { useState, useEffect, useRef } from 'react';
import './Services.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';

function Services({ onContactClick }) {
    const [hoveredReason, setHoveredReason] = useState(null);
    const timelineItemsRef = useRef([]);
    const timelineLineRef = useRef(null);
    const updateTimelineLine = React.useCallback(() => {
        if (!timelineLineRef.current) return;

        const activeItems = timelineItemsRef.current.filter(
            (item) => item && item.dataset.hasAnimated === 'true'
        );

        if (activeItems.length > 0) {
            const lastItem = activeItems[activeItems.length - 1];
            const lastDot = lastItem.querySelector('.timeline-dot');

            if (lastDot) {
                const dotRect = lastDot.getBoundingClientRect();
                const wrapperRect = timelineLineRef.current.parentElement.getBoundingClientRect();

                const distanceFromTop = dotRect.top - wrapperRect.top;
                const height = distanceFromTop + 30;

                timelineLineRef.current.style.height = `${height}px`;
            }
        }
    }, []);
    const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '0px 0px -80px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !entry.target.dataset.hasAnimated) {
                    entry.target.dataset.hasAnimated = 'true';
                    entry.target.classList.add('active');
                    updateTimelineLine();
                }
            });
        }, observerOptions);

        timelineItemsRef.current.forEach((item) => {
            if (item) observer.observe(item);
        });

        const handleScroll = () => {
            updateTimelineLine();
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const services = [
        {
            id: 1,
            icon: 'fas fa-dumbbell',
            title: 'Treino Presencial',
            description: 'Sessões de treinamento personalizadas no estúdio ou sua casa com orientação prática completa.',
            price: 'A partir de R$ 120/sessão'
        },
        {
            id: 3,
            icon: 'fas fa-apple-alt',
            title: 'Orientação Nutricional',
            description: 'Plano alimentar personalizado baseado em seus objetivos e preferências.',
            price: 'Planos a partir de R$ 199/mês'
        },
        {
            id: 4,
            icon: 'fas fa-chart-line',
            title: 'Acompanhamento Completo',
            description: 'Treino + Nutrição + Acompanhamento de progresso com avaliações periódicas.',
            price: 'Investimento sob medida'
        },
        {
            id: 6,
            icon: 'fas fa-graduation-cap',
            title: 'Consultoria Fitness',
            description: 'Orientação estratégica para transformação corporal completa e saúde.',
            price: 'Programa exclusivo'
        }
    ];

    const reasons = [
        {
            id: 1,
            icon: 'fas fa-award',
            title: 'Experiência Comprovada',
            description: 'Mais de 150 transformações bem-sucedidas e taxa de satisfação de 98%'
        },
        {
            id: 2,
            icon: 'fas fa-bullseye',
            title: 'Metodologia Personalizada',
            description: 'Cada aluno recebe um plano único adaptado aos seus objetivos e limitações'
        },
        {
            id: 3,
            icon: 'fas fa-sync-alt',
            title: 'Acompanhamento Contínuo',
            description: 'Suporte semanal com ajustes e progressão garantida nos resultados'
        },
        {
            id: 4,
            icon: 'fas fa-bolt',
            title: 'Resultados em Tempo Real',
            description: 'Transformação visível em 30, 60 ou 90 dias com metodologia comprovada'
        },
        {
            id: 5,
            icon: 'fas fa-heart',
            title: 'Dedicação Total',
            description: 'Não é só treino, é um mentoring para sua saúde e confiança'
        }
    ];

    return (
        <section id="services" className="services">
            <div className="container">
                <h2 className="section-title">Meus Serviços</h2>
                <p className="subtitle">
                    Diversos planos e formatos para se adequar ao seu estilo de vida e objetivos
                </p>

                {isMobile ? (
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={16}
                        slidesPerView={1.15}
                        centeredSlides={true}
                        pagination={{ clickable: true }}
                        slidesOffsetBefore={10}
                        slidesOffsetAfter={10}
                    >
                        {services.map((service) => (
                            <SwiperSlide key={service.id}>
                                <div className="service-card">
                                    <div className="service-icon">
                                        <i className={service.icon}></i>
                                    </div>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                    <div className="service-price">{service.price}</div>
                                    <button className="btn btn-primary" onClick={onContactClick}>
                                        Solicitar Informações
                                    </button>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <div className="services-grid">
                        {services.map((service) => (
                            <div key={service.id} className="service-card fade-in-up">
                                <div className="service-icon">
                                    <i className={service.icon}></i>
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <div className="service-price">{service.price}</div>
                                <button className="btn btn-primary" onClick={onContactClick}>
                                    Solicitar Informações
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                <div className="reasons-cta-section">
                    <div className="reasons-container">
                        <h3>Por que Escolher Adson Personal?</h3>

                        <div className="timeline-wrapper">
                            <div className="timeline-line" ref={timelineLineRef}></div>
                            <div className="timeline">
                                {reasons.map((reason, index) => (
                                    <div
                                        key={reason.id}
                                        ref={(el) => (timelineItemsRef.current[index] = el)}
                                        className="timeline-item"
                                        onMouseEnter={() => setHoveredReason(index)}
                                        onMouseLeave={() => setHoveredReason(null)}
                                    >
                                        <div className={`timeline-dot ${hoveredReason === index ? 'hovered' : ''}`}>
                                            <i className={reason.icon}></i>
                                        </div>
                                        <div className="timeline-content">
                                            <h4>{reason.title}</h4>
                                            <p>{reason.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button className="btn btn-primary btn-lg" onClick={onContactClick}>
                            Quero Minha Transformação
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
