<template>
  <main class="expand container mx-autoflex flex-col lg:px-0 px-5">
    <div
      class="flex mt-16 justify-center items-center text-xl font-semibold text-black"
      v-if="isLoading"
    >
      <span class="animate-spin mr-2 text-2xl" role="img">🦝</span>
      <span class="animate-bounce"
        >Getting checks from Checkly Public API...</span
      >
    </div>
    <template v-else>
      <router-link to="/" class="text-gray-dark hover:underline flex">
        <div class="flex justify-center items-center">
          <img
            src="@/assets/arrow-left.svg"
            class="mr-2 w-4 h-4"
            alt="Arrow back"
          />
          Back to providers
        </div>
      </router-link>
      <section class="rouned border-pink border rounded-md mt-4">
        <header
          class="flex justify-between items-center px-5 py-4 border-pink border-b"
        >
          <img
            class="w-32"
            :src="`/images/logos/${route.params.provider}.${provider.logo.ext}`"
            :alt="route.params.provider"
          />

          <div class="flex flex-col">
            <h3 class="text-lg text-right text-black">
              {{ provider.displayName }}
            </h3>
            <a class="text-sm text-red" :href="provider.link" rel="noopener">{{
              provider.link.replace("https://", "")
            }}</a>
          </div>
        </header>

        <div class="flex px-4 justify-between mt-2.5 font-semibold">
          <p class="text-gray  text-xs">
            Get more data about the latest 7 days
            <a
              href="https://status.jamstackdeploy.com"
              class="text-red hover:underline"
              target="_blank"
              rel="noopener"
              >here</a
            >.
          </p>
          <p class="text-xxs">
            <span class="text-green mr-2">* TTFB &lt; 200ms </span>
            <span class="text-yellow mr-2">TTFB &gt;= 200ms &lt; 500ms</span>
            <span class="text-red">TTFB &gt;= 500ms </span>
          </p>
        </div>

        <div class="bg-white md:px-60 px-4 py-14">
          <RegionsMap :regions="checksByRegion" />
        </div>

        <div class="px-7 pb-16 flex justify-center">
          <RegionsTable :check-results="checksByRegionArray" />
        </div>
      </section>
    </template>
  </main>
</template>

<script>
import { useRoute } from "vue-router";
import { ref, computed, onBeforeMount } from "vue";

import { provdersList } from "@/services/providers";
import { getCheckResults } from "@/services/checkly";

import RegionsMap from "@/components/RegionsMap";
import RegionsTable from "@/components/RegionsTable";

export default {
  name: "Map",

  components: { RegionsMap, RegionsTable },

  setup() {
    const route = useRoute();
    const checks = ref([]);
    const isLoading = ref(true);
    const checkResults = ref([]);

    const provider = ref(provdersList[route.params.provider]);
    const logo = ref(provider.value.logoExt);

    const checksByRegion = computed(() => {
      const checksByRegion = {};
      checkResults.value.forEach(result => {
        if (!checksByRegion[result.runLocation]) {
          checksByRegion[result.runLocation] = {
            qty: 1,
            startedAt: result.startedAt,
            runLocation: result.runLocation,
            ttfb: result.apiCheckResult.response.timingPhases?.firstByte,
            total: result.apiCheckResult.response.timingPhases?.total,
            download: result.apiCheckResult.response.timingPhases?.download,
            wait: result.apiCheckResult.response.timingPhases?.wait,
            tcp: result.apiCheckResult.response.timingPhases?.tcp,
            dns: result.apiCheckResult.response.timingPhases?.dns
          };
        } else {
          checksByRegion[result.runLocation].qty += 1;
          checksByRegion[result.runLocation].ttfb +=
            result.apiCheckResult.response.timingPhases?.firstByte;
          checksByRegion[result.runLocation].total +=
            result.apiCheckResult.response.timingPhases?.total;
          checksByRegion[result.runLocation].download +=
            result.apiCheckResult.response.timingPhases?.download;
          checksByRegion[result.runLocation].tcp +=
            result.apiCheckResult.response.timingPhases?.tcp;
          checksByRegion[result.runLocation].dns +=
            result.apiCheckResult.response.timingPhases?.dns;
          checksByRegion[result.runLocation].wait +=
            result.apiCheckResult.response.timingPhases?.wait;
        }
      });

      return checksByRegion;
    });

    const checksByRegionArray = computed(() => {
      const checksByRegionArray = Object.values(checksByRegion.value);
      checksByRegionArray.sort((a, b) => {
        if (a.ttfb > b.ttfb) {
          return 1;
        }

        return -1;
      });

      return checksByRegionArray;
    });

    onBeforeMount(async () => {
      try {
        const checkResultsRes = await getCheckResults(provider.value.checkId);

        checkResults.value = checkResultsRes;

        checkResults.value.sort((a, b) => {
          if (
            a.apiCheckResult.response.timingPhases?.firstByte >
            b.apiCheckResult.response.timingPhases?.firstByte
          ) {
            return 1;
          }

          return -1;
        });
      } catch (err) {
        console.error("Error!", err);
      }

      isLoading.value = false;
    });

    return {
      isLoading,
      checks,
      checkResults,
      route,
      logo,
      provider,
      checksByRegion,
      checksByRegionArray
    };
  }
};
</script>

<style scoped>
@media (min-width: 990px) {
  .container {
    max-width: 1200px !important;
  }
}

.text-xxs {
  font-size: 0.5rem;
}
</style>
