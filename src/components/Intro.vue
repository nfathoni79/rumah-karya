<template>
  <div class="max-w-screen-xl px-4 py-24 lg:px-6 mx-auto space-y-12 lg:space-y-20">
    <!-- Intro 1 -->
    <div class="grid md:grid-cols-2 gap-4 xl:gap-16 items-center">
      <div class="text-gray-500 dark:text-gray-400 sm:text-lg order-last md:order-first">
        <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">
          Every brand needs an excellent identity
        </h2>
        <p class="mb-4 font-light lg:text-xl">
          In this digital age, every brand requires a strong visual identity to maintain its brand.
          A well-built identity must be easy to be recognized and memorized.
        </p>
        <p class="mb-8 font-light lg:text-xl">
          <span class="p-1 bg-orange-600 font-normal text-orange-50">Rumah Karya Indonesia</span>
          offers you exceptional brand visual capabilities that not only upholds the brand values,
          but also creates the visual quality and brand narrative.
        </p>
      </div>
      <img src="../assets/intro-1.png" alt="Intro 1"
      class="mb-4 lg:mb-0 flex w-full px-24 sm:px-40 md:px-16 lg:px-24 rounded-lg" >
    </div>

    <!-- Intro 2 -->
    <div class="grid md:grid-cols-2 gap-4 xl:gap-16 items-center">
      <img src="../assets/intro-2.png" alt="Intro 2"
        class="mb-4 lg:mb-0 flex w-full px-24 sm:px-40 md:px-16 lg:px-24 rounded-lg" >
      <div class="text-gray-500 dark:text-gray-400 sm:text-lg">
        <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">
          We aim to have a strong brand presence
        </h2>
        <p class="mb-4 font-light lg:text-xl">
          For us, <span class="p-1 bg-orange-600 font-normal text-orange-50">Branding</span> is all about
          <span class="p-1 bg-orange-600 font-normal text-orange-50">Impactful Storytelling</span>.
        </p>
        <p class="mb-8 font-light lg:text-xl">
          Every brand has a Story, whether the founders' inspirational story,
          or maybe the great inovative idea behind it.
          To pack the story expressively and impressively is what we called as Branding.
        </p>
        <div class="pt-6 mt-6 space-y-4 border-t border-gray-200">
          <a @click.prevent="$emit('scrollTo', '#services')" href="#services"
            class="inline-flex items-center
            text-base font-medium text-orange-600 hover:text-orange-800
            transition ease-out duration-500 hover:translate-x-4">
            Discover our services
            <ArrowNarrowRightIcon class="w-5 h-5 ml-1" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ArrowNarrowRightIcon } from '@heroicons/vue/solid'

export default {
  components: {
    ArrowNarrowRightIcon,
  },
}
</script>
