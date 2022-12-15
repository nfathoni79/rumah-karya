<template>
  <div class="mx-auto max-w-screen-xl px-4 pb-8 lg:pb-16">
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6
      gap-6 sm:gap-10 text-gray-500">
      <a v-for="partner in partners" :key="partner.name" :href="partner.link" target="_blank">
        <img :src="getAssetUrl(partner.image)" :alt="partner.name"
          class="h-10 mx-auto grayscale hover:grayscale-0 opacity-90 hover:opacity-100
          transition ease-in-out duration-300">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      partners: [
        {
          name: 'KemenkopUKM',
          link: 'https://kemenkopukm.go.id/',
          image: 'kemenkopukm.png',
        },
        {
          name: 'BP2MI',
          link: 'https://www.bp2mi.go.id/',
          image: 'bp2mi.png',
        },
        {
          name: 'Kemenkomarves',
          link: 'https://maritim.go.id/',
          image: 'kemenkomarves.png',
        },
        {
          name: 'Bank Indonesia',
          link: 'https://www.bi.go.id/',
          image: 'bi.png',
        },
        {
          name: 'PT PELNI',
          link: 'https://www.pelni.co.id/',
          image: 'pelni.png',
        },
        {
          name: 'PT Perindo',
          link: 'http://www.perikananindonesia.co.id/',
          image: 'perindo.png',
        },
      ],
    }
  },
  methods: {
    getAssetUrl(fileName) {
      return new URL(`/src/assets/${fileName}`, import.meta.url).href
    },
  },
}
</script>
