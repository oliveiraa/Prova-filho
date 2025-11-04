
import React from 'react';
import type { Module, QuizQuestion } from './types';

export const STUDY_CONTENT: Module[] = [
  {
    title: 'Módulo 1: Nosso Planeta-Casa, a Terra 🌎',
    missions: [
      {
        title: 'O Formato e os "Desenhos" da Terra',
        content: (
          <div>
            <p className="mb-2"><strong>Qual é o formato da Terra?</strong> Como vimos no vídeo, quando nos afastamos muito do planeta, percebemos que ele é uma grande <strong>esfera</strong>! O nome científico para esse formato quase redondo é <strong>geóide</strong>.</p>
            <p><strong>Como representamos a Terra?</strong> Para estudar nosso planeta, usamos duas formas principais:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li><strong>Globo Terrestre:</strong> É o melhor jeito de ver o formato real, redondo, do nosso planeta.</li>
              <li><strong>Planisfério (ou Mapa-Múndi):</strong> É como se "abríssemos" o globo e o deixássemos plano. É ótimo para ver todos os continentes e oceanos de uma vez só!</li>
            </ul>
          </div>
        ),
        imagePrompt: "A cute, cartoon-style illustration of planet Earth as a sphere (geoid) next to a flat world map (planisphere). The style should be friendly and colorful for a 9-year-old's science lesson."
      },
      {
        title: 'Planeta Água! 💧',
        content: (
          <div>
            <p className="mb-2"><strong>Por que "Planeta Azul"?</strong> A Terra é chamada de <strong>Planeta Azul</strong> porque ela tem <strong>mais água do que terra</strong>! Cerca de 75% da superfície é coberta por água.</p>
            <p className="mb-2"><strong>A Divisão da Água:</strong> Prepare-se para um dado incrível:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li><strong>97,5%</strong> de toda a água do planeta é <strong>SALGADA</strong> (mares e oceanos).</li>
              <li>Apenas <strong>2,5%</strong> é <strong>ÁGUA DOCE</strong>!</li>
            </ul>
            <p className="mt-2">A maior parte da água doce está "presa" em <strong>geleiras</strong> ou embaixo da terra. E quem mais usa água doce é a <strong>AGRICULTURA</strong> (cerca de 70%)!</p>
          </div>
        ),
        imagePrompt: "A vibrant cartoon illustration showing Earth as the 'Blue Planet', with 75% covered in water. A simple, clear pie chart next to it shows that 97.5% of the water is salty and only 2.5% is fresh water. Educational and fun for kids."
      },
      {
        title: 'Uma Viagem ao Centro da Terra!',
        content: (
           <div>
            <p className="mb-2">A Terra é feita de camadas, como uma cebola. As três camadas principais são:</p>
            <ol className="list-decimal list-inside ml-4 mt-2 space-y-1">
              <li><strong>Crosta Terrestre:</strong> É a "casca" fininha do nosso planeta onde nós vivemos.</li>
              <li><strong>Manto:</strong> Fica logo abaixo da crosta. É a camada mais grossa, formada por rochas superquentes que formam o <strong>magma</strong>.</li>
              <li><strong>Núcleo:</strong> É o centro do planeta. É a parte mais quente de todas!</li>
            </ol>
          </div>
        ),
        imagePrompt: "A simple, clear, cartoon-style cutaway diagram of Planet Earth showing its three main layers: a thin outer Crust, a thick orange Mantle with magma, and a hot, bright inner Core. Label each layer clearly. For a 9-year-old's science lesson."
      },
    ]
  },
  {
    title: 'Módulo 2: Explorando o Céu! ✨',
    missions: [
      {
        title: 'Os Detetives do Céu: Instrumentos de Observação',
        content: (
          <div>
            <p className="mb-2">Para olhar para o céu, usamos instrumentos poderosos:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li><strong>Luneta:</strong> Um dos primeiros, usado por Galileu Galilei!</li>
                <li><strong>Telescópio:</strong> Uma versão super potente da luneta. O de Newton usava espelhos!</li>
                <li><strong>Binóculos:</strong> Ótimos para começar a observar.</li>
                <li><strong>Radiotelescópios:</strong> "Ouvem" as ondas de rádio do espaço.</li>
                <li><strong>Telescópios Espaciais (como o Hubble):</strong> Ficam no espaço para tirar fotos perfeitas!</li>
            </ul>
          </div>
        ),
        imagePrompt: "A fun cartoon illustration for a child's science lesson, showing a variety of astronomy tools: a simple telescope (lunette), a bigger reflector telescope, binoculars, a giant radio telescope dish, and the Hubble Space Telescope floating in space."
      },
      {
        title: 'Heróis da Astronomia',
        content: (
          <div>
            <p className="mb-2">Dois nomes são super importantes nessa história:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
                <li><strong>Galileu Galilei:</strong> Descobriu que a Lua tem <strong>montes e crateras</strong>, que Júpiter tem <strong>4 luas</strong> e ajudou a provar que a Terra gira <strong>ao redor do Sol (Heliocentrismo)</strong>.</li>
                <li><strong>Isaac Newton:</strong> Criou o telescópio refletor, que era menor e mais potente.</li>
            </ul>
          </div>
        ),
        imagePrompt: "A cute cartoon illustration featuring Galileo Galilei looking through his telescope at Jupiter and its moons, and Isaac Newton next to his reflector telescope. The style should be friendly and educational for a 9-year-old."
      },
      {
        title: 'Decifrando o Dia e a Noite',
        content: (
          <div>
            <p className="mb-2">O dia e a noite acontecem por causa do movimento de <strong>rotação</strong> do nosso planeta.</p>
            <p>A Terra gira como um pião. O lado que está virado para o <strong>Sol</strong> recebe luz, então é <strong>DIA</strong>. O lado que fica de costas para o Sol fica no escuro, então é <strong>NOITE</strong>.</p>
          </div>
        ),
        imagePrompt: "A simple and clear cartoon illustration explaining day and night. It shows the Sun on one side and the Earth rotating like a spinning top. One half of the Earth facing the sun is bright (Day), and the other half is dark (Night). For a 9-year-old."
      }
    ]
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
    {
        question: "Qual é o nome do formato quase redondo do planeta Terra?",
        context: "O formato da Terra é uma esfera. O nome científico para esse formato quase redondo é geóide."
    },
    {
        question: "Por que a Terra é chamada de Planeta Azul?",
        context: "A Terra é chamada de Planeta Azul porque ela tem mais água do que terra. Cerca de 75% da superfície é coberta por água."
    },
    {
        question: "Quais são as três camadas principais da Terra, de fora para dentro?",
        context: "As três camadas principais da Terra são: Crosta Terrestre (a casca onde vivemos), Manto (camada mais grossa com magma) e Núcleo (o centro quente)."
    },
    {
        question: "Qual foi a descoberta de Galileu sobre a Lua?",
        context: "Galileu Galilei descobriu que a superfície da Lua não é lisa! Ela tem montes e crateras, parecida com a Terra."
    },
    {
        question: "O que causa o dia e a noite?",
        context: "O dia e a noite acontecem por causa do movimento de rotação do nosso planeta. O lado virado para o Sol é dia, e o lado oposto é noite."
    },
    {
        question: "A maior parte da água da Terra é doce ou salgada?",
        context: "97,5% de toda a água do planeta é SALGADA (mares e oceanos). Apenas 2,5% é ÁGUA DOCE."
    }
];
