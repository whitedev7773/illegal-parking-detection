import { writable } from 'svelte/store';
import type { WarningState } from './serverWarningStore';
import { lastUpdateTimeStore } from './lastUpdateTime';

// 클라이언트에서 사용할 Store
export const clientWarningStore = writable<WarningState>({
	warning: false,
	number: '',
	time: null
});

// 서버 상태 동기화 함수
export async function syncWarningState() {
	try {
		const response = await fetch('/api/state'); // 서버 API 호출
		if (!response.ok) {
			throw new Error('Failed to fetch warning state');
		}

		const data: WarningState = await response.json();
		clientWarningStore.set(data); // Store 업데이트
		lastUpdateTimeStore.set({ time: new Date().toISOString() }); // 마지막 업데이트 시간 업데이트
	} catch (error) {
		console.error('Error syncing warning state:', error);
	}
}

// Polling 함수: 일정 간격마다 상태 동기화
export function startPolling(interval: number) {
	setInterval(() => {
		console.log('Polling warning state...');
		syncWarningState(); // 주어진 간격마다 서버에서 상태를 가져옵니다.
	}, interval);
}
