import { Header } from '../../components/Header';
import imageLogin from '../../assets/image-login.svg';
import { Controller, useForm } from 'react-hook-form';
import { Input, InputPassword } from '../../components/Form';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { LoginResolver } from '../../Validations';

type ILoginForm = {
  email: string;
  password: string;
};

function LoginPage() {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({ resolver: LoginResolver });
  return (
    <div>
      <Header />
      <section className="flex h-[88vh] min-w-full items-center justify-between">
        <div className="min-h-full w-1/2">
          <img src={imageLogin} alt="Imagem da tela de login" />
        </div>
        <div className="min-h-full w-1/2">
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
            //onSubmit={handleSubmit(onSubmit)}
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

            <span
              className="mt-2 text-xs font-medium text-gray-800 hover:cursor-pointer"
              onClick={() => navigate('/register')}
            >
              Não possui conta? Cadastre-se
            </span>

            <Button type="submit">Entrar</Button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
