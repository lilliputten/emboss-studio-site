interface TProduct {
  id: number | string;
  image: string;
  priceOld?: number;
  price: number;
  stars: number;
  name: string;
  excerpt: string;
  extra?: string;
  favorite?: boolean;
}
