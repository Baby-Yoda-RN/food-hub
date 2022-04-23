import React, {FC} from 'react';
import {Image, Text, View, Alert, TouchableOpacity} from 'react-native';
import {Icon} from '../icon/Icon';
import {styles} from './SideMenu.styles';
import {TSideMenuProps} from './SideMenu.type';
import {size} from '../../theme';

export const SideMenu: FC<TSideMenuProps> = ({
  photo = 'https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
  name = 'First Last',
  email = 'first.last@gmail.com',
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
      <View style={styles.itemContainer}>
        <Icon
          name="List"
          height={size.rg}
          width={size.rg}
          containerStyle={{padding: 0}}
        />
        <Text onPress={() => {}} style={styles.itemText}>
          My Orders
        </Text>
      </View>
      <View style={styles.itemContainer}>
        <Icon
          name="Profile"
          height={size.rg}
          width={size.rg}
          containerStyle={{padding: 0}}
        />
        <Text style={styles.itemText}>My Profile</Text>
      </View>
      <View style={styles.itemContainer}>
        <Icon
          name="Pin"
          height={size.rg}
          width={size.rg}
          containerStyle={{padding: 0}}
        />
        <Text style={styles.itemText}>Delivery Address</Text>
      </View>
      <View style={styles.itemContainer}>
        <Icon
          name="Wallet"
          height={size.rg}
          width={size.rg}
          containerStyle={{padding: 0}}
        />
        <Text style={styles.itemText}>Payment Methods</Text>
      </View>
      <View style={styles.itemContainer}>
        <Icon
          name="Mail"
          height={size.rg}
          width={size.rg}
          containerStyle={{padding: 0}}
        />
        <Text style={styles.itemText}>Contact Us</Text>
      </View>
      <View style={styles.itemContainer}>
        <Icon
          name="Gear"
          height={size.rg}
          width={size.rg}
          containerStyle={{padding: 0}}
        />
        <Text style={styles.itemText}>Settings</Text>
      </View>
      <View style={styles.itemContainer}>
        <Icon
          name="QuestionMark"
          height={size.rg}
          width={size.rg}
          containerStyle={{padding: 0}}
        />
        <Text style={styles.itemText}>Helps & FAQs</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <View style={styles.buttonIconContainer}>
          <Icon name="Logout" height={size.rg} width={size.rg} />
        </View>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};
