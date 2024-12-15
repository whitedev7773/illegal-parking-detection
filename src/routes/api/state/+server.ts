import { json } from '@sveltejs/kit';
import { serverWarningStore } from '$lib/stores/serverWarningStore';
import type { RequestHandler } from './$types';

// 상태 조회 핸들러
export const GET: RequestHandler = async () => {
	let state;
	serverWarningStore.subscribe((value) => (state = value))(); // Store 값 가져오기
	return json(state); // 현재 상태 반환
};
