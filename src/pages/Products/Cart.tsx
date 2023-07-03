import { Header } from '../../components/Header';

import { useEffect, useState } from 'react';
import { IProduct } from '../../interfaces';
import { getProductById } from '../../services/Services';

import { Footer } from '../../components/Footer';
import { Loading } from '../../components/Loading';
import { ItemCart } from '../../components/Cart';
import { useCartContext } from '../../contexts/Appcontext';

function Cart() {
  const [product, setProduct] = useState<IProduct>();
  const [loading, setLoading] = useState(false);
  const { cartItems } = useCartContext();

  async function fetchData() {
    setLoading(true);
    const { status, data } = await getProductById(3);
    if (status === 200) {
      setProduct(data);
      setLoading(false);
    }
  }
  console.log(product);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Header />
          <section className="flex h-auto min-w-full flex-col items-end justify-center gap-10 p-10">
            <h2 className="text-2xl text-orange-500">Carrinho</h2>
            <div className="h-1 w-full bg-orange-700"></div>
            <div className="relative flex h-auto w-full items-center bg-gray-200 p-6">
              <h5 className="absolute left-8 font-semibold">Produto</h5>
              <h5 className="absolute right-48 font-semibold">Quantidade</h5>
              <h5 className="absolute right-8 font-semibold">Valor</h5>
            </div>

            {cartItems.map((item: IProduct) => {
              <ItemCart
                key={item.id}
                img={item?.imagens && item.imagens[0].url}
                value={item?.preco}
                product={item?.nome}
              />;
            })}

            <div className="bg-gray-200 p-4">
              <h6 className="font-semibold">Total do pedido</h6>
              <span>R$ 100,00</span>
            </div>
          </section>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Cart;
