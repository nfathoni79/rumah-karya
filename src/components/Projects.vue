<template>
  <div class="max-w-screen-xl px-4 py-24 lg:px-6 mx-auto">
    <div class="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
      <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        Our Projects
      </h2>
      <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
        These are the government and private projects we have worked on.
      </p>
    </div>

    <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-6">
      <!-- Project Card -->
      <div v-for="(e, i) in maxProjects" :key="i"
        class="flex flex-col max-w-lg mx-auto text-gray-900 bg-white border border-gray-100 rounded-lg shadow hover:shadow-lg dark:border-gray-600 dark:bg-gray-800 dark:text-white">
        <img class="rounded-t-lg" :src="projects[i].image" :alt="projects[i].name" />
        <div class="p-6 xl:p-8 border-t border-gray-100 dark:border-gray-600">
          <h4 class="mb-4 text-xl font-semibold">
            {{ projects[i].name }}
          </h4>
          <p v-if="projects[i].type == 'government'" class="text-gray-500 dark:text-gray-400">
            Client: <span class="font-light">{{ projects[i].client }}</span><br>
            Project: <span class="font-light">{{ projects[i].service }}</span><br>
            Task: <span class="font-light">{{ projects[i].task }}</span>
          </p>
          <p v-else class="text-gray-500 dark:text-gray-400">
            {{ projects[i].task }}
          </p>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div class="flex justify-center mt-8 mx-auto space-x-4">
      <a v-if="maxProjects > 8" href="#" @click.prevent="showLess" class="text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-yellow-500 dark:hover:bg-yellow-600 focus:outline-none dark:focus:ring-yellow-700">
        Show Less
      </a>
      <a v-if="maxProjects < projects.length" href="#" @click.prevent="showMore" class="text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-orange-500 dark:hover:bg-orange-600 focus:outline-none dark:focus:ring-orange-700">
        Show More
      </a>
    </div>
  </div>
</template>

<script>
import projects from '../data/projects.js';

export default {
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
    }
  },
}
</script>
