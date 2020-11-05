<template>
  <main class="content">
    <article class="container">
      <component :is="article" />
    </article>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Article',
  props: {
    article: String
  }
});
</script>
