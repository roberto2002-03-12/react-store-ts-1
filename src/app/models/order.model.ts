import { IItemShop } from './';

export interface IOrder {
  id: number;
  products: IItemShop[];
  date: Date;
  totalPrice: number;
  totalProducts: number;
}