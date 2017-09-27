<template>
	<q-layout>
		<q-data-table
			:data="tableData"
			:config="config"
			:columns="columns"
			@refresh="refresh"
			>
			<template slot="col-name" scope="cell">
				<span class="light-paragraph">{{cell.row.name}}</span>
			</template>
			<template slot="col-description" scope="cell">
				<span class="light-paragraph">{{cell.row.description}}</span>
			</template>
			<template slot="col-target" scope="cell">
				<span class="light-paragraph">{{cell.row.target}}</span>
			</template>
			<template slot="col-query" scope="cell">
				<span class="light-paragraph">{{cell.row.query}}</span>
			</template>
			<template slot="col-facets" scope="cell">
				<span class="light-paragraph">{{cell.row.facets}}</span>
			</template>
		</q-data-table>
	</q-layout>
</template>

<script>
	import {QDataTable} from 'quasar'
	export default {

		name: 'source_search',
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
					labels: {
					    clear: 'delete',
						search: 'Search',
						all: 'All'
					}
				},
				columns: [
					{

						label: 'Name',
						field: 'name',
						width: 'auto'
					},
					{
						label: 'Description',
						field: 'description',
						width: 'auto'
					},
					{
						label: 'Target',
						field: 'target',
						width: 'auto'
					},
					{
						label: 'Query',
						field: 'query',
						width: 'auto'
					},
					{
						label: 'Facets',
						field: 'facets',
						width: 'auto'
					}
				],
				tableData: [
					{
						id: 1,
						name: 'test',
						description: 'add source port to default',
						target: 'metaflow',
						query: '...',
						facets: 'Risks:risks, Signatures:sid...'
					},
					{
						id: 2,
						name: 'test',
						description: 'test',
						target: 'event',
						query: '...',
						facets: 'Source::@source, Tags::@tags'
					}
				],
				refresh: true
			}
		}

	}
</script>

<style lang="stylus"></style>
