import {useTheme} from '@react-navigation/native';
import React, {FC} from 'react';
import {
  SafeAreaView,
  View,
  ActivityIndicator,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {color} from '../../theme';
import {styles} from './Container.style';
import {TContainer} from './Container.type';

export const Container: FC<TContainer> = ({
  children,
  isLoading = false,
  safeAreaStyle,
  containerStyle,
  contentStyle,
  header,
  headerStyle,
  footer,
  footerStyle,
  isScrollViewDisabled = false,
  backgroundImage,
  backgroundImageStyle,
  imageStyle,
  ...rest
}) => {
  const {colors} = useTheme();

  const Container = isScrollViewDisabled ? View : ScrollView;

  const containerDynamicStyle = isScrollViewDisabled
    ? {style: [styles.container, containerStyle]}
    : {contentContainerStyle: containerStyle};

  if (isLoading) {
    return (
      <SafeAreaView
        style={[
          styles.loading,
          safeAreaStyle,
          {backgroundColor: colors.background},
        ]}
        {...rest}>
        <ActivityIndicator size="large" color={color.primary} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={[
        styles.safeAreaContainer,
        safeAreaStyle,
        {backgroundColor: colors.background},
      ]}>
      <ImageBackground
        source={backgroundImage!}
        resizeMode="stretch"
        imageStyle={imageStyle}
        style={[styles.backgroundImageContainer, backgroundImageStyle]}>
        {header && <View style={[styles.header, headerStyle]}>{header}</View>}
        <Container {...containerDynamicStyle} {...rest}>
          <View style={[styles.content, contentStyle]}>{children}</View>
        </Container>
        {footer && <View style={[styles.footer, footerStyle]}>{footer}</View>}
      </ImageBackground>
    </SafeAreaView>
  );
};
