<template>
  <header>
    <div class="container">
      <div class="welcome-text">
        <div class="title">{{ $root.messages.header.title }}</div>
        <div class="subtitle">{{ $root.messages.header.subtitle }}</div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppHeader"
});
</script>

<style scoped lang="scss">
@import "@/styles/variables";

header {
  // Flexbox
  display: flex;
  justify-content: center;

  // Background
  background: linear-gradient(180deg, $header-dark 0%, $header-light 100%);

  // Typography
  font-family: "Architects Daughter";

  div.container {
    // Flexbox
    display: flex;
    justify-content: space-between;

    // Spacing and Sizing
    width: 116rem;
    padding: 2.5rem 10rem;

    div.welcome-text {
      div.title {
        // Typography
        color: $font-white;
        font-size: 4.8rem;
      }

      div.subtitle {
        // Typography
        color: $font-light-blue;
        font-size: 2.4rem;
      }
    }
  }
}
</style>
