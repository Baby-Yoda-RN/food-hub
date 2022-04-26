import React, {FC} from 'react';
import {Image, Text, View, Alert, TouchableOpacity} from 'react-native';
import {Icon, Button} from '../';
import {styles} from './SideMenu.styles';
import {TSideMenuProps} from './SideMenu.type';
import {size} from '../../theme';

export const SideMenu: FC<TSideMenuProps> = ({
  photo = 'https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
  name = 'First Last',
  email = 'first.last@gmail.com',
  pressOrder,
  pressProfile,
  pressDelivery,
  pressPayment,
  pressContact,
  pressSetting,
  pressHelp,
  pressLogout,
}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: photo,
        }}
      />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
      <TouchableOpacity onPress={pressOrder} style={styles.itemContainer}>
        <Icon
          name="List"
          height={size.rg}
          width={size.rg}
          containerStyle={{padding: 0}}
        />
        <Text onPress={() => {}} style={styles.itemText}>
          My Orders
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={pressProfile} style={styles.itemContainer}>
        <Icon
          name="Profile"
          height={size.rg}
          width={size.rg}
          containerStyle={{padding: 0}}
        />
        <Text style={styles.itemText}>My Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={pressDelivery} style={styles.itemContainer}>
        <Icon
          name="Pin"
          height={size.rg}
          width={size.rg}
          containerStyle={{padding: 0}}
        />
        <Text style={styles.itemText}>Delivery Address</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={pressPayment} style={styles.itemContainer}>
        <Icon
          name="Wallet"
          height={size.rg}
          width={size.rg}
          containerStyle={{padding: 0}}
        />
        <Text style={styles.itemText}>Payment Methods</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={pressContact} style={styles.itemContainer}>
        <Icon
          name="Mail"
          height={size.rg}
          width={size.rg}
          containerStyle={{padding: 0}}
        />
        <Text style={styles.itemText}>Contact Us</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={pressSetting} style={styles.itemContainer}>
        <Icon
          name="Gear"
          height={size.rg}
          width={size.rg}
          containerStyle={{padding: 0}}
        />
        <Text style={styles.itemText}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={pressHelp} style={styles.itemContainer}>
        <Icon
          name="QuestionMark"
          height={size.rg}
          width={size.rg}
          containerStyle={{padding: 0}}
        />
        <Text style={styles.itemText}>Helps & FAQs</Text>
      </TouchableOpacity>

      <Button
        containerStyle={styles.button}
        title="Log Out"
        titleStyle={styles.buttonText}
        leftIconName="Logout"
        leftIconStyle={styles.buttonIconContainer}
        iconHeight={size.rg}
        iconWidth={size.rg}
        buttonHeight={size.lg}
        buttonWidth={size.xxl}
        onPress={pressLogout}
      />
    </View>
  );
};
