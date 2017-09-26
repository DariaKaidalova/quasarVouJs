<template>

	<table class="b-table q-table striped-even responsive">
		<thead>
			<tr>
				<th class="text-left">Name</th>
				<th class="text-left">Description</th>
				<th class="text-left">Subnet</th>
				<th class="text-right">Created On</th>
				<th class="text-right">Updated On</th>
				<th class="text-right">Last Scan</th>
				<th class="text-right"></th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td class="text-left">Some subnet</td>
				<td class="text-left">some description</td>
				<td class="text-left">192.168.0.1</td>
				<td class="text-right">2 months ago</td>
				<td class="text-right">2 months ago</td>
				<td class="text-right"></td>
				<td class="text-right">
					<q-btn>
						<q-icon name="visibility" />
					</q-btn>
					<q-btn color="brown 5">
						<q-icon name="edit" />
					</q-btn>
					<q-btn color="secondary">
						<q-icon name="delete" />
					</q-btn>
				</td>
			</tr>
			<tr>
				<td class="text-left">Some subnet</td>
				<td class="text-left">some description</td>
				<td class="text-left">192.168.0.2</td>
				<td class="text-right">2 months ago</td>
				<td class="text-right">2 months ago</td>
				<td class="text-right"></td>
				<td class="text-right">
					<q-btn>
						<q-icon name="visibility" />
					</q-btn>
					<q-btn color="brown 5">
						<q-icon name="edit" />
					</q-btn>
					<q-btn color="secondary">
						<q-icon name="delete" />
					</q-btn>
				</td>
			</tr>
			<tr>
				<td class="text-left">Some subnet</td>
				<td class="text-left">some description</td>
				<td class="text-left">192.168.0.3</td>
				<td class="text-right">2 months ago</td>
				<td class="text-right">2 months ago</td>
				<td class="text-right"></td>
				<td class="text-right">
					<q-btn>
						<q-icon name="visibility" />
					</q-btn>
					<q-btn color="brown 5">
						<q-icon name="edit" />
					</q-btn>
					<q-btn color="secondary">
						<q-icon name="delete" />
					</q-btn>
				</td>
			</tr>
			<tr>
				<td class="text-left">Some subnet</td>
				<td class="text-left">some description</td>
				<td class="text-left">192.168.0.4</td>
				<td class="text-right">2 months ago</td>
				<td class="text-right">2 months ago</td>
				<td class="text-right"></td>
				<td class="text-right">
					<q-btn>
						<q-icon name="visibility" />
					</q-btn>
					<q-btn color="brown 5">
						<q-icon name="edit" />
					</q-btn>
					<q-btn color="secondary">
						<q-icon name="delete" />
					</q-btn>
				</td>
			</tr>
		</tbody>
	</table>

</template>

<script>
	
import {
  QBtn,
  QIcon
} from 'quasar'

export default {
  name: 'source_subnet',
  components: {
    QBtn,
    QIcon
  }
}
</script>

<style lang="stylus"></style>
