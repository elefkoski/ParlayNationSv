<script lang="ts">
	export let tblAria: string = 'A table label';
	export let tblHeaders: string[] = ['Title 1', 'Title 2', 'Title 3', 'Title 4'];
	export let tblRows: (string | number)[][] = [
		['Comeout Roll', 'Even Money', '7 or 11', '2,3, or 12'],
		['Intermediate Roll', 'Even Money', 'When point rolls', '7']
	];
	export let tblPnts: string[] = [
		'The first note on the table',
		'The second note on the table',
		'The third note on the table'
	];
</script>

<section aria-label={tblAria} class="w-full px-4">
	<table class="table-auto w-full text-center">
		<thead class="bg-white dark:bg-gray-800">
			<tr>
				{#each tblHeaders as header (header)}
					<th class="border px-4 py-2">{header}</th>
				{/each}
			</tr>
		</thead>
		<tbody class="bg-white dark:bg-gray-800">
			{#each tblRows as row (row)}
				<tr>
					{#each row as cell (cell)}
						<td class="border px-4 py-2">{cell}</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</section>
<ul class="m-4 list-disc list-inside space-y-1">
	{#each tblPnts as tblePnt (tblePnt)}
		<li class="">{tblePnt}</li>
	{/each}
</ul>
