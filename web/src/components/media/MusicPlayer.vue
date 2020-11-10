<template>
  <div class="music-player">
    <audio :id="id" hidden controls loop>
      <source :src="src" type="audio/mpeg" />
      {{ $root.msg.misc.unsupportedAudio }}
    </audio>
    <img src="@/assets/icons/step-backward-solid.svg" alt="Step Backward" />
    <img v-show="!isPlaying" src="@/assets/icons/play-solid.svg" alt="Play" @click="play()" />
    <img v-show="isPlaying" src="@/assets/icons/pause-solid.svg" alt="Pause" @click="pause()" />
    <img src="@/assets/icons/step-forward-solid.svg" alt="Step Forward" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'MusicPlayer',
  props: {
    id: String,
    src: String
  },
  data() {
    return {
      isPlaying: false
    };
  },
  methods: {
    play() {
      const audioElement: HTMLAudioElement = document.querySelector(
        `#${this.id}`
      ) as HTMLAudioElement;
      audioElement.play();
      this.isPlaying = true;
    },
    pause() {
      const audioElement: HTMLAudioElement = document.querySelector(
        `#${this.id}`
      ) as HTMLAudioElement;
      audioElement.pause();
      this.isPlaying = false;
    }
  }
});
</script>

<style lang="scss" scoped>
img {
  height: 1.5rem;
  margin-right: 1.5rem;

  &:hover {
    cursor: pointer;
  }
}
</style>
