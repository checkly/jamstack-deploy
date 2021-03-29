<template>
  <Card class="hover:cursor-pointer">
    <router-link
      :to="`/map/${name}`"
      class="flex h-3/4 justify-center items-center"
    >
      <img
        :src="logo"
        :style="provider.logo.style"
        :alt="provider.displayName"
      />
    </router-link>
    <div class="flex h-1/4 justify-between items-end">
      <a
        class="text-sm text-red"
        :href="provider.link"
        target="_blank"
        rel="noopener"
        :title="provider.displayName"
        >{{ link }}</a
      >
      <span class="text-xs text-gray">{{ "~XXms." }} </span>
    </div>
  </Card>
</template>

<script>
import Card from "@/components/Card";
export default {
  name: "Provider",
  components: { Card },

  props: {
    name: { type: String, required: true },
    provider: { type: Object, required: true }
  },

  computed: {
    logo() {
      return `/images/logos/${this.name}.${this.provider.logo.ext}`;
    },

    link() {
      return this.provider.link.replace("https://", "");
    }
  }
};
</script>

<style scoped></style>
