const batch_ids = [];
let timeout;

function batchInterceptor(instance) {
  instance.interceptors.request.use(
    (request) => {
      return new Promise((resolve, reject) => {
        if (request.url === '/file-batch-api/api/files/batch') {
          // For batching requests

          batch_ids.push(...request.params.ids); // saving ids of all requests in array for one batch request
          clearTimeout(timeout); // Only last request would resolve and all previous requests would be lost
          timeout = setTimeout(() => {
            request.params.ids = batch_ids; // saving all ids in final batch request which would go to backend
            resolve(request); // request sent to server
          }, 0);
        } else {
          // Normal request
          resolve(request);
        }
      });
    },
    (error) => Promise.reject(error),
  );
}
export default batchInterceptor;
