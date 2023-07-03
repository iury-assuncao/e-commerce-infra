import { Link } from 'react-router-dom';
import { IoIosCart } from 'react-icons/io';
import Logo from '../../assets/logo.png';

export function Header() {
  return (
    <header className="flex h-[12vh] w-[100%] items-center justify-between px-10 py-4 text-base shadow-lg">
      <Link to="/" className="h-[94%] max-sm:h-[84%]">
        <img className="h-[100%] " src={Logo} alt="Logo da loja" />
      </Link>
      <div></div>
      <div>
        <ul className="flex items-center gap-8 max-sm:flex-col max-sm:gap-1">
          <li>
            <Link to="/">Produtos</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/cadastro-usuario">Registre-se</Link>
          </li>
          <li>
            <Link to="/carrinho">
              <IoIosCart size={34} />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
