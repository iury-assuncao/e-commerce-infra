import { formatCurrency } from '../../helpers/money';

type Props = {
  img?: string;
  product?: string;
  value?: number;
};

export function ItemCart({ img, product, value }: Props) {
  return (
    <div className="relative flex h-auto w-full items-center p-6">
      <div className=" absolute left-8 flex items-center gap-4">
        <img src={img} className="h-20" alt="Imagem do produto" />
        <span>{product}</span>
      </div>
      <span className="absolute right-48">Quantidade</span>
      <span className="absolute right-8">{value && formatCurrency(value)}</span>
    </div>
  );
}
