import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {TFoodDetailsScreenViewProps} from './FoodDetails.type';
import {Container, Header, Button, Icon, AddOn} from '../../components';
import {size} from '../../theme';
import {styles} from './FoodDetails.style';

export const FoodDetailsScreenView: FC<TFoodDetailsScreenViewProps> = ({
  isLoading,
  title,
  image,
  description,
  ratings,
  reviewCount,
  reviewCountMax,
  onpressSeeReview,
  price,
  countPlusMinus,
  onPressMinus,
  onPressPlus,
  addOns,
  count,
  pressAddOn,
  selected,
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
          <TouchableOpacity onPress={onpressSeeReview}>
            <Text style={styles.seeReview}>See Review</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  return (
    <Container
      isLoading={isLoading}
      isScrollViewDisabled={false}
      backgroundImage={{uri: image}}
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

      <Text style={styles.subtitle}>Choice of Add On</Text>

      {addOns?.map(item => (
        <AddOn
          key={item.id}
          selected={selected}
          pressAddOn={pressAddOn}
          title={item.name}
          image={item.image}
          price={item.price}
          count={count}
        />
      ))}

      <Button
        title="ADD TO CART"
        containerStyle={styles.button}
        onPress={onPressAddToCart}
      />
    </Container>
  );
};
