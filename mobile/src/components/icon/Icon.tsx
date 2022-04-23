import React, {FC} from 'react';
import {View} from 'react-native';
import {TIcon} from './Icon.type';
import {styles} from './Icon.styles';
import {color} from '../../theme';

import Bag from '../../assets/icons/Bag.svg';
import Bell from '../../assets/icons/Bell.svg';
import Brand from '../../assets/icons/Brand.svg';
import Bullet from '../../assets/icons/Bullet.svg';
import BulletGreyHollow from '../../assets/icons/BulletGreyHollow.svg';
import BulletOrangeFilled from '../../assets/icons/BulletOrangeFilled.svg';
import Camera from '../../assets/icons/Camera.svg';
import CheckMark from '../../assets/icons/CheckMark.svg';
import ChevronDown from '../../assets/icons/ChevronDown.svg';
import ChevronLeft from '../../assets/icons/ChevronLeft.svg';
import ChevronRight from '../../assets/icons/ChevronRight.svg';
import ChevronRightOrange from '../../assets/icons/ChevronRightOrange.svg';
import Clock from '../../assets/icons/Clock.svg';
import Colon from '../../assets/icons/Colon.svg';
import Compass from '../../assets/icons/Compass.svg';
import Cross from '../../assets/icons/Cross.svg';
import Eye from '../../assets/icons/Eye.svg';
import Facebook from '../../assets/icons/Facebook.svg';
import FlagUSA from '../../assets/icons/FlagUSA.svg';
import FoodHub from '../../assets/icons/FoodHub.svg';
import Gear from '../../assets/icons/Gear.svg';
import Google from '../../assets/icons/Google.svg';
import Hamburger from '../../assets/icons/Hamburger.svg';
import Heart from '../../assets/icons/Heart.svg';
import List from '../../assets/icons/List.svg';
import Logout from '../../assets/icons/Logout.svg';
import Magnify from '../../assets/icons/Magnify.svg';
import Mail from '../../assets/icons/Mail.svg';
import Minus from '../../assets/icons/Minus.svg';
import Motorcycle from '../../assets/icons/Motorcycle.svg';
import Pin from '../../assets/icons/Pin.svg';
import PizzaHut from '../../assets/icons/PizzaHut.svg';
import Plus from '../../assets/icons/Plus.svg';
import Profile from '../../assets/icons/Profile.svg';
import QuestionMark from '../../assets/icons/QuestionMark.svg';
import Slide from '../../assets/icons/Slide.svg';
import Star from '../../assets/icons/Star.svg';
import StarHollow from '../../assets/icons/StarHollow.svg';
import Wallet from '../../assets/icons/Wallet.svg';

