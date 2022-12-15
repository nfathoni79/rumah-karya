<template>
  <Disclosure as="nav" v-slot="{ open }"
    class="py-2.5 bg-gradient-to-r from-orange-600/90 to-orange-500/90 backdrop-blur-md">
    <div class="mx-auto flex flex-wrap items-center justify-between max-w-screen-xl px-4 ">
      <!-- Logo -->
      <a @click.prevent="$emit('scrollTo', '#home')" href="#"
        class="flex items-center">
        <img src="../assets/rk-landscape-white.png" alt="Rumah Karya Logo"
          class="mr-3 h-8 sm:h-10" />
      </a>

      <!-- Main button and open menu button -->
      <div class="flex items-center lg:order-2">
        <a @click.prevent="$emit('scrollTo', '#contacts')" href="#contacts"
          class="sm:mr-2 lg:mr-0 rounded-lg border-2 border-gray-200 hover:border-white
          px-4 lg:px-5 py-2 lg:py-2.5
          font-medium text-white text-sm focus:outline-none
          transition ease-in-out duration-300">
          Get Connected
        </a>

        <DisclosureButton class="ml-1 inline-flex lg:hidden items-center p-2
          rounded-lg text-sm text-gray-200 hover:text-white focus:outline-none">
          <span class="sr-only">Open main menu</span>
          <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
          <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
        </DisclosureButton>
      </div>

      <!-- Desktop menu -->
      <div class="items-center justify-between hidden lg:flex w-full lg:w-auto lg:order-1">
        <ul class="mt-4 lg:mt-0 flex flex-col lg:flex-row lg:space-x-8 font-medium ">
          <li v-for="item in navigations" :key="item.name" class="relative">
            <a @click.prevent="$emit('scrollTo', item.link)" :href="item.link"
              :class="[item.link == activeNav
              ? 'font-semibold text-white p-0'
              : 'border-0 text-orange-100 hover:text-white p-0',
              'transition ease-in-out duration-1000']">
              {{ item.name }}
            </a>

            <!-- Transisi underline -->
            <Transition :enter-active-class="transitionClasses.enter"
              enter-from-class="scale-x-0" enter-to-class="scale-x-100"
              :leave-active-class="transitionClasses.leave"
              leave-from-class="scale-x-100" leave-to-class="scale-x-0">
              <div v-if="item.link == activeNav"
                class="absolute bottom-0 h-0.5 w-full bg-white"></div>
            </Transition>
          </li>
        </ul>
      </div>
    </div>

    <!-- Mobile menu -->
    <DisclosurePanel class="lg:hidden px-4">
      <div class="items-center justify-between w-full flex lg:w-auto lg:order-1" id="mobile-menu-2">
        <ul class="mt-4 lg:mt-0 flex flex-col lg:flex-row w-full lg:space-x-8 font-medium">
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
    scrollDown: Boolean,
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
  computed: {
    transitionClasses() {
      let classes = 'transition ease-in-out duration-500'

      if (this.scrollDown) {
        return {
          'enter': classes + ' origin-left',
          'leave': classes + ' origin-right',
        }
      } else {
        return {
          'enter': classes + ' origin-right',
          'leave': classes + ' origin-left',
        }
      }
    },
  }
}
</script>
