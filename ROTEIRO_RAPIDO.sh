#!/bin/bash
# =====================================================
# ROTEIRO RÁPIDO - TUDO EM UMA PÁGINA
# =====================================================
# Esta é a ordem exata que você deve seguir para colocar o site online
# Tempo estimado: 1-2 horas
# =====================================================

#
# FASE 1: INSTALAÇÃO E TESTE LOCAL (10-15 minutos)
#
echo "FASE 1: INSTALAÇÃO"
echo "=================="
echo ""
echo "1. Instale Node.js (se não tiver):"
echo "   - Vá para: https://nodejs.org/"
echo "   - Baixe versão LTS"
echo "   - Execute o instalador"
echo ""
echo "2. Abra PowerShell nesta pasta (Adson)"
echo ""
echo "3. Digite:"
echo "   npm install"
echo ""
echo "4. Aguarde concluir (pode levar 3-5 minutos)"
echo ""
echo "5. Após terminar, digite:"
echo "   npm start"
echo ""
echo "6. Página abre em http://localhost:3000"
echo "   ✓ Se abrir = Sucesso!"
echo ""
echo "7. Teste:"
echo "   ✓ Clique em 'Começar Agora'"
echo "   ✓ Preencha o formulário"
echo "   ✓ Clique em 'Enviar para WhatsApp'"
echo "   ✓ Deve abrir o WhatsApp com mensagem"
echo ""

#
# FASE 2: CONFIGURAÇÃO CRÍTICA (10-15 minutos)
#
echo "FASE 2: CONFIGURAR SEUS DADOS"
echo "=============================="
echo ""
echo "SEU NÚMERO WHATSAPP:"
echo "  Arquivo: src/components/Modal.js"
echo "  Linha ~95"
echo "  Mude de:   const whatsappNumber = '5511999999999';"
echo "  Para:      const whatsappNumber = '55SEUNUMERO';"
echo ""
echo "  Formato correto:"
echo "    55 (código Brasil) + 11 (área) + 99999-9999 (número)"
echo "    Exemplo: 5511987654321"
echo ""
echo "REPITA EM:"
echo "  1. src/components/Header.js (linha ~45)"
echo "  2. src/components/Footer.js (linhas 70, 93)"
echo ""
echo "EMAIL "
echo "  Arquivo: src/components/Footer.js"
echo "  Linha ~94"
echo "  Mude para seu email real"
echo ""
echo "LOCALIZAÇÃO"
echo "  Arquivo: src/components/Footer.js"
echo "  Linha ~96"
echo "  Mude para sua cidade"
echo ""

#
# FASE 3: OPTIONAL - TEXTOS E DESIGN (10-15 minutos)
#
echo "FASE 3: PERSONALIZAR (OPCIONAL)"
echo "================================"
echo ""
echo "TEXTOS PRINCIPAIS:"
echo "  - Nome/Logo: src/components/Header.js (linha ~33)"
echo "  - Hero Text: src/components/Hero.js (line ~15)"
echo "  - Sobre: src/components/About.js (linha ~12)"
echo "  - Serviços: src/components/Services.js (linha ~6)"
echo ""
echo "FOTO:"
echo "  - Substitua arquivo em: imagens/"
echo "  - OU edite caminho em: src/components/Hero.js (linha ~26)"
echo ""
echo "CORES:"
echo "  - Edite: src/App.css (variáveis CSS no :root)"
echo ""

#
# FASE 4: TESTE NOVAMENTE (5 minutos)
#
echo "FASE 4: TESTAR DEPOIS DE ALTERAR"
echo "================================="
echo ""
echo "1. Salve o arquivo (Ctrl + S)"
echo "2. Navegador recarrega automaticamente"
echo "3. Se não recarregar, pressione F5"
echo "4. Se aparecer erro, tente:"
echo "   - Feche com Ctrl + C no PowerShell"
echo "   - Execute novamente: npm start"
echo ""
echo "⚠️  IMPORTANTE: TESTE NO CELULAR TAMBÉM!"
echo "   - Abra: http://<seu-ip-local>:3000"
echo "   - Procure seu IP com: ipconfig"
echo ""

#
# FASE 5: PREPARAR PARA PUBLICAR (5 minutos)
#
echo "FASE 5: CRIAR BUILD PARA PUBLICAÇÃO"
echo "===================================="
echo ""
echo "1. Se tudo funcionar, feche com: Ctrl + C"
echo ""
echo "2. Digite:"
echo "   npm run build"
echo ""
echo "3. Aguarde criar pasta 'build'"
echo "   (Pode levar 2-3 minutos)"
echo ""
echo "4. Após terminar, você terá a pasta 'build/'"
echo "   Esta pasta contém seu site pronto!"
echo ""

