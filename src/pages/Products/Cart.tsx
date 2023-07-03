import { Header } from '../../components/Header';

import { IProduct } from '../../interfaces';

import { Footer } from '../../components/Footer';
import { ItemCart } from '../../components/Cart';
import { useCartContext } from '../../contexts/Appcontext';
import { formatCurrency } from '../../helpers/money';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';

function Cart() {
  const { cartItems } = useCartContext();
  const totalPreco = cartItems.reduce(
    (acc: any, item: IProduct) => item.preco + acc,
    0
  );

  return (
    <div>
      <div>
        <Header />
        {cartItems.length === 0 ? (
          <div className="flex h-[80vh] flex-col items-center justify-center">
            <h1 className="text-2xl font-medium">Nenhum produto no carrinho</h1>
            <Link to="/" className="text-orange-400">
              Ver produtos
            </Link>
          </div>
        ) : (
          <section className="flex h-auto min-w-full flex-col items-end justify-center gap-10 p-10">
            <h2 className="text-2xl text-orange-500">Carrinho</h2>
            <div className="h-1 w-full bg-orange-700"></div>
            <div className=" flex h-auto w-full items-center justify-between bg-gray-200 p-6">
              <h5 className="font-semibold">Produto</h5>
              <h5 className="font-semibold">Valor</h5>
            </div>
            {cartItems.map((item: IProduct) => {
              return (
                <ItemCart
                  key={item.id}
                  img={item?.imagens && item.imagens[0].url}
                  product={item?.nome}
                  value={item?.preco}
                />
              );
            })}

            {cartItems.map((item: IProduct) => {
              console.log(item);
            })}
            <div className="bg-gray-200 p-4">
              <h6 className="font-semibold">Total do pedido</h6>
              <span className="font-normal text-green-800">
                {formatCurrency(totalPreco)}
              </span>
            </div>
            <Link
              to="/"
              className="font-normal text-orange-500 hover:text-orange-800"
            >
              Continue comprando
            </Link>
          </section>
        )}
        <Footer />
      </div>
    </div>
  );
}

export default Cart;
