# ⚡ GUIA RÁPIDO - Primeiros Passos

## 1️⃣ PRÉ-REQUISITO: Instalar Node.js

Se você ainda não tem Node.js instalado:

1. Vá para: https://nodejs.org/
2. Baixe a versão **LTS** (Long Term Support)
3. Execute o instalador e complete a instalação
4. Reinicie seu computador

**Verificar instalação:**
Abra PowerShell ou Prompt de Comando e digite:
```bash
node --version
npm --version
```

Você verá algo como: `v18.12.1` e `npm 8.19.2`

---

## 2️⃣ INSTALAR DEPENDÊNCIAS

1. Abra PowerShell
2. Navegue até a pasta do projeto:
   ```bash
   cd "c:\Users\levyg\OneDrive\Área de Trabalho\Adson"
   ```

3. Digite para instalar:
   ```bash
   npm install
   ```

   Isso vai criar uma pasta `node_modules/` com todas as bibliotecas necessárias.
   ⏳ Pode levar 2-5 minutos na primeira vez.

---

## 3️⃣ EXECUTAR EM MODO DESENVOLVIMENTO

```bash
npm start
```

✅ A página abrirá automaticamente em `http://localhost:3000`

Se não abrir automaticamente, copie e cole na barra de endereço do seu navegador.

**Para parar o servidor:** Pressione `Ctrl + C` no PowerShell

---

## 4️⃣ FAZER ALTERAÇÕES

1. Abra qualquer arquivo `.js` ou `.css` em um editor (VS Code, Notepad++)
2. Faça suas alterações
3. **Salve o arquivo** (Ctrl + S)
4. A página vai recarregar automaticamente no navegador!

---

## 5️⃣ CRIAR VERSÃO FINAL PARA PUBLICAR

Quando tudo estiver pronto:

```bash
npm run build
```

Isso cria uma pasta `build/` com o código otimizado para publicação.

---

## 🆘 PROBLEMAS COMUNS

### "npm: O termo não foi reconhecido"
- **Solução:** Reinstale Node.js e reinicie o computador

### "Port 3000 is already in use"
- **Solução:** Execute: `npm start -- --port 3001`

### Alterações não aparecem na página
- **Solução:** 
  1. Salve o arquivo (Ctrl + S)
  2. Pressione F5 para atualizar o navegador
  3. Se não funcionar, feche com Ctrl + C e execute `npm start` novamente

### Pasta node_modules muito grande
- **Solução:** Normal! É esperado ter ~400MB
- Você pode deletar localmente e fazer `npm install` novamente se precisar

---

## 📂 ESTRUTURA PRONTA

Seu projeto está estruturado assim:

```
Adson/
├── node_modules/        (criado após npm install)
├── public/
│   └── index.html       (arquivo principal HTML)
├── src/
│   ├── components/      (todos os componentes React)
│   ├── App.js           (arquivo principal)
│   ├── App.css          (estilos principais)
│   └── index.js         (entrada da aplicação)
├── imagens/             (suas imagens aqui)
├── package.json         (configuração do projeto)
└── README.md            (documentação)
```

---

## ✅ PRÓXIMOS PASSOS

1. **Configure o WhatsApp:** Leia `CONFIGURACAO.md`
2. **Personalize textos e cores:** Edite os componentes
3. **Teste tudo:** `npm start`
4. **Publique:** `npm run build` + hospedagem

---

## 🌐 HOSPEDAGEM RECOMENDADA (Grátis)

### Opção 1: NETLIFY (Mais fácil)
1. Vá para: https://www.netlify.com
2. Crie conta
3. Faça upload da pasta `build/`
4. Pronto! Seu site está online

### Opção 2: VERCEL
1. Vá para: https://vercel.com
2. Crie conta
3. Conecte sua pasta do projeto
4. Deploy automático

### Opção 3: GitHub Pages
1. Crie repositório no GitHub
2. Faça upload do código
3. Configure para publicar a pasta `build/`

---

## 💡 DICAS PROFISSIONAIS

- ✅ Teste no celular: Abra `http://<seu-ip-local>:3000`
- ✅ Válide o formulário WhatsApp antes de publicar
- ✅ Tire fotos de alta qualidade para o hero section
- ✅ Peça feedback de amigos antes de publicar
- ✅ Mantenha dados de contato sempre atualizados

---

Qualquer dúvida, consulte `README.md` ou `CONFIGURACAO.md`

**Boa sorte com sua página! 🚀**
