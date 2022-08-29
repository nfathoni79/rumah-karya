<template>
  <div class="grid md:grid-cols-4 md:gap-8 lg:gap-16 xl:gap-24 max-w-screen-xl items-center px-4 py-24 lg:px-6 mx-auto">
    <div class="col-span-2 mb-8 order-last md:order-first">
      <h2 class="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
        Our 360° Services
      </h2>

      <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
        We provide full circle services that will handle your business needs.
        By experiencing every detail of projects we've done, we made great brands identity,
        a great team, great clients, and you, our great customer.
      </p>

      <div class="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
        <div>
          <a @click.prevent="$emit('scrollTo', '#projects')" href="#projects" class="inline-flex items-center text-base font-medium text-orange-600 hover:text-orange-800 dark:text-orange-500 dark:hover:text-orange-700">
            Explore our works
            <ArrowNarrowRightIcon class="w-5 h-5 ml-1" />
          </a>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 md:gap-8 col-span-2 mb-4 md:mb-0">
      <div v-for="service in services" :key="service.name">
        <component :is="service.icon" class="h-8 w-8 mb-2 text-orange-600 md:w-10 md:h-10 dark:text-orange-500" />
        <h4 class="mb-2 text-xl font-bold dark:text-white">{{ service.name }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import {
  PencilIcon,
  ChartBarIcon,
  SwitchHorizontalIcon,
  ShieldCheckIcon,
  CogIcon,
  CubeIcon,
  SpeakerphoneIcon,
  ChatIcon,
  ArrowNarrowRightIcon } from '@heroicons/vue/outline'

export default {
  components: {
    PencilIcon,
    ChartBarIcon,
    SwitchHorizontalIcon,
    ShieldCheckIcon,
    CogIcon,
    CubeIcon,
    SpeakerphoneIcon,
    ChatIcon,
    ArrowNarrowRightIcon,
  },
  data() {
    return {
      services: [
        {
          name: 'Brand Creation',
          icon: 'PencilIcon',
        },
        {
          name: 'Brand Value',
          icon: 'ChartBarIcon',
        },
        {
          name: 'Brand Positioning',
          icon: 'SwitchHorizontalIcon',
        },
        {
          name: 'Brand Guardianship',
          icon: 'ShieldCheckIcon',
        },
        {
          name: 'Brand Development',
          icon: 'CogIcon',
        },
        {
          name: 'Platform Production',
          icon: 'CubeIcon',
        },
        {
          name: 'Digital Marketing & Campaign',
          icon: 'SpeakerphoneIcon',
        },
        {
          name: 'Social Media Management',
          icon: 'ChatIcon',
        },
      ],
    }
  },
}
</script>
