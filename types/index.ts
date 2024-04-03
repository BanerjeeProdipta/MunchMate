export type Item = {
  id: number;
  title: string;
  imgUrl: string;
  rating: number;
  reviewCount: number;
  delivery: Delivery;
};

export type Delivery = {
  time: string;
  charge: number;
};
