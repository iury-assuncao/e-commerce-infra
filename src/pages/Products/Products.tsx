import { Header } from '../../components/Header';
import imageBanner from '../../assets/Banner Loja Virtual Festival de Ofertas Colorido Rosa Azul.png';
import imageProducts from '../../assets/iPhone-14.png';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IProduct } from '../../interfaces';
import { getProducts } from '../../services/Services';
import { Stars } from '../../components/Star/Stars';
import { Footer } from '../../components/Footer';
import { Loading } from '../../components/Loading';
import { formatCurrency } from '../../helpers/money';

function Products() {
  const [products, setProducts] = useState<IProduct[]>();
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    const { status, data } = await getProducts();
    if (status === 200) {
      setProducts(data);
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
          <section className=" h-auto min-w-full ">
            <img
              src={imageBanner}
              alt="Produtos em promoção"
              className="w-auto
        "
            />
            <div className="mt-5 flex items-center justify-between px-10">
              <h2 className="mb-3 text-xl font-semibold text-orange-500">
                Lista de produtos
              </h2>
              <span className="text-xs text-gray-600">
                {products?.length} produtos encontrados
              </span>
            </div>

            <div className="px-10">
              <ul className="flex flex-wrap justify-between gap-6">
                {products?.map((product) => (
                  <li
                    key={product.id}
                    className="flex w-60 items-center  rounded-md border border-orange-400 p-4 shadow-xl hover:scale-105 hover:transition-all"
                  >
                    <Link to={`/produto/${product.id}`} className="">
                      <div className="w-44">
                        <img src={imageProducts} alt="Imagem do produto" />
                      </div>
                      <span className="block">{product.nome}</span>
                      <Stars />
                      <span className="c text-lg font-medium text-orange-700 ">
                        {formatCurrency(product.preco)}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Products;
