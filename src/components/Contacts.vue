<template>
  <div class="max-w-screen-xl px-4 py-24 lg:px-6 mx-auto">
    <div class="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
      <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">
        Contact Us
      </h2>
      <p class="mb-5 font-light text-gray-500 sm:text-xl">
        Get connected with us.
      </p>
    </div>
    <div class="grid grid-cols-4 gap-4">

      <iframe loading="lazy" allowfullscreen
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.039960248375!2d106.82661671430925!3d-6.125324961765293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1ff505d0a9dd%3A0x155162173b3544a1!2sBAMUDA%20Group%20Office%20Building!5e0!3m2!1sen!2sid!4v1661693458151!5m2!1sen!2sid"
      class="w-full h-96 col-span-4 md:col-span-2 sm:row-span-2 rounded-md shadow-md hover:shadow-lg"></iframe>

      <!-- Address -->
      <div class="flex flex-col items-center justify-center
        col-span-4 md:col-span-2 p-4 xl:p-6
        rounded-lg border border-gray-100 shadow hover:shadow-lg
        bg-white text-gray-900">
        <LocationMarkerIcon class="w-8 h-8 text-orange-600" />
        <h4 class="mb-2 text-xl font-semibold">
          Visit Us
        </h4>
        <p class="text-center text-gray-500">
          Jl. Puri Marina Raya No. 5, Ancol, Pademangan, North Jakarta
        </p>
      </div>

      <!-- Email -->
      <div class="flex flex-col items-center justify-center
        col-span-2 md:col-span-1 p-4 xl:p-6
        rounded-lg border border-gray-100 shadow hover:shadow-lg
        bg-white text-gray-900">
        <MailIcon class="w-8 h-8 text-orange-600" />
        <h4 class="mb-2 text-xl font-semibold">
          Email Us
        </h4>
        <p class="text-center text-gray-500">
          <a href="mailto:cs@rumahkarya.id" target="_blank" class="hover:underline">
            cs@rumahkarya.id
          </a>
        </p>
      </div>

      <!-- Phone -->
      <div class="flex flex-col items-center justify-center
        col-span-2 md:col-span-1 p-4 xl:p-6
        rounded-lg border border-gray-100 shadow hover:shadow-lg
        bg-white text-gray-900">
        <PhoneIcon class="w-8 h-8 text-orange-600" />
        <h4 class="text-xl font-semibold">
          Call Us
        </h4>
        <p class="text-center text-gray-500">
          <a href="https://wa.me/6285849665523" target="_blank" class="hover:underline">
            +62 858 4966 5523
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { LocationMarkerIcon, MailIcon, PhoneIcon } from '@heroicons/vue/outline'

export default {
  components: {
    LocationMarkerIcon,
    MailIcon,
    PhoneIcon,
  },
}
</script>
