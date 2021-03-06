export type TRequestBody = {
  token: string;
};

export type TRequestParams = {
  id: string;
};

export type TFoodItem = {
  uuid: string;
  name: string;
  description: string;
  rating: number;
  usersVoted: number;
  price: number;
  favorite: boolean;
  imageName: string;
  category?:'burger'|'mexican'|'pizza'|'asian'|'coffee'|string|null;
};

export type TResponseBody = {
  email: string;
  name: string;
  token: string;
};

export type TFoodItemList = Array<TFoodItem>;
