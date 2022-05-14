export type TReview = {
  uuid: string;
  name: string;
  date: string;
  profileImage: string;
  reviewText: string;
  reviewScore: number;
};

export type TRestaurantReviews = {
  restaurantId: string;
  reviews: Array<TReview>;
};

export type TReviewArray = {
  allReviews: Array<TRestaurantReviews>;
};

export type TRequestParams = {
  id: string;
};
