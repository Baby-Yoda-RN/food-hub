import {THomeList} from './home.type'
export const homeDummyData:THomeList  = {
  categories: [
    {
      value: "Burger",
      image:
        "https://flyclipart.com/thumb2/burger-energy-food-junk-food-meal-veggie-burger-icon-587826.png",
    },
    {
      value: "Pizza",
      image: "https://cdn-icons-png.flaticon.com/512/3132/3132693.png",
    },
    {
      value: "Mexican",
      image:
        "https://i.pinimg.com/originals/1b/ec/81/1bec818c51ca78276ffa641f2a210612.png",
    },
    {
      value: "Asian",
      image:
        "https://cdn.iconscout.com/icon/free/png-256/sushi-hotel-food-fastfood-emoj-symbol-30705.png",
    },
    {
      value: "Coffee",
      image: "https://cdn-icons-png.flaticon.com/512/924/924514.png",
    },
  ],
  restaurant: [
    {
      uuid: "1234",
      name: "McDonald's",
      rating: 4,
      usersVoted: 25,
      favorite: true,
      freeDelivery: "Free Delivery",
      deliveryTime: 10,
      items: ["Burger", "Chicken", "Fast Food", "Breakfast", "American"],
      imageName:
        "https://www.tasteofhome.com/wp-content/uploads/2021/03/mcdonalds-1200x630-GettyImages-1285446341.jpg",
    },
    {
      uuid: "1235",
      name: "Raising Cane's",
      rating: 5,
      usersVoted: 100,
      favorite: true,
      freeDelivery: "Free Delivery",
      deliveryTime: 10,
      items: ["Burger", "Chicken", "Fast Food", "Breakfast", "American"],
      imageName:
        "https://deseret.brightspotcdn.com/dims4/default/e11a979/2147483647/strip/true/crop/1500x856+0+22/resize/1461x834!/quality/90/?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FaflZ6hNjH5PX3thfvaEVYDc7It4%3D%2F0x0%3A1500x900%2F1500x900%2Ffilters%3Afocal%28750x450%3A751x451%29%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F20006954%2Fraising_canes_1.jpeg",
    },
    {
      uuid: "1236",
      name: "Taco Bell",
      rating: 2,
      usersVoted: 2,
      favorite: false,
      freeDelivery: "Free Delivery",
      deliveryTime: 20,
      items: ["Tacos", "Quesadillas", "Burritos", "Mexican"],
      imageName:
        "https://assets.turbologo.com/blog/es/2020/02/19132624/Taco-Bell-958x575.png",
    },
  ],
  popularItems: [
    {
      uuid: "12345",
      name: "Vegan Pizza",
      description: "Vegan Pizza",
      rating: 5,
      usersVoted: 100,
      price: 5.5,
      favorite: false,
      imageName: "https://foodish-api.herokuapp.com/images/pizza/pizza29.jpg",
      category:'pizza',
      
    },
    {
      uuid: "12346",
      name: "Boneless",
      description: "Delicious Boneless",
      rating: 5,
      usersVoted: 2,
      price: 20.99,
      favorite: true,
      category:'boneless',
      imageName:
        "https://dinnerthendessert.com/wp-content/uploads/2018/08/Boneless-Buffalo-Wings-3.jpg",
    },
    {
      uuid: "12347",
      name: "Big Mac",
      description: "The classic Big Mac",
      rating: 5,
      usersVoted: 2,
      price: 7.99,
      favorite: true,
      category:'burger',
      imageName:
        "https://estaticos.elmundo.es/assets/multimedia/imagenes/2016/07/21/14691145976379.jpg",
    },
    {
      uuid: "12348",
      name: "Cripsy Chicken Sandwich",
      description: "Try it",
      rating: 5,
      usersVoted: 2,
      price: 20.99,
      favorite: true,
      category:'burger',
      imageName:
        "https://www.eatthis.com/wp-content/uploads/sites/4/2021/01/mcdonalds-chicken-sandwich.jpg?quality=82&strip=all",
    },
    {
      uuid: "12349",
      name: "Burrito",
      description: "The classic burrito",
      rating: 5,
      usersVoted: 2,
      price: 8.99,
      favorite: true,
      imageName:
        "https://cdn.pixabay.com/photo/2017/06/29/20/09/mexican-2456038_1280.jpg",
    },
  ],
};
