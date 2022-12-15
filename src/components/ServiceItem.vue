<template>
  <div :class="['group rounded-lg px-4 py-2 transition ease-in-out duration-300',
    colorClasses.bg]">
    <component :is="icon" :class="[`mb-2 h-8 w-8 md:w-10 md:h-10
      transition ease-in-out duration-300`, colorClasses.icon]" />
    <h4 :class="[`mb-2 text-xl font-bold transition ease-in-out duration-300`,
      colorClasses.name]">
      {{ name }}
    </h4>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    icon: Function,
    color: String,
  },
  computed: {
    colorClasses() {
      switch (this.color) {
        case 'red':
          return {
            bg: 'bg-transparent hover:bg-red-600',
            icon: 'text-red-600 group-hover:text-red-50',
            name: 'text-gray-900 group-hover:text-red-50',
          }
        case 'green':
          return {
            bg: 'bg-transparent hover:bg-green-600',
            icon: 'text-green-600 group-hover:text-green-50',
            name: 'text-gray-900 group-hover:text-green-50',
          }
        case 'blue':
          return {
            bg: 'bg-transparent hover:bg-blue-600',
            icon: 'text-blue-600 group-hover:text-blue-50',
            name: 'text-gray-900 group-hover:text-blue-50',
          }
        case 'indigo':
          return {
            bg: 'bg-transparent hover:bg-indigo-600',
            icon: 'text-indigo-600 group-hover:text-indigo-50',
            name: 'text-gray-900 group-hover:text-indigo-50',
          }
        default:
          return {
            bg: 'bg-transparent hover:bg-red-600',
            icon: 'text-red-600 group-hover:text-red-50',
            name: 'text-gray-900 group-hover:text-red-50',
          }
      }
    },
  }
}
</script>
