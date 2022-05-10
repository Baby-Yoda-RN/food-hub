export type TRestaurant = {
  uuid?: string;
  name?: string;
  rating?: number;
  usersVoted?: number;
  favorite?: boolean;
  freeDelivery?: string;
  deliveryTime?: number;
  foodItems?: string;
  imageName?: string;
  items?: string[];
};

export type TOrder = {
  uuid?: string;
  restaurantName: string;
  date: string; //dev
  status: string;
  items: number; //dev
  delivered?: boolean;
  restaurantImage?: string;
  estimatedTime?: string;
  total?: string;
};

export type TItem = {
  uuid?: string;
  name?: string;
  description?: string;
  price?: number;
  imageName?: string;
};

export type TFoodItem = TItem & {
  rating: number;
  usersVoted: number;
  favorite: boolean;
};

export type TListItem = Omit<TItem, 'price'> & {
  quantity: number;
  price: number;
};

export type TListItemArray = Array<TListItem>;

export type TReview = {
  uuid?: string;
  name: string;
  date: string;
  profileImage: string;
  reviewText: string;
  reviewScore: number;
};
