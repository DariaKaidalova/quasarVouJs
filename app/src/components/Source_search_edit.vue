<template>
	<q-layout>
		<div class="b-row">
			<h2 class="b-title">UPDATE SAVED SEARCH</h2>
			<q-input v-model="text" float-label="Name" placeholder=""/>
			<q-input v-model="text" float-label="Description" placeholder=""/>
			<q-input v-model="text" float-label="Query" placeholder=""/>
		</div>
		<div class="b-row">
			<q-data-table
				:data="tableData"
				:config="config"
				:columns="columns"
				@refresh="refresh"
				>
				<template slot="col-name" scope="cell">
					<span class="light-paragraph">{{cell.row.title}}</span>
				</template>
				<template slot="col-description" scope="cell">
					<span class="light-paragraph">{{cell.row.field}}</span>
				</template>
				<template slot="col-target" scope="cell">
					<span class="light-paragraph">{{cell.row.buttons}}</span>
				</template>
				<template slot="col-buttons" scope="cell">
					<q-btn color="primary" small>
						<q-icon name="arrow_upward" />
					</q-btn>
					<q-btn color="primary" small>
						<q-icon name="arrow_downward" />
					</q-btn>
				</template>
			</q-data-table>
		</div>
		<div class="b-row flex justify-between items-center">
			<div class="b-row__item">
				<q-input v-model="text" float-label="Title" placeholder=""/>
			</div>
			<div class="b-row__item">
				<q-input v-model="text" float-label="Field" placeholder=""/>
			</div>
			<div class="b-row__item">
				<q-btn icon="add" color="primary">Add</q-btn>
			</div>
		</div>
		<div class="b-row flex justify-end items-center">
			<div class="b-row__item">
				<q-btn icon="save" color="primary">Save</q-btn>
			</div>
			<div class="b-row__item">
				<q-btn icon="cancel" color="primary">Cancel</q-btn>
			</div>
		</div>
	</q-layout>
</template>

<script>
	import {QInput, QDataTable, QBtn, QIcon} from 'quasar'
	export default {

		name: 'source_search_edit',
		components: {
			QInput,
			QDataTable,
			QBtn, 
			QIcon
		},
		data () {
			return {
				config: {
					rowHeight: '50px',
					title: 'Facets',
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
						label: 'Title',
						field: 'title',
						width: 'auto',
						sort: true,
						filter: true
					},
					{
						label: 'Field',
						field: 'field',
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
						title: 'Risks',
						field: 'risks'
					},
					{
						id: 2,
						title: 'Signatures',
						field: 'sid'
					},
					{
						id: 3,
						title: 'Incidents Tags',
						field: 'incidents'
					}
				],
				refresh: true
			}
		}

	}
</script>
