import {StyleSheet} from 'react-native';
import {color, size} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    borderRadius: size.rg,
    backgroundColor: color.white,
    margin: size.md,
    paddingBottom: size.md,
  },
  information: {
    marginLeft: size.md,
    marginTop: size.md,
    justifyContent: 'flex-start',
  },
  title: {
    color: color.black,
    fontSize: size.rg,
    fontWeight: 'bold',
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
