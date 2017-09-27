<template>
	<q-layout>
		<q-data-table
			:data="table"
			:config="config"
			:columns="columns"
			@refresh="refresh"
			>
			<!-- Custom renderer for "message" column -->
			<template slot="col-id" scope="cell">
				<span class="light-paragraph">{{cell.id}}</span>
			</template>
			<template slot="col-name" scope="cell">
				<span class="light-paragraph">{{cell.name}}</span>
			</template>
		</q-data-table>
	</q-layout>
</template>

<script>
	import {QDataTable} from 'quasar'
	export default {
		name: 'source_assets',
		components: {
			QDataTable
		},
		data () {
			return {
				config: {
					rowHeight: '50px',
					title: 'Saved Searches',
					//noHeader: true,
					refresh: true,
					columnPicker: true,
					leftStickyColumns: 0,
					rightStickyColumns: 2,
					bodyStyle: {
						maxHeight: '500px'
					},
					responsive: true,
					pagination: {
						rowsPerPage: 15,
						options: [5, 10, 15, 30, 50, 500]
					},
					selection: 'multiple',
					messages: {
						noData: 'No data!',
						noDataAfterFiltering: 'No results!'
					},
					labels: {}
				},
				columns: [
					{

						label: 'Name',
						field: 'isodate',
						width: 'auto'
					},
					{
						label: 'Description',
						field: 'isodate',
						width: 'auto'
					},
					{
						label: 'Target',
						field: 'isodate',
						width: 'auto'
					},
					{
						label: 'Query',
						field: 'isodate',
						width: 'auto'
					},
					{
						label: 'Facets',
						field: 'isodate',
						width: 'auto'
					}
				],
				data: [
					{
						id: 1,
						name: 'test',
						description: 'add source port to default',
						target: 'metaflow',
						query: '...',
						facets: 'Risks:risks, Signatures:sid...'
					}
				]
			}
		}
	}
</script>

<style lang="stylus"></style>
