<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal">
      <div class="bg-gray-900 bg-opacity-25 fixed inset-0 z-10 overflow-y-auto">
        <div class="min-h-screen px-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay class="fixed inset-0" />
          </TransitionChild>

          <span class="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div
              class="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
            >

			<div class="text-center font-bold font-mono text-md py-4 md:text-lg lg:text-xl">
				Заявка на обратный звонок
			</div>

			
					<InputIconComponent
				class="my-4"
				:icon="'UserIcon'"
				:bgcolor="'bg-gray-100'"
				:iconcolor="'text-gray-900'"
				:iconbgcolor="'bg-blue-200'"
				:rounded="'rounded-full'"
				:text="'text-gray-900'"
				:placeholder="'Введите ваше имя'"
				:placeholdercolor="'placeholder-gray-300'"
				v-model="this.name"
				:is_error="this.is_name_error"
			/>	
				<InputIconPhoneComponent
				class="my-4"
				:icon="'PhoneIcon'"
				:bgcolor="'bg-gray-100'"
				:iconcolor="'text-gray-900'"
				:iconbgcolor="'bg-blue-200'"
				:rounded="'rounded-full'"
				:text="'text-gray-900'"
				:placeholder="'Введите ваш телефон'"
				:placeholdercolor="'placeholder-gray-300'"
				v-model="this.phone"
				:is_error="this.is_phone_error"
			/>
			
              <div class="mt-8 text-center">
                <button
				@click="this.clickRequestCall()"
                  type="button"
                  class="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                >
				Оставить заявку 
                </button>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>

import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
} from '@headlessui/vue'
import InputIconComponent from '../components/InputIconComponent.vue';
import InputIconPhoneComponent from '../components/InputIconPhoneComponent.vue';

export default {
  name: 'CallPhoneDialog',
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
	// my custom
	InputIconComponent,
	InputIconPhoneComponent,
  },
  data () {
	return {
		name: '',
		phone: '',
		is_name_error: false,
		is_phone_error: false,
	}	
  },
  computed: {
    isOpen () {
      return this.$store.state.dialogs.call_phone_dialog.show;
    },
  },
  methods: {
    closeModal() {
      this.$store.commit('closeCallPhoneDialog')
    },
	clickRequestCall () {
		var correct_info = this.check_data()	
		if (correct_info) {
			this.closeModal()
			this.$notify({
				title: 'Успех!',
				message: 'Ваша заявка успешно отправлена!',
				type: 'success',
			});
		}
	},
	check_data () {
		var is_ok = true
		this.is_name_error = false;
		this.is_phone_error = false;

		if (this.name === '') {
			this.is_name_error = true;
			is_ok = false;
		}
		if (this.phone === '') {
			this.is_phone_error = true;
			is_ok = false;	
		}
		if (this.phone.length != 10) {
			this.is_phone_error = true;
			is_ok = false;
		}
		return is_ok;
	},
  }
}
</script>
