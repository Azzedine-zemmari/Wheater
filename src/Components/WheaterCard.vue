<template>
    <div  class="bg-cyan-500 text-white p-10 rounded-lg shadow-lg gap-6 mt-6 mb-6 relative overflow-hidden">
      <!-- Location & time -->
      <div class="mb-2 flex justify-between items-center">
        <div class="flex items-center justify-center gap-2">
          <i class="fa-solid fa-location-dot"></i>
          <h1 class="text-lg md:text-3xl">{{ place.location.name }}</h1>
        </div>
        <div class="flex items-center justify-center gap-2">
          <i class="fa-solid fa-clock"></i>
          <h1 class="text-lg md:text-3xl">
            {{ new Date(place.location.localtime).getHours() }}:{{
            new Date(place.location.localtime).getMinutes()
          }}
          </h1>
        </div>
      </div>
      
      <!-- current weather -->
      <div class="text-center flex-1">
        <img :src="place.current.condition.icon" alt="icon" width="200" class="mx-auto -mb-10" />
        <h1 class="text-9xl mb-2 -mr-4">{{ Math.round(place.current.temp_c) }}&deg;</h1>
        <p class="text-lg md:text-3xl">{{ place.current.condition.text }}</p>
      </div>
  
      <BorderLine />
  
      <!-- forecast -->
      <div v-for="day in place.forecast.forecastday">

        <WeatherForecastDay :day="day"/>

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
import BorderLine from './BorderLine.vue';
import WeatherForecastDay from './WeatherForecastDay.vue';
import { 
  defineProps
 } from 'vue';
defineProps({
  place: Object
})
// const bgClass = ()=>{
//   const time = new Date(place.location.localtime).getHours();
//   return time < 20 ? 'bg-yellow-300' : 'bg-slate-600';
// }
</script>