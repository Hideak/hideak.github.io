<template>
  <main class="home">
    <div class="container">
      <nav>
        <CardButton
          :src="require('@/assets/icons/projects.svg')"
          alt="Projetos"
          description="Projetos"
        />
        <CardButton
          :src="require('@/assets/icons/curriculum.svg')"
          alt="Currículo"
          description="Currículo"
        />
        <CardButton
          :src="require('@/assets/icons/contact.svg')"
          alt="Contrato"
          description="Contato"
        />
        <CardButton
          :src="require('@/assets/icons/links.svg')"
          alt="Links"
          description="Links"
        />
      </nav>
      <section>
        <article>
          <h1>Bem vindo ao hideak.com</h1>
          <p>
            Olá! Meu nome é Willian Hideak. Sou um desenvolvedor de software e
            estudante de graduação em Engenharia de Controle e Automação na
            Universiade Estadual de Campinas (Unicamp), Brasil. Esta é a minha
            página oficial para publicação de projetos e minhas informações de
            contato.
          </p>
          <p>
            Procurando por mais informações ou um currículo completo? Você pode
            visitar o meu Currículo Lattes, ou então, minha página no LinkedIn.
          </p>
        </article>
      </section>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardButton from "@/components/cards/CardButton.vue";

export default defineComponent({
  name: "Home",
  components: {
    CardButton
  }
});
</script>

<style lang="scss" scoped>
@import "@/styles/mixins";

main {
  // Flexbox
  display: flex;
  justify-content: center;

  div.container {
    // Flexbox
    display: flex;
    flex-direction: column;

    // Spacing and Sizing
    width: 110rem;
    padding: 5rem 10rem;

    // Media Queries
    @include tablet-portrait-size {
      padding: 2.5rem 5rem;
    }

    @include phone-size {
      padding: 2.5rem 2.5rem;
    }

    nav {
      // Flexbox
      display: flex;
      flex-wrap: wrap;

      div.card-button {
        // Spacing
        margin: 0 3rem 3rem 0;

        // Media Queries
        @include tablet-portrait-size {
          // Spacing
          margin: 0 2.25rem 2.25rem 0;
        }

        @include phone-size {
          // Spacing
          margin: 0 1.5rem 1.5rem 0;
        }
      }
    }
  }
}
</style>
