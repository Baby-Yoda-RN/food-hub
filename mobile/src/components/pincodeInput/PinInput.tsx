import React, {useState, useRef} from 'react';
import {View, Text, StyleProp, TextInput} from 'react-native';
import {styles} from './PinInput.styles';

interface Props {
  keyBoardType: string;
  digitCount: int;
}

export const PinInput: React.FC<Props> = ({
  keyBoardType = 'numeric',
  digitCount = 4,
}) => {
  const [textArray, onChangeTextArray] = useState([]);
  const [onRef, onRefChange] = useState(-1);
  const ref = [];
  const textInputArray = [];

  for (let i = 0; i < digitCount; i++) {
    let current = i;
    let next = i + 1;
    ref[current] = useRef();
    ref[next] = useRef();

    textInputArray.push(
      <TextInput
        ref={ref[current]}
        style={onRef === i ? styles.inputColor : styles.input}
        textAlign={'center'}
        keyboardType={keyBoardType}
        maxLength={1}
        blurOnSubmit={false}
        value={textArray[current]}
        onChangeText={t => {
          onChangeTextArray(array => {
            let newArray = [...array];
            newArray[current] = t;
            return newArray;
          });

          if (t.length === 1) {
            if (next === digitCount) {
              ref[current].current.blur();
            } else {
              ref[next].current.focus();
            }
          }
        }}
        onFocus={() => {
          onRefChange(current);
          onChangeTextArray(array => {
            let newArray = [...array];
            newArray[current] = '';
            return newArray;
          });
        }}
        onBlur={() => onRefChange(-1)}
        onSubmitEditing={() =>
          next === digitCount
            ? ref[current].current.blur()
            : ref[next].current.focus()
        }
      />,
    );
  }

  return (
    <>
      <View style={styles.container}>{textInputArray}</View>
    </>
  );
};
