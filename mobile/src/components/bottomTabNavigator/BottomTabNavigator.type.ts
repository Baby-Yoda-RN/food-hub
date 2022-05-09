import {TAppNavigation} from '../../navigation';

export type TBottomTabNavigator = {
  iconSize?: number;
  fillPin?: string;
  pressHome?: () => void;
  pressCategory?: () => void;
  pressCart?: () => void;
  pressFavorites?: () => void;
  pressBell?: () => void;
  focusTab?: 'home' | 'categories' | 'cart' | 'favorites' | 'orders';
};
