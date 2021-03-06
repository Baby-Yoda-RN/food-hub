export type TUserInfo = {
  name: string,
  email: string,
  image: string,
  address: {
    street: string,
    city: string,
    state: string,
    zipcode: number
  },
  phone: string,
}

export type TRestaurant = {
  uuid?: string;
  name?: string;
  rating: number;
  usersVoted: number;
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
  price: number;
  imageName?: string;
};

export type TAddOn = Array<{
    id: string;
    image: string;
    price: number;
    name: string;
    selected: boolean;
  }>

export type TFoodItem = TItem & {
  rating: number;
  usersVoted: number;
  favorite: boolean;
  category?: string;
  addOns?: TAddOn;
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

export type TFoodCategory = {
  value: string
  image: string
}
