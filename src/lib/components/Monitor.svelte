<script lang="ts">
	import Button from './forms/Button.svelte';
	import KeyValue from './forms/KeyValue.svelte';
	import CarInfo from './monitor/CarInfo.svelte';
	import Refresh from './monitor/Refresh.svelte';

	import { clientWarningStore } from '$lib/stores/clientWarningStore';

	const deleteWarningHandle = () => {
		if (confirm('견인 처리를 완료하시겠습니까?')) {
			// /clear로 post 요청
			fetch('/clear', {
				method: 'POST'
			})
				.then((res) => res.json())
				.then((data) => {
					alert('견인 처리 완료');
				})
				.catch((err) => {
					console.error(err);
					alert('견인 처리에 실패했습니다.');
				});
		}
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

	let current = $state(new Date().getTime());
	setInterval(() => {
		current = new Date().getTime();
	}, 1000);
</script>

{#snippet messageState()}
	{$clientWarningStore.number.length ? '견인 처리' : '비어있음'}
{/snippet}

<div id="monitor">
	<CarInfo carNumber={$clientWarningStore.number.length ? $clientWarningStore.number : '없음'} />
	<div id="time">
		<KeyValue
			key="주정차 시작 시간"
			value={$clientWarningStore.number.length
				? formatTime(new Date($clientWarningStore.time!))
				: '없음'}
			align="center"
			opacity="0.5"
		/>
		<KeyValue
			key="경과 시간"
			value={$clientWarningStore.number.length
				? `${Math.floor((current - new Date($clientWarningStore.time!).getTime() + 25000) / 3600000)}시 ${Math.floor(((current - new Date($clientWarningStore.time!).getTime() + 25000) % 3600000) / 60000)}분 ${Math.floor(((current - new Date($clientWarningStore.time!).getTime() + 25000) % 60000) / 1000)}초`
				: '없음'}
			align="center"
		/>
	</div>
	<div id="control" style="width: 100%">
		<Refresh />
		<Button
			disabled={$clientWarningStore.warning ? false : true}
			onclick={deleteWarningHandle}
			{messageState}
		/>
	</div>
</div>

<style>
	div#monitor {
		width: 460px;
		height: 500px;
		background-color: white;
		border-radius: 50px;
		box-shadow: 6px 6px 40px rgba(0, 0, 0, 0.05);
		padding: 36px;
		box-sizing: border-box;
		flex-shrink: 0;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}

	div#time {
		display: flex;
		flex-direction: column;
		gap: 28px;
	}

	div#control {
		display: flex;
		flex-direction: column;
		gap: 14px;
		width: 100%;
	}

	@media (max-width: 768px) {
		div#monitor {
			width: 100%;
			height: 100%;
			background-color: transparent;
			padding: 0px;
			box-shadow: 6px 6px 40px rgba(0, 0, 0, 0);
		}

		div#control {
			position: fixed;
			width: calc(100% - 40px) !important;
			left: 20px;
			right: 20px;
			bottom: 20px;
		}

		div#time {
			margin-top: 40px;
			display: flex;
			flex-direction: column;
			gap: 50px;
		}
	}
</style>
