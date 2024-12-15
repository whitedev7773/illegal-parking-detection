<script lang="ts">
	import carImage from '$lib/assets/images/car.png';
	import KeyValue from '../forms/KeyValue.svelte';

	export let carNumber = '없음';
</script>

<div id="car-info">
	<img src={carImage} width="100px" height="100px" alt={carNumber} />
	<KeyValue key="감지된 자동차 정보" value={carNumber} />
</div>

<style>
	div#car-info {
		width: 100%;
		display: flex;
		align-items: center;
		gap: 24px;
		padding: 20px 30px;
		box-sizing: border-box;
		border-radius: 28px;
		border: solid 1px #dadada;
	}

	@media (max-width: 768px) {
		div#car-info {
			width: calc(100% - 40px);
			margin: 0 20px !important;
		}
	}
</style>
