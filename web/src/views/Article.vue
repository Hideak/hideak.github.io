<template>
  <main class="content">
    <article class="container">
      <component :is="article" />
    </article>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectsPage from "@/pages/ProjectsPage.vue";
import CurriculumPage from "@/pages/CurriculumPage.vue";
import ContactPage from "@/pages/ContactPage.vue";
import LinksPage from "@/pages/LinksPage.vue";

export default defineComponent({
  name: "Article",
  components: {
    ProjectsPage,
    CurriculumPage,
    ContactPage,
    LinksPage
  },
  props: {
    article: String
  }
});
</script>
