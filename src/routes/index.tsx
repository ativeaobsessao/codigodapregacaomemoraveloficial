import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowDown, Check, ChevronDown, ShieldCheck } from "lucide-react";
import pdf1 from "@/assets/opt-pdf-pagina-01.webp.asset.json";
import pdf2 from "@/assets/opt-pdf-pagina-02.webp.asset.json";
import pdf3 from "@/assets/opt-pdf-pagina-03.webp.asset.json";
import pdf4 from "@/assets/opt-pdf-pagina-04.webp.asset.json";
import provaSocial from "@/assets/opt-prova-social-combina.webp.asset.json";
import fotoAna from "@/assets/opt-foto-ana.webp.asset.json";
import libraryAsset from "@/assets/opt-pregadora.webp.asset.json";
import poster1 from "@/assets/opt-part01-pv-poster.webp.asset.json";
import poster2 from "@/assets/opt-part02-pv-poster.webp.asset.json";
const library = libraryAsset.url;
import part1 from "@/assets/opt-part01-pv.mp4.asset.json";
import part2 from "@/assets/opt-part02-pv.mp4.asset.json";
import printPregacao from "@/assets/opt-print-pregacao.webp.asset.json";
import eb1 from "@/assets/opt-esboco-preview-01.webp.asset.json";
import eb2 from "@/assets/opt-esboco-preview-02.webp.asset.json";
import eb3 from "@/assets/opt-esboco-preview-03.webp.asset.json";
import eb5 from "@/assets/opt-esboco-preview-05.webp.asset.json";
import mockTela from "@/assets/opt-mockup-tela.webp.asset.json";
import mockEsboco from "@/assets/opt-mockup-esboco.webp.asset.json";
import { Carousel, MultiCarousel } from "@/components/Carousel";
import { ClickToPlayVideo } from "@/components/ClickToPlayVideo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Código da Pregação Memorável" },
      { name: "description", content: "Construa uma mensagem edificante e memorável em 15 minutos." },
      { property: "og:title", content: "Código da Pregação Memorável" },
      { property: "og:description", content: "Construa uma mensagem edificante e memorável em 15 minutos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preload", as: "image", href: library, fetchpriority: "high" },
    ],
  }),
  component: Index,
});

function CTA({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center px-4">
      <a href="#planos" className="btn-cta">{children}</a>
    </div>
  );
}

const beneficios = [
  ["TEMPLATE PARA UMA PREGAÇÃO MEMORÁVEL", "Siga os 12 Passos para montar uma pregação memorável - todo processo foi consolidado e validado por pregadoras experientes que usam toda vez que vão pregar"],
  ["BIBLIOTECA INTELIGENTE", "Estilo Google, separada por temática. Nunca mais folheie 500 PDFs de esboços genéricos e feitos sobretudo pra homem. Basta digitar a temática da sua pregação ou clique nas fixadas e em segundos aparecem vários esboços."],
  ["EDITOR MINHAS PALAVRAS", "depois de selecionar qual esboço vai usar, realize as modificações que achar pertinentes. Em minutos você consegue criar um esboço 100% original, que segue uma metodologia extremamente validada para estruturar mensagens que prendem a atenção das pessoas, desde início até o fm."],
  ["BAIXE EM PDF OU COMPARTILHE NO WHATSAPP", "com um clique baixe o seu esboço autoral em arquivo PDF. Ou se preferir, compartilhe seu esboço na íntegra no WhatsApp"],
  ["ARQUIVO NO GOOGLE DRIVE ORGANIZADO + ACESSO IMEDIATO.", "Além da plataforma, você recebe no seu e-mail e no seu WhatsApp o link da pasta no Drive com todos os esboços separados por temáticas"],
];

