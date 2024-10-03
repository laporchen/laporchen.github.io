<script setup lang="ts">
const exps = [
  {
    coverImg: 'PicCollage.png',
    title: 'PicCollage Frontend Internship',
    description: 'Collaborated on 5+ projects over two years, including MixerChat, a newly developed, highly interactive web app. I worked on and proposed multiple features and ideas during my internship, including one work for client-side optimization on client side, reduced CPU and network usage by 50%.',
  },
  {
    coverImg: 'gdmc2023.png',
    title: 'First Place of GDMC 2023',
    description: 'Won first place in the IEEE Conference on Games\' Generative Design in Minecraft Challenge, building an AI system for procedural settlement generation.',
  },
  {
    coverImg: 'ICPC.png',
    title: 'Bronze Award in Taiwan ICPC 2022',
    description: 'Placed 34th out of 100 teams in the prestigious Taiwan final of the International Collegiate Programming Contest. Played a role of quickly reading and understanding problem statements, focusing on solving graph and greedy algorithm challenges.',
  },
]
</script>

<template>
  <div class="flex flex-col gap-6">
    <template v-for="exp in exps" :key="exp.title">
      <Card class="max-w-full w-max-content h-fit">
        <template #header>
          <div class="h-64 w-fit overflow-hidden">
            <img :src="exp.coverImg" class="h-full w-full object-scale-down object-center rounded-lg border border-black">
          </div>
        </template>
        <template #body>
          <div class="flex flex-col gap-2">
            <div class="text-2xl text-black font-semibold">
              {{ exp.title }}
            </div>
            <div class="text-black">
              {{ exp.description }}
            </div>
          </div>
        </template>
      </Card>
    </template>
  </div>
</template>
