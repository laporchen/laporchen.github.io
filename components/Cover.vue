<script setup lang="ts">
defineProps<{
  disableRoute?: boolean
}>()
const pageLinks = [
  {
    name: 'About Me',
    link: '/me',
  },
  {
    name: 'Experience',
    link: '/experience',
  },
  {
    name: 'Projects',
    link: '/projects',
  },
  {
    name: 'Resume',
    link: '/resume.pdf',
    target: '_blank',
  }
]

const myLinks = [
  {
    iconName: 'mdi:linkedin',
    link: 'https://www.linkedin.com/in/lapor-chen-b2123a244/'
  },
  {
    iconName: 'mdi:github',
    link: 'https://github.com/laporchen'
  },
  {
    iconName: 'mdi:email',
    link: 'mailto:me@lapor.dev'
  }
]
</script>

<template>
  <div class="h-full w-screen max-w-2xl mx-auto pt-20 px-6 bg-dark-purple-500 shadow-black shadow-[1px_1px_5px] flex flex-col gap-4 justify-around items-center">
    <div class="flex flex-col gap-4 items-center">
      <div class="w-40 h-40 rounded-full overflow-hidden border-white border-2 border-solid">
        <img src="@/assets/profile.jpg" alt="profile image" class="object-cover">
      </div>
      <h1 class="font-light text-white text-center text-5xl md:text-6xl"> Lapor Chen </h1>
      <h3 class="font-thin text-gray-300 text-center text-2xl md:text-4xl"> Software Developer </h3>
      <div class="flex flex-col gap-2 items-center">
        <template v-for="page in pageLinks" :key="page.name">
          <NuxtLink
            v-if="disableRoute !== true"
            as="div"
            :to="page.link"
            :target="page.target"
            class="rounded-md bg-white/20 hover:bg-white/80 cursor-pointer w-40 h-12 text-center flex flex-col items-center justify-center"
          >
            {{ page.name }}
          </NuxtLink>
          <div v-else class="rounded-md bg-white/20 cursor-default w-40 h-12 text-center flex flex-col items-center justify-center">
            {{ page.name }}
          </div>
        </template>
      </div>
    </div>

    <div class="flex justify-center items-center gap-2">
      <template v-for="info in myLinks" :key="info.iconName">
        <NuxtLink :to="info.link">
          <Icon :name="info.iconName" class="w-8 h-8" /> 
        </NuxtLink>
      </template>
    </div>
  </div>
</template>
