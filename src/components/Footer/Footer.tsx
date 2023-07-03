import Logo from '../../assets/logo-orange.png';

export function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="max- mt-10 bg-orange-700 px-10 pt-8 text-white">
      <div className="flex items-center justify-between gap-5 max-sm:flex-col max-sm:text-center">
        <div>
          <img src={Logo} />
        </div>

        <div>
          <h6 className="font-extralight">
            A sua melhor opção de compras na internet
          </h6>
        </div>
      </div>

      <div className="mt-4 w-full text-center ">
        <p className="text-sm font-light">{ano} · All rights reserved.</p>
      </div>
    </footer>
  );
}
