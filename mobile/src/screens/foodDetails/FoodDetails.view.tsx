import React, {FC, useState} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import {TFoodDetailsScreenViewProps} from './FoodDetails.type';
import images from '../../assets/images';
import {
  Container,
  Header,
  Card,
  Button,
  Icon,
  ListItem,
} from '../../components';
import {size} from '../../theme';
import {styles} from './FoodDetails.style';

export const FoodDetailsScreenView: FC<TFoodDetailsScreenViewProps> = ({
  topImageName,
  title,
  description,
  ratings,
  reviewCount,
  OnPressSeeReview,
  subtitle,
  addOnList,
  price,
  countPlusMinus,
  onPressMinus,
  onPressPlus,
}) => {
  const renderPlusMinus = (price, count, onPressPlus, onPressMinus) => {
    return (
      <>
        <View style={styles.containerPriceAndPlusMinus}>
          <Text style={styles.textPrice}>{`$${price}`}</Text>

          <View style={styles.containerPlusMinus}>
            <TouchableOpacity onPress={onPressMinus}>
              <Icon name={'Minus'} width={size.lg} height={size.lg} />
            </TouchableOpacity>
            <Text style={styles.textPlusMinus}>{count}</Text>
            <TouchableOpacity onPress={onPressPlus}>
              <Icon name={'Plus'} width={size.lg} height={size.lg} />
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  };

  const ratingsAndReview = () => {
    return (
      <>
        <View style={styles.containerRatingReview}>
          <Icon name="Star" width={size.rg} height={size.rg} />
          <Text style={styles.ratings}>{ratings}</Text>
          {reviewCount > 30 ? (
            <Text style={styles.reviewCount}>{`(30+)`}</Text>
          ) : (
            <Text style={styles.reviewCount}>{`(${reviewCount})`}</Text>
          )}
          <Text style={styles.seeReview} onPress={OnPressSeeReview}>
            {'See Review'}
          </Text>
        </View>
      </>
    );
  };

  const addOnSelections = (imageSource, title = 'Pepper', price = '$1.00') => {
    const [Selected, SelectedChange] = useState(false);
    return (
      <>
        <View style={styles.containerAddOn}>
          <View style={styles.containerAddOnPriceSelection}>
            <Image source={images.pepperJulienned} />
            <Text style={styles.titleAddOn}>{title}</Text>
          </View>
          <TouchableOpacity
            style={styles.containerAddOnPriceSelection}
            onPress={() => {
              Selected ? SelectedChange(false) : SelectedChange(true);
            }}>
            <Text style={styles.titleAddOn}>{`+${price}`}</Text>

            {Selected ? (
              <Icon
                name={'BulletOrangeFilled'}
                width={size.lg}
                height={size.lg}
              />
            ) : (
              <Icon
                name={'BulletGreyHollow'}
                width={size.lg}
                height={size.lg}
              />
            )}
          </TouchableOpacity>
        </View>
      </>
    );
  };
  return (
    <Container
      isScrollViewDisabled={true}
      header={
        <Header
          leftIconName="ChevronLeft"
          rightIconName="Heart"
          iconWidth={size.rg}
          iconHeight={size.rg}
          containerStyle={styles.header}
        />
      }>
      <Text style={styles.title}>{title}</Text>

      {ratingsAndReview()}

      {renderPlusMinus(price, countPlusMinus, onPressPlus, onPressMinus)}

      <Text style={styles.description}>{description}</Text>

      <Text style={styles.subtitle}>{subtitle}</Text>

      {addOnSelections()}

      <Button title="ADD TO CART" containerStyle={styles.button} />
    </Container>
  );
};
