<template>
  <main class="container mx-autoflex flex-col lg:px-0 px-5">
    <section class="flex flex-wrap justify-center items-center">
      <h2 class="text-xl text-red mt-5 mb-2">What is it?</h2>
      <p class="mb-5">
        Jamstackdeploy monitors the performance of PaaS providers from 20+
        locations across the world, so you don't have to. Whether you are
        looking for a provider and do not know which one will suit you best, or
        if you are already a pro and want to nerd out on performance stats,
        we've got you covered.
      </p>
      <h2 class="text-xl text-red mb-2">How does it work?</h2>
      <p class="mb-5">
        The process is quite simple. We create a basic
        <a href="https://nuxtjs.org/" class="underline">Nuxt.js</a> static web
        app (the same app you get when you run
        <a
          href="https://nuxtjs.org/docs/2.x/get-started/installation#using-create-nuxt-app"
          class="underline"
          >create-nuxt-app</a
        >) and deploy it to all providers. We then keep it monitored via
        <a
          href="https://www.checklyhq.com/product/synthetic-monitoring/"
          class="underline"
          >Checkly browser checks</a
        >, recording
        <a
          href="https://developer.chrome.com/docs/devtools/network/reference/#timing-explanation"
          class="underline"
          >key timings</a
        >
        on each execution. We run one check every five minutes, alternating
        locations in a round-robin fashion.
      </p>
      <h2 class="text-xl text-red mb-2">How can it help?</h2>
      <p class="mb-5">
        If you are interested in the Jamstack, chances are that you are already
        a performance freak, and value speed highly when it comes to user
        experience. Jamstackdeploy allows you to quickly tell how the different
        providers stack up across time and across the globe, providing the data
        you need to make informed decisions.
      </p>
    </section>
  </main>
</template>

<script>
export default {
  name: "About"
};
</script>

<style scoped></style>
