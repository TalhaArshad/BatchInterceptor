import axios from 'axios';
import addInterceptor from './interceptor';
const client = () => {
  const config = {
    host: 'https://europe-west1-quickstart-1573558070219.cloudfunctions.net',
    baseURL: 'https://europe-west1-quickstart-1573558070219.cloudfunctions.net',
    headers: {},
  };
  const instance = axios.create(config);
  addInterceptor(instance);
  return instance;
};
export default client;
