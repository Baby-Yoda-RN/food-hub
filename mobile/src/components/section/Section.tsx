import React, {FC} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {size} from 'theme';
import {styles} from './Section.style';
import {TSection} from './Section.type';

export const Section: FC<TSection> = ({
  containerStyle,
  marginTop: marginTopProp,
  marginBottom: marginBottomProp,
  marginHorizontal: marginHorizontalProp,
  children,
  ...props
}) => {
  const marginHorizontal = marginHorizontalProp
    ? size[marginHorizontalProp]
    : 0;
  const marginTop = marginTopProp ? size[marginTopProp] : 0;
  const marginBottom = marginBottomProp ? size[marginBottomProp] : 0;

  const containerDynamicStyle: StyleProp<ViewStyle> = {
    marginBottom,
    marginHorizontal,
    marginTop,
  };

  return (
    <View
      style={[styles.container, containerDynamicStyle, containerStyle]}
      {...props}>
      {children}
    </View>
  );
};
