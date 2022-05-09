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
    justifyContent: 'flex-start',
  },
  title: {
    color: color.black,
    fontSize: size.rg,
    fontFamily: font.semiBold,
  },
  topTags: {
    flexDirection: 'row',
    flex: 1,
  },
  topLeftTag: {borderColor: 'red', borderWidth: 1},
  topRightTag: {alignSelf: 'flex-end', borderColor: 'blue', borderWidth: 1},
  bottomTags: {
    flexDirection: 'row',
    position: 'absolute',
    top: 110,
    marginLeft: size.md,
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
    paddingRight: size.xs,
  },
});
