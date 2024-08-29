<script>
	export let data;
</script>

<main class="max-w-screen-lg mx-auto p-4">
	<h1 class="bg-base-200 rounded-2xl p-12 text-5xl">
		<span class="block font-bold">Error Culture</span>
		<span class="font-light">Community Collection</span>
	</h1>
	<div class="mx-8 mt-12">
		<p class="mb-2">
			The following table is a collection of practices from a variety of scientific disciplines that qualify as
			Questionable research Practices (QRP) and Honest Error (HE) in academic research. The table is explicitly not
			complete, meaning that practices not mentioned here do not qualify as QRP or HE. Example practices are roughly
			categorised chronologically according to the successive phases of an empirical scientific process (Column
			“Project
			stage”). We are aware that these phases are not represented in all areas of science. On a second level the
			research field or topic is narrowed down (Column “Topic”).
		</p>
		<p>
			This table is not complete and we are seeking to identify more of such common practices from more areas of
			research or topics and project stages that are considered QRPs or HEs that regularly occur. We invite you to add
			lines into the table and extend the current variety of topics with anonymous examples, optimally providing
			sources
			to evidence of these practices. If your example falls into another category that does not yet exist both as a
			project stage or topic, feel free to create it.
		</p>
		<table class="mt-8 table">
			<thead>
			<tr>
				<th>Project Stage</th>
				<th>Topic / Field</th>
				<th>
					<div class="tooltip tooltip-bottom" data-tip="Questionable Research Practices">
						QRP
					</div>
				</th>
				<th>Honest Error</th>
			</tr>
			</thead>
			<tbody>
			{#each data.errorEntries as entry}
				<tr>
					<td>{entry.projectStage}</td>
					<td>{entry.topic}</td>
					<td>{entry.qrp ?? '-'}</td>
					<td>{entry.honestError ?? '-'}</td>
				</tr>
			{/each}
			</tbody>
		</table>
	</div>
</main>