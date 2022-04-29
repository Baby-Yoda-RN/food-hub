import React, {FC} from 'react';
import {SafeAreaView, View, ActivityIndicator} from 'react-native';
import { color } from '../../theme';
import {styles} from './Container.style';
import {TContainer} from './Container.type';

export const Container: FC<TContainer> = ({
  children,
  isLoading = false,
  safeAreaStyle: customSafeAreaStyle,
  containerStyle: customContainerStyle,
  ...rest
}) => {

  if (isLoading) {
    return (
      <SafeAreaView style={[styles.loading, customSafeAreaStyle]} {...rest}>
        <ActivityIndicator size="large" color={color.primary} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.safeAreaContainer, customSafeAreaStyle]}>
      <View style={[styles.container, customContainerStyle]} {...rest}>
        {children}
      </View>
    </SafeAreaView>
  );
};
