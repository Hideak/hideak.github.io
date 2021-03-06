<template>
  <header class="app-header">
    <div class="container">
      <div class="headline">
        <div class="welcome-text" @click="navigateTo({ name: 'Home' })">
          <div class="title">{{ $root.msg.header.title }}</div>
          <div class="subtitle">{{ $root.msg.header.subtitle }}</div>
        </div>
        <div class="follow-me">
          <FollowMeButton />
        </div>
      </div>
      <div class="subline">
        <div class="mini-follow-me">
          <MiniFollowMeButton />
        </div>
        <MusicPlayer :id="app - music" :src="require('@/assets/audio/dire-dire-docks.mp3')" />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouteLocation } from 'vue-router';
import FollowMeButton from '@/components/header/FollowMeButton.vue';
import MiniFollowMeButton from '@/components/header/MiniFollowMeButton.vue';
import MusicPlayer from '@/components/media/MusicPlayer.vue';

export default defineComponent({
  name: 'AppHeader',
  components: {
    FollowMeButton,
    MiniFollowMeButton,
    MusicPlayer
  },
  methods: {
    navigateTo(path: RouteLocation): void {
      this.$router.push(path);
    }
  }
});
</script>

<style lang="scss" scoped>
@import '@/styles/variables';
@import '@/styles/mixins';

header.app-header {
  display: flex;
  justify-content: center;

  background: linear-gradient(180deg, $header-dark 0%, $header-light 100%);

  font-family: $font-family-special;

  div.container {
    display: flex;
    flex-direction: column;

    width: 110rem;
    padding: 2.5rem 10rem;

    @include tablet-portrait-size {
      padding: 2.5rem 5rem;
    }

    @include phone-size {
      padding: 2.5rem 2.5rem;
    }

    div.headline {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      div.welcome-text {
        div.title {
          color: $font-color-white;
          font-size: 4.8rem;

          @include phone-size {
            font-size: 4rem;
          }
        }

        div.subtitle {
          color: $font-color-light-blue;
          font-size: 2.4rem;
          margin-right: 1rem;

          @include phone-size {
            font-size: 2rem;
          }
        }
      }

      div.follow-me {
        @include tablet-portrait-size {
          display: none;
        }

        @include phone-size {
          display: none;
        }
      }

      &:hover {
        cursor: pointer;
      }
    }

    div.subline {
      display: flex;
      align-items: flex-end;
      margin-top: 1.6rem;

      div.mini-follow-me {
        display: none;

        @include tablet-portrait-size {
          display: block;
        }

        @include phone-size {
          display: block;
        }
      }

      div.music-player {
        @include tablet-portrait-size {
          margin-top: 0;
          margin-left: 2rem;
        }

        @include phone-size {
          margin-top: 0;
          margin-left: 2rem;
        }
      }
    }
  }
}
</style>
