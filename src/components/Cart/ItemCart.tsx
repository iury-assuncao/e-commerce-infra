import { formatCurrency } from '../../helpers/money';

type Props = {
  img?: string;
  product?: string;
  value?: number;
};

export function ItemCart({ img, product, value }: Props) {
  return (
    <div className="shadow-x flex h-20 w-full items-center justify-between border border-orange-400 px-4 max-lg:h-auto max-lg:p-4">
      <div className="flex h-32 items-center gap-4 max-lg:flex-col max-lg:items-start max-lg:gap-0 max-lg:py-2 ">
        <img src={img} className="h-20 p-4" alt="Imagem do produto" />
        <span>{product}</span>
      </div>
      <span className="">{value && formatCurrency(value)}</span>
    </div>
  );
}
