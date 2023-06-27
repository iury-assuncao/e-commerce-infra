import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const RegisterSchema = yup.object({
  name: yup.string().required('Preencha o nome'),
  email: yup
    .string()
    .email('Preencha um e-mail válido')
    .required('Preencha o e-mail'),
  password: yup.string().required('Preencha a senha'),
});

export const RegisterResolver = yupResolver(RegisterSchema);
