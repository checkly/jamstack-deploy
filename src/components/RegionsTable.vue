<template>
  <table class="w-full table-auto">
    <thead class="hidden md:table-header-group">
      <tr class="border-pink border-b">
        <th
          class="text-left uppercase text-xs text-gray pb-3"
          v-for="th in tableHeads"
          :key="th"
          :class="th === 'TTFB' ? 'underline' : ''"
        >
          <label for="filter" v-if="th === 'Region'">
            <input
              class="placeholder-gray text-xs focus:outline-none focus:border-b focus:border-red"
              name="filter"
              type="text"
              v-model="filter"
              placeholder="Filter by Region"
          /></label>

          <template v-else> {{ th }} </template>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="c in filteredCheckResults"
        :key="c._id"
        class="border-pink border-b text-gray-dark text-sm last:border-0 md:table-row flex flex-col"
      >
        <td>
          <span class="title md:hidden">Region</span>
          <span class="flex">
            <img class="w-5 mr-2.5" :src="getFlag(c.runLocation)" alt="" />
            {{ c.runLocation }}
          </span>
        </td>
        <td>
          <span class="title md:hidden">Run at</span>
          {{ new Date(c.startedAt).toLocaleString() }}
        </td>
        <td>
          <span class="title md:hidden">Wait</span
          >{{ (c.wait / c.qty).toFixed(2) }}ms.
        </td>
        <td>
          <span class="title md:hidden">DNS</span
          >{{ (c.dns / c.qty).toFixed(2) }}ms.
        </td>
        <td>
          <span class="title md:hidden">TCP</span
          >{{ (c.tcp / c.qty).toFixed(2) }}ms.
        </td>
        <td>
          <span class="title md:hidden">Download</span>
          {{ (c.download / c.qty).toFixed(2) }}ms.
        </td>
        <td>
          <span class="title md:hidden border-b border-current">TTFB</span>
          <span :class="getColor(c.ttfb / c.qty)">
            {{ (c.ttfb / c.qty).toFixed(2) }}ms.
          </span>
        </td>
        <td class="font-semibold">
          <span class="title md:hidden">Response Time</span>
          {{ (c.total / c.qty).toFixed(2) }}ms.
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { ref, computed } from "vue";
import { regionList } from "@/services/regions";

export default {
  name: "RegionsTable",

  props: {
    checkResults: { type: Array, required: true }
  },

  setup(props) {
    const filter = ref("");
    const tableHeads = ref([
      "Region",
      "Latest Run",
      "Wait",
      "DNS",
      "TCP",
      "Download",
      "TTFB",
      "Response Time"
    ]);

    const filteredCheckResults = computed(() => {
      if (!filter.value) {
        return props.checkResults;
      }

      return props.checkResults.filter(result =>
        result.runLocation.includes(filter.value)
      );
    });

    function getFlag(region) {
      return regionList.find(r => r.region === region)?.flag;
    }

    function getColor(time) {
      if (time <= 200) {
        return "text-green";
      }

      if (time <= 500) {
        return "text-yellow";
      }

      return "text-red";
    }

    return { filteredCheckResults, filter, tableHeads, getFlag, getColor };
  }
};
</script>

<style scoped>
td {
  @apply md:py-4 py-2 md:table-cell flex justify-between;
}

td span.title {
  font-size: 0.6rem;
  @apply uppercase text-gray font-semibold mr-5;
}
</style>
