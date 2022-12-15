<template>
  <div class="max-w-screen-xl px-4 py-24 lg:px-6 mx-auto">
    <div class="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
      <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">
        Our Projects
      </h2>
      <p class="mb-5 font-light text-gray-500 sm:text-xl">
        These are the government and private projects we have worked on.
      </p>
    </div>

    <TransitionGroup tag="div" enter-active-class="transition ease-out duration-500"
      enter-from-class="opacity-0 -translate-y-4" enter-to-class="opacity-100 translate-y-0"
      class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-6">
      <ProjectCard v-for="(e, i) in maxProjects" :key="i" :project="projects[i]" />
    </TransitionGroup>

    <!-- Pagination -->
    <div class="flex justify-center mt-8 mx-auto space-x-4">
      <button v-if="maxProjects > 8" @click="showLess"
        class="sm:mr-2 lg:mr-0 rounded-lg
        border-2 border-orange-600 hover:border-orange-700
        bg-transparent hover:bg-orange-100
        px-4 lg:px-5 py-2 lg:py-2.5
        font-medium text-sm text-orange-700
        focus:outline-none focus:ring-4 focus:ring-orange-300
        transition ease-in-out duration-300">
        Show Less
      </button>
      <button v-if="maxProjects < projects.length" @click="showMore"
        class="sm:mr-2 lg:mr-0 rounded-lg
        bg-orange-600 hover:bg-orange-700
        px-4 lg:px-5 py-2 lg:py-2.5
        font-medium text-sm text-white
        focus:outline-none focus:ring-4 focus:ring-orange-300
        transition ease-in-out duration-300">
        Show More
      </button>
    </div>
  </div>
</template>

<script>
import ProjectCard from './ProjectCard.vue'
import projects from '../data/projects.js'

export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects,
      maxProjects: 8,
    }
  },
  methods: {
    showMore() {
      if ((this.maxProjects + 4) > projects.length) {
        this.maxProjects = projects.length
      } else {
        this.maxProjects += 4
      }
    },
    showLess() {
      this.maxProjects = 8
    },
  },
}
</script>
