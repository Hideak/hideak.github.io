<template>
  <div class="card-button">
    <div class="icon">
      <img :src="src" :alt="alt" />
    </div>
    <div class="description">{{ description }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardButton',
  props: {
    src: String,
    alt: String,
    description: String
  }
});
</script>

<style lang="scss" scoped>
@import '@/styles/variables';
@import '@/styles/mixins';

div.card-button {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  font-family: 'Architects Daughter';
  font-size: 2rem;
  margin: 2rem 0;

  background-color: $card-background;

  box-shadow: 2px 2px 4px 0px $box-shadow;
  outline: none;

  width: 11rem;
  height: 16rem;

  @include tablet-portrait-size {
    width: 8.25rem;
    height: 12rem;

    font-size: 1.5rem;
  }

  @include phone-size {
    width: 6.875rem;
    height: 11rem;

    font-size: 1.25rem;
  }

  transition: transform 0.1s ease-in;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);

    &:active {
      background-color: $card-background-active;
    }
  }

  img {
    height: 5rem;

    @include tablet-portrait-size {
      height: 3.75rem;
    }

    @include phone-size {
      height: 3.125rem;
    }
  }

  div.description {
    margin: 2rem 0;

    @include tablet-portrait-size {
      margin: 1.5rem 0;
    }

    @include phone-size {
      margin: 1.25rem 0;
    }
  }
}
</style>
