<template>
  <article
    class="w-1/3 flex justify-end flex-col bg-white border rounded-md border-pink px-3 py-2.5 mb-7 lg:mr-7 md:mr-4 mr-1 hover:bg-pink-ligth"
  >
    <slot></slot>
  </article>
</template>

<style scoped>
article {
  width: 300px;
  height: 150px;
}
</style>