#
# FASE 6: PUBLICAR ONLINE (5-10 minutos)
#
echo "FASE 6: PUBLICAR ONLINE (Escolha Uma)"
echo "======================================"
echo ""
echo "OPÇÃO 1: NETLIFY (Mais Fácil)"
echo "  1. Vá para: https://www.netlify.com"
echo "  2. Crie conta com Google"
echo "  3. Clique 'Add new site' > 'Deploy manually'"
echo "  4. Arraste a pasta 'build/' para lá"
echo "  5. Pronto! Seu site está online em segundos"
echo "  6. Copie o URL (algo como seu-site.netlify.app)"
echo ""
echo "OPÇÃO 2: VERCEL"
echo "  1. Vá para: https://vercel.com"
echo "  2. Crie conta com GitHub"
echo "  3. Conecte seu repositório GitHub"
echo "  4. Deploy automático"
echo ""
echo "OPÇÃO 3: SEU PRÓPRIO SERVIDOR"
echo "  - Hospedagem: Hostinger (R$30-50/mês)"
echo "  - Faça upload da pasta 'build/'"
echo ""

#
# FASE 7: TESTE ONLINE (5 minutos)
#
echo "FASE 7: TESTAR SITE ONLINE"
echo "=========================="
echo ""
echo "✓ Abra seu URL no navegador"
echo "✓ Teste todos os botões"
echo "✓ Teste modal de contato"
echo "✓ Teste links WhatsApp"
echo "✓ Teste no celular"
echo "✓ Teste em outro navegador"
echo ""
echo "Se algo não funcionar:"
echo "  1. Volte para local: npm start"
echo "  2. Faça correções"
echo "  3. npm run build"
echo "  4. Faça upload novamente"
echo ""

#
# RESUMO FINAL
#
echo ""
echo "╔════════════════════════════════════════════════════════╗"
echo "║              🎉 VOCÊ CONSEGUIU! 🎉                    ║"
echo "║                                                        ║"
echo "║ Seu site está online e funcionando!                   ║"
echo "║                                                        ║"
echo "║ Salve seus links:                                     ║"
echo "║  - Site: seu-site.netlify.app                        ║"
echo "║  - Documentação: Leia INDICE_DOCUMENTACAO.md         ║"
echo "║                                                        ║"
echo "║ Para atualizar no futuro:                            ║"
echo "║  1. npm run build                                    ║"
echo "║  2. Arraste 'build/' no Netlify novamente           ║"
echo "║                                                        ║"
echo "╚════════════════════════════════════════════════════════╝"
echo ""

#
# DICAS DE OURO
#
echo "💡 DICAS DE OURO"
echo "================"
echo ""
echo "✅ Sempre teste no celular antes de publicar"
echo "✅ Use foto de qualidade na hero section"
echo "✅ Mantenha número WhatsApp sempre atualizado"
echo "✅ Responda diretamente no WhatsApp que receber"
echo "✅ Peça feedback de amigos antes de publicar"
echo "✅ Se mudar dados, faça 'npm run build' novamente"
echo "✅ Guarde a senha do Netlify se criar conta"
echo ""

#
# LINKS IMPORTANTES
#
echo "📚 DOCUMENTAÇÃO"
echo "==============="
echo ""
echo "Leia na ordem:"
echo "  1. PRIMEIROS_PASSOS.md"
echo "  2. CONFIGURACAO.md"
echo "  3. HOSPEDAGEM_DEPLOY.md"
echo ""
echo "Para referência:"
echo "  - INDICE_DOCUMENTACAO.md (índice completo)"
echo "  - RESUMO_PROJETO.md (visão geral)"
echo "  - MODAL_WHATSAPP.md (como funciona o sistema)"
echo ""

#
# NÚMEROS DE SUPORTE
#
echo "❓ PROCURE POR"
echo "==============="
echo ""
echo "Problema ao instalar:"
echo "  → PRIMEIROS_PASSOS.md / Seção PROBLEMAS COMUNS"
echo ""
echo "Dúvida sobre WhatsApp:"
echo "  → MODAL_WHATSAPP.md / Seção CONFIGURAÇÃO"
echo ""
echo "Como personalizar:"
echo "  → CONFIGURACAO.md / Seu tema específico"
echo ""
echo "Como publicar:"
echo "  → HOSPEDAGEM_DEPLOY.md / Escolha a plataforma"
echo ""

echo ""
echo "┌─────────────────────────────────────────────────────┐"
echo "│  Começe agora! Execute: npm install && npm start   │"
echo "│                                                     │"
echo "│  Qualquer dúvida, leia INDICE_DOCUMENTACAO.md      │"
echo "└─────────────────────────────────────────────────────┘"
echo ""
