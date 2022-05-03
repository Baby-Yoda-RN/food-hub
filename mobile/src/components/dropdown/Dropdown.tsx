import React, {useState, FC} from 'react';
import {View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {styles} from './Dropdown.style';
import {TDropdown} from './Dropdown.type';

export const Dropdown: FC<TDropdown> = ({data, containerStyle}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(data);

  return (
    <View>
      <DropDownPicker
        style={[styles.picker, containerStyle]}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
    </View>
  );
};
