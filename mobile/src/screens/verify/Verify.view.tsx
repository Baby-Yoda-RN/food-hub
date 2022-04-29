import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {TVerifyScreenViewProps} from './Verify.type';
import {Button, Header} from '../../components';
import {styles} from './Verify.style';
import {size} from '../../theme';

export const VerifyScreenView: FC<TVerifyScreenViewProps> = ({
  title = 'Hello',
}) => {
  return (
    <View style={styles.container}>
      <Header
        leftIconName="ChevronLeft"
        iconWidth={size.rg}
        iconHeight={size.rg}
        containerStyle={styles.header}
      />
    </View>
  );
};
