<template>
  <!-- Preloader -->
  <transition leave-active-class="transition ease-in duration-200"
    leave-from-class="opacity-100" leave-to-class="opacity-0">
    <div v-if="!windowLoaded"
      class="fixed z-20 inset-0 flex flex-col items-center justify-center bg-orange-200">
      <Spinner class="h-20 w-80 text-orange-600" />
      <p class="mt-4 text-center text-xl font-bold text-orange-600">
        Take your time
      </p>
    </div>
  </transition>

  <header class="fixed z-10 w-full shadow-sm">
    <Navbar @scrollTo="scrollTo" :activeNav="activeNav" :scrollDown="scrollDown" />
  </header>

  <section id="home" class="bg-white">
    <Hero @scrollTo="scrollTo" />
    <Partners />
  </section>

  <section id="about" class="bg-gray-50">
    <Intro @scrollTo="scrollTo" />
  </section>

  <section id="services" class="bg-white">
    <Services @scrollTo="scrollTo" />
  </section>

  <section id="projects" class="bg-gray-50">
    <Projects />
  </section>

  <section id="contacts" class="bg-white">
    <Contacts />
  </section>

  <footer class="bg-gradient-to-r from-orange-600 to-orange-500">
    <Bottom @scrollTo="scrollTo" />
  </footer>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Partners from './components/Partners.vue'
import Intro from './components/Intro.vue'
import Services from './components/Services.vue'
import Projects from './components/Projects.vue'
import Contacts from './components/Contacts.vue'
import Bottom from './components/Bottom.vue'
import Spinner from './components/Spinner.vue'

export default {
  components: {
    Navbar,
    Hero,
    Partners,
    Intro,
    Services,
    Projects,
    Contacts,
    Bottom,
    Spinner,
  },
  data() {
    return {
      windowLoaded: false,
      sections: [],
      activeNav: '#home',
      oldScroll: 0,
      scrollDown: true,
    }
  },
  created() {
    window.addEventListener('load', () => this.windowLoaded = true)
    window.addEventListener('scroll', this.handleScroll)
  },
  mounted() {
    this.sections = document.querySelectorAll('section')
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(event) {
      // Menentukan arah scroll
      this.scrollDown = this.oldScroll < window.scrollY
      this.oldScroll = window.scrollY

      // Menentukan menu yang aktif
      this.sections.forEach((sec) => {
        let top = window.scrollY
        let offset = sec.offsetTop
        let height = sec.offsetHeight
        let id = sec.getAttribute('id')

        if (top >= (offset - 20) && top < (offset + height - 20)) {
          this.activeNav = '#' + id
        }
      })
    },
    scrollTo(anchor) {
      const el = document.querySelector(anchor)
      el && el.scrollIntoView({ behavior: 'smooth' })
    },
  }
}
</script>
