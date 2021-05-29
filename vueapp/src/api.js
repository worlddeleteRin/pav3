import axios from 'axios';

export async function apiGetProducts() {
    await axios.get(
        '/api/get_products',
    ).then((response) => {
		var r_status = response.data.status
		if (r_status == 1) {
			this.$store.commit('setProducts', response.data.products)
		}
    })
}

export async function apiGetCategories () {
    await axios.get(
        '/api/get_categories',
    ).then((response) => {
		var r_status = response.data.status
		if (r_status == 1) {
			this.$store.commit('setCategories', response.data.categories)
		}
    })
}
