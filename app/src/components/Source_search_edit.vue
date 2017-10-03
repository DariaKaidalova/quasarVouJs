<template>
	<q-layout>
		<h2 class="b-title"><small>UPDATE SAVED SEARCH</small></h2>
		<q-input v-model="text" float-label="Name" placeholder=""/>
		<q-input v-model="text" float-label="Description" placeholder=""/>
		<q-input v-model="text" float-label="Query" placeholder=""/>
	</q-layout>
</template>

<script>
	import {QInput, QDataTable} from 'quasar'
	export default {

		name: 'source_search_edit',
		components: {
			QInput,
			QDataTable
		},
		data () {
			return {}
		}

	}
</script>
