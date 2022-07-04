export const fakeFetch = {
	post: (url:string, data:any) => {
		return new Promise((resolve, reject) => {
			const { title } = data;
			if (!title) {
				return setTimeout(() => reject(new Error('All data is required')), 2000);
			}
	
			setTimeout(() => resolve({ data, url }), 2000);
		});
	}
}
