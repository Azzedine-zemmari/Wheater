  <script setup>
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
    <div v-for="place in places">
      <WheaterCard 
      :name="place.location.name"
      :local="place.location.localtime"
      :wheaterT="place.current.temp_f"
      :wheaterC="place.current.temp_c"
      :src="place.current.condition.icon"
      ></WheaterCard>
    </div>
  </main>
</template>


  <style scoped></style>
