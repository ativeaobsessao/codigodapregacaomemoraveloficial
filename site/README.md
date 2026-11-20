# Página de vendas — Código da Pregação Memorável (versão estática)

HTML puro + Tailwind compilado + um único JS. Sem framework e sem build no servidor.
Hospedagem: Cloudflare Pages (a pasta publicada é esta pasta).

## Estrutura

```
index.html               página inteira (seções comentadas de 00 a 10)
assets/css/input.css     fonte do Tailwind (cores, fontes, animações, regras promo x preço cheio)
assets/css/styles.css    CSS compilado (é este que a página carrega)
assets/js/main.js        fim da promoção, FAQ, vídeos, carrosséis, eventos
assets/fonts/            5 fontes .woff2 (Inter 400/600/800, Playfair Display 600/800), só caracteres do português
media/                   imagens .webp e 2 vídeos .mp4 (VSL e depoimento)
_headers                 cache e segurança (Cloudflare Pages lê sozinho)
favicon.png, robots.txt
```

## Seções

| # | Seção |
|---|-------|
| 00 | Faixa fixa do topo |
| 01 | Primeira tela: headline, subheadline, VSL (toque abre em tela cheia), botão, linha de prova |
| 03 | Esboços (carrossel) |
| 04 | "Irmã, que pregação!" + Template de 12 passos |
| 05 | "Você recebe" |
| 06 | Prova social (texto + depoimento em vídeo) |
| 07 | Oferta (`#planos`): ticket único vitalício |
| 08 | Quem criou |
| 09 | Perguntas frequentes |
| 10 | Garantia de 7 dias + rodapé |

Depois de mexer em classes do Tailwind (no HTML ou no JS), recompile o CSS:

```
cd site
npm install
npm run build:css
```

Se só mudar texto, não precisa recompilar.

## Oferta e prazo (IMPORTANTE)

- Preço promocional **R$29,90**. O momento em que a página troca sozinha para R$97 está num único lugar: atributo `data-fim` na tag `<html>` do `index.html` (hoje `2026-12-01T00:00:00-03:00`, ou seja, 01/12 à 0h de Brasília).
- Quando o prazo passa, a página troca sozinha para o preço cheio **R$97**: some o selo "Black Friday", a frase de urgência, o "De R$97" e o trecho "aproveite preço promocional" do banner, e o FAQ passa a falar só de R$97. Isso acontece até com a página aberta.
- Não há contador numérico: o topo da oferta tem a frase "Oferta de Black Friday: Acaba em Breve! Aproveite o quanto antes, valor volta ao normal em breve. Não estranhe entrar amanhã e estiver a R$97."
- O fim da promoção é decisão do negócio, por isso os textos não citam data. O `data-fim` do `<html>` é só o momento em que a página passa a mostrar R$97 sozinha: ajuste-o para a data/hora em que você decidir encerrar (e altere o preço na Cakto no mesmo momento).
- Marcação: elementos com `data-promo` valem até o prazo; elementos com `data-regular` valem depois.
- **A página só muda o que aparece. Quem cobra é a Cakto.** Em 01/12, mude o preço da oferta na Cakto para R$97, ou crie uma oferta de R$97 e coloque o novo link no botão `data-regular` (seção 07).
- Link atual do checkout (os dois botões): `https://pay.cakto.com.br/o9pfkgs_1349378`.
- A troca automática usa o relógio do aparelho da pessoa.

## Rastreamento

- Dois Meta Pixels (`1782310362686643` e `1833853264476817`) no `<head>`; o SDK só carrega no primeiro toque ou 2 s depois da página abrir.
- Todo link com `data-track` dispara `InitiateCheckout` antes de abrir o checkout.
- Eventos extras: `VSLPlay`, `VSLEnd` (vídeo da primeira tela) e `DepoimentoPlay`.

## Vídeos

- VSL: `media/opt-vsl.mp4` (H.264 720x1570, ~7,6 MB) + `opt-vsl-poster.webp`. Abre em tela cheia ao toque, fecha com Voltar, ✕ ou Esc, e ao terminar destaca o botão da primeira tela.
- Depoimento: `media/opt-depoimento.mp4` (H.264 720x1276, ~1,6 MB) + `opt-depoimento-poster.webp`. Toca na própria seção, com som.
- Nenhum MP4 baixa antes do toque. Para trocar um vídeo, **mude o nome do arquivo** (cache de 30 dias).

## Velocidade

Medido com Lighthouse (celular, rede 4G lenta simulada): LCP cerca de 2,0 s, FCP 0,8 s, TBT abaixo de 100 ms, CLS 0, nota 99-100.
O que garante isso: fontes e imagens do próprio site (sem Google Fonts), fontes só com caracteres do português, imagem de fundo e poster leves, imagens do carrossel com carregamento nativo `loading="lazy"` (mais um reforço em segundo plano), pixel carregado sob demanda, vídeos sob demanda, CSS de 6 KB comprimido, cache longo para mídia e fontes (`_headers`).
Ao adicionar imagem nova: .webp com até ~800 px de largura e `width`/`height` no HTML; abaixo da primeira tela use `loading="lazy"`.

## Publicar no Cloudflare Pages

**Sem Git (mais rápido):** painel da Cloudflare → Workers & Pages → Create application → Pages → Use direct upload → nomear o projeto → arrastar esta pasta (ou o .zip) → Deploy.

**Com Git (deploy a cada commit):** conectar o repositório e usar
- Framework preset: None
- Build command: vazio (ou `exit 0`)
- Build output directory: `site`

## Pendências conhecidas

- `og:image` (miniatura de compartilhamento) ainda aponta para uma imagem hospedada fora do site; trocar por uma em `media/`.
