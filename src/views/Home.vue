<template>
  <main class="container mx-autoflex flex-col lg:px-0 px-5">
    <section class="flex flex-wrap lg:justify-start justify-center">
      <Provider v-for="(v, k) in providers" :key="k" :name="k" :provider="v" />
      <Card class="flex justify-center px-7 opacity-80">
        <h3 class="text-red text-sm uppercase font-semibold mb-2.5">
          Your provider is not here?
        </h3>
        <p class="text-sm text-black">
          Create an
          <a
            class="text-red hover:underline"
            href="https://github.com/checkly/jamstack-deploy/issues"
            rel="noopener"
            target="_blank"
          >
            issue</a
          >
          on GitHub.
        </p>
      </Card>
    </section>
  </main>
</template>

<script>
import { ref } from "vue";

import Card from "@/components/Card";
import Provider from "@/components/Provider";
import { provdersList } from "@/services/providers";

function shuffleProviders(providers) {
  const array = Object.keys(providers);
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  const shuffledProviders = {};
  array.forEach(key => (shuffledProviders[key] = providers[key]));

  console.log(array);
  return shuffledProviders;
}

export default {
  name: "Home",

  components: { Provider, Card },

  setup() {
    const providers = ref(shuffleProviders(provdersList));

    return { providers };
  }
};
</script>

<style scoped></style>
