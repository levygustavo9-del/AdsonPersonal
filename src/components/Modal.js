import React, { useState } from 'react';
import './Modal.css';

function Modal({ onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        age: '',
        objective: '',
        experience: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const objectives = [
        'Ganhar Massa Muscular',
        'Perder Peso',
        'Definição/Emagrecimento',
        'Condicionamento Físico',
        'Reabilitação/Lesão',
        'Preparação para Esporte',
        'Saúde e Bem-estar Geral',
        'Outro'
    ];

    const experienceLevel = [
        'Iniciante (Sem experiência)',
        'Básico (1-2 anos)',
        'Intermediário (2-5 anos)',
        'Avançado (5+ anos)'
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validação
        if (!formData.name || !formData.phone || !formData.email || !formData.objective) {
            alert('Por favor, preencha todos os campos obrigatórios!');
            return;
        }

        setLoading(true);

        // Construir mensagem para WhatsApp
        const message = `*Novo Interessado em Serviços de Personal Training*

*Dados Pessoais:*
Nome: ${formData.name}
Telefone: ${formData.phone}
Email: ${formData.email}
Idade: ${formData.age || 'Não informado'}

*Informações sobre Treinamento:*
Objetivo: ${formData.objective}
Experiência: ${formData.experience || 'Não informado'}

*Mensagem:*
${formData.message || 'Sem mensagem adicional'}

---
Contato recebido automaticamente pelo site pessoal`;

        // Número do WhatsApp (substitua pelo número real)
        const whatsappNumber = '558294004348'; // Formato: código país + código área + número (sem mascara)

        // Código para enviar via WhatsApp Web
        const encodedMessage = encodeURIComponent(message);
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        // Simular delay e exibir sucesso
        setTimeout(() => {
            setSubmitted(true);
            setLoading(false);

            // Abrir o WhatsApp após alguns segundos
            setTimeout(() => {
                window.open(whatsappLink, '_blank');
                // Fechar o modal após enviar
                setTimeout(onClose, 1500);
            }, 1000);
        }, 1500);
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    <i className="fas fa-times"></i>
                </button>

                {!submitted ? (
                    <>
                        <div className="modal-header">
                            <h2>Vamos Conversar!</h2>
                            <p>Preencha os dados abaixo que vou entrar em contato com você no WhatsApp</p>
                        </div>

                        <form onSubmit={handleSubmit} className="modal-form">
                            <div className="form-row">
                                <div className="form-group full">
                                    <label>Nome Completo *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Seu nome"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Telefone/WhatsApp *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="(11) 99999-9999"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="seu@email.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Idade</label>
                                    <input
                                        type="number"
                                        name="age"
                                        value={formData.age}
                                        onChange={handleChange}
                                        placeholder="Sua idade"
                                        min="15"
                                        max="100"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Experiência com Academia *</label>
                                    <select
                                        name="experience"
                                        value={formData.experience}
                                        onChange={handleChange}
                                    >
                                        <option value="">Selecione...</option>
                                        {experienceLevel.map((level, idx) => (
                                            <option key={idx} value={level}>{level}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group full">
                                    <label>Qual é seu objetivo principal? *</label>
                                    <select
                                        name="objective"
                                        value={formData.objective}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Selecione seu objetivo...</option>
                                        {objectives.map((obj, idx) => (
                                            <option key={idx} value={obj}>{obj}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group full">
                                    <label>Deixe uma mensagem (opcional)</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Conte mais sobre você, suas dificuldades, ou o que você espera dos treinos..."
                                        rows="4"
                                    ></textarea>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary btn-submit"
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <i className="fas fa-spinner fa-spin"></i> Processando...
                                    </>
                                ) : (
                                    <>
                                        <i className="fab fa-whatsapp"></i> Enviar para WhatsApp
                                    </>
                                )}
                            </button>

                            <p className="modal-note">
                                <i className="fas fa-lock"></i> Seus dados são seguros e serão usados apenas para contato
                            </p>
                        </form>
                    </>
                ) : (
                    <div className="success-message">
                        <div className="success-icon">
                            <i className="fas fa-check-circle"></i>
                        </div>
                        <h2>Sucesso!</h2>
                        <p>Seus dados foram enviados com sucesso!</p>
                        <p className="success-detail">
                            A janela do WhatsApp vai abrir agora com sua mensagem. Se não abrir automaticamente,
                            clique <a href={`https://wa.me/5511999999999`} target="_blank" rel="noopener noreferrer">aqui</a>.
                        </p>
                        <p className="success-footer">Obrigado pelo interesse! Vou responder assim que possível.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Modal;