const faq = [
  ["O que é o Editor Minhas Palavras?", "É o seu caderninho pessoal dentro da plataforma. Ele pega um esboço pronto da plataforma e transforma na sua mensagem, com as suas palavras, com as suas histórias da cozinha, da família, do seu dia a dia. É o que faz a pregação ser sua de verdade, do seu jeito de falar. Tudo que você escreve salva sozinho. Se fechar e voltar amanhã, continua tudo lá."],
  ["O que é o Template para uma Pregação Memorável?", "É um processo validado com 12 passos, usado todos os dias por pregadores super experientes. Ele nasceu para resolver a maior dor: pregar e ver a plateia voando, desanimada, no modo automático. Esse template te guia para criar uma mensagem que prende a atenção, que engaja e faz a irmã se sentir representada, sentindo que a mensagem tocou no coração dela. Tudo com começo, meio e fim bem amarrados e com segurança bíblica."],
  ["O que é a Biblioteca Inteligente?", "Biblioteca é onde ficam todos os esboços guardados. A Biblioteca Inteligente é essa biblioteca organizada por temas para facilitar a sua vida. Ela funciona como o Google da pregação. Você não precisa mais folhear 500 PDFs soltos e frios feitos por homem para homem. Lá você encontra em segundos centenas de esboços separados pelos temas que você mais prega: Ansiedade, Medo, Oração, Mulheres da Bíblia e outros."],
  ["Quais são as formas de pagamento?", "Você paga com Pix ou Cartão de Crédito, em assinatura mensal. Checkout 100% seguro. Assim que o pagamento é aprovado, o acesso já é liberado. E é super fácil de cancelar, sem pegadinha."],
  ["O acesso à plataforma é vitalício mesmo?", "Enquanto a assinatura estiver ativada, você tem acesso a toda a plataforma. Agora, os arquivos do Google Drive são seus para sempre, mesmo se você cancelar a assinatura. É uma assinatura recorrente mensal. Para cancelar, basta enviar mensagem no WhatsApp ou no e-mail. Na Área de membros você encontra todas as informações."],
  ["Como e quando eu recebo o acesso? É imediato?", "É imediato. Assim que o pagamento cai, você recebe no seu e-mail e no seu WhatsApp o link de acesso à plataforma Código da Pregação Memorável + o link da pasta no Google Drive organizada por temáticas. É só clicar e entrar."],
  ["Funciona no celular? Eu não sei mexer muito com tecnologia...", "Foi feita justamente pra você, irmã. Plataforma minimalista e super intuitiva, pensada pra pessoas que não tem familiaridade com tecnologia. Não precisa instalar nada. Entra com seu celular mesmo: digita a temática, clica no esboço, clica no botão preto Quero usar com minhas palavras. Tudo salva sozinho. Se fechar e voltar depois, tá lá."],
  ["Posso imprimir e levar pro púlpito? Preciso de internet na hora?", "Pode e deve. Depois de personalizar com suas palavras, você baixa em PDF Premium e leva no papel, ou envia a versão completa pro seu próprio WhatsApp pra consultar na hora da pregação."],
  ["Eu já tenho muitos PDFs de esboços. Qual a diferença?", "PDF é frio, genérico e quase sempre é feito por homem pra homem. Aqui temos uma Biblioteca Inteligente + Editor Minhas Palavras. Você não folheia 500 arquivos. Você busca pela temática da sua pregação, como: [Ansiedade, Medo, Oração, Mulheres da Bíblia] e ainda transforma o esboço na sua mensagem, com o Gancho da sua rotina e com o Espelho Bíblico que te protege de pregar heresia. É sua mensagem, não cópia."],
  ["Qual a diferença entre o Plano Básico e o Plano Premium? Qual devo escolher?", "Essa é simples, irmã: O Plano Básico de R$19,90/mês já é completo pra você nunca mais travar. Você recebe a plataforma toda: Biblioteca Inteligente com 100 esboços editáveis no Template de 12 passos, Editor Minhas Palavras pra editar do seu jeito, download em PDF ou envio no WhatsApp e a pasta no Google Drive organizada por 6 temáticas: Ansiedade, Medo, Coragem, Fé, Perseverança e Perdão. Essa pasta é sua para sempre, mesmo se cancelar. O Plano Premium de R$29,90/mês é o MAIS VENDIDO porque é a biblioteca completa. É tudo do Básico + 200 esboços exclusivos em 5 temáticas extras: Mulheres da Bíblia, Cura, Família, Oração e Presença, totalizando 300 esboços editáveis. E ainda leva o Bônus Planner da Pregadora pra organizar as pregações do mês em poucos minutos. Se você foi chamada de última hora e precisa resolver amanhã, o Básico já te salva. Se você prega toda semana ou quer ser lembrada como referência na sua comunidade, vai de Premium. São só R$10 a mais por mês e você fica com a biblioteca completa, em uma assinatura mensal que você cancela quando quiser."],
  ["E se eu não gostar? Tem garantia?", "Tem sim. Risco zero. Você tem 7 dias de garantia incondicional. Se por qualquer motivo achar que não é pra você, nos chama no WhatsApp que devolvemos 100% do seu valor. Sem perguntas, sem constrangimento."],
];

