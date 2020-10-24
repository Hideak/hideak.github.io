<template>
  <main class="home">
    <div class="container">
      <nav>
        <CardButton
          :src="require('@/assets/icons/projects.svg')"
          :alt="$root.messages.cards.projects"
          :description="$root.messages.cards.projects"
        />
        <CardButton
          :src="require('@/assets/icons/curriculum.svg')"
          :alt="$root.messages.cards.curriculum"
          :description="$root.messages.cards.curriculum"
        />
        <CardButton
          :src="require('@/assets/icons/contact.svg')"
          :alt="$root.messages.cards.contact"
          :description="$root.messages.cards.contact"
        />
        <CardButton
          :src="require('@/assets/icons/links.svg')"
          :alt="$root.messages.cards.links"
          :description="$root.messages.cards.links"
        />
      </nav>
      <audio controls loop>
        <source src="@/assets/audio/dire-dire-docks.mp3" type="audio/mpeg" />
        {{ $root.messages.misc.unsupportedAudio }}
      </audio>
      <section>
        <article>
          <h1>{{ $root.messages.content.welcome }}</h1>
          <p>{{ $root.messages.content.paragraph1 }}</p>
          <p>{{ $root.messages.content.paragraph2 }}</p>
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
  display: flex;
  justify-content: center;

  div.container {
    display: flex;
    flex-direction: column;

    width: 110rem;
    padding: 5rem 10rem;

    @include tablet-portrait-size {
      padding: 2.5rem 5rem;
    }

    @include phone-size {
      padding: 2.5rem 2.5rem;
    }

    nav {
      display: flex;
      flex-wrap: wrap;

      div.card-button {
        margin: 0 3rem 3rem 0;

        @include tablet-portrait-size {
          margin: 0 2.25rem 2.25rem 0;
        }

        @include phone-size {
          margin: 0 1.5rem 1.5rem 0;
        }
      }
    }

    audio {
      width: 100%;
      outline: none;
    }
  }
}
</style>
