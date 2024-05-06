import axios, { AxiosRequestConfig } from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_RESAS_API_KEY;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-API-KEY': API_KEY,
  },
});

/**
 * 汎用的なAPIリクエスト関数
 */
async function apiRequest<T, U = undefined>(
  endpoint: string,
  config: AxiosRequestConfig<U>,
): Promise<T> {
  try {
    const response = await apiClient.request<T>({ ...config, url: endpoint });
    return response.data;
  } catch (error) {
    console.error(`API request error: ${error}`);
    throw error;
  }
}

export default apiRequest;
