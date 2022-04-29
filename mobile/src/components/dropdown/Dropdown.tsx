import React, {useState} from 'react';
import {View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {styles} from './Dropdown.style';

export const DropDown = () => {
  const [selected, SetSelected] = useState();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Popular', value: 'popular'},
    {label: 'Price', value: 'price'},
  ]);

  return (
    <View>
      <DropDownPicker
        style={styles.picker}
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
