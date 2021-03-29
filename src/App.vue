<template>
  <div class="flex flex-col h-screen justify-between">
    <div>
      <Header />
      <section class="flex flex-col justify-center items-center px-4 md:px-0">
        <img
          class="mt-8 mb-5"
          src="/images/logo.svg"
          alt="jamstack deploy logo"
        />

        <h2 class="text-base text-center text-black mb-10">
          Measure cloud providers and check which fits better for your Jamstack
          App.
        </h2>
      </section>

      <main class="container mx-autoflex flex-col lg:px-0 px-5">
        <router-view />
      </main>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  components: { Header, Footer }
};
</script>

<style>
body {
  padding: 0;
  background: #fffcfc;
  -webkit-font-smoothing: antialiased;
}

.tippy-box {
  background: #ffffff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #423e3b;
  font-size: 14px;
  padding: 6px 8px;
}
</style>
