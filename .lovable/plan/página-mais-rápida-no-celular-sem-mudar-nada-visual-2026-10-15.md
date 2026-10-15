# Página mais rápida no celular — sem mudar nada visual

Tudo abaixo é invisível: textos, ordem, cores, botões, preços e links da Kiwify ficam idênticos.

## O que será feito

1. **Vídeos do Passo 1 e 2**: recomprimir para 720p, até ~800KB cada (MP4 + WebM), criar uma imagem de capa (primeiro quadro) que aparece na hora, e o vídeo só começa a baixar sem travar a página.
2. **Foto de fundo do topo**: converter para WebP leve e carregar com prioridade máxima (é o primeiro elemento grande que a cliente vê).
3. **Imagens (PDFs, WhatsApp, prova social, Ana, esboços, logo)**: converter para WebP, máximo 800px de largura, qualidade ~75%, com largura/altura fixas para a página não "pular". Tudo abaixo do topo carrega só quando a pessoa rola.
4. **Fontes**: carregamento que mostra o texto imediatamente e conexão antecipada com o servidor de fontes.
5. **Pixels da Meta (os dois IDs)**: mesmos IDs, mas carregados só depois que a página aparece, com conexão antecipada ao Facebook. PageView e InitiateCheckout continuam funcionando.
6. **Carrosséis**: o giro automático só começa quando aparecem na tela (menos trabalho para o celular).
7. **Página pré-gerada**: a página passa a ser montada uma vez na publicação e entregue pronta, em vez de montada a cada visita.

## Limites honestos
- Compressão Brotli/Gzip já é feita automaticamente pela hospedagem — nada a ativar.
- Cache e configurações do servidor da hospedagem não podem ser alterados no projeto.
- Não consigo rodar o PageSpeed oficial do Google daqui; vou medir com Lighthouse simulando celular 4G e entregar o antes x depois de peso e tempo. Você confirma no PageSpeed depois de publicar.
- Meta de LCP < 1,8s depende também da rede da cliente; farei o máximo possível.

## Entrega
Lista técnica do que mudou, peso antes x depois, e resultado do teste mobile simulado.

## Detalhes técnicos
- ffmpeg: libx264 crf ~30 720p faststart + libvpx-vp9; poster WebP; `preload="metadata"`, `<source>` webm/mp4, width/height.
- Imagens: script PIL → WebP 800px q75, novos `.asset.json` via lovable-assets; `<picture>` não necessário (WebP universal).
- Hero `fetchpriority="high"` + preload no `head()` do index; demais `loading="lazy" decoding="async"`.
- Pixel: injetar fbq após `load` via `requestIdleCallback`; preconnect connect.facebook.net.
- vite.config: prerender de `/` (versão do config verificada antes).
