import React, {useState, FC} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {styles} from './Dropdown.style';
import {TDropdown} from './Dropdown.type';

export const Dropdown: FC<TDropdown> = ({data, containerStyle}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [items, setItems] = useState(data);

  return (
    <DropDownPicker
      style={[styles.picker, containerStyle]}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
  );
};
