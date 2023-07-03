import { Header } from '../../components/Header';
import imageResgister from '../../assets/login.jpg';
import { Controller, useForm } from 'react-hook-form';
import { Input, InputPassword } from '../../components/Form';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { RegisterResolver } from '../../Validations';
import { Loading } from '../../components/Loading';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { registerUser } from '../../services/Services';

type IRegisterForm = {
  nome: string;
  email: string;
  senha: string;
};

function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterForm>({ resolver: RegisterResolver });

  async function onSubmit(values: IRegisterForm) {
    try {
      setLoading(true);
      const { status } = await registerUser(
        values.nome,
        values.email,
        values.senha
      );
      if (status === 201) {
        toast.success('Usuário cadastrado com sucesso');
        navigate('/login');
      }
    } catch (error: any) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Header />
          <section className="flex h-[88vh] min-w-full items-center justify-evenly px-10 py-4">
            <div className="w-[60vh] ">
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-bold text-gray-700 max-sm:text-3xl">
                  Cadastre-se
                </h1>
              </div>
              <p className=" mt-2 text-sm text-gray-600 max-sm:text-center">
                Crie sua conta! É rápido e fácil
              </p>

              <form
                className="flex w-full flex-col items-end"
                onSubmit={handleSubmit(onSubmit)}
              >
                <Controller
                  name="nome"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      errors={errors}
                      className="w-full"
                      type="text"
                      label="Nome"
                      placeholder="Fulano"
                    />
                  )}
                />
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
                  name="senha"
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
                  Já possui conta?
                  <span
                    className="  text-orange-500 hover:cursor-pointer"
                    onClick={() => navigate('/login')}
                  >
                    {' '}
                    Entrar
                  </span>
                </span>

                <Button type="submit">Cadastrar</Button>
              </form>
            </div>
            <img
              src={imageResgister}
              alt="Imagem da tela de login"
              className="h-[60vh] max-lg:hidden"
            />
          </section>
        </div>
      )}
    </>
  );
}

export default RegisterPage;
