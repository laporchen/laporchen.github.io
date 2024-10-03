<template>
  <div class="w-auto h-auto rounded-xl bg-gray-100 text-black flex flex-col items-center gap-2 py-4 px-6">
    <div class="text-black">
      <slot name="header" />
    </div>
    <div class="text-black">
      <slot name="body" />
    </div>
  </div>
</template>
