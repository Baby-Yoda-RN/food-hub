import {color, size} from '../../theme';

type Styles = {
  [styleName: string]: {
    [attributeName: string]: string | number;
  };
};

export const style: Styles = {
  container: {
    borderWidth: size.xs,
    borderColor: color.grayLow,
    borderRadius: size.sm,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {}, //TODO
};