export const Icon: FC<TIcon> = ({
  name,
  fill,
  height,
  width,
  containerStyle,
}) => {
  let icon;

  switch (name) {
    case 'Bag':
      icon = <Bag fill={fill || color.grayDisabled} height={height} width={width} />;
      break;
    case 'Bell':
      icon = (
        <Bell
          fill={fill || color.grayDisabled}
          height={height}
          width={width}
        />
      );
      break;
    case 'Brand':
      icon = (
        <Brand
          fill={fill || color.grayDisabled}
          height={height}
          width={width}
        />
      );
      break;
    case 'Bullet':
      icon = (
        <Bullet
          fill={fill || color.grayDisabled}
          height={height}
          width={width}
        />
      );
      break;
    case 'BulletGreyHollow':
      icon = (
        <BulletGreyHollow
          fill={fill || color.grayDisabled}
          height={height}
          width={width}
        />
      );
      break;
    case 'BulletOrangeFilled':
      icon = (
        <BulletOrangeFilled
          fill={fill || color.grayDisabled}
          height={height}
          width={width}
        />
      );
      break;
    case 'Camera':
      icon = (
        <Camera
          fill={fill || color.grayDisabled}
          height={height}
          width={width}
        />
      );
      break;
    case 'CheckMark':
      icon = (
        <CheckMark
          fill={fill || color.grayDisabled}
          height={height}
          width={width}
        />
      );
      break;
    case 'ChevronDown':
      icon = (
        <ChevronDown
          fill={fill || color.grayDisabled}
          height={height}
          width={width}
        />
      );
      break;
    case 'ChevronLeft':
      icon = (
        <ChevronLeft
          fill={fill || color.grayDisabled}
          height={height}
          width={width}
        />
      );
      break;
    case 'ChevronRight':
      icon = (
        <ChevronRight
          fill={fill || color.grayDisabled}
          height={height}
          width={width}
        />
      );
      break;
    case 'ChevronRightOrange':
      icon = (
        <ChevronRightOrange
          fill={fill || color.grayDisabled}
          height={height}
          width={width}
        />
      );
      break;
    case 'Clock':
      icon = (
        <Clock
          fill={fill || color.grayDisabled}
          height={height}
          width={width}
        />
      );
      break;
    case 'Colon':
      icon = (
        <Colon
          fill={fill || color.grayDisabled}
          height={height}
          width={width}
        />
      );
      break;
    case 'Compass':
      icon = (
        <Compass
          fill={fill || color.grayDisabled}
          height={height}
          width={width}
        />
      );
      break;
    case 'Cross':
      icon = (
        <Cross
          fill={fill || color.grayDisabled}
          height={height}
          width={width}
        />
      );
      break;
    case 'Eye':
      icon = (
        <Eye
          fill={fill || color.grayDisabled}
          height={height}
          width={width}
        />
      );
      break;
    case 'Facebook':
      icon = (
        <Facebook
          fill={fill || color.grayDisabled}
          height={height}
          width={width}
        />
      );
      break;
    case 'FlagUSA':
      icon = (
        <FlagUSA
          fill={fill || color.grayDisabled}
          height={height}
          width={width}
        />
      );
      break;
    case 'FoodHub':
      icon = (
        <FoodHub
          fill={fill || color.grayDisabled}
          height={height}
          width={width}
        />
      );
      break;
    case 'Gear':
      icon = (
        <Gear
          fill={fill || color.grayDisabled}
          height={height}
          width={width}
        />
      );
      break;
    case 'Google':
      icon = (
        <Google
          fill={fill || color.grayDisabled}
          height={height}
          width={width}
        />
      );
      break;
    case 'Hamburger':
      icon = (
        <Hamburger
          fill={fill || color.grayDisabled}
          height={height}
          width={width}
        />
      );
      break;
    case 'Heart':
      icon = (
        <Heart
          fill={fill || color.grayDisabled}
          height={height}
          width={width}
        />
      );
      break;
    case 'List':
      icon = (
        <List
          fill={fill || color.grayDisabled}
          height={height}
          width={width}
        />
      );
      break;
    case 'Logout':
      icon = (
        <Logout
          fill={fill || color.grayDisabled}
          height={height}
          width={width}
        />
      );
      break;
    case 'Magnify':
      icon = (
        <Magnify
          fill={fill || color.grayDisabled}
          height={height}
          width={width}
        />
      );
      break;
    case 'Mail':
      icon = (
        <Mail
          fill={fill || color.grayDisabled}
          height={height}
          width={width}
        />
      );
      break;
    case 'Minus':
      icon = (
        <Minus
          fill={fill || color.grayDisabled}
          height={height}
          width={width}
        />
      );
      break;
    case 'Motorcycle':
      icon = (
        <Motorcycle
          fill={fill || color.grayDisabled}
          height={height}
          width={width}
        />
      );
      break;
    case 'Pin':
      icon = (
        <Pin
          fill={fill || color.grayDisabled}
          height={height}
          width={width}
        />
      );
      break;
    case 'PizzaHut':
      icon = (
        <PizzaHut
          fill={fill || color.grayDisabled}
          height={height}
          width={width}
        />
      );
      break;
    case 'Plus':
      icon = (
        <Plus
          fill={fill || color.grayDisabled}
          height={height}
          width={width}
        />
      );
      break;
    case 'Profile':
      icon = (
        <Profile
          fill={fill || color.grayDisabled}
          height={height}
          width={width}
        />
      );
      break;
    case 'QuestionMark':
      icon = (
        <QuestionMark
          fill={fill || color.grayDisabled}
          height={height}
          width={width}
        />
      );
      break;
    case 'Slide':
      icon = (
        <Slide
          fill={fill || color.grayDisabled}
          height={height}
          width={width}
        />
      );
      break;
    case 'Star':
      icon = (
        <Star
          fill={fill || color.grayDisabled}
          height={height}
          width={width}
        />
      );
      break;
    case 'StarHollow':
      icon = (
        <StarHollow
          fill={fill || color.grayDisabled}
          height={height}
          width={width}
        />
      );
      break;
    case 'Wallet':
      icon = (
        <Wallet
          fill={fill || color.grayDisabled}
          height={height}
          width={width}
        />
      );
      break;
    default:
      icon = (
        <Bag
          fill={fill || color.grayDisabled}
          height={height}
          width={width}
        />
      );
  }
  return <View style={[styles.container, containerStyle]}>{icon}</View>;
};
