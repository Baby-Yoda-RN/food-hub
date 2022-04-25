export interface Restaurant {
  uuid?: string;
  name: string;
  rating: number;
  usersVoted: number;
  favorite: boolean;
  freeDelivery: string;
  deliveryTime: number;
  foodItems?: string;
  imageName?: string;
  items?: string[];
}
