<template>
  <Disclosure as="nav" v-slot="{ open }" class="bg-gradient-to-r from-orange-600/90 to-orange-500/90 backdrop-blur-md py-2.5">
    <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
      <!-- Logo -->
      <a @click.prevent="$emit('scrollTo', '#home')" href="#" class="flex items-center">
        <img src="../assets/rk-landscape-white.png" alt="Rumah Karya Logo" class="h-8 mr-3 sm:h-10" />
      </a>

      <!-- Main button and open menu button -->
      <div class="flex items-center lg:order-2">
        <a @click.prevent="$emit('scrollTo', '#contacts')" href="#contacts" class="text-white border-2 border-gray-200 hover:border-white font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 focus:outline-none">
          Get Connected
        </a>

        <DisclosureButton class="inline-flex items-center p-2 ml-1 text-sm text-gray-200 hover:text-white rounded-lg lg:hidden focus:outline-none">
          <span class="sr-only">Open main menu</span>
          <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
          <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
        </DisclosureButton>
      </div>

      <!-- Desktop menu -->
      <div class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1">
        <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          <li v-for="item in navigations" :key="item.name">
            <a @click.prevent="$emit('scrollTo', item.link)" :href="item.link"
              :class="[item.link == activeNav
              ? ' font-semibold underline underline-offset-4 decoration-2 text-white p-0'
              : 'border-0 text-orange-100 hover:text-white p-0']">
              {{ item.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Mobile menu -->
    <DisclosurePanel class="lg:hidden px-4">
      <div class="items-center justify-between w-full flex lg:w-auto lg:order-1" id="mobile-menu-2">
        <ul class="flex flex-col w-full mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          <li v-for="item in navigations" :key="item.name">
            <a @click.prevent="$emit('scrollTo', item.link)" :href="item.link"
              :class="[item.link == activeNav
              ? 'text-orange-600 bg-white'
              : 'text-orange-100 border-2 border-transparent hover:border-white',
              'block py-2 pl-3 pr-4 rounded-md']">
              {{ item.name }}
            </a>
          </li>
        </ul>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    MenuIcon,
    XIcon,
  },
  props: {
    activeNav: String,
  },
  data() {
    return {
      navigations: [
        {
          name: 'Home',
          link: '#home',
        },
        {
          name: 'About',
          link: '#about',
        },
        {
          name: 'Services',
          link: '#services',
        },
        {
          name: 'Projects',
          link: '#projects',
        },
        {
          name: 'Contacts',
          link: '#contacts',
        },
      ],
    }
  },
}
</script>
