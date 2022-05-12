import {StackScreenProps} from '@react-navigation/stack';
import {
  TAppNavigationRoutes,
  EAppNavigationRoutes,
  TAppNavigation,
} from '../../navigation';

export type TReviewScreenProps = StackScreenProps<
  TAppNavigationRoutes,
  EAppNavigationRoutes.REVIEW
>;

export type TReviewScreenViewProps = {
  leftPress: () => void;
  textInputPress: () => void;
};

export type TReviewNavigation = {
  navigation: TAppNavigation;
};
