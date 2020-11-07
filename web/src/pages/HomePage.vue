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

    <h2>Web Development</h2>
    <div>
      <img src="@/assets/stack/html-5.webp" alt="HTML 5" />
      <img src="@/assets/stack/css-3.webp" alt="CSS 3" />
      <img src="@/assets/stack/javascript.webp" alt="Javascript" />
      <img src="@/assets/stack/typescript.webp" alt="Typescript" />
      <img src="@/assets/stack/java.webp" alt="Java" />
      <img src="@/assets/stack/angular.webp" alt="Angular" />
      <img src="@/assets/stack/vue-js.webp" alt="Vue JS" />
      <img src="@/assets/stack/webpack.webp" alt="Webpack" />
    </div>

    <h2>Desktop</h2>
    <div>
      <img src="@/assets/stack/visual-studio.webp" alt="Visual Studio" />
      <img src="@/assets/stack/c-sharp.webp" alt="C#" />
      <img src="@/assets/stack/c-plus-plus.webp" alt="C++" />
    </div>

    <h2>Data Science</h2>
    <div>
      <img src="@/assets/stack/python.webp" alt="Python" />
      <img src="@/assets/stack/jupyter.webp" alt="Jupyter" />
    </div>

    <h2>Multidisciplinar</h2>
    <div>
      <img src="@/assets/stack/git.webp" alt="Git" />
      <img src="@/assets/stack/github-octocat.webp" alt="Github Octocat" />
      <img src="@/assets/stack/docker.webp" alt="Docker" />
      <img src="@/assets/stack/google-cloud.webp" alt="Google Cloud" />
      <img src="@/assets/stack/vs-code.webp" alt="Visual Studio Code" />
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
