import axios from 'axios';

const baseURL = 'https://infracode-api.onrender.com';
export const Api = axios.create({ baseURL });

export function setBearerToken(bearerToken: string) {
  Api.defaults.headers.common['Authorization'] = `Bearer ${bearerToken}`;
}
