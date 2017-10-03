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
			<template slot="col-buttons" scope="cell">
				<q-btn color="primary" @click="$router.push('/source/search/edit')" small>
					<q-icon name="mode_edit" />
				</q-btn>
			</template>
		</q-data-table>
	</q-layout>
</template>

<script>
	import {QDataTable, QBtn, QIcon} from 'quasar'
	export default {

		name: 'source_search',
		components: {
			QDataTable,
			QBtn,
			QIcon
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
					responsive: true,
					pagination: {
						rowsPerPage: 10,
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
						width: 'auto',
						sort: true,
						filter: true
					},
					{
						label: 'Description',
						field: 'description',
						width: 'auto',
						filter: true
					},
					{
						label: 'Target',
						field: 'target',
						width: 'auto',
						filter: true
					},
					{
						label: 'Query',
						field: 'query',
						width: 'auto',
						filter: true
					},
					{
						label: 'Facets',
						field: 'facets',
						width: 'auto',
						filter: true
					},
					{
						label: '',
						field: 'buttons',
						width: 'auto',
						filter: true,
						style: {textAlign: 'right'}
					}
				],
				tableData: [
					{
						id: 1,
						name: 'test 1',
						description: 'add source port to default',
						target: 'metaflow',
						query: '...',
						facets: 'Risks:risks, Signatures:sid...'
					},
					{
						id: 2,
						name: 'test 4',
						description: 'test',
						target: 'event',
						query: '...',
						facets: 'Source::@source, Tags::@tags'
					},
					{
						id: 3,
						name: 'test 5',
						description: 'test',
						target: 'event',
						query: '...',
						facets: 'Source::@source, Tags::@tags'
					},
					{
						id: 4,
						name: 'test 3',
						description: 'test',
						target: 'event',
						query: '...',
						facets: 'Source::@source, Tags::@tags'
					},
					{
						id: 5,
						name: 'test 2',
						description: 'test',
						target: 'event',
						query: '...',
						facets: 'Source::@source, Tags::@tags'
					},
					{
						id: 6,
						name: 'test 7',
						description: 'test',
						target: 'event',
						query: '...',
						facets: 'Source::@source, Tags::@tags'
					},
					{
						id: 7,
						name: 'test 6',
						description: 'test',
						target: 'event',
						query: '...',
						facets: 'Source::@source, Tags::@tags'
					},
					{
						id: 8,
						name: 'test 8',
						description: 'test',
						target: 'event',
						query: '...',
						facets: 'Source::@source, Tags::@tags'
					},
					{
						id: 9,
						name: 'test 9',
						description: 'test',
						target: 'event',
						query: '...',
						facets: 'Source::@source, Tags::@tags'
					},
					{
						id: 10,
						name: 'test 10',
						description: 'test',
						target: 'event',
						query: '...',
						facets: 'Source::@source, Tags::@tags'
					},
					{
						id: 11,
						name: 'test 11',
						description: 'test',
						target: 'event',
						query: '...',
						facets: 'Source::@source, Tags::@tags'
					},
					{
						id: 12,
						name: 'test 12',
						description: 'test',
						target: 'event',
						query: '...',
						facets: 'Source::@source, Tags::@tags'
					},
					{
						id: 13,
						name: 'test 13',
						description: 'test',
						target: 'event',
						query: '...',
						facets: 'Source::@source, Tags::@tags'
					},
					{
						id: 14,
						name: 'test 14',
						description: 'test',
						target: 'event',
						query: '...',
						facets: 'Source::@source, Tags::@tags'
					},
					{
						id: 15,
						name: 'test 15',
						description: 'test',
						target: 'event',
						query: '...',
						facets: 'Source::@source, Tags::@tags'
					},
					{
						id: 16,
						name: 'test 16',
						description: 'test',
						target: 'event',
						query: '...',
						facets: 'Source::@source, Tags::@tags'
					},
					{
						id: 17,
						name: 'test 17',
						description: 'test',
						target: 'event',
						query: '...',
						facets: 'Source::@source, Tags::@tags'
					},
					{
						id: 18,
						name: 'test 18',
						description: 'test',
						target: 'event',
						query: '...',
						facets: 'Source::@source, Tags::@tags'
					},
					{
						id: 19,
						name: 'test 19',
						description: 'test',
						target: 'event',
						query: '...',
						facets: 'Source::@source, Tags::@tags'
					},
					{
						id: 20,
						name: 'test 20',
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
