<script setup lang="ts">
const projects = [
  {
    coverImg: 'mixerchat.png',
    title: 'MixerChat',
    subTitle: 'Virtual Conference Web App',
    description: 'An app bulit in PicCollage, focusing on bringing interaction into virtual conference, easy way to have multiple conversations at the same time, allow participants to move freely between conversations.',
    link: 'https://landing.mixerchat.com/',
  },
  {
    coverImg: 'PicConnect.png',
    title: 'PicConnect',
    subTitle: 'Internal Hackathon Project in PicCollage',
    description: 'A small project that bring fun into learning others for new memebers, worked directly with designer and idea initiator.',
  },
  {
    coverImg: 'gpaCalculator.png',
    title: 'GPA Calculator',
    subTitle: 'A tool for calculating GPA easily',
    description: 'A mini project I built when I first learn Vue, because our offical process takes like 3 months before score is calculated, and I\'m not satisfied with the solutions other people provided.',
    link: 'https://github.com/laporchen/gpa-calculator-v2',
  },
  {
    coverImg: 'wordleSolver.png',
    title: 'Worlder Solver',
    subTitle: 'A cli-tool to narrow down the possible guesses',
    description: 'Fun tool I made when Wordle is popular, becuase I can\'t figure out what words could possibly be a guess during playing, so I grab the entire word set from the website and made this tool.',
    link: 'https://github.com/laporchen/wordle-guesser',
  },
]
</script>

<template>
  <div class="flex flex-col gap-6 pb-14">
    <template v-for="project in projects" :key="project.title">
      <Card class="max-w-full w-max-content h-fit">
        <template #header>
          <div class="h-fit w-fit overflow-hidden">
            <img :src="project.coverImg" class="max-h-full w-full object-scale-down object-center rounded-lg border border-black">
          </div>
        </template>
        <template #body>
          <div class="flex flex-col gap-2">
            <div class="flex flex-col">
              <NuxtLink v-if="project.link" as="div" :to="project.link" target="_blank" class="text-2xl text-black font-semibold">
                {{ project.title }}
                <Icon name="mdi:external-link" class="w-6 h-6 text-black" />
              </NuxtLink>
              <div v-else class="text-2xl text-black font-semibold">
                {{ project.title }}
              </div>
              <div class="text-black font-light">
                {{ project.subTitle }}
              </div>
            </div>
            <div class="text-black">
              {{ project.description }}
            </div>
          </div>
        </template>
      </Card>
    </template>
  </div>
</template>
