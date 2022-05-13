import React, {FC} from 'react';
import {FlatList, Alert} from 'react-native';
import {TReviewScreenViewProps} from './Review.type';
import {Container, Header, TextInput} from '../../components';
import {size} from '../../theme';
import {styles} from './Review.style';
import {ReviewCard} from '../../components/reviewCard/ReviewCard';

export const ReviewScreenView: FC<TReviewScreenViewProps> = ({
  leftPress,
  textInputPress,
  reviewsList,
}) => {
  return (
    <Container
      isScrollViewDisabled={true}
      headerStyle={styles.headerContainer}
      header={
        <Header
          title="Reviews"
          leftIconName="ChevronLeft"
          iconWidth={size.md}
          iconHeight={size.md}
          leftPress={leftPress}
        />
      }>
      <TextInput
        type="regular"
        value="Write your review..."
        leftIcon="Profile"
        onChangeText={function (value: string): void {}}
        onPress={textInputPress}
        containerStyle={{justifyContent: 'flex-start'}}
        props={{editable: false}}
      />
      <FlatList
        data={reviewsList}
        style={styles.listContainer}
        renderItem={({item}) => (
          <ReviewCard
            review={item}
            handleProfilePicture={() => Alert.alert('Profile Page')}
            handleRightIcon={() => Alert.alert('Options')}
          />
        )}
      />
    </Container>
  );
};
