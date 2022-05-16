import { TAuthNavigation, } from '../../navigation';

export type TVerifyScreenViewProps = {
  title: string;
  emailName: string;
  pinEntry: string;
  goBack: () => void;
  onPressSubmit: () => void;
  OnPressResend: () => void;
};

export type TVerifyScreenNavigation = {
  navigation: TAuthNavigation;
};
