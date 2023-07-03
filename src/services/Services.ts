import { ILoginUser, INewUser, IProduct } from '../interfaces';
import { Api } from '../providers/Api';

export async function login(email: string, senha: string) {
  return Api.post<ILoginUser>(`/auth/login`, { email, senha });
}

export async function registerUser(nome: string, email: string, senha: string) {
  return Api.post<INewUser>(`/usuarios`, { nome, email, senha });
}

export async function getProductById(id: number) {
  return Api.get<IProduct>(`/produtos/${id}`);
}

export async function getProducts() {
  return Api.get<IProduct[]>('/produtos');
}
