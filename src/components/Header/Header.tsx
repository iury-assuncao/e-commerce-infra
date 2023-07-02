import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

export function Header() {
  return (
    <header className="flex h-[12vh] w-[100%] items-center justify-between px-10 py-4 text-base shadow-lg">
      <img src={Logo} alt="Logo da loja" className="h-[100%] max-sm:h-[90%]" />
      <div></div>
      <div>
        <ul className="flex gap-8 max-sm:flex-col max-sm:gap-1">
          <li>
            <Link to="/">Produtos</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/cadastro-usuario">Registre-se</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
