import axios, { Method } from 'axios';
import { API_BASE_URL, API_VERSION, API_KEY } from '@env';

const getApiBaseUrlWithVersion = () => {
  return `${API_BASE_URL}v${API_VERSION}/`;
};

const setupAxiosConfig = async (config: any) => {
  config.headers['Content-Type'] = 'application/json';
  config.headers['X-Api-Key'] = API_KEY;
  config.headers['Time-Zone'] =
    Intl.DateTimeFormat().resolvedOptions().timeZone;

  return config;
};

const client = axios.create();

client.interceptors.request.use(
  async (config: any) => {
    try {
      return await setupAxiosConfig(config);
    } catch (e: any) {
      let newError = JSON.stringify(e);
      console.log('newError', newError);
    }
  },
);

export const apiCallFunc = async (
  method: Method,
  path: string,
  data: any = undefined,
  params: any = undefined,
) => {
  try {
    const apiBaseUrl = getApiBaseUrlWithVersion();
    const res = await client({
      method,
      url: `${apiBaseUrl}${path}`,
      data,
      params,
      timeoutErrorMessage: 'timeout',
    });
    return res?.data;
  } catch (e: any) {
    let newError = JSON.stringify(e);
    console.log('newError', newError);
  }
};