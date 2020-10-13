<template>
  <header>
    <div class="container">
      <div class="headline">
        <div class="welcome-text">
          <div class="title">{{ $root.messages.header.title }}</div>
          <div class="subtitle">{{ $root.messages.header.subtitle }}</div>
        </div>
        <div class="follow-me">
          <FollowMeButton />
        </div>
      </div>
      <div class="mini-follow-me">
        <MiniFollowMeButton />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FollowMeButton from "@/components/header/FollowMeButton.vue";
import MiniFollowMeButton from "@/components/header/MiniFollowMeButton.vue";

export default defineComponent({
  name: "AppHeader",
  components: {
    FollowMeButton,
    MiniFollowMeButton
  }
});
</script>

<style lang="scss" scoped>
@import "@/styles/variables";
@import "@/styles/mixins";

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
    flex-direction: column;

    // Spacing and Sizing
    width: 110rem;
    padding: 2.5rem 10rem;

    // Media Queries
    @include tablet-portrait-size {
      padding: 2.5rem 5rem;
    }

    @include phone-size {
      padding: 2.5rem 5rem;
    }

    div.headline {
      // Flexbox
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      div.welcome-text {
        div.title {
          // Typography
          color: $font-white;
          font-size: 4.8rem;

          // Media Queries
          @include phone-size {
            font-size: 4rem;
          }
        }

        div.subtitle {
          // Typography
          color: $font-light-blue;
          font-size: 2.4rem;

          // Media Queries
          @include phone-size {
            font-size: 2rem;
          }
        }
      }

      div.follow-me {
        // Media Queries
        @include tablet-portrait-size {
          display: none;
        }

        @include phone-size {
          display: none;
        }
      }
    }

    div.mini-follow-me {
      // Default Display
      display: none;

      // Spacing
      margin-top: 1.6rem;

      // Media Queries
      @include tablet-portrait-size {
        display: block;
      }

      @include phone-size {
        display: block;
      }
    }
  }
}
</style>
