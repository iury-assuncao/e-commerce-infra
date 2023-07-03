import { IProduct } from '.';

export interface ICart {
  cartItems: any;
  setCartItems: React.Dispatch<React.SetStateAction<any | undefined>>;
  products?: IProduct[];
  setProducts: React.Dispatch<React.SetStateAction<IProduct[] | undefined>>;
}
