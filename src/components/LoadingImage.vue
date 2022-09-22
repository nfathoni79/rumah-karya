<template>
  <div>
    <div v-if="!loaded">
      <Spinner />
    </div>
    <img v-show="loaded" @load="loaded = true"
      :src="url" :alt="name" :class="className" />
  </div>
</template>

<script>
import Spinner from './Spinner.vue'

export default {
  components: {
    Spinner,
  },
  props: {
    url: String,
    name: String,
    className: String,
  },
  data() {
    return {
      loaded: false,
    }
  },
}
</script>
