import Logo from '../../assets/logo.png';

export function Header() {
  return (
    <header className="flex h-[12vh] w-[100%] items-center justify-between p-4 text-base shadow-lg">
      <img src={Logo} alt="Logo da loja" className="h-[100%]" />
      <div></div>
      <div>
        <ul className="flex gap-8">
          <li>Produtos</li>
          <li>Login</li>
          <li>Cadastrar-se</li>
        </ul>
      </div>
    </header>
  );
}
