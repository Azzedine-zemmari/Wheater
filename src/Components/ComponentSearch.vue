<script setup>
import { reactive } from 'vue';
const emit = defineEmits(['place-data'])

const searchTerm = reactive({
  query:'',
  timout:null,
  results:null
})
const handleShearchTerm = ()=>{
  clearTimeout(searchTerm.timout)
  searchTerm.timout = setTimeout(async()=>{
    if(searchTerm.query !== ''){
      const res =await fetch(`https://api.weatherapi.com/v1/search.json?key=3c67497885894786bf5103257242701&q=${searchTerm.query}`)
      const data = await res.json()
      searchTerm.results = data
      // console.log(searchTerm.results)
    }
    else{
      searchTerm.results = null
    }
  },500)
}

const getWheater = (id)=>{
  if(id){
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=3c67497885894786bf5103257242701&q=id:${id}&days=3&aqi=no&alerts=no`)
    .then(response => response.json())
    .then(data => {
      emit('place-data',data);
      searchTerm.query = ''
      searchTerm.results = null
    })
  }
}

</script>

<template>
  <div>
    <!-- search field -->
    <form class="flex flex-row justify-center items-center">
      <div class="bg-white border border-indigo-600  rounded-lg shadow-lg flex items-center">
        <i class="fa-solid fa-magnifying-glass p-2 text-indigo-600"></i>
        <input
          type="text"
          placeholder="Search for a place"
          class="rounded-r-lg p-2 border-0 outline-0 focus:ring-2 focus:ring-indigo-600 ring-inset w-full"
          v-model="searchTerm.query"
          @input="handleShearchTerm"
        />
      </div>
    </form>
    <!-- search suggestions -->
    <div v-if="searchTerm.results !== null" class="bg-white my-2 rounded-lg shadow-lg">
      <div v-for="place in searchTerm.results" :key="place.id">
        <button class="px-3 my-2 hover:text-indigo-600 hover:font-bold  text-left" @click="getWheater(place.id)">{{ place.name }} , {{ place.region }} , {{ place.country }}</button>
      </div>
    </div>
  </div>
</template>