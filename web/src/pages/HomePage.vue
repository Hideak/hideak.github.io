<template>
  <div>
    <h1>Bem vindo ao hideak.com</h1>
    <p>
      Olá! Meu nome é Willian Hideak. Sou um desenvolvedor de software e estudante de graduação em
      Engenharia de Controle e Automação na Universiade Estadual de Campinas (Unicamp), Brasil. Esta
      é a minha página oficial para publicação de projetos e minhas informações de contato.
    </p>

    <h1>Informações de contato</h1>
    <p>
      Procurando por mais informações ou um currículo completo? Você pode visitar o meu
      <a rel="noreferrer" href="http://lattes.cnpq.br/1071757822049421">Currículo Lattes</a>, ou
      então, minha página no
      <a rel="noreferrer" href="https://linkedin.com/in/whideak">LinkedIn</a>.
    </p>

    <h1>Tecnologias e Ferramentas</h1>

    <h2>Front-end</h2>
    <div>
      <img src="@/assets/stack/html-5.png" alt="HTML 5" />
      <img src="@/assets/stack/css-3.png" alt="CSS 3" />
      <img src="@/assets/stack/javascript.png" alt="Javascript" />
      <img src="@/assets/stack/typescript.png" alt="Typescript" />
      <img src="@/assets/stack/angular.png" alt="Angular" />
      <img src="@/assets/stack/vue-js.png" alt="Vue JS" />
      <img src="@/assets/stack/webpack.png" alt="Webpack" />
    </div>

    <h2>Back-end</h2>
    <div>
      <img src="@/assets/stack/java.png" alt="Java" />
    </div>

    <h2>Desktop</h2>
    <div>
      <img src="@/assets/stack/visual-studio.png" alt="Visual Studio" />
      <img src="@/assets/stack/c-sharp.png" alt="C#" />
      <img src="@/assets/stack/c-plus-plus.png" alt="C++" />
    </div>

    <h2>Data Science</h2>
    <div>
      <img src="@/assets/stack/python.png" alt="Python" />
      <img src="@/assets/stack/jupyter.png" alt="Jupyter" />
    </div>

    <h2>Multidisciplinar</h2>
    <div>
      <img src="@/assets/stack/git.png" alt="Git" />
      <img src="@/assets/stack/github-octocat.png" alt="Github Octocat" />
      <img src="@/assets/stack/docker.png" alt="Docker" />
      <img src="@/assets/stack/google-cloud.png" alt="Google Cloud" />
      <img src="@/assets/stack/vs-code.png" alt="Visual Studio Code" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({ name: 'HomePage' });
</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';

img {
  height: 6rem;
  margin: 0 2rem 1rem 0;

  @include tablet-portrait-size {
    height: 5rem;
    margin: 0 1.3rem 0.6rem 0;
  }

  @include phone-size {
    height: 4rem;
    margin: 0 1rem 0.5rem 0;
  }
}
</style>