function useToday() {
  const [d, setD] = useState("");
  useEffect(() => setD(new Date().toLocaleDateString("pt-BR")), []);
  return d;
}

function Timer() {
  const [left, setLeft] = useState<number | null>(null);
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const end = new Date(now);
      end.setHours(23, 59, 59, 999);
      setLeft(Math.max(0, end.getTime() - now.getTime()));
    };
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);
  const s = Math.floor((left ?? 0) / 1000);
  const parts = [Math.floor(s / 3600), Math.floor((s % 3600) / 60), s % 60];
  return (
    <div className="flex justify-center gap-3">
      {parts.map((v, i) => (
        <div key={i} className="w-20 rounded-xl border border-gold/40 bg-card py-3 text-center">
          <div className="font-serif text-3xl font-extrabold text-banner">{String(v).padStart(2, "0")}</div>
          <div className="text-xs uppercase text-muted-foreground">{["horas", "min", "seg"][i]}</div>
        </div>
      ))}
    </div>
  );
}

function Item({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2 text-sm text-muted-foreground">
      <Check className="mt-0.5 h-4 w-4 shrink-0 text-cta-hover" />
      <span>{children}</span>
    </li>
  );
}

function track() {
  const w = window as unknown as { fbq?: (...a: unknown[]) => void; loadMetaPixels?: () => void };
  w.fbq?.("track", "InitiateCheckout");
  w.loadMetaPixels?.();
}

