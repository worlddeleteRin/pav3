<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="py-12 bg-white">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <p class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 leading-8 sm:text-5xl">
          Почему имеено мы?
        </p>
        <p class="max-w-2xl mt-4 text-xl text-gray-500 lg:mx-auto">
            Маф-Строй - это большая команда высококлассных специалистов с более чем 10-летним опытом, готовых воплотить Вашу мечту в реальность!
        </p>
      </div>
      <div class="mt-10">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div v-for="benefit in our_benefits" :key="benefit.name" class="relative">
            <dt>
              <div class="absolute flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                <component :is="benefit.icon" class="w-6 h-6" aria-hidden="true" />
              </div>
              <p class="ml-16 text-lg font-medium text-gray-900 leading-6">{{ benefit.name }}</p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              {{ benefit.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import { SupportIcon } from '@heroicons/vue/outline'
import { our_benefits } from '../useful_data.js';

export default {
    name: 'benefitsBlock',
    components: {
      SupportIcon,
    },
    data () {
      return {
        our_benefits,
      }
    }
}
</script>
