import {StyleSheet} from 'react-native';
import {color, size} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    borderRadius: size.sm,
    borderColor: color.grayLow,
    borderWidth: size.xxs,
    backgroundColor: color.white,
    paddingBottom: size.md,
  },
  information: {
    alignItems: 'flex-start',
    marginLeft: size.md,
    marginTop: size.md,
  },
  title: {
    color: color.black,
    fontSize: size.rg,
    fontWeight: 'bold',
  },
  details: {
    marginBottom: size.sm,
    fontSize: size.md,
  },
  itemTags: {
    color: color.grayMid,
    backgroundColor: color.grayLow,
    paddingHorizontal: size.sm,
    fontSize: size.md,
    marginRight: size.xs,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: size.xs,
  },
  cardImage: {
    height: size.xxl,
  },
  tagContainer: {
    flexDirection: 'row',
  },
});
