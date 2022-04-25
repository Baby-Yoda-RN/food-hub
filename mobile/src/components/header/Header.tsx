import * as React from "react";
import { 
  SafeAreaView, 
  View, 
  Text, 
  TouchableOpacity } from "react-native";
import {Icon} from '../icon/Icon';
import styles, {
  _container,
  _innerContainer,
} from "./Header.style";

interface IProps {
  title: string;
  leftComponent: any;
  rightComponent: any;
  titleComponent: any;
  containerStyle: any;
  width: number | string;
  height: number | string;
  backgroundColor: string;
  leftComponentStyle: any;
  statusBarHidden: boolean;
  rightComponentStyle: any;
  leftComponentDisable: boolean;
  rightComponentDisable: boolean;
  leftComponentOnPress: () => void;
  rightComponentOnPress: () => void;
  leftIconName: any;
  rightIconName: any;
  leftIconStyle: any;
  rightIconStyle: any;
  iconWidth: number;
  iconHeight: number;
}

const Header = (props: IProps) => {
  const {
    width,
    title,
    height,
    leftComponent,
    rightComponent,
    containerStyle,
    titleComponent,
    backgroundColor,
    statusBarHidden,
    leftComponentStyle,
    rightComponentStyle,
    leftComponentDisable,
    leftComponentOnPress,
    rightComponentDisable,
    rightComponentOnPress,
    leftIconName,
    rightIconName,
    leftIconStyle,
    rightIconStyle,
    iconWidth,
    iconHeight,
  } = props;

  const renderLeftIconComp = () =>
    !leftComponentDisable &&
    (leftComponent || (
      <TouchableOpacity
        onPress={leftComponentOnPress}
        style={[styles.leftComponentStyle, leftComponentStyle]}
      >
      <Icon  name={leftIconName} containerStyle={[leftIconStyle]} width={iconWidth} height={iconHeight}/>
      </TouchableOpacity>
    ));

  const renderRightIconComp = () =>
    !rightComponentDisable &&
    (rightComponent || (
      <TouchableOpacity
        onPress={rightComponentOnPress}
        style={[styles.rightComponentStyle, rightComponentStyle]}
      >
        <Icon name={rightIconName} containerStyle={rightIconStyle} width={iconWidth} height={iconHeight}/>
      </TouchableOpacity>
    ));

  const renderTitleComp = () =>
    titleComponent || <Text style={styles.titleTextStyle}>{title}</Text>;

  return (
    <SafeAreaView>
      <View
        style={[
          _container(height, width, backgroundColor, statusBarHidden),
          containerStyle,
        ]}
      >
        <View style={_innerContainer(statusBarHidden)}>
          {renderLeftIconComp()}
          {renderTitleComp()}
          {renderRightIconComp()}
        </View>
      </View>
    </SafeAreaView>
  );
};


export default Header;
