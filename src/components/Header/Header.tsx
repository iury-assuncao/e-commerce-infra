import { Link } from 'react-router-dom';
import { IoIosCart } from 'react-icons/io';
import Logo from '../../assets/logo.png';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative flex h-[12vh] w-[100%] items-center justify-between px-10 py-4 text-base shadow-lg">
      <Link to="/" className="h-[94%] max-sm:h-[84%]">
        <img className="h-[100%] " src={Logo} alt="Logo da loja" />
      </Link>

      <button
        className="hidden text-gray-500 hover:text-gray-800 focus:text-gray-800 focus:outline-none max-lg:block"
        onClick={toggleMenu}
      >
        <svg
          className="h-6 w-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.28 3.72a.75.75 0 0 0-1.06 1.06L12 10.94l-7.22-7.22a.75.75 0 0 0-1.06 1.06L10.94 12l-7.22 7.22a.75.75 0 0 0 1.06 1.06L12 13.06l7.22 7.22a.75.75 0 0 0 1.06-1.06L13.06 12l7.22-7.22a.75.75 0 0 0 0-1.06z"
            />
          ) : (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.75 5.25H2.25a.75.75 0 0 1 0-1.5h19.5a.75.75 0 0 1 0 1.5zM2.25 12.75h19.5a.75.75 0 0 0 0-1.5H2.25a.75.75 0 0 0 0 1.5zm19.5 7.5H2.25a.75.75 0 0 0 0 1.5h19.5a.75.75 0 0 0 0-1.5z"
            />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="delay-450 absolute right-0  top-[12vh] h-screen w-full rounded border border-gray-300 bg-white shadow-lg ">
          <ul className="flex h-full w-full flex-col items-center justify-center gap-8 py-2 text-xl">
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
      )}

      <div className="max-lg:hidden">
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
