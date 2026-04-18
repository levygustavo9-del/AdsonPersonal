import React, { useEffect, useState } from 'react';
import './Comments.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';


function Comments() {

    const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);

    const comments = [
        {
            id: 1,
            name: 'João Silva',
            role: 'Aluno há 1 ano',
            text: 'Transformação incrível! Perdi 15kg e ganhei muita massa muscular. Adson é dedicado, atencioso e realmente se importa com seus alunos. Recomendo muito!',
            stars: 5,
            image: '👨‍💼'
        },
        {
            id: 2,
            name: 'Marina Costa',
            role: 'Aluna há 8 meses',
            text: 'Melhor decisão que tomei! Além dos resultados físicos, ganhei saúde e confiança. As aulas online são flexíveis e o acompanhamento é excelente.',
            stars: 5,
            image: '👩‍💼'
        },
        {
            id: 3,
            name: 'Carlos Mendes',
            role: 'Aluno há 6 meses',
            text: 'O Adson sabe exatamente como me motivar. Os treinos são desafiadores mas realizáveis. Já vejo diferenças grandes no corpo e no meu bem-estar.',
            stars: 5,
            image: '👨‍🏫'
        },
        {
            id: 4,
            name: 'Ana Beatriz',
            role: 'Aluna há 10 meses',
            text: 'Profissional extremamente competente e atencioso! Ele personaliza tudo de acordo com minhas necessidades. Estou muito feliz com minha evolução.',
            stars: 5,
            image: '👩‍🎓'
        },
        {
            id: 5,
            name: 'Pedro Oliveira',
            role: 'Aluno há 4 meses',
            text: 'Comecei do zero e o Adson foi super paciente. Aprendi sobre a importância da nutrição além do treino. Estou conseguindo meus objetivos!',
            stars: 5,
            image: '👨‍🔧'
        },
        {
            id: 6,
            name: 'Juliana Fernandes',
            role: 'Aluna há 1 ano e 2 meses',
            text: 'Não tenho palavras! Meu corpo mudou completamente, mas mais importante foi a mudança na minha autoestima. Adson é um ótimo coach!',
            stars: 5,
            image: '👩‍🍳'
        }
    ];

    const handleWhatsAppClick = () => {
        const message = 'Olá! Tenho interesse em contratar seus serviços. Gostaria de saber mais sobre os planos disponíveis.';
        const whatsappLink = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, '_blank');
    };



    const renderStars = (count) => {
        return [...Array(5)].map((_, i) => (
            <i key={i} className={`fas fa-star ${i < count ? 'filled' : 'empty'}`}></i>
        ));
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section id="comments" className="comments">
            <div className="container">
                <h2 className="section-title">Depoimentos dos Alunos</h2>
                <p className="subtitle">
                    Veja o que meus alunos dizem sobre sua experiência comigo
                </p>

                {isMobile ? (
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={16}
                        slidesPerView={1.2}
                        centeredSlides={true}
                        loop={true}

                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false
                        }}
                        speed={4500}
                        slidesOffsetBefore={10}
                        slidesOffsetAfter={10}
                    >
                        {comments.map((comment) => (
                            <SwiperSlide key={comment.id}>
                                <div className="comment-card">
                                    <div className="comment-header">
                                        <div className="comment-avatar">{comment.image}</div>
                                        <div className="comment-info">
                                            <h4>{comment.name}</h4>
                                            <p>{comment.role}</p>
                                        </div>
                                    </div>

                                    <div className="comment-stars">
                                        {renderStars(comment.stars)}
                                    </div>

                                    <p className="comment-text">"{comment.text}"</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <div className="comments-grid">
                        {comments.map((comment) => (
                            <div key={comment.id} className="comment-card fade-in-up">
                                <div className="comment-header">
                                    <div className="comment-avatar">{comment.image}</div>
                                    <div className="comment-info">
                                        <h4>{comment.name}</h4>
                                        <p>{comment.role}</p>
                                    </div>
                                </div>

                                <div className="comment-stars">
                                    {renderStars(comment.stars)}
                                </div>

                                <p className="comment-text">"{comment.text}"</p>
                            </div>
                        ))}
                    </div>
                )}

                <div className="cta-section">
                    <div className="cta-content">
                        <h3>Pronto para Transformar seu Corpo e sua Vida?</h3>
                        <p className="cta-subtitle">Não deixe para depois! Comece sua jornada de transformação hoje mesmo.</p>

                        <div className="cta-highlights">
                            <div className="highlight">
                                <span className="highlight-icon">✓</span>
                                <p>Plano personalizado para seu objetivo</p>
                            </div>
                            <div className="highlight">
                                <span className="highlight-icon">✓</span>
                                <p>Acompanhamento contínuo e suporte dedicado</p>
                            </div>
                            <div className="highlight">
                                <span className="highlight-icon">✓</span>
                                <p>Resultados comprovados em 30, 60 ou 90 dias</p>
                            </div>
                        </div>

                        <div className="cta-buttons">
                            <button onClick={handleWhatsAppClick} className="btn btn-primary btn-large">
                                Dê o primeiro passo!
                            </button>
                        </div>

                        <p className="cta-footer">Vagas limitadas para garantir atendimento personalizado!</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Comments;
