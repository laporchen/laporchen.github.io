<template>
  <NuxtLayout>
    <NuxtPage class="relative z-10" />
  </NuxtLayout>
</template>

<style>
* {
  font-family: Raleway;
}

.page-leave-active {
  transition: opacity 0s;
  transition-delay: 0.5s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
