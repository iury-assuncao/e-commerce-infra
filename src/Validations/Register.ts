import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const RegisterSchema = yup.object({
  nome: yup.string().required('Preencha o nome'),
  email: yup
    .string()
    .email('Preencha um e-mail válido')
    .required('Preencha o e-mail'),
  senha: yup.string().required('Preencha a senha'),
});

export const RegisterResolver = yupResolver(RegisterSchema);
