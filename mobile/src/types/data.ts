export interface Restaurant {
  uuid?: string;
  name: string;
  rating: number;
  usersVoted: number | string;
  favorite: boolean;
  freeDelivery: string;
  deliveryTime: number;
  foodItems?: string;
  imageName?: string;
  items?: string[];
}

export interface FoodItem {
  uuid?: string;
  name: string;
  description: string;
  rating: number;
  usersVoted: number | string;
  price: number;
  favorite: boolean;
  imageName?: string;
}
