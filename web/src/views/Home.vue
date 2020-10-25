<template>
  <div class="content">
    <div class="container">
      <nav>
        <CardButton
          :src="require('@/assets/icons/projects.svg')"
          :alt="$root.msg.cards.projects"
          :description="$root.msg.cards.projects"
          @click="navigateTo({ name: 'ProjectsPage' })"
        />
        <CardButton
          :src="require('@/assets/icons/curriculum.svg')"
          :alt="$root.msg.cards.curriculum"
          :description="$root.msg.cards.curriculum"
          @click="navigateTo({ name: 'CurriculumPage' })"
        />
        <CardButton
          :src="require('@/assets/icons/contact.svg')"
          :alt="$root.msg.cards.contact"
          :description="$root.msg.cards.contact"
          @click="navigateTo({ name: 'ContactPage' })"
        />
        <CardButton
          :src="require('@/assets/icons/links.svg')"
          :alt="$root.msg.cards.links"
          :description="$root.msg.cards.links"
          @click="navigateTo({ name: 'LinksPage' })"
        />
      </nav>
      <audio controls loop>
        <source src="@/assets/audio/dire-dire-docks.mp3" type="audio/mpeg" />
        {{ $root.msg.misc.unsupportedAudio }}
      </audio>
      <article>
        <component :is="'HomePage'" />
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouteLocation } from "vue-router";
import CardButton from "@/components/cards/CardButton.vue";
import HomePage from "@/pages/HomePage.vue";

export default defineComponent({
  name: "Home",
  components: {
    CardButton,
    HomePage
  },
  methods: {
    navigateTo(path: RouteLocation) {
      this.$router.push(path);
    }
  }
});
</script>

<style lang="scss" scoped>
@import "@/styles/mixins";

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
</style>
