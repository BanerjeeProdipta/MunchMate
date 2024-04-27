export type Shop = {
  id: number;
  title: string;
  imgUrl: string;
  rating: number;
  reviewCount: number;
  category: string;
  delivery: Delivery;
};

export type Delivery = {
  time: string;
  charge: number;
};

export type Item = {
  id: number;
  shopId: number;
  name: string;
  description: string;
  price: number;
  stockCount: number;
  imgUrl: string;
  category: string;
};
