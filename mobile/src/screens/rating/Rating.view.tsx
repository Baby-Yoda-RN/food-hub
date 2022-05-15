import React, {FC} from 'react';
import {Text, View, Image} from 'react-native';
import {
  TextInput,
  Button,
  Container,
  RatingStars,
  Header,
  Icon,
} from '../../components';
import {styles} from './Rating.style';
import {TRatingView} from './Rating.type';
import {size} from '../../theme/size/size';

export const RatingScreenView: FC<TRatingView> = ({
  isLoading,
  restaurant,
  address,
  background,
  logo,
  leftPress,
  setReview,
  press
}) => {
  return (
    <Container
      isLoading={isLoading}
      backgroundImage={{
        uri: background,
      }}
      backgroundImageStyle={styles.restaurantImage}
      imageStyle={styles.imageStyle}
      header={
        <Header
          leftIconName="ChevronLeft"
          iconHeight={size.md}
          iconWidth={size.md}
          leftIconStyle={styles.leftIcon}
          leftPress={leftPress}
        />
      }>
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: logo,
          }}
          style={styles.logo}
        />
        <Icon
          name="CheckMark"
          height={size.rg}
          width={size.rg}
          containerStyle={styles.checkMark}
        />
      </View>
      <Text style={styles.largeText}>{restaurant}</Text>
      <Text style={styles.smallText}>123 Main Street</Text>
      <Text style={styles.delivered}>Order Delivered</Text>
      <Text style={styles.largeText}>Please Rate Delivery Service</Text>
      <RatingStars />
      <TextInput
        containerStyle={styles.inputContainer}
        onChangeText={setReview}
      />
      <Button containerStyle={styles.button} title="SUBMIT" onPress={press} />
    </Container>
  );
};
