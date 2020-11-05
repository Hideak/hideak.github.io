<template>
  <div>
    <h1>Projetos em Programação</h1>
    <p>
      Nesta página, estão alguns links para diferentes projetos pessoais e outros que foram
      desenvolvidos ao longo da minha vida acadêmica e profissional.
    </p>
    <h2>Esta página (hideak.com) é um PWA!</h2>
    <p>
      Esta página é um PWA (Progressive Web App) com nota 98/100 de performance no Google Lighthouse
      \o/.
    </p>
    <p>
      Desenvolvido utilizando Vue 3.0 com HTML, Typescript, SCSS, com design modularizado, baseado
      em componentes, responsivo e instalável em dispositivos Desktop e Mobile. Servido sob HTTPS no
      GitHub Pages com testes de build e deploy automatizados.
    </p>
    <h2>EGGTol: Error Generator for Geometric Tolerancing</h2>
    <p>
      EGGTol é um software para sistemas Windows que utiliza OpenCASCADE e PyQT para realizar a
      leitura e interpretação de arquivos CAD (Computer Aided Design) de peças e montagens. A partir
      da leitura do arquivo, é possível adicionar uma nuvem de pontos à superfície, além de inserir
      erros geométricos artificiais para futuros estudos de toleranciamento e propagação de erros em
      datums (referências).
    </p>
    <h2>Heartbeat</h2>
    <p>
      Heartbeat é um site feito com Javascript puro que utiliza a câmera de seu computador para
      estimar os batimentos cardíacos de uma pessoa através da variação de luminosidade ao repousar
      o dedo indicador sobre a lente. Funciona de forma razoável para ambientes de iluminação média,
      isto é, quando uma pequena quantidade de luz ainda é capturada pela câmera mesmo com o dedo
      indicador repousado.
    </p>
    <h2>Market Web App</h2>
    <p>
      Market Web App é uma aplicação Web para registro de vendas, produtos e clientes de pequenos
      negócios. Inicialmente, a aplicação foi desenvolvida fora do contexto das aplicações Web e
      utilizava um sistema baseado no Microsoft Access. Algumas versões legadas do sistema ainda
      encontram-se em algumas agropecuárias da cidade de Indaiatuba/SP.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({ name: 'ProjectsPage' });
</script>
