import * as React from "react";
import { 
  SafeAreaView, 
  View, 
  Text, 
  TouchableOpacity } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
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
  } = props;

  const renderLeftIconComp = () =>
    !leftComponentDisable &&
    (leftComponent || (
      <TouchableOpacity
        onPress={leftComponentOnPress}
        style={[styles.leftComponentStyle, leftComponentStyle]}
      >
        <Icon
          size={30}
          type="Ionicon"
          name="ios-arrow-back"
          color="rgba(110, 157, 251, 1.0)"
          {...props}
        />
      </TouchableOpacity>
    ));

  const renderRightIconComp = () =>
    !rightComponentDisable &&
    (rightComponent || (
      <TouchableOpacity
        onPress={rightComponentOnPress}
        style={[styles.rightComponentStyle, rightComponentStyle]}
      >
        <Icon
          size={30}
          color="white"
          type="Ionicon"
          name="ios-menu"
          {...props}
        />
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
