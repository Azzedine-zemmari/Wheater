  <script setup>
    import { SpeedInsights } from '@vercel/speed-insights/vue';
    import { ref } from 'vue';
    import Compoenent from './Components/ComponentSearch.vue'
    import WheaterCard from './Components/WheaterCard.vue';
    const places = ref([])
    const addPlace = (data)=>{
      places.value.push(data)
    }
  </script>

<template>
  <main>
    <!-- DATE -->
    <div class="text-center mb-6">
      {{
        new Date().toLocaleDateString('en-MA', {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        })
      }}
    </div>
    <!-- SEARCH -->
    <div>
      <Compoenent @place-data="addPlace"></Compoenent>
    </div>

    <!-- Cards -->
    <div class="grid md:grid-cols-2 gap-4">
      <div v-for="plase in places">
        <WheaterCard 
        :place="plase"
        ></WheaterCard>
      </div>
    </div>
  </main>
  <SpeedInsights />
</template>


  <style scoped></style>
