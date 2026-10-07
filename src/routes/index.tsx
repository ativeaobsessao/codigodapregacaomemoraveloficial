import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Check, ChevronDown, ShieldCheck, Star } from "lucide-react";
import library from "@/assets/library.jpg";
import { Logo } from "@/components/Logo";
import { Carousel } from "@/components/Carousel";

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
  ["Quais são as formas de pagamento?", "Você paga com Pix ou Cartão de Crédito, em pagamento único. Checkout 100% seguro. Assim que o pagamento é aprovado, o acesso já é liberado. Sem mensalidade, sem pegadinha."],
  ["O acesso à plataforma é vitalício mesmo?", "Sim. Você paga uma vez e o acesso é seu pra sempre. Sem mensalidade. Todas as atualizações de esboços que as 22+ validadoras ajudarem a melhorar entram pra você sem custo extra."],
  ["Como e quando eu recebo o acesso? É imediato?", "É imediato. Assim que o pagamento cai, você recebe no seu e-mail e no seu WhatsApp o link de acesso à plataforma Código da Pregação Memorável + o link da pasta no Google Drive organizada por temáticas. É só clicar e entrar."],
  ["Funciona no celular? Eu não sei mexer muito com tecnologia...", "Foi feita justamente pra você, irmã. Plataforma minimalista e super intuitiva, pensada pra pessoas que não tem familiaridade com tecnologia. Não precisa instalar nada. Entra com seu celular mesmo: digita a temática, clica no esboço, clica no botão preto Quero usar com minhas palavras. Tudo salva sozinho. Se fechar e voltar depois, tá lá."],
  ["Posso imprimir e levar pro púlpito? Preciso de internet na hora?", "Pode e deve. Depois de personalizar com suas palavras, você baixa em PDF Premium e leva no papel, ou envia a versão completa pro seu próprio WhatsApp pra consultar na hora da pregação."],
  ["Eu já tenho muitos PDFs de esboços. Qual a diferença?", "PDF é frio, genérico e quase sempre é feito por homem pra homem. Aqui temos uma Biblioteca Inteligente + Editor Minhas Palavras. Você não folheia 500 arquivos. Você busca pela temática da sua pregação, como: [Ansiedade, Medo, Oração, Mulheres da Bíblia] e ainda transforma o esboço na sua mensagem, com o Gancho da sua rotina e com o Espelho Bíblico que te protege de pregar heresia. É sua mensagem, não cópia."],
  ["Qual a diferença entre o Plano Básico e o Plano Premium? Qual devo escolher?", "Essa é simples, irmã: O Plano Básico de R$19,90 já é completo pra você nunca mais travar. Você recebe a plataforma toda: Biblioteca Inteligente com 100 esboços, Template para uma Pregação Memorável com os 12 passos, Editor Minhas Palavras com auto-save, Púlpito em 1 Clique em PDF + WhatsApp e a pasta no Google Drive organizada por 6 temas: Ansiedade/Medo/Coragem, Oração/Presença, Espera/Fé/Perseverança, Mulheres da Bíblia, Cura/Restauração e Família/Perdão. O Plano Premium de R$29,90 é o MAIS VENDIDO porque é a biblioteca completa. É tudo do Básico + 200 esboços extras, totalizando 300 esboços. Entram as temáticas que mais pedem quando já pregam há um tempo: Fé e Avivamento, Espírito Santo, Palavra, Graça e Esperança. E ainda leva 2 bônus exclusivos: Bônus 01 Checklist da Pregação Segura pra nunca mais ter medo de pregar heresia, e Bônus 02 Planner da Pregadora pra organizar seu mês. Se você foi chamada de última hora e precisa resolver amanhã, o Básico já te salva. Se você prega toda semana ou quer ser lembrada como referência na sua comunidade, vai de Premium. São só R$10 a mais e você fica com a biblioteca completa e vitalícia."],
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

