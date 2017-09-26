<template>
	<q-layout>
		<q-data-table
			:data="table"
			:config="config"
			:columns="columns"
			@refresh="refresh"
			>
			<!-- Custom renderer for "message" column -->
			<template slot="col-message" scope="cell">
				<span class="light-paragraph">{{cell.data}}</span>
			</template>
			<!-- Custom renderer for "source" column -->
			<template slot="col-source" scope="cell">
				<span v-if="cell.data === 'Audit'" class="label text-white bg-primary">
					Audit
					<q-tooltip>Some data</q-tooltip>
				</span>
				<span v-else class="label text-white bg-negative">{{cell.data}}</span>
			</template>
			<!-- Custom renderer for "action" column with button for custom action -->
			<template slot='col-action' scope='cell'>
				<q-btn color="primary" @click='doSomethingMethod(cell.row.id)'>View</q-btn>
			</template>
			<!-- Custom renderer when user selected one or more rows -->
			<template slot="selection" scope="selection">
				<q-btn color="primary" @click="changeMessage(selection)">
					<i>edit</i>
				</q-btn>
				<q-btn color="primary" @click="deleteRow(selection)">
					<i>delete</i>
				</q-btn>
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
					title: 'Data Table',
					noHeader: true,
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
						noData: '<i>warning</i> No data available to show.',
						noDataAfterFiltering: '<i>warning</i> No results. Please refine your search terms.'
					},
					labels: {
						columns: 'Coluuuuumns',
						allCols: 'Eeeeeeeeevery Cols',
						rows: 'Rooows',
						selected: {
							singular: 'item selected.',
							plural: 'items selected.'
						},
						clear: 'clear',
						search: 'Search',
						all: 'All'
					}
				},
				columns: [
					{

						label: 'Date',
						field: 'isodate',
						width: '100px',

						style: {color: '#ff09fa'},
						classes: 'bg-primary',
						filter: true,
						sort: true,
						sort (a, b) {
							return (new Date(a)) - (new Date(b))
						},
						type: 'string',
							format (value, row) {
							return new Date(value).toLocaleString()
						}
					}

				]
			}
		}
	}
</script>

<style lang="stylus"></style>
