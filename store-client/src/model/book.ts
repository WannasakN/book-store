import Category from "./category";

export default interface Book {
  id: number;
  title: string;
  price: number;
  stockAmount: number;
  category: Partial<Category>;
}