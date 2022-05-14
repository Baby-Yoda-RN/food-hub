import {StackScreenProps} from '@react-navigation/stack';
import {
  TAppNavigationRoutes,
  EAppNavigationRoutes,
  TAppNavigation,
} from '../../navigation';
import {TReview} from '../../types/data';

export type TReviewScreenProps = StackScreenProps<
  TAppNavigationRoutes,
  EAppNavigationRoutes.REVIEW
>;

export type TReviewScreenViewProps = {
  leftPress: () => void;
  textInputPress: () => void;
  reviewsList?: Array<TReview>;
};

export type TReviewNavigation = {
  navigation: TAppNavigation;
  restaurantId?: string;
};
