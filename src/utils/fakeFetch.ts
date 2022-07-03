export const postData = (data: any) =>
	new Promise((resolve, reject) => {
		const { description, ...others } = data;
		if (
			(data.description && Object.values(data).includes('')) &&
			(!data.description && Object.values({ ...others }).includes(''))
		) {
			return setTimeout(() => reject(new Error('All data is required')), 2000);
		}

		setTimeout(() => resolve(data), 2000);
	});
