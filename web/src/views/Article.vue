<template>
  <main class="content">
    <article class="container">
      <component :is="article" />
    </article>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomePage from "@/pages/HomePage.vue";
import ProjectsPage from "@/pages/ProjectsPage.vue";

export default defineComponent({
  name: "Article",
  components: {
    ProjectsPage,
    HomePage
  },
  props: {
    article: String
  }
});
</script>
