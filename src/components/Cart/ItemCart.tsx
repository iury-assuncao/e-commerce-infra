import { formatCurrency } from '../../helpers/money';

type Props = {
  img?: string;
  product?: string;
  value?: number;
};

export function ItemCart({ img, product, value }: Props) {
  return (
    <div className="shadow-x  relative flex h-auto w-full items-center border border-orange-400 p-10">
      <div className=" absolute left-8 flex h-32 items-center gap-4">
        <img src={img} className="h-20 p-4" alt="Imagem do produto" />
        <span>{product}</span>
      </div>
      <span className="absolute right-8">{value && formatCurrency(value)}</span>
    </div>
  );
}
