<script setup>
import { reactive } from 'vue';
const emit = defineEmits(['place-data'])

const search = reactive({
  term:'',
  time:null,
  result:null
})
const handleShearchTerm = ()=>{
  clearTimeout(search.time)
  search.time = setTimeout(async()=>{
    if(search.term !== ''){
      const res =await fetch(`https://api.weatherapi.com/v1/search.json?key=3c67497885894786bf5103257242701&q=${search.term}`)
      const data = await res.json()
      search.result = data
      // console.log(search.result)
    }
    else{
      search.result = null
    }
  },500)
}

const getWheater = (id)=>{
  if(id){
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=3c67497885894786bf5103257242701&q=id:${id}&days=3&aqi=no&alerts=no`)
    .then(response => response.json())
    .then(data => {
      emit('place-data',data);
      search.term = ''
      search.result = null
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
          v-model="search.term"
          @input="handleShearchTerm"
        />
      </div>
    </form>
    <!-- search suggestions -->
    <div v-if="search.result !== null" class="bg-white my-2 rounded-lg shadow-lg">
      <div v-for="place in search.result" :key="place.id">
        <button class="px-3 my-2 hover:text-indigo-600 hover:font-bold  text-left" @click="getWheater(place.id)">{{ place.name }} , {{ place.region }} , {{ place.country }}</button>
      </div>
    </div>
  </div>
</template>