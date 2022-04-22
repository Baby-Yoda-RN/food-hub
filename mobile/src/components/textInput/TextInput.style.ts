import {color, size} from '../../theme';

type Styles = {
  [styleName: string]: {
    [attributeName: string]: string | number;
  };
};

export const style: Styles = {
  container: {
    borderWidth: size.xxs,
    borderColor: color.grayLow,
    borderRadius: size.sm,
    height: size.xl,
    backgroundColor: color.textRegularBG,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: size.rg,
  },
  textInput: {fontSize: size.rg},
};
