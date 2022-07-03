export const postData = (data: any) =>
  new Promise((resolve, reject) => {
    if (Object.values(data).includes('')) {
      return setTimeout(
        () => reject(new Error('All data is required')),
        2000
      );
    }

    setTimeout(() => resolve(data), 2000);
});
