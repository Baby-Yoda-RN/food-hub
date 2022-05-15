import React, {FC, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import {TFoodDetailsScreenViewProps} from './FoodDetails.type';
import images from '../../assets/images';
import {FoodCard} from '../../components/card/foodCard';
import {Container, Header, Button, Icon, ListItem} from '../../components';
import {size, color} from '../../theme';
import {styles} from './FoodDetails.style';

export const FoodDetailsScreenView: FC<TFoodDetailsScreenViewProps> = ({
  topImageName,
  title,
  description,
  ratings,
  reviewCount,
  reviewCountMax,
  OnPressSeeReview,
  subtitle,
  addOnList,
  price,
  countPlusMinus,
  onPressMinus,
  onPressPlus,
  addOns,
  onPressGoBack,
  onPressAddToCart,
}) => {
  const renderPlusMinus = (price, count, onPressPlus, onPressMinus) => {
    return (
      <>
        <View style={styles.containerPriceAndPlusMinus}>
          <Text style={styles.textPrice}>{`$${price.toFixed(2)}`}</Text>

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
          {reviewCount > reviewCountMax ? (
            <Text style={styles.reviewCount}>{`(${reviewCountMax}+)`}</Text>
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

  const [Selected1, SelectedChange1] = useState(false);
  const [Selected2, SelectedChange2] = useState(false);
  const [Selected3, SelectedChange3] = useState(false);

  const addOnSelections = (
    Selected,
    SelectedChange,
    imageSource,
    title,
    price,
  ) => {
    return (
      <>
        <View style={styles.containerAddOn}>
          <View style={styles.containerAddOnPriceSelection}>
            <Image source={imageSource} />
            <Text style={styles.titleAddOn}>{title}</Text>
          </View>
          <TouchableOpacity
            style={styles.containerAddOnPriceSelection}
            onPress={() => {
              Selected ? SelectedChange(false) : SelectedChange(true);
            }}>
            <Text style={styles.titleAddOn}>{`+${price.toFixed(2)}`}</Text>

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
                fill={color.white}
              />
            )}
          </TouchableOpacity>
        </View>
      </>
    );
  };
  return (
    <Container
      isScrollViewDisabled={false}
      backgroundImage={images.groundBeefTacos}
      imageStyle={styles.BackgroundImageStyle}
      backgroundImageStyle={styles.Background}
      containerStyle={styles.mainContainer}
      header={
        <Header
          leftIconName="ChevronLeft"
          rightIconName="Heart"
          leftPress={onPressGoBack}
          iconWidth={size.rg}
          iconHeight={size.rg}
          containerStyle={styles.header}
          leftIconStyle={styles.leftIconStyle}
          rightIconStyle={styles.rightIconStyle}
        />
      }>
      <Text style={styles.title}>{title}</Text>

      {ratingsAndReview()}

      {renderPlusMinus(price, countPlusMinus, onPressPlus, onPressMinus)}

      <Text style={styles.description}>{description}</Text>

      <Text style={styles.subtitle}>{subtitle}</Text>

      {addOnSelections(
        Selected1,
        SelectedChange1,
        addOns[0].image,
        addOns[0].name,
        addOns[0].price,
      )}

      {addOnSelections(
        Selected2,
        SelectedChange2,
        addOns[1].image,
        addOns[1].name,
        addOns[1].price,
      )}
      {addOnSelections(
        Selected3,
        SelectedChange3,
        addOns[2].image,
        addOns[2].name,
        addOns[2].price,
      )}

      <Button
        title="ADD TO CART"
        containerStyle={styles.button}
        onPress={onPressAddToCart}
      />
    </Container>
  );
};
