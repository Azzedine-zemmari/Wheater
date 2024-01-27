<template>
    <div class="text-white p-10 rounded-lg shadow-lg gap-6 mb-6 relative overflow-hidden">
      <!-- Location & time -->
      <div class="mb-2 flex justify-between items-center">
        <div class="flex items-center justify-center gap-2">
          <i class="fa-solid fa-location-dot"></i>
          <h1 class="text-lg md:text-3xl">{{ props.name }}</h1>
        </div>
        <div class="flex items-center justify-center gap-2">
          <i class="fa-solid fa-clock"></i>
          <h1 class="text-lg md:text-3xl">
            {{ new Date(props.local).getHours() }}:{{ new Date(props.local).getMinutes() }}
          </h1>
        </div>
      </div>
      
      <!-- current weather -->
      <div class="text-center flex-1">
        <img :src= props.src alt="icon" width="200" class="mx-auto -mb-10" />
        <h1 class="text-9xl mb-2">{{ props.wheaterT }}</h1>
        <p class="text-lg md:text-3xl">{{ props.wheaterC }}</p>
      </div>
  
      <BorderLine />
  
      <!-- forecast -->
      <div>
        <!-- Weather daily forecast component goes here -->
      </div>
  
      <!-- info -->
      <div>
        <!-- Weather info component goes here -->
      </div>
  
      <!-- forecast btn -->
      <div class="flex justify-end items-center gap-1 mt-10">
        <button>More <i class="fa-solid fa-arrow-right text-sm -mb-px"></i></button>
      </div>
    </div>
  </template>
<script setup>
const props = defineProps(['name','local','wheaterT','wheaterC','src'])
</script>