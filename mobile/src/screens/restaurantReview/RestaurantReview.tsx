import React, {FC} from "react";
import { RestaurantReviewScreenView } from "./RestaurantReview.view";
import { TRestaurantReviewNavigation } from "./RestaurantReview.type";

export const RestaurantReviewScreen: FC<TRestaurantReviewNavigation> = ({
    navigation,
}) => {
    return (
        <RestaurantReviewScreenView />
    )
}