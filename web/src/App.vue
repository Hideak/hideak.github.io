<template>
  <app-header />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "@/components/header/AppHeader.vue";
import appMessages from "@/messages/app-messages.ts";

export default defineComponent({
  name: "App",
  data() {
    return {
      msg: appMessages
    };
  },
  components: {
    AppHeader
  }
});
</script>

<style lang="scss">
@import "@/styles/global.scss";
</style>
