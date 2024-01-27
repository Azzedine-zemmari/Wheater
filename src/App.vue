  <script setup>
    import Compoenent from './ComponentSearch.vue'
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
      <Compoenent></Compoenent>
    </div>
  </main>
</template>


  <style scoped></style>
