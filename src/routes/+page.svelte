<script lang="ts">
	import '$lib/global.css';
	import '$lib/font.css';

	import { onMount } from 'svelte';

	import Title from '$lib/components/Title.svelte';
	import Monitor from '$lib/components/Monitor.svelte';

	import { startPolling } from '$lib/stores/clientWarningStore';

	onMount(() => {
		startPolling(5000);
	});
</script>

<main>
	<Title
		title="주차 금지 구역 모니터링 시스템"
		subtitle="Monitoring System"
		description="주차 금지 구역에 주차한 자동차가 있는지 실시간으로 보여줍니다."
	/>
	<Monitor />
</main>

<style>
	main {
		width: max-content;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 100px;
	}

	@media (max-width: 768px) {
		main {
			position: static;
			transform: none;
			flex-direction: column;
			gap: 50px;
		}
	}
</style>
