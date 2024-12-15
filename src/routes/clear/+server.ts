import { json } from '@sveltejs/kit';
import { serverWarningStore } from '$lib/stores/serverWarningStore';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async () => {
	serverWarningStore.update(() => ({
		warning: false,
		number: '',
		time: null
	}));

	console.log('경고 해제됨');

	return json({ message: '경고 해제됨', warning: false });
};
