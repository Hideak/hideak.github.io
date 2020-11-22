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
      <article>
        <component :is="'HomePage'" />
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouteLocation } from 'vue-router';
import CardButton from '@/components/cards/CardButton.vue';
import HomePage from '@/pages/HomePage.vue';

export default defineComponent({
  name: 'Home',
  components: {
    CardButton,
    HomePage
  },
  methods: {
    navigateTo(path: RouteLocation): void {
      this.$router.push(path);
    }
  }
});
</script>

<style lang="scss" scoped>
@import '@/styles/mixins';

nav {
  display: flex;
  flex-wrap: wrap;
  gap: 2.25rem;
  margin-bottom: 1rem;

  @include tablet-portrait-size {
    gap: 1.5rem;
  }

  @include phone-size {
    gap: 1rem;
  }
}
</style>
