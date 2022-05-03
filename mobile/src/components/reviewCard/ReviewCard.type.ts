import {TReview} from '../../types/data';

export type TReviewCardProps = {
  review: TReview;
  handleRightIcon?: () => void;
  handleProfilePicture?: () => void;
};
