import { writable } from 'svelte/store';

// Store의 데이터 타입 정의
export interface WarningState {
	warning: boolean;
	number: string;
	time: string | null; // null 또는 ISO 시간 문자열
}

export const serverWarningStore = writable<WarningState>({
	warning: false,
	number: '',
	time: null
});
