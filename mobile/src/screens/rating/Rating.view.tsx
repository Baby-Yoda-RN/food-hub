import React, {FC} from 'react';
import {Text, View, Image, SafeAreaView, ImageBackground} from 'react-native';
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
  restaurant,
  address,
  leftPress,
}) => {
  return (
    <Container
      backgroundImage={{
        uri: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p.jpg',
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
            uri: 'https://cdn.mos.cms.futurecdn.net/xDGQ9dbLmMpeEqhiWayMRB-970-80.jpg.webp',
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
      <Text style={styles.largeText}>Pizza Hut</Text>
      <Text style={styles.smallText}>123 Main Street</Text>
      <Text style={styles.delivered}>Order Delivered</Text>
      <Text style={styles.largeText}>Please Rate Delivery Service</Text>
      <RatingStars />
      <TextInput containerStyle={styles.inputContainer} />
      <Button containerStyle={styles.button} title="SUBMIT" />
    </Container>
  );
};
