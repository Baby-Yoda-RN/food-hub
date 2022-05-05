
export type TReview = {
    uuid: string;
    name: string;
    date: string;
    profileImage: string;
    reviewText: string;
    reviewScore: number;
}
export type TReviewArray = Array<TReview>;