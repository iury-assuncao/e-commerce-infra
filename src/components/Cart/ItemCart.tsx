import { useCartContext } from '../../contexts/Appcontext';
import { formatCurrency } from '../../helpers/money';
import { IProduct } from '../../interfaces';

type Props = {
  img?: string;
  product?: string;
  value?: number;
  id?: number;
};

export function ItemCart({ img, product, value, id }: Props) {
  const { cartItems, setCartItems } = useCartContext();

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item: IProduct) => item.id != id);
    setCartItems(updatedItems);
  };

  return (
    <div className="shadow-x flex h-20 w-full items-center justify-between border border-orange-400 px-4 max-lg:h-auto max-lg:p-4">
      <div className="flex h-32 items-center gap-4 max-lg:flex-col max-lg:items-start max-lg:gap-0 max-lg:py-2 ">
        <img src={img} className="h-20 p-4" alt="Imagem do produto" />
        <span>{product}</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="">{value && formatCurrency(value)}</span>
        <button onClick={handleRemoveItem} className="w-6">
          {' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="red"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
