<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Popover open="true" class="relative bg-white">
    <div class="px-4 mx-auto max-w-7xl sm:px-6">
      <div class="flex items-center justify-between py-6 border-b-2 border-gray-100 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <router-link v-bind:to="'/'">
            <span class="sr-only">Workflow</span>
            <img class="w-auto h-8 sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
          </router-link>
        </div>
        
        <div class="-my-2 -mr-2 md:hidden">
          <PopoverButton class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span class="sr-only">Open menu</span>
            <MenuIcon class="w-6 h-6 text-black" aria-hidden="true" />
          </PopoverButton>
        </div>


        <PopoverGroup as="nav" class="hidden md:flex space-x-10">
          <a href="#" class="text-base font-medium text-gray-500 md:flex hover:text-gray-900">
            Главная
          </a>
          <Popover class="relative" v-slot="{ open }">
            <PopoverButton :class="[open ? 'text-gray-900' : 'text-gray-500', 'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500']">
              <span>Каталог</span>
              <ChevronDownIcon :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
            </PopoverButton>

            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel class="absolute z-10 w-screen max-w-md px-2 mt-3 -ml-4 transform sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div class="relative px-5 py-6 bg-white grid gap-6 sm:gap-8 sm:p-8">
                    <router-link v-bind:to="'/category/' + category.id"
					v-for="category in categories" :key="category.id"
					class="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                      <component :is="this.category_icon" class="flex-shrink-0 w-6 h-6 text-indigo-600" aria-hidden="true" />
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          {{ category.name }}
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          some description may be here
                        </p>
                      </div>
                    </router-link>
                  </div>
                  <div class="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                    <div v-for="item in callsToAction" :key="item.name" class="flow-root">
                      <a :href="item.href" class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100">
                        <component :is="item.icon" class="flex-shrink-0 w-6 h-6 text-gray-400" aria-hidden="true" />
                        <span class="ml-3">{{ item.name }}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>

          <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">
            О Нас
          </a>

          <Popover class="relative" v-slot="{ open }">
            <PopoverButton :class="[open ? 'text-gray-900' : 'text-gray-500', 'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500']">
              <span>Контакты</span>
              <ChevronDownIcon :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
            </PopoverButton>

            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel class="absolute z-10 w-screen max-w-md px-2 mt-3 left-1/2 transform -translate-x-1/2 sm:px-0">
                <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div class="relative px-5 py-6 bg-white grid gap-6 sm:gap-8 sm:p-8">
                    <a v-for="item in resources" :key="item.name" :href="item.href" class="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                      <component :is="item.icon" class="flex-shrink-0 w-6 h-6 text-indigo-600" aria-hidden="true" />
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          {{ item.name }}
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          {{ item.description }}
                        </p>
                      </div>
                    </a>
                  </div>
                  <div class="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                    <div>
                      <h3 class="text-sm font-medium tracking-wide text-gray-500 uppercase">
                        Recent Posts
                      </h3>
                      <ul class="mt-4 space-y-4">
                        <li v-for="post in recentPosts" :key="post.id" class="text-base truncate">
                          <a :href="post.href" class="font-medium text-gray-900 hover:text-gray-700">
                            {{ post.name }}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="mt-5 text-sm">
                      <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> View all posts <span aria-hidden="true">&rarr;</span></a>
                    </div>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
        </PopoverGroup>

        <div class="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
          <div
			@click="this.openCallPhoneDialog()"
		class="px-5 py-2 font-mono text-white bg-indigo-500 rounded-lg cursor-pointer">
            Заказать звонок
          </div>
        </div>

      </div>
    </div>

    <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <PopoverPanel focus class="absolute inset-x-0 top-0 z-20 p-2 transition transform origin-top-right md:hidden">
        <div class="bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
          <div class="px-5 pt-5 pb-6">
            <div class="flex items-center justify-between">
              <div>
                <img class="w-auto h-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
              </div>
              <div class="-mr-2">
                <PopoverButton class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span class="sr-only">Close menu</span>
                  <XIcon class="w-6 h-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-8">
                <router-link v-bind:to="'/category/' + category.id" 
				v-for="category in this.categories" 
				:key="category.id"
				class="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50">
                  <component :is="category_icon" class="flex-shrink-0 w-6 h-6 text-indigo-600" aria-hidden="true" />
                  <span class="ml-3 text-base font-medium text-gray-900">
                    {{ category.name }}
                  </span>
                </router-link>
              </nav>
            </div>
          </div>
          <div class="px-5 py-6 space-y-6">
            <div class="grid grid-cols-2 gap-y-4 gap-x-8">
              <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                Pricing
              </a>

              <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
                Docs
              </a>
              <a v-for="item in resources" :key="item.name" :href="item.href" class="text-base font-medium text-gray-900 hover:text-gray-700">
                {{ item.name }}
              </a>
            </div>
            <div>
              <a href="#" class="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700">
                Sign up
              </a>
              <p class="mt-6 text-base font-medium text-center text-gray-500">
                Existing customer?
                {{ ' ' }}
                <a href="#" class="text-indigo-600 hover:text-indigo-500">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import {
	ChevronDoubleRightIcon,
	XIcon,
	MenuIcon,
} from '@heroicons/vue/outline'
import { ChevronDownIcon } from '@heroicons/vue/solid'

const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: ChevronDownIcon},
  { name: 'Contact Sales', href: '#', icon: ChevronDoubleRightIcon },
]


export default {
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    ChevronDownIcon,
	ChevronDoubleRightIcon,
	XIcon,
	MenuIcon,
  },
  setup() {
    return {
      callsToAction,
    }
  },
  data () {
	return {
		category_icon: 'ChevronDoubleRightIcon',
	}
  },
  computed: {
	categories () {
		return this.$store.state.ecommerce.categories;
	}
  },
	methods: { 
		openCallPhoneDialog () {
			console.log('clicked to open')
			this.$store.commit('openCallPhoneDialog');		
		},
	},
}
</script>
