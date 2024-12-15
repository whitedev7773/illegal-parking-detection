<script lang="ts">
	let props = $props();
</script>

<button {...props}>{@render props.messageState()}</button>

<style>
	button {
		transition:
			background-color 0.3s,
			box-shadow 0.3s;
		width: 100%;
		height: 60px;
		border-radius: 28px;
		background-color: #ff3a3a;
		color: white;
		font-size: 18px;
		border: none;
		outline: none;
		cursor: pointer;
	}

	button:hover {
		background-color: #ff5a5a;
	}

	button:not(:disabled):hover {
		box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
	}

	button:active {
		background-color: #ff3a3a;
	}

	button:disabled {
		background-color: #dfdfdf;
		cursor: not-allowed;
	}
</style>
