# PWA — Áustria + Londres 2026–2027

## Como publicar
A PWA precisa ser servida por HTTPS (ou localhost para testes). Publique **todos os arquivos desta pasta mantendo a estrutura** em um host estático, por exemplo GitHub Pages, Netlify, Cloudflare Pages ou similar.

Arquivos principais:
- `index.html`: interface do app
- `trip-data.js`: conteúdo mutável do roteiro
- `manifest.webmanifest`: configuração de instalação
- `sw.js`: cache offline e atualização
- `icons/`: ícones da PWA

## Como atualizar o roteiro depois
1. Altere `trip-data.js` (ou gere uma nova versão dele).
2. Incremente a versão em `trip-data.js` e o `CACHE_NAME` em `sw.js` quando houver mudança estrutural/cacheada.
3. Substitua os arquivos no mesmo endereço HTTPS.
4. O app instalado verifica atualizações ao abrir. Quando uma nova versão do service worker estiver pronta, aparece **“Nova versão do roteiro disponível”**.
5. O usuário toca **“Atualizar agora”** e o app recarrega a versão nova.

Reservas marcadas, valores de orçamento editados, câmbio e dia selecionado ficam em `localStorage` no aparelho e permanecem após atualizações da aplicação no mesmo domínio.

## Instalação no iPhone
Safari → Compartilhar → Adicionar à Tela de Início.

## Instalação no Android
Chrome → menu → Instalar app / Adicionar à tela inicial (ou use o botão “Instalar app” dentro da PWA).