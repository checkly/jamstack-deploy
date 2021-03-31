<template>
  <header class="border-pink border-b py-5 px-7 lg:pl-0 bg-white">
    <div class="container mx-auto flex justify-between items-center">
      <div class="flex items-center color-black">
        <a href="https://checklyhq.com" target="_blank" rel="noopener">
          <img class="w-32" src="/images/checkly.png" alt="checkly logo" />
        </a>
        <h1 class="ml-2.5 text-sm hidden md:block">
          Delightful active monitoring for developers
        </h1>
      </div>

      <a
        class="bg-indigo rounded text-sm text-white px-2.5 py-1.5 font-semibold flex justify-center items-center"
        href="https://app.checklyhq.com/checks/new/api"
        target="_blank"
        rel="noopener"
        >Create a Check
        <img
          src="@/assets/arrow-right.svg"
          class="ml-1 w-4 h-4"
          alt="Arrow right"
        />
      </a>
    </div>
  </header>
</template>

<style scoped>
header {
  height: 72px;
}
</style>