function Index() {
  const today = useToday();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <main className="min-h-screen overflow-x-hidden">
      <div className="sticky top-0 z-50 bg-banner px-3 py-2 text-center text-xs font-bold text-banner-foreground sm:text-sm">
        Oferta de Lançamento da Plataforma - Válida até hoje, {today}
      </div>

      {/* HERO */}
      <section className="relative">
        <img src={library} alt="" width={768} height={1344} className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="relative mx-auto max-w-2xl space-y-6 px-4 pb-12 pt-6">
          <div className="flex justify-center"><div className="overflow-hidden rounded-full"><Logo size={120} /></div></div>
          <h1 className="text-center font-serif text-2xl font-extrabold leading-tight sm:text-4xl">
            Está com dificuldade para construir a mensagem da sua pregação?
          </h1>
          <h3 className="text-center font-serif text-lg font-semibold italic leading-snug sm:text-2xl">
            Veja como é simples construir uma mensagem edificante e memorável em 15 minutos👇
          </h3>
          <div id="demonstracao" className="mx-auto flex max-w-[808px] flex-col items-center gap-4 md:flex-row md:items-start md:justify-center md:gap-6">
            <div className="w-full max-w-[380px] space-y-2 text-center">
              <span className="inline-block rounded-full bg-gold px-3 py-1 text-xs font-bold text-primary-foreground">PASSO 1: BIBLIOTECA INTELIGENTE</span>
              <video src="/part01-pv.mp4" autoPlay loop muted playsInline className="w-full rounded-2xl border border-gold/20 shadow-2xl" />
              <p className="text-xs text-muted-foreground">Ache seu tema em segundos</p>
            </div>
            <ArrowDown className="h-8 w-8 shrink-0 animate-bounce text-gold md:mt-48 md:-rotate-90" />
            <div className="w-full max-w-[380px] space-y-2 text-center">
              <span className="inline-block rounded-full bg-gold px-3 py-1 text-xs font-bold text-primary-foreground">PASSO 2: EDITOR MINHAS PALAVRAS</span>
              <video src="/part02-pv.mp4" autoPlay loop muted playsInline className="w-full rounded-2xl border border-gold/20 shadow-2xl" />
              <p className="text-xs text-muted-foreground">Edite com suas palavras - salva sozinho</p>
            </div>
          </div>
          <p className="text-center font-serif text-lg italic text-gold">
            "Depois que comecei a usar o Código, toda vez que prego, escuto que lembraram da minha pregação a semana toda" - Relato de alunas
          </p>
          <CTA>QUERO MEU ACESSO À PLATAFORMA</CTA>
          <p className="flex flex-wrap items-center justify-center gap-x-1 text-center text-xs text-muted-foreground">
            <Star className="h-3 w-3 fill-banner text-banner" />
            +22 mulheres já pregando + 4,9 de satisfação + Compra 100% segura + Garantia 7 dias
          </p>
        </div>
      </section>

      {/* ESBOÇOS */}
      <section className="space-y-6 px-4 py-12">
        <h2 className="mx-auto max-w-xl text-center font-serif text-2xl font-extrabold text-gold">
          Veja Alguns Esboços que Você Tem Acesso Assim que Adquire!
        </h2>
        <Carousel id="carousel-esbocos" label="Imagem do Esboço aqui" />
        <CTA>QUERO MEU ACESSO À PLATAFORMA</CTA>
      </section>

      {/* BENEFÍCIOS */}
      <section className="bg-card/50 px-4 py-12">
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
          <CTA>QUERO MEU ACESSO À PLATAFORMA</CTA>
        </div>
      </section>

      {/* PROVAS */}
      <section className="space-y-6 px-4 py-12">
        <h2 className="mx-auto max-w-xl text-center font-serif text-2xl font-extrabold text-gold">
          QUEM ADQUIRIU ACESSO AO CÓDIGO DA PREGAÇÃO MEMORÁVEL, RECOMENDA!
        </h2>
        <p className="mx-auto max-w-xl text-center text-sm text-muted-foreground">
          +22 pregadoras acessam diariamente e ajudam a melhorar os esboços - para que as novas integrantes como você recebam o melhor material possível!
        </p>
        <Carousel id="carousel-provas" label="Print de WhatsApp aqui" aspect="aspect-[9/16]" />
        <CTA>QUERO MEU ACESSO À PLATAFORMA</CTA>
      </section>

      {/* PLANOS */}
      <section id="planos" className="scroll-mt-10 bg-gradient-to-b from-background to-card/60 px-4 py-12">
        <div className="mx-auto max-w-4xl space-y-8">
          <h2 className="text-center font-serif text-2xl font-extrabold">A Oferta de Lançamento da Plataforma Termina em:</h2>
          <Timer />
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div className="space-y-4 rounded-2xl border bg-card p-6 text-center">
              <h3 className="font-serif text-2xl font-extrabold">PLANO BÁSICO</h3>
              <p className="text-sm">De <s className="text-muted-foreground">R$97</s> por apenas</p>
              <p className="font-serif text-4xl font-extrabold text-gold">R$19,90</p>
              <p className="text-xs text-muted-foreground">Pagamento Único - Acesso Imediato e vitalício</p>
              <a href="#checkout-basico" className="block rounded-full border-2 border-gold py-3 font-bold text-gold hover:bg-gold hover:text-primary-foreground">Quero o Plano Básico</a>
              <ul className="space-y-2 text-left">
                <Item>Template para uma pregação memorável</Item>
                <Item>Biblioteca Inteligente</Item>
                <Item>Editor Minhas Palavras</Item>
                <Item>Baixe em PDF ou compartilhe no WhatsApp</Item>
                <Item>100 Esboços Editáveis</Item>
                <Item>Pasta Google Drive organizadas por temáticas: Ansiedade/Medo/Coragem, Oração/Presença, Espera/Fé/Perseverança, Mulheres da Bíblia, Cura/Restauração, Família/Perdão</Item>
              </ul>
            </div>
            <div className="relative space-y-4 rounded-2xl border-2 border-banner bg-card p-6 pt-8 text-center shadow-[0_0_40px_-10px_var(--banner)]">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-banner px-4 py-1 text-xs font-extrabold text-banner-foreground">MAIS VENDIDO</span>
              <h3 className="font-serif text-2xl font-extrabold">PLANO PREMIUM</h3>
              <p className="text-sm">De <s className="text-muted-foreground">R$197</s> por apenas</p>
              <p className="font-serif text-5xl font-extrabold text-cta-hover">R$29,90</p>
              <p className="text-xs text-muted-foreground">Acesso Vitalício - Pagamento Único</p>
              <a href="#checkout-premium" className="btn-cta">Aproveitar a Oferta Premium</a>
              <ul className="space-y-2 text-left">
                <Item>Tudo do Básico</Item>
                <Item>Biblioteca Completa com 300 esboços editáveis: FÉ E AVIVAMENTO, ESPÍRITO SANTO, PALAVRA, GRAÇA, ESPERANÇA</Item>
                <Item><strong className="text-banner">BÔNUS:</strong> Planner da Pregadora - organize suas pregações do mês em poucos minutos</Item>
              </ul>
              <div className="space-y-1 border-t pt-4 text-xs text-muted-foreground">
                <p className="flex items-center justify-center gap-1"><ShieldCheck className="h-4 w-4 text-gold" />Risco zero: 7 dias de garantia incondicional</p>
                <p>Compra 100% segura - Recebe no e-mail e WhatsApp</p>
              </div>
            </div>
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
    </main>
  );
}
