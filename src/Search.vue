<template>
<div class="bg-slate-950" id="search">
    <div class="mx-auto max-w-2xl mt-10 p-8 rounded-md bg-slate-900">
      <div class="flex flex-col space-y-4 justify-center items-center">
        <h1 class="text-white font-bold text-lg">Wheater App</h1>
        <div class="flex flex-row space-x-4">
          <input type="text" class="w-80 rounded-md">
          <button class="bg-gradient-custom p-2 text-white text-sm rounded-md shadow-sm flex items-center">
            Search
            <svg xmlns="http://www.w3.org/2000/svg" class="ml-2" width="16" height="16" viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9s-9-4.032-9-9s4.032-9 9-9m0 16c3.867 0 7-3.133 7-7s-3.133-7-7-7s-7 3.133-7 7s3.133 7 7 7m8.485.071l2.829 2.828l-1.415 1.415l-2.828-2.829z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>