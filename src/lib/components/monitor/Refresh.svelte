<script lang="ts">
	import refreshIcon from '$lib/assets/icons/refresh.svg';

	import { syncWarningState } from '$lib/stores/clientWarningStore';
	import { lastUpdateTimeStore } from '$lib/stores/lastUpdateTime';

	const refreshHandle = async () => {
		syncWarningState();
	};

	const formatTime = (date: Date) => {
		return (
			date
				.toLocaleTimeString('ko-KR', {
					hour: '2-digit',
					minute: '2-digit',
					second: '2-digit',
					hour12: false
				})
				.replace(':', '시 ')
				.replace(':', '분 ') + '초'
		);
	};
</script>

<div>
	<button
		on:click={refreshHandle}
		aria-label="refresh"
		style="background: none; border: none; padding: 0; cursor: pointer; margin: 0; width: 18px; height: 18px;"
	>
		<img src={refreshIcon} width="18px" height="18px" alt="refresh" />
	</button>
	<span
		>마지막 업데이트
		{$lastUpdateTimeStore.time ? formatTime(new Date($lastUpdateTimeStore.time)) : '없음'}
	</span>
</div>

<style>
	div {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 4px;
		opacity: 0.25;
	}

	span {
		font-size: 13px;
	}

	img {
		transition: transform 0.2s ease-out;
		cursor: pointer;
	}

	img:hover {
		transform: rotate(-25deg);
	}

	img:active {
		transform: rotate(220deg);
	}
</style>
