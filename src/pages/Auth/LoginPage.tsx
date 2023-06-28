import { Header } from '../../components/Header';
import imageLogin from '../../assets/register.jpg';
import { Controller, useForm } from 'react-hook-form';
import { Input, InputPassword } from '../../components/Form';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { LoginResolver } from '../../Validations';
import { toast } from 'react-toastify';
import { useState } from 'react';

type ILoginForm = {
  email: string;
  password: string;
};

function LoginPage() {
  const [loading, setLoading] = useState(false);

  async function onSubmit() {
    try {
      setLoading(true);
      //const { data } = await login();
      // if (data.token) {
      //   const { firstAccess, resetHash } = JSON.parse(
      //     atob(data.token.split('.')[1])
      //   );
      // }
    } catch (error: any) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  }

  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({ resolver: LoginResolver });
  return (
    <div>
      <Header />
      <section className="flex h-[88vh] min-w-full items-center justify-evenly px-10 py-4">
        <img
          src={imageLogin}
          alt="Imagem da tela de login"
          className="h-[78vh] max-lg:hidden"
        />

        <div className="w-[60vh] ">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold text-gray-700 max-sm:text-3xl">
              Login
            </h1>
          </div>
          <p className=" mt-2 text-sm text-gray-600 max-sm:text-center">
            Bem-vindo! Faça login na sua conta
          </p>

          <form
            className="flex w-full flex-col items-end"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  errors={errors}
                  className="w-full"
                  type="email"
                  label="E-mail"
                  placeholder="you@exemple.com"
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <InputPassword
                  {...field}
                  errors={errors}
                  className="w-full"
                  label="Senha"
                  placeholder="••••••••"
                />
              )}
            />

            <span className=" text-xs font-normal text-gray-800 ">
              Ainda não possui uma conta?
              <span
                className="  text-orange-500 hover:cursor-pointer"
                onClick={() => navigate('/cadastro-usuario')}
              >
                {' '}
                Cadastre-se
              </span>
            </span>

            <Button type="submit">Entrar</Button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
