<template>
  <a href="https://github.com/hideak/" target="_blank">
    <button>
      <div class="icon">
        <img src="@/assets/icons/github-white.svg" alt="Github Logo" />
      </div>
      <div class="content">
        <div class="title">
          {{ $root.messages.buttons.followMe.followMeOn }}
        </div>
        <div class="subtitle">{{ $root.messages.buttons.followMe.github }}</div>
      </div>
    </button>
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "FollowMeButton"
});
</script>

<style lang="scss" scoped>
@import "@/styles/variables";
@import "@/styles/mixins";

button {
  // Flexbox
  display: flex;
  align-items: center;

  // Background
  background-color: transparent;

  // Borders and Shadows
  border: 3px solid $border-white;
  border-radius: 1.2rem;
  box-shadow: 2px 2px 4px $box-shadow;
  outline: none;

  // Sizing and Spacing
  width: 21rem;
  height: 8rem;

  // Media Queries
  @include tablet-portrait-size {
    display: none;
  }

  @include phone-size {
    display: none;
  }

  // Effects
  &:hover {
    cursor: pointer;
  }

  div.icon {
    // Spacing
    margin: 0 1.3rem;

    img {
      // Sizing
      height: 5rem;
    }
  }

  div.content {
    // Flexbox
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    // Typography
    font-family: "Architects Daughter";
    color: $font-white;

    div.title {
      // Typography
      font-size: 1.2rem;
    }

    div.subtitle {
      // Typography
      font-size: 2rem;
    }
  }
}
</style>
