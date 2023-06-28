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
          <section className=" h-auto min-w-full ">
            <div className="mt-5 flex items-center justify-between px-10">
              <h2 className="mb-3 text-xl font-semibold text-orange-500">
                Lista de produtos
              </h2>
              <span className="text-xs text-gray-600"></span>
            </div>

            <div className="px-10"></div>
          </section>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
