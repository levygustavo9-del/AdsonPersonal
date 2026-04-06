# 📱 Página de Personal Trainer - Adson

Uma página React moderna e completa para o personal trainer Adson, com integração WhatsApp, seção de comentários e modal de contato.

## ✨ Recursos

✅ **Design Responsivo** - Funciona perfeitamente em desktop, tablet e mobile
✅ **Modal de Contato** - Formulário bonito que envia dados automaticamente para WhatsApp
✅ **Seção de Depoimentos** - Espaço para clientes deixarem seu feedback
✅ **Sobre o Trainer** - Apresentação profissional com estatísticas
✅ **Listagem de Serviços** - Apresentação clara de todas as modalidades oferecidas
✅ **Integração WhatsApp** - Botões e links que levam direto ao WhatsApp
✅ **Navegação Suave** - Menu sticky com scroll suave
✅ **Animações Elegantes** - Efeitos visuais sofisticados

## 📁 Estrutura do Projeto

```
adson-personal-trainer/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Header.css
│   │   ├── Hero.js
│   │   ├── Hero.css
│   │   ├── About.js
│   │   ├── About.css
│   │   ├── Services.js
│   │   ├── Services.css
│   │   ├── Comments.js
│   │   ├── Comments.css
│   │   ├── Modal.js
│   │   ├── Modal.css
│   │   ├── Footer.js
│   │   └── Footer.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── imagens/
│       └── WhatsApp Image 2026-03-31 at 13.46.35.jpeg
├── package.json
└── README.md
```

## 🚀 Como Usar

### Instalação

1. **Instale Node.js** (se ainda não tem)
   - Download em: https://nodejs.org/

2. **Navegue até o diretório do projeto**
   ```bash
   cd "c:\Users\levyg\OneDrive\Área de Trabalho\Adson"
   ```

3. **Instale as dependências**
   ```bash
   npm install
   ```

### Executar em Desenvolvimento

```bash
npm start
```

A página abrirá automaticamente em `http://localhost:3000`

### Build para Produção

```bash
npm run build
```

Isso criará uma pasta `build/` otimizada para deploy.

## ⚙️ Configurações Importantes

### Número do WhatsApp

Para conectar o formulário modal ao seu WhatsApp, edite o arquivo `src/components/Modal.js` e procure pela linha:

```javascript
const whatsappNumber = '5511999999999'; // Substitua aqui!
```

**Formato correto:** Código do país (55) + Código da área (11) + Número (9 dígitos)
**Exemplo:** Para (11) 99999-9999 → `5511999999999`

### Informações de Contato (Footer)

No arquivo `src/components/Footer.js`, atualize:
- Telefone: `(11) 99999-9999`
- Email: `contato@adson.com`
- Localização: `São Paulo, SP - Brasil`

### Links de Redes Sociais

No arquivo `src/components/Header.js` e `src/components/Footer.js`, atualize os links:
- Instagram
- Facebook
- YouTube

## 🎨 Cores Utilizadas

- **Primária (Laranja):** `#ff6b35`
- **Secundária (Preto):** `#1a1a1a`
- **Destaque (Amarelo):** `#ffd60a`
- **Sucesso (Verde):** `#28a745`

## 📱 Seções da Página

### 1. Header
Navegação sticky com logo e menu.

### 2. Hero Section
Imagem do Adson + CTA principal com botões de ação.

### 3. Sobre
Descrição do profissional, benefícios e estatísticas.

### 4. Serviços
Grid com 6 serviços oferecidos (presencial, online, nutrição, etc.).

### 5. Depoimentos
Card com comentários de alunos + formulário para novos depoimentos.

### 6. Modal de Contato
Formulário que coleta:
- Nome
- Telefone/WhatsApp
- Email
- Idade
- Experiência com academia
- Objetivo de treino
- Mensagem adicional

Os dados são automaticamente formatados e enviados para o WhatsApp.

### 7. Footer
Informações de contato, links rápidos e redes sociais.

## 🔗 Modal de Contato em Ação

1. Cliente clica no botão "Começar Agora" ou "Fale Comigo"
2. Modal se abre com formulário
3. Cliente preenche os dados
4. Ao clicar em "Enviar para WhatsApp":
   - Dados são formatados em uma mensagem bem estruturada
   - WhatsApp abre automaticamente com a mensagem
   - Cliente envia ao Adson

**Mensagem de exemplo:**
```
*Novo Interessado em Serviços de Personal Training*

*Dados Pessoais:*
Nome: João Silva
Telefone: (11) 98765-4321
Email: joao@email.com
Idade: 28

*Informações sobre Treinamento:*
Objetivo: Ganhar Massa Muscular
Experiência: Intermediário

*Mensagem:*
Olá Adson! Gostaria de começar a treinar...
```

## 🎯 Funcionalidades Personalizáveis

- Edite os depoimentos iniciais em `Comments.js`
- Altere os serviços em `Services.js`
- Customize cores no `App.css` (variáveis CSS)
- Adicione mais informações na seção "Sobre"

## 📧 Dúvidas ou Sugestões?

Para qualquer ajuste ou customização, basta editar os arquivos React e fazer reload.

---

**Desenvolvido com ❤️ para transformar vidas através do fitness!**
