<template>
  <a href="https://github.com/hideak/" target="_blank">
    <button>
      {{
        `${$root.messages.buttons.followMe.followMeOn} ${$root.messages.buttons.followMe.github}`
      }}
    </button>
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "MiniFollowMeButton"
});
</script>

<style lang="scss" scoped>
@import "@/styles/variables";

button {
  // Background
  background-color: $button-frost;

  // Borders and Shadows
  border: 0;
  border-radius: 0.3rem;
  outline: none;

  // Spacing
  padding: 0.3rem 0.6rem;

  // Typography
  font-family: "Architects Daughter";
  color: $font-white;

  // Effects
  &:hover {
    // Cursor
    cursor: pointer;

    // Background
    background-color: $button-frost-hover;
  }

  // Effects
  &:active {
    // Background
    background-color: $button-frost-active;
  }
}
</style>