function Index() {
  const today = useToday();
  const [upsell, setUpsell] = useState(false);
  const [open, setOpen] = useState<number | null>(null);

  return (
    <main className="min-h-screen overflow-x-hidden">
      <div className="sticky top-0 z-50 bg-banner px-3 py-2 text-center text-xs font-bold text-banner-foreground sm:text-sm">
        Oferta de Lançamento da Plataforma - Válida até hoje, {today}
      </div>

      {/* PRIMEIRA ABA */}
      <section className="relative overflow-hidden" aria-label="Prévia da plataforma">
        <img src={library} alt="Mulher pregando no púlpito de uma igreja" width={768} height={1344} fetchPriority="high" decoding="async" className="absolute inset-0 h-full w-full object-cover object-top opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
        <div className="relative flex flex-col items-center px-4 pb-2 pt-2.5 font-serif">
          <h1 className="mb-1.5 max-w-[440px] text-center text-[clamp(22px,6.2vw,29px)] font-bold leading-[1.16]">
            Foi chamada pra pregar e não sabe por onde começar?
          </h1>
          <h3 className="mb-2.5 max-w-[400px] text-center text-[clamp(14px,3.9vw,16px)] italic leading-[1.35] text-muted-foreground">
            Monte seu esboço em 15 minutos e suba no púlpito com segurança.
          </h3>
          <div className="pm-stage">
            <div className="pm-glow" />
            <div className="pm-sheet"><img src={mockEsboco.url} alt="Esboço de pregação em PDF, exatamente como você recebe" width={800} height={953} loading="eager" decoding="async" /></div>
            <div className="pm-phone"><img src={mockTela.url} alt="Tela da plataforma: Qual temática você vai pregar?" width={738} height={1416} loading="eager" decoding="async" /></div>
          </div>
          <a href="#planos" className="btn-cta mt-3 min-h-14 max-w-[440px] font-sans text-[15px]">QUERO ACESSAR A PLATAFORMA</a>
          <p className="mt-2 text-center font-sans text-xs text-muted-foreground">⭐ +22 mulheres já pregando + 4,9 de satisfação + Compra 100% segura + Garantia 7 dias</p>
          <div className="mb-2 mt-4 flex max-w-[440px] flex-wrap justify-center gap-2 font-sans">
            {["+100 esboços editáveis", "Edite com suas palavras", "PDF ou WhatsApp"].map((b) => (
              <span key={b} className="rounded-full border border-gold/65 bg-gold/10 px-3 py-2 text-[13px] font-semibold leading-none text-gold">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SEGUNDA ABA */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl space-y-6 px-4 pb-12 pt-10">
          <h2 className="text-center font-serif text-2xl font-extrabold leading-tight sm:text-3xl">
            É assim que o seu esboço fica pronto em 15 minutos, sem começar do zero.
          </h2>
          <h3 className="text-center font-serif text-base italic leading-snug text-muted-foreground sm:text-xl">
            3 passos, direto do celular. Sem folhear PDFs e sem página em branco.
          </h3>
          <div id="demonstracao" className="mx-auto flex max-w-[808px] flex-col items-center gap-4 md:flex-row md:items-start md:justify-center md:gap-6">
            <div className="w-full max-w-[380px] space-y-2 text-center">
              <span className="inline-block rounded-full bg-gold px-3 py-1 text-xs font-bold text-primary-foreground">PASSO 1: BIBLIOTECA INTELIGENTE</span>
              <ClickToPlayVideo src={part1.url} poster={poster1.url} label="PASSO 1: BIBLIOTECA INTELIGENTE" />
              <p className="text-xs text-muted-foreground">Ache seu tema em segundos</p>
            </div>
            <ArrowDown className="h-8 w-8 shrink-0 animate-bounce text-gold md:mt-48 md:-rotate-90" />
            <div className="w-full max-w-[380px] space-y-2 text-center">
              <span className="inline-block rounded-full bg-gold px-3 py-1 text-xs font-bold text-primary-foreground">PASSO 2: EDITOR MINHAS PALAVRAS</span>
              <ClickToPlayVideo src={part2.url} poster={poster2.url} label="PASSO 2: EDITOR MINHAS PALAVRAS" />
              <p className="text-xs text-muted-foreground">Edite com suas palavras - salva sozinho</p>
            </div>
          </div>
          <div className="flex justify-center"><ArrowDown className="h-8 w-8 animate-bounce text-gold" /></div>
          <div className="mx-auto w-full max-w-[380px] space-y-2 text-center md:max-w-[640px]">
            <span className="inline-block rounded-full bg-gold px-3 py-1 text-xs font-bold text-primary-foreground">PASSO 3: BAIXE E PREGUE</span>
            <p className="text-xs text-muted-foreground">Baixe em PDF ou envie para seu WhatsApp</p>
            <div className="grid gap-4 rounded-[24px] border border-white/10 bg-card p-3 shadow-2xl md:grid-cols-2 md:items-center">
              <Carousel id="carousel-pdf" label="Página do PDF" images={[pdf1.url, pdf2.url, pdf3.url, pdf4.url]} />
              <div className="mx-auto w-full max-w-[260px] rounded-[2.5rem] border-[10px] border-muted bg-background p-1 shadow-2xl">
                <div className="mx-auto mb-1 h-4 w-24 rounded-full bg-muted" />
                <img src={printPregacao.url} width={600} height={1301} loading="lazy" decoding="async" alt="Esboço enviado no WhatsApp" className="h-auto w-full rounded-[1.8rem]" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground">Com um clique, você baixa em PDF ou envia para seu WhatsApp</p>
          </div>
          <p className="text-center font-serif text-lg italic text-gold">
            "Depois que comecei a usar o Código, toda vez que prego, escuto que lembraram da minha pregação a semana toda" - Relato de alunas
          </p>
        </div>
      </section>

      {/* ESBOÇOS */}
      <section id="esbocos-preview" className="deferred-section space-y-6 px-4 py-12">
        <h2 className="mx-auto max-w-xl text-center font-serif text-2xl font-extrabold text-gold">
          Veja Alguns Esboços que Você Tem Acesso Assim que Adquire!
        </h2>
        <MultiCarousel
          id="carousel-esbocos"
          label="Esboço"
          items={[
            { src: eb1.url, tema: "Medo do Futuro" },
            { src: eb2.url, tema: "Ansiedade" },
            { src: eb3.url, tema: "Comparação" },
            { src: eb5.url, tema: "Ser Vista por Deus" },
          ]}
        />
        <p className="text-center text-xs text-muted-foreground">Deslize para ver as temáticas →</p>
        <CTA>QUERO MEU ACESSO À PLATAFORMA</CTA>
      </section>

      {/* TEMPLATE */}
      <section id="template" aria-labelledby="tp-h" className="deferred-section flex flex-col items-center px-4 pb-9 pt-11 font-serif text-foreground">
        <h2 id="tp-h" className="mb-2.5 max-w-[440px] text-center text-[clamp(23px,6.4vw,30px)] font-bold leading-[1.18]">Quer ouvir depois do culto: “Irmã, que pregação!”?</h2>
        <p className="mb-[22px] max-w-[420px] text-center text-[clamp(14px,3.9vw,16px)] italic leading-[1.4] text-muted-foreground">Cada esboço já vem dentro do Template de 12 passos: a estrutura que faz a Palavra ficar na memória de quem ouve.</p>
        <ul className="flex w-full max-w-[440px] flex-col gap-3">
          {([
            ["A forma mais fácil de achar o esboço certo:", " escolha o tema (ansiedade, medo, coragem...) e a Biblioteca Inteligente entrega na hora. Sem folhear PDF."],
            ["⚠️ Cuidado:", " pule um dos 12 passos e a mensagem perde força. O Template te leva do Gancho da Rotina até a Frase Final que Cola, sem deixar nada de fora."],
            ["O “Gancho da Rotina”:", " a abertura que faz cada irmã pensar “é de mim que ela está falando” já na primeira frase."],
            ["Os 3 pontos “Dor → Deus → Resposta”:", " a ordem que leva a irmã de “eu me sinto assim” até “sei o que fazer amanhã”."],
            ["Por que a pregação fica na memória a semana toda:", " a “Frase Final que Cola”, uma frase curta feita para as irmãs levarem para casa."],
            ["100% editável:", " troque palavras, tire trechos, ponha a sua história. A estrutura é validada; a voz continua sendo SUA."],
            ["Com um clique,", " você baixa em PDF ou envia para o seu WhatsApp, pronto para levar ao púlpito."],
          ] as const).map(([b, t]) => (
            <li key={b} className="relative rounded-[14px] border border-gold/30 bg-foreground/[0.04] py-3.5 pl-[46px] pr-3.5 font-sans text-[15px] leading-[1.45] text-muted-foreground">
              <span aria-hidden className="absolute left-3.5 top-[13px] h-[22px] w-[22px] rounded-full bg-gold text-center text-[13px] font-extrabold leading-[22px] text-primary-foreground">✓</span>
              <b className="font-bold text-foreground">{b}</b>{t}
            </li>
          ))}
        </ul>
        <h3 className="mb-3 mt-7 max-w-[440px] text-center text-[clamp(17px,4.8vw,20px)] font-semibold leading-tight">Os 12 passos que já vêm em cada esboço</h3>
        <ol className="grid w-full max-w-[440px] grid-cols-2 gap-2">
          {[["01","Tema"],["07","Desenvolvimento em 3 Pontos"],["02","Objetivo"],["08","Aplicação para Mulheres"],["03","Gancho da Rotina"],["09","Pergunta de Reflexão"],["04","Espelho Bíblico"],["10","Frase Final que Cola"],["05","Versículo-chave"],["11","Oração Sugerida"],["06","Contexto Bíblico Essencial"],["12","Tempo Estimado"]].map(([n, t]) => (
            <li key={n} className="flex min-h-[46px] items-center gap-2 rounded-[10px] border border-gold/40 bg-background px-2.5 py-2 font-sans text-[12.5px] font-semibold leading-tight text-foreground">
              <span className="flex-none text-xs font-bold text-gold">{n}</span>{t}
            </li>
          ))}
        </ol>
        <p className="mb-[18px] mt-[26px] max-w-[440px] border-y border-gold/50 px-3.5 py-4 text-center text-[clamp(18px,5.2vw,22px)] font-semibold italic leading-[1.3] text-gold">Você traz a sua voz. O Template traz a estrutura que faz as irmãs lembrarem.</p>
        <a href="#planos" className="btn-cta min-h-14 max-w-[440px] animate-none font-sans text-[15px]">QUERO USAR O TEMPLATE</a>
      </section>

      {/* BENEFÍCIOS */}
      <section className="deferred-section bg-card/50 px-4 py-12">
        <div className="mx-auto max-w-2xl space-y-6">
          <h2 className="text-center font-serif text-2xl font-extrabold">
            Acessando hoje a Plataforma Código da Pregação Memorável você recebe:
          </h2>
          <ol className="space-y-4">
            {beneficios.map(([t, d], i) => (
              <li key={i} className="flex gap-3 rounded-2xl border bg-card p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold font-bold text-primary-foreground">{i + 1}</span>
                <p className="text-sm text-muted-foreground"><strong className="text-gold">{t}</strong> - {d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PROVAS */}
      <section id="prova-social" className="deferred-section space-y-6 px-4 py-12">
        <h2 className="mx-auto max-w-xl text-center font-serif text-2xl font-extrabold text-gold">
          QUEM ADQUIRIU ACESSO AO CÓDIGO DA PREGAÇÃO MEMORÁVEL, RECOMENDA!
        </h2>
        <p className="mx-auto max-w-xl text-center text-sm text-muted-foreground">
          +22 pregadoras acessam diariamente e ajudam a melhorar os esboços - para que as novas integrantes como você recebam o melhor material possível!
        </p>
        <img
          src={provaSocial.url}
          alt="Prints de WhatsApp de alunas do Código da Pregação Memorável"
          width={800}
          height={731}
          loading="lazy"
          decoding="async"
          className="mx-auto block h-auto w-[90vw] max-w-[380px] rounded-2xl border border-white/80 bg-white shadow-xl"
        />
      </section>

      {/* PLANOS */}
      <section id="planos" className="scroll-mt-10 bg-gradient-to-b from-background to-card/60 px-4 py-12">
        <div className="mx-auto max-w-4xl space-y-8">
          <h2 className="text-center font-serif text-2xl font-extrabold">A Oferta de Lançamento da Plataforma Termina em:</h2>
          <Timer />
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div className="space-y-4 rounded-2xl border bg-card p-6 text-center">
              <h3 className="font-serif text-2xl font-extrabold">PLANO BÁSICO</h3>
              <p className="font-serif text-4xl font-extrabold leading-tight text-gold">100 esboços editáveis</p>
              <p className="text-sm text-muted-foreground">nas temáticas mais pregadas</p>
              <p className="text-sm"><s className="text-muted-foreground">De R$97</s> por apenas</p>
              <p className="font-serif text-4xl font-extrabold">R$19,90 <span className="text-lg">/mês</span></p>
              <p className="text-xs text-muted-foreground">Assinatura mensal • Cancele quando quiser</p>
              <button type="button" onClick={() => setUpsell(true)} className="block w-full rounded-full border-2 border-gold py-3 font-bold text-gold hover:bg-gold hover:text-primary-foreground">QUERO O PLANO BÁSICO</button>
              <ul className="space-y-2 text-left">
                <Item>100 esboços editáveis no Template de 12 passos</Item>
                <Item>6 temáticas: <span className="mt-1 flex flex-wrap gap-1">{["Ansiedade", "Medo", "Coragem", "Fé", "Perseverança", "Perdão"].map((t) => <span key={t} className="rounded-full border border-gold/50 px-2 py-0.5 text-xs">{t}</span>)}</span></Item>
                <Item>Biblioteca Inteligente: ache o esboço pelo tema</Item>
                <Item>Editor Minhas Palavras: edite do seu jeito</Item>
                <Item>Baixe em PDF ou envie no WhatsApp</Item>
                <Item>Pasta no Google Drive organizada por temática, vitalícia: é sua para sempre, mesmo se cancelar a assinatura</Item>
              </ul>
            </div>
            <div className="relative space-y-4 rounded-2xl border-2 border-banner bg-card p-6 pt-8 text-center shadow-[0_0_40px_-10px_var(--banner)]">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-banner px-4 py-1 text-xs font-extrabold text-banner-foreground">MAIS VENDIDO</span>
              <h3 className="font-serif text-2xl font-extrabold">PLANO PREMIUM</h3>
              <p className="font-serif text-4xl font-extrabold leading-tight text-cta-hover">300 esboços editáveis</p>
              <p className="text-sm text-muted-foreground">100 do Básico + 200 exclusivos = 300</p>
              <p className="text-sm"><s className="text-muted-foreground">De R$197</s> por apenas</p>
              <p className="font-serif text-4xl font-extrabold">R$29,90 <span className="text-lg">/mês</span></p>
              <p className="text-xs text-muted-foreground">Assinatura mensal • Cancele quando quiser</p>
              <a href="https://pay.kiwify.com.br/UcoK0n6" target="_blank" rel="noopener" onClick={track} className="btn-cta">QUERO O PLANO PREMIUM</a>
              <ul className="space-y-2 text-left">
                <Item>Tudo do Básico: 100 esboços nas 6 temáticas</Item>
                <Item>+200 esboços exclusivos em 5 temáticas extras: <span className="mt-1 flex flex-wrap gap-1">{["Mulheres da Bíblia", "Cura", "Família", "Oração", "Presença"].map((t) => <span key={t} className="rounded-full bg-gold px-2 py-0.5 text-xs font-semibold text-primary-foreground">{t}</span>)}</span></Item>
                <Item>Total: 300 esboços editáveis, todos no Template de 12 passos</Item>
                <Item><strong className="text-banner">BÔNUS:</strong> Planner da Pregadora: organize as pregações do mês em poucos minutos</Item>
              </ul>
              <div className="space-y-1 border-t pt-4 text-xs text-muted-foreground">
                <p className="flex items-center justify-center gap-1"><ShieldCheck className="h-4 w-4 text-gold" />Risco zero: 7 dias de garantia incondicional</p>
                <p>Compra 100% segura - Recebe no e-mail e WhatsApp</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ANA */}
      <section id="ana-idealizadora" className="deferred-section px-4 py-12">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 md:flex-row md:items-center">
          <img src={fotoAna.url} width={640} height={640} loading="lazy" decoding="async" alt="Ana Tavares" className="h-auto w-60 shrink-0 rounded-full border-[3px] border-gold shadow-2xl md:w-80" />
          <div className="space-y-4 text-center md:text-left">
            <h2 className="font-serif text-2xl font-extrabold text-gold sm:text-3xl">Quem criou o Código da Pregação Memorável?</h2>
            <span className="inline-block rounded-full border border-gold px-3 py-1 text-xs font-bold text-gold">Mãe de 3 | 15+ anos pregando | Contadora</span>
            <p className="text-sm leading-relaxed text-muted-foreground">Sou a Ana Tavares, mãe de 3 filhos, trabalho em contabilidade e prego a Palavra há mais de 15 anos na minha pequena comunidade. Via as novas pregadoras frustradas porque ninguém prestava atenção nos sermões. Como sempre tive facilidade de pregar de um jeito que todos entendem e se emocionam, analisei o que eu fazia diferente. Percebi que seguia sempre o mesmo processo. Transformei em um template de 12 passos e comecei a ensinar as novatas. O resultado foi unânime. Hoje esse método virou a plataforma para ajudar mulheres como você a pregarem com segurança em 15 minutos.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-2xl space-y-6">
          <h2 className="text-center font-serif text-2xl font-extrabold text-gold">Perguntas Frequentes</h2>
          <div className="space-y-3">
            {faq.map(([q, a], i) => (
              <div key={i} className="rounded-xl border bg-card">
                <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-3 p-4 text-left text-sm font-semibold">
                  {q}
                  <ChevronDown className={`h-4 w-4 shrink-0 text-gold transition-transform ${open === i ? "rotate-180" : ""}`} />
                </button>
                {open === i && <p className="px-4 pb-4 text-sm text-muted-foreground">{a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-2xl space-y-5 rounded-2xl border-2 border-gold/50 bg-card p-6 text-center">
          <div className="mx-auto flex h-28 w-28 flex-col items-center justify-center rounded-full border-4 border-gold bg-background">
            <span className="font-serif text-4xl font-extrabold text-gold">7</span>
            <span className="px-2 text-[9px] font-bold leading-tight">DIAS DE GARANTIA INCONDICIONAL</span>
          </div>
          <h2 className="font-serif text-2xl font-extrabold">Risco Zero Pra Você - 7 Dias de Garantia Incondicional</h2>
          <p className="text-sm text-muted-foreground">
            Risco zero. 7 dias de garantia.


            Teste a plataforma. Se em 7 dias achar que não é pra você, me chama no WhatsApp e devolvo 100% do seu valor. Sem perguntas, sem letra miúda.


            Ou você tem seu esboço em 15 minutos, ou não paga nada.

            O risco é todo meu!
          </p>
          <CTA>QUERO MEU ACESSO COM GARANTIA DE 7 DIAS</CTA>
        </div>
      </section>

      <footer className="border-t px-4 py-6 text-center text-xs text-muted-foreground">
        Compra 100% segura | Acesso imediato por e-mail + WhatsApp | Suporte no WhatsApp
      </footer>

      {upsell && (
        <div onClick={() => setUpsell(false)} className="fixed inset-0 z-50 flex items-center justify-center bg-background/70 p-4 backdrop-blur-sm">
          <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-[400px] space-y-4 rounded-2xl border border-gold/40 bg-card p-6 text-center shadow-2xl">
            <button type="button" aria-label="Fechar" onClick={() => setUpsell(false)} className="absolute right-3 top-2 text-2xl leading-none opacity-60 hover:opacity-100">×</button>
            <h3 className="font-serif text-2xl font-extrabold">Espera! Leve o PREMIUM com desconto hoje?</h3>
            <p className="text-sm text-muted-foreground">Você ia levar 100 esboços por R$19,90. Leve 300 esboços + Bônus Planner da Pregadora por apenas R$24,90/mês.</p>
            <p className="text-lg font-extrabold">De <s className="text-muted-foreground">R$29,90</s> por <span className="text-cta-hover">R$24,90/mês</span></p>
            <a href="https://pay.kiwify.com.br/iFLLrIG" onClick={track} className="btn-cta">SIM, QUERO O PREMIUM POR R$24,90</a>
            <a href="https://pay.kiwify.com.br/d9PSFOK" onClick={track} className="block text-xs underline opacity-70 hover:opacity-100">Não, quero só o Básico mesmo</a>
          </div>
        </div>
      )}
    </main>
  );
}
