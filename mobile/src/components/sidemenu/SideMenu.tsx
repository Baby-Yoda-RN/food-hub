import React, {FC} from 'react';
import {Image, Text, View, Alert, TouchableOpacity} from 'react-native';
import {styles} from './SideMenu.styles';
import {TSideMenuProps} from './SideMenu.type';

export const SideMenu: FC<TSideMenuProps> = ({
  photo = 'https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
  icon = 'https://png.pngtree.com/png-vector/20190927/ourmid/pngtree-email-icon-png-image_1757854.jpg',
  logoutIcon = 'https://p.kindpng.com/picc/s/19-194966_power-button-svg-clip-arts-power-button-icon.png',
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
        <Image
          style={styles.icon}
          source={{
            uri: icon,
          }}
        />
        <Text
          onPress={() => {
            // WILL CHANGE TO NAVIGATION
            Alert.alert('You pressed My Orders');
          }}
          style={styles.itemText}>
          My Orders
        </Text>
      </View>
      <View style={styles.itemContainer}>
        <Image
          style={styles.icon}
          source={{
            uri: icon,
          }}
        />
        <Text style={styles.itemText}>My Profile</Text>
      </View>
      <View style={styles.itemContainer}>
        <Image
          style={styles.icon}
          source={{
            uri: icon,
          }}
        />
        <Text style={styles.itemText}>Delivery Address</Text>
      </View>
      <View style={styles.itemContainer}>
        <Image
          style={styles.icon}
          source={{
            uri: icon,
          }}
        />
        <Text style={styles.itemText}>Payment Methods</Text>
      </View>
      <View style={styles.itemContainer}>
        <Image
          style={styles.icon}
          source={{
            uri: icon,
          }}
        />
        <Text style={styles.itemText}>Contact Us</Text>
      </View>
      <View style={styles.itemContainer}>
        <Image
          style={styles.icon}
          source={{
            uri: icon,
          }}
        />
        <Text style={styles.itemText}>Settings</Text>
      </View>
      <View style={styles.itemContainer}>
        <Image
          style={styles.icon}
          source={{
            uri: icon,
          }}
        />
        <Text style={styles.itemText}>Helps & FAQs</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Image
          style={styles.logoutIcon}
          source={{
            uri: logoutIcon,
          }}
        />
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};
