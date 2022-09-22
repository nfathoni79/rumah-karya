<template>
  <!-- Preloader -->
  <transition leave-active-class="transition ease-in duration-200"
    leave-from-class="opacity-100" leave-to-class="opacity-0">
    <div v-if="!windowLoaded"
      class="fixed inset-0 z-20 bg-orange-200 flex items-center justify-center">
      <Spinner class="h-20 w-20" />
    </div>
  </transition>

  <header class="fixed w-full shadow-sm">
    <Navbar @scrollTo="scrollTo" :activeNav="activeNav" />
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
