<template>
  <div class="mx-auto grid md:grid-cols-4 max-w-screen-xl items-center
    md:gap-8 lg:gap-16 xl:gap-24 px-4 py-24 lg:px-6">
    <div class="col-span-2 mb-8 order-last md:order-first">
      <h2 class="mt-3 mb-4 text-3xl md:text-3xl
        font-extrabold tracking-tight text-gray-900">
        Our 360° Services
      </h2>

      <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
        We provide full circle services that will handle your business needs.
        By experiencing every detail of projects we've done, we made great brands identity,
        a great team, great clients, and you, our great customer.
      </p>

      <div class="pt-6 mt-6 space-y-4 border-t border-gray-200">
        <div>
          <a @click.prevent="$emit('scrollTo', '#projects')" href="#projects"
            class="inline-flex items-center
            text-base font-medium text-orange-600 hover:text-orange-800
            transition ease-out duration-500 hover:translate-x-4">
            Explore our works
            <ArrowNarrowRightIcon class="w-5 h-5 ml-1" />
          </a>
        </div>
      </div>
    </div>

    <div class="mb-4 md:mb-0 grid grid-cols-2 gap-2 md:gap-4 col-span-2">
      <ServiceItem v-for="service in services" :key="service.name"
        :name="service.name" :icon="service.icon" :color="service.color" />
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

import ServiceItem from './ServiceItem.vue'

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
    ServiceItem,
  },
  data() {
    return {
      services: [
        {
          name: 'Brand Creation',
          icon: PencilIcon,
          color: 'orange',
        },
        {
          name: 'Brand Value',
          icon: ChartBarIcon,
          color: 'blue',
        },
        {
          name: 'Brand Positioning',
          icon: SwitchHorizontalIcon,
          color: 'indigo',
        },
        {
          name: 'Brand Guardianship',
          icon: ShieldCheckIcon,
          color: 'green',
        },
        {
          name: 'Brand Development',
          icon: CogIcon,
          color: 'orange',
        },
        {
          name: 'Platform Production',
          icon: CubeIcon,
          color: 'blue',
        },
        {
          name: 'Digital Marketing & Campaign',
          icon: SpeakerphoneIcon,
          color: 'indigo',
        },
        {
          name: 'Social Media Management',
          icon: ChatIcon,
          color: 'green',
        },
      ],
    }
  },
}
</script>
