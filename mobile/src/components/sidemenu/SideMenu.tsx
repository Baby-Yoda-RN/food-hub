import React, {FC} from 'react';
import {Image, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {Icon} from '../icon/Icon';
import {Button} from '../button/Button';
import {styles} from './SideMenu.styles';
import {TSideMenuProps} from './SideMenu.type';
import {size, color} from '../../theme';

export const SideMenu: FC<TSideMenuProps> = ({
  image,
  name,
  email,
  pressOrder,
  pressProfile,
  pressDelivery,
  pressCart,
  pressReview,
  pressCategory,
  pressLogout,
  ...rest
}) => {
  return (
    <ScrollView style={styles.container} {...rest}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>

      <TouchableOpacity onPress={pressOrder} style={styles.itemContainer}>
        <Icon
          name="List"
          height={size.rg}
          width={size.rg}
          containerStyle={styles.iconContainer}
        />
        <Text style={styles.itemText}>My Order</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={pressProfile} style={styles.itemContainer}>
        <Icon
          name="Profile"
          height={size.rg}
          width={size.rg}
          containerStyle={styles.iconContainer}
        />
        <Text style={styles.itemText}>My Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={pressDelivery} style={styles.itemContainer}>
        <Icon
          name="Pin"
          height={size.rg}
          width={size.rg}
          containerStyle={styles.iconContainer}
        />
        <Text style={styles.itemText}>Delivery Address</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={pressCart} style={styles.itemContainer}>
        <Icon
          name="Bag"
          height={size.rg}
          width={size.rg}
          containerStyle={styles.iconContainer}
        />
        <Text style={styles.itemText}>Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={pressReview} style={styles.itemContainer}>
        <Icon
          name="Colon"
          height={size.rg}
          width={size.rg}
          containerStyle={styles.iconContainer}
        />
        <Text style={styles.itemText}>Reviews</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={pressCategory} style={styles.itemContainer}>
        <Icon
          name="Category"
          height={size.rg}
          width={size.rg}
          containerStyle={styles.iconContainer}
        />
        <Text style={styles.itemText}>Category</Text>
      </TouchableOpacity>

      <Button
        containerStyle={styles.button}
        title="Log Out"
        titleStyle={styles.buttonText}
        leftIconName="Logout"
        leftIconStyle={styles.buttonIconContainer}
        onPress={pressLogout}
      />
    </ScrollView>
  );
};
