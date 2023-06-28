import { INewUser, IProduct } from '../interfaces';
import { Api } from '../providers/Api';

export async function Login(email: string, password: string) {
  return await Api.post<INewUser>(`/auth/login`, { email, password });
}

export async function Register(email: string, password: string) {
  return await Api.post<INewUser>(`/auth/login`, { email, password });
}

export async function getProductById(id: number) {
  return await Api.get<IProduct>(`/produtos/${id}`);
}

export async function getProducts() {
  return await Api.get<IProduct[]>('/produtos');
}
