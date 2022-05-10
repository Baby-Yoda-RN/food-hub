import {StyleSheet} from 'react-native';
import {color, size} from '../../theme';
import {font} from '../../theme/font/font';

export const styles = StyleSheet.create({
  container: {
    borderRadius: size.rg,
    backgroundColor: color.white,
    paddingBottom: size.md,
    marginVertical: size.sm,
  },
  information: {
    marginLeft: size.md,
    marginTop: size.md,
  },
  title: {
    color: color.black,
    fontSize: size.rg,
    fontFamily: font.semiBold,
    paddingTop: size.xs,
  },
  topLeftTag: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  topRightTag: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  bottomTags: {
    position: 'absolute',
    top: 110,
    left: 10,
  },
  favoriteTag: {
    borderRadius: 100,
    backgroundColor: color.transparent,
  },
  details: {
    fontSize: size.md,
    marginBottom: size.xs,
    marginRight: size.md,
  },
  itemTags: {
    color: color.grayMid,
    backgroundColor: color.grayLow,
    paddingHorizontal: size.sm,
    fontSize: size.md,
    marginRight: size.xs,
    borderRadius: size.xs,
    textTransform: 'uppercase',
  },
  cardImage: {
    height: size.xxl,
    borderTopLeftRadius: size.md,
    borderTopRightRadius: size.md,
  },
  detailsContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  tagsContainer: {
    flexGrow: 0,
  },
  iconContainer: {
    paddingLeft: 0,
    paddingTop: 0,
    paddingRight: size.xs,
  },
});
