<template>
  <a href="https://github.com/hideak/" target="_blank">
    <button>
      <div class="icon">
        <img src="@/assets/icons/github-white.svg" alt="Github Logo" />
      </div>
      <div class="content">
        <div class="title">
          {{ $root.msg.buttons.followMe.followMeOn }}
        </div>
        <div class="subtitle">{{ $root.msg.buttons.followMe.github }}</div>
      </div>
    </button>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'FollowMeButton'
});
</script>

<style lang="scss" scoped>
@import '@/styles/variables';

button {
  display: flex;
  align-items: center;

  background-color: $button-light-frost;

  border: 3px solid $border-white;
  border-radius: 1.2rem;
  box-shadow: 2px 2px 4px $box-shadow;
  outline: none;

  width: 21rem;
  height: 8rem;

  &:hover {
    cursor: pointer;
  }

  div.icon {
    margin: 0 1.3rem;

    img {
      height: 5rem;
    }
  }

  div.content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    font-family: $font-family-special;
    color: $font-color-white;

    div.title {
      font-size: 1.2rem;
    }

    div.subtitle {
      font-size: 2rem;
    }
  }
}

a {
  text-decoration: none;
}
</style>
