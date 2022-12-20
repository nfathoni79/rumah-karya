<template>
  <div class="flex flex-col w-full max-w-lg mx-auto overflow-hidden
    border border-gray-100
    rounded-lg shadow hover:shadow-lg
    bg-white text-gray-900">
    <div class="w-full aspect-[3/2] flex items-center justify-center bg-orange-100">
      <LoadingImage :url="getAssetUrl(project.image)" :name="project.name" />
    </div>
    <div class="p-6 xl:p-8 border-t border-gray-100">
      <h4 class="text-xl font-semibold">
        {{ project.name }}
      </h4>
      <div v-if="project.type == 'government'" class="text-gray-500">
        <p class="mt-4">{{ project.task }}</p>
        <p class="inline-flex items-start">
          <UsersIcon class="mt-1 mr-1 shrink-0 w-4 h-4" /> {{ project.client }}
        </p>
        <p class="mt-4 text-sm">{{ project.service }}</p>
      </div>
      <p v-else class="mt-4 text-sm text-gray-500">
        {{ project.task }}
      </p>
    </div>
  </div>
</template>

<script>
import { UsersIcon } from '@heroicons/vue/solid'
import LoadingImage from './LoadingImage.vue'

export default {
  components: {
    UsersIcon,
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
