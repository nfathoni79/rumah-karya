<template>
  <div class="flex flex-col w-full max-w-lg mx-auto overflow-hidden
    border border-gray-100
    rounded-lg shadow hover:shadow-lg
    bg-white text-gray-900">
    <div class="w-full aspect-[3/2] flex items-center justify-center bg-orange-100">
      <LoadingImage :url="getAssetUrl(project.image)" :name="project.name" />
    </div>
    <div class="p-6 xl:p-8 border-t border-gray-100 dark:border-gray-600">
      <h4 class="mb-4 text-xl font-semibold">
        {{ project.name }}
      </h4>
      <p v-if="project.type == 'government'"
        class="text-gray-500 dark:text-gray-400">
        Client: <span class="font-light">{{ project.client }}</span><br>
        Project: <span class="font-light">{{ project.service }}</span><br>
        Task: <span class="font-light">{{ project.task }}</span>
      </p>
      <p v-else class="text-gray-500 dark:text-gray-400">
        {{ project.task }}
      </p>
    </div>
  </div>
</template>

<script>
import LoadingImage from './LoadingImage.vue'

export default {
  components: {
    LoadingImage,
  },
  props: {
    project: Object,
  },
  data() {
    return {
      loaded: false,
    }
  },
  methods: {
    getAssetUrl(fileName) {
      return new URL(`/src/assets/${fileName}`, import.meta.url).href
    },
  }
}
</script>
