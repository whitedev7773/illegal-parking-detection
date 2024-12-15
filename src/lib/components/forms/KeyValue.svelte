<script lang="ts">
	export let key = '없음';
	export let value = '없음';
	export let align = 'left';
	export let opacity = '1';
</script>

<div id="key-value" style={`opacity: ${opacity}`}>
	<p id="key" class="regular" style={`text-align: ${align}`}>{key}</p>
	<p id="value" class="bold" style={`text-align: ${align}`}>{value}</p>
</div>

<style>
	div#key-value {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}

	p#key {
		margin: 0;
		padding: 0;
		height: fit-content;
		font-size: 14px;
		color: #979797;
	}

	p#value {
		margin: 0;
		padding: 0;
		height: fit-content;
		font-size: 24px;
	}
</style>
