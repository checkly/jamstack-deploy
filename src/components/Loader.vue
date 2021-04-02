<template>
  <div
    class="flex flex-col mt-16 justify-center items-center text-xl font-semibold text-black"
  >
    <h1 class="text-black font-semibold text-2xl">Loading {{ text }}...</h1>
    <span class="text-gray text-base">
      Getting checks from Checkly Public API
    </span>
    <img
      class="mt-5"
      src="/images/raccoon-loading.gif"
      alt="raccoon riding a scooter"
    />
  </div>
</template>

<script>
export default {
  name: "Loader",
  props: { text: { type: String, default: "" } }
};
</script>
