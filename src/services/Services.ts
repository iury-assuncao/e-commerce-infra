import { INewUser, IProduct } from '../interfaces';
import { Api } from '../providers/Api';

export async function login(email: string, password: string) {
  return Api.post<INewUser>(`/auth/login`, { email, password });
}

export async function register(email: string, password: string) {
  return Api.post<INewUser>(`/auth/login`, { email, password });
}

export async function getProductById(id: number) {
  return Api.get<IProduct>(`/produtos/${id}`);
}

export async function getProducts() {
  return Api.get<IProduct[]>('/produtos');
}
