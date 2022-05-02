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
  isScrollViewDisabled = false,
  backgroundImage,
  ...rest
}) => {

  const Container = isScrollViewDisabled ? View : ScrollView;

  const containerDynamicStyle = isScrollViewDisabled
    ? {style: [styles.container, containerStyle]}
    : {contentContainerStyle: containerStyle};

  if (isLoading) {
    return (
      <SafeAreaView style={[styles.loading, safeAreaStyle]} {...rest}>
        <ActivityIndicator size="large" color={color.primary} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.safeAreaContainer, safeAreaStyle]}>
      <ImageBackground
        source={backgroundImage!}
        resizeMode='stretch'
        style={styles.backgroundImageContainer}
        >
        {header && <View style={[styles.header, headerStyle]}>{header}</View>}
        <Container {...containerDynamicStyle} {...rest}>
          <View style={[styles.content, contentStyle]}>{children}</View>
        </Container>
      </ImageBackground>
    </SafeAreaView>
  );
};
