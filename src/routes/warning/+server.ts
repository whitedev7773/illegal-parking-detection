import { json } from '@sveltejs/kit';
import { serverWarningStore } from '$lib/stores/serverWarningStore';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();

	// 타입 안전성을 위해 입력 데이터 타입 정의
	interface WarningRequest {
		carNumber: string;
	}

	const { carNumber }: WarningRequest = body;

	if (!carNumber || typeof carNumber !== 'string') {
		return json({ error: 'Invalid carNumber' }, { status: 400 });
	}

	const currentTime = new Date().toISOString();
	serverWarningStore.update(() => ({
		warning: true,
		number: carNumber,
		time: currentTime
	}));

	console.log(`차번호 ${carNumber}의 경고가 ${currentTime}에 설정됨`);

	return json({ message: '경고 설정됨', warning: true, time: currentTime });
};
