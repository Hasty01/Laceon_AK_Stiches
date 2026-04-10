export interface CollectionItem {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export interface CartItem extends CollectionItem {
  quantity: number;
  size?: string;
  color?: string;
}