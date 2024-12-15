import { writable } from 'svelte/store';

export interface lastUpdateState {
	time: string | null;
}

// 클라이언트에서 사용할 Store
export const lastUpdateTimeStore = writable<lastUpdateState>({
	time: new Date().toISOString()
});
