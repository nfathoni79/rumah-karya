<template>
  <div class="grid grid-cols-12 gap-4 lg:gap-8 xl:gap-0 max-w-screen-xl px-4 lg:px-6 pt-20 lg:pt-28 pb-8 lg:py-16 mx-auto">
    <!-- Hero text -->
    <div class="mr-auto col-span-12 md:col-span-6 lg:col-span-7 order-last md:order-first place-self-center text-center md:text-left">
      <h1 class="max-w-2xl mb-4 text-4xl md:text-5xl xl:text-6xl font-extrabold leading-none tracking-tight dark:text-white">
        Creating brands<br>
        & digital products.
      </h1>

      <p class="max-w-2xl mb-6 lg:mb-8 font-light text-gray-500 dark:text-gray-400 md:text-lg lg:text-xl">
        We presents you with outstanding brand visual capability,
        which not only maintains the brand values,
        yet we develop the visual quality and brand story behind it.
      </p>

      <div class="space-y-4 flex justify-center md:justify-start sm:space-y-0 sm:space-x-4">
        <a @click.prevent="$emit('scrollTo', '#about')" href="#about" class="text-white bg-orange-600 dark:bg-orange-500 hover:bg-orange-700 dark:hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-700 font-medium rounded-lg text-sm px-4 py-2 lg:px-5 lg:py-2.5 sm:mr-2 lg:mr-0 focus:outline-none ">
          Learn More
        </a>
      </div>
    </div>

    <!-- Hero image -->
    <div class="flex justify-center px-20 sm:px-32 md:px-0 lg:mt-0 col-span-12 md:col-span-6 lg:col-span-5">
      <img src="../assets/hero.png" alt="Hero image">
    </div>
  </div>
</template>
