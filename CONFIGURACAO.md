# 📋 CONFIGURAÇÃO RÁPIDA

Estas são as principais configurações que você precisa fazer antes de colocar a página online.

## 🔴 IMPORTANTE - Configure seu número do WhatsApp

### Passo 1: Modal.js
Abra o arquivo: `src/components/Modal.js`

Procure pela linha aproximadamente 95:
```javascript
const whatsappNumber = '5511999999999'; // ← SUBSTITUA AQUI!
```

**Seu número deve estar no formato:**
- Código do país: 55 (Brasil)
- Código da área: XX (ex: 11, 21, 85)
- Número: 9 dígitos (ex: 98765-4321)

**Exemplo correto:**
```javascript
const whatsappNumber = '5585987654321'; // Telefone: (85) 98765-4321
```

### Passo 2: Header.js
Abra o arquivo: `src/components/Header.js`

Procure pela linha aproximadamente 45:
```javascript
<a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
```

Substitua `5511999999999` pelo seu número.

### Passo 3: Footer.js
Abra o arquivo: `src/components/Footer.js`

Substitua:
1. Linha ~70 - Link do WhatsApp: `<a href="https://wa.me/5511999999999"`
2. Linha ~93 - Telefone: `<a href="tel:5511999999999">(11) 99999-9999</a>`
3. Linha ~94 - Email: `<a href="mailto:contato@adson.com">contato@adson.com</a>`
4. Linha ~96 - Localização: `São Paulo, SP - Brasil`

## 🎨 Personalizar Cores

Abra: `src/App.css`

Procure por `:root {` e ajuste as cores:

```css
:root {
  --primary-color: #ff6b35;      /* Laranja - cor principal */
  --secondary-color: #1a1a1a;    /* Preto - cor secundária */
  --accent-color: #ffd60a;       /* Amarelo - destaques */
  --text-color: #333;            /* Cinza escuro - textos */
  --light-bg: #f8f9fa;           /* Cinza claro - fundos */
  --white: #ffffff;              /* Branco */
  --success: #28a745;            /* Verde - sucesso */
}
```

## 📝 Textos Principais

### Alterar Logo e Tagline
Abra: `src/components/Header.js`

```javascript
<div className="logo">
  <h1>ADSON</h1>                    {/* Mude se quiser outro apelido/nome */}
  <p className="tagline">Personal Trainer</p>  {/* Mude para outra profissão */}
</div>
```

### Alterar Hero Section
Abra: `src/components/Hero.js`

```javascript
<h1>Transforme seu Corpo, Transforme sua Vida</h1>
<p className="hero-subtitle">Treinos personalizados com o personal trainer Adson...</p>
```

### Atualizar "Sobre"
Abra: `src/components/About.js`

Ajuste os textos nas seções:
- Descrição principal
- Lista de benefícios
- Experiência e números

### Customizar Serviços
Abra: `src/components/Services.js`

Procure pelo array `services` e edite:
- Títulos
- Descrições
- Preços

## 🔗 Redes Sociais

Abra: `src/components/Footer.js`

Procure por `social-links` e atualize os links:

```javascript
<a href="https://instagram.com/seu-usuario" target="_blank">
<a href="https://facebook.com/seu-pagina" target="_blank">
<a href="https://youtube.com/@seu-canal" target="_blank">
```

## 📸 Trocar a Imagem do Hero

A imagem está em: `src/images/adson.jpeg`

Você pode:
1. Substituir o arquivo mantendo o mesmo nome
2. OU editar `src/components/Hero.js` e alterar o caminho:

```javascript
<img 
  src={require('../../imagens/SUA_FOTO_AQUI.jpg')} 
  alt="Adson - Personal Trainer" 
/>
```

## 📱 Editar Depoimentos Iniciais

Abra: `src/components/Comments.js`

Ajuste o array `useState` com novos depoimentos:

```javascript
const [comments, setComments] = useState([
  {
    id: 1,
    name: 'Nome do Cliente',
    role: 'Aluno há X meses/anos',
    text: 'Seu depoimento aqui...',
    stars: 5,
    image: '👨‍💼'
  },
  // ... adicione mais
]);
```

## 🚀 Pronto para Publicar?

Depois de fazer todas as alterações:

1. **Teste localmente:**
   ```bash
   npm start
   ```

2. **Build produçãão:**
   ```bash
   npm run build
   ```

3. **Deploy em um servidor:**
   - Netlify (Recomendado - Grátis)
   - Vercel (Grátis)
   - GitHub Pages
   - Seu próprio servidor

## 📧 Suporte

Se tiver dúvidas sobre edições:
- Procure pelo comentário no código
- Edite blocos inteiros, não só palavras isoladas
- Salve e execute `npm start` para testar

---

**Dicas finais:**
- Teste tudo no celular também!
- Verifique se o link do WhatsApp funciona
- Peça para alguém enviar um depoimento para testar o formulário
