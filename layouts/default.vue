<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="w-[100dvw] h-[100dvh] overflow-hidden bg-dark-purple-500 relative flex justify-center">
    <Transition name="display-real-cover">
      <Cover v-show="route.path === '/'" class="absolute z-20 -translate-x-1/2 left-1/2" />
    </Transition>
    <Transition name="to-left">
      <div v-show="route.path !== '/'" class="w-1/2 md:w-[21rem] h-full max-w-[50%] transition-all right-[min(95%,calc(50%+21rem))] absolute">
        <div class="w-full h-full relative overflow-hidden shadow-black shadow-[1px_1px_5px] z-50">
          <Cover class="absolute" disable-route />
        </div>
        <NuxtLink as="div" to="/" class="absolute z-40 left-[calc(min(14rem,40vw))] md:hover:left-[20rem] transition-all duration-75 top-2 rounded-md w-40 h-10 bg-dark-purple-600 border-white border-2 text-white text-center flex justify-center items-center">
          Close
        </NuxtLink>
      </div>
    </Transition>
    <Transition name="to-right">
      <div v-show="route.path !== '/'" class="w-[21rem] h-full max-w-[50%] transition-all left-[min(95%,calc(50%+21rem))] absolute overflow-hidden shadow-black shadow-[1px_1px_5px] z-50">
        <Cover class="absolute right-0" disable-route />
      </div>
    </Transition>
    <Transition>
      <PageContainer>
        <slot />
      </PageContainer>
    </Transition>
  </div>
</template>

<style>
* {
  font-family: Raleway;
}

.to-left-enter-active,
.to-left-leave-active {
  transition: all 0.5s ease;
}

.to-left-enter-from,
.to-left-leave-to {
  right: 50%;
}

.to-left-enter-to,
.to-left-leave-from {
  right: min(95%, calc(50% + 21rem));
}

.to-right-enter-active,
.to-right-leave-active {
  transition: all 0.5s ease;
}

.to-right-enter-from,
.to-right-leave-to {
  left: 50%;
}

.to-right-enter-to,
.to-right-leave-from {
  left: min(95%, calc(50% + 21rem));
}

.display-real-cover-enter-active {
  transition: opacity 0s ease;
  transition-delay: 0.495s;
}
.display-real-cover-leave-active {
  transition: opacity 0s;
}

.display-real-cover-enter-from,
.display-real-cover-leave-to {
  opacity: 0;
}
</style>
