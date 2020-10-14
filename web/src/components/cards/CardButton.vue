<template>
  <div class="card-button">
    <div class="icon">
      <img :src="src" :alt="alt" />
    </div>
    <div class="description">{{ description }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardButton",
  props: {
    src: String,
    alt: String,
    description: String
  }
});
</script>

<style lang="scss" scoped>
@import "@/styles/variables";
@import "@/styles/mixins";

div.card-button {
  // Flexbox
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  // Typography
  font-family: "Architects Daughter";
  font-size: 2rem;
  margin: 2rem 0;

  // Background
  background-color: $card-background;

  // Borders and Shadows
  box-shadow: 2px 2px 4px 0px $box-shadow;
  outline: none;

  // Sizing and Spacing
  width: 11rem;
  height: 16rem;

  // Media Queries
  @include tablet-portrait-size {
    // Sizing
    width: 8.25rem;
    height: 12rem;

    // Typography
    font-size: 1.5rem;
  }

  @include phone-size {
    // Sizing
    width: 6.875rem;
    height: 11rem;

    // Typography
    font-size: 1.25rem;
  }

  // Transitions
  transition: transform 0.1s ease-in;

  // Effects
  &:hover {
    cursor: pointer;
    transform: scale(1.1);

    &:active {
      background-color: $card-background-active;
    }
  }

  img {
    // Sizing
    height: 5rem;

    // Media Queries
    @include tablet-portrait-size {
      // Sizing
      height: 3.75rem;
    }

    @include phone-size {
      // Sizing
      height: 3.125rem;
    }
  }

  div.description {
    // Spacing
    margin: 2rem 0;

    // Media Queries
    @include tablet-portrait-size {
      // Spacing
      margin: 1.5rem 0;
    }

    @include phone-size {
      // Spacing
      margin: 1.25rem 0;
    }
  }
}
</style>
