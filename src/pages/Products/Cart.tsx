import { Header } from '../../components/Header';

import { useEffect, useState } from 'react';
import { IProduct } from '../../interfaces';
import { getProductById, getProducts } from '../../services/Services';

import { Footer } from '../../components/Footer';
import { Loading } from '../../components/Loading';
import { useParams } from 'react-router-dom';
import { ItemCart } from '../../components/Cart';

function Cart() {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct>();
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    const { status, data } = await getProductById(3);
    if (status === 200) {
      setProduct(data);
      setLoading(false);
    }
  }

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
          <section className="flex h-auto min-w-full flex-col justify-center gap-10 p-10">
            <h2 className="text-2xl text-orange-500">Carrinho</h2>
            <div className="h-1 w-full bg-orange-700"></div>
            <div className="relative flex h-auto w-full items-center bg-gray-200 p-6">
              <h5 className="absolute left-8 font-semibold">Produto</h5>
              <h5 className="absolute right-48 font-semibold">Quantidade</h5>
              <h5 className="absolute right-8 font-semibold">Valor</h5>
            </div>

            <ItemCart
              img={product?.imagens && product.imagens[0].url}
              value={product?.preco}
              product={product?.nome}
            />
          </section>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Cart;
