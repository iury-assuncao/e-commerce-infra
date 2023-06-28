import { Header } from '../../components/Header';
import imageProducts from '../../assets/iPhone-14.png';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IProduct } from '../../interfaces';
import { getProductById, getProducts } from '../../services/Services';
import { Stars } from '../../components/Star/Stars';
import { Footer } from '../../components/Footer';
import { Loading } from '../../components/Loading';
import { formatCurrency } from '../../helpers/money';
import { Button } from '../../components/Button';

function ProductDetails() {
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState<IProduct>();
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    if (id) {
      setLoading(true);
      const { status, data } = await getProductById(Number(id));
      if (status === 200) {
        setProduct(data);
        setLoading(false);
      }
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
          <section className=" flex h-auto min-w-full justify-center gap-10 p-10">
            <div className="flex flex-col justify-between">
              <h2 className="text-xl font-semibold text-orange-500">
                {product?.nome}
              </h2>
              <div>
                <span>Avaliação:</span>
                <Stars />
              </div>

              <span className="c text-lg font-medium text-orange-700 ">
                {product && formatCurrency(product?.preco)}
              </span>
              <h3 className="text-lg">Descrição do produto</h3>
              <p className="w-[60vh] text-justify text-sm">
                {product?.descricao}
              </p>

              <span className="text-xs text-gray-600"></span>
              <div className="w-[15vw]">
                <Button>+ Adicionar ao carrinho</Button>
              </div>
            </div>

            <div>
              <img
                src={product?.imagens && product?.imagens[0]?.url}
                className="w-[40vw] rounded-md"
              />
            </div>
          </section>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
