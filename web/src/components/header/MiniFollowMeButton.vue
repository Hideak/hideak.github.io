<template>
  <a href="https://github.com/hideak/" target="_blank">
    <button>
      {{ `${$root.msg.buttons.followMe.followMeOn} ${$root.msg.buttons.followMe.github}` }}
    </button>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'MiniFollowMeButton'
});
</script>

<style lang="scss" scoped>
@import '@/styles/variables';

button {
  background-color: $button-frost;

  border: 0;
  border-radius: 0.3rem;
  outline: none;

  padding: 0.3rem 0.6rem;

  font-family: $font-family-special;
  color: $font-color-white;

  &:hover {
    cursor: pointer;
    background-color: $button-frost-hover;
  }

  &:active {
    background-color: $button-frost-active;
  }
}

a {
  text-decoration: none;
}
</style>
