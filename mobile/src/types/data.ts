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

export interface IOrder {
  uuid?:string
  restaurantName:string
  date:string //dev
  status:string
  items:number[] //dev
  delivered?:boolean
  restaurantImage?:string
  estimatedTime?:string
  total?:string
}