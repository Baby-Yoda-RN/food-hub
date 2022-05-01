import React, {useState, useRef, FC} from 'react';
import {View, Text, StyleProp, TextInput} from 'react-native';
import {styles} from './PinInput.styles';
import {TPinEntryProps} from './PinInput.type';

export const PinInput: FC<TPinEntryProps> = ({
  keyBoardType = 'numeric',
  digitCount = 4,
  containerStyle,
  textInputStyle,
  onSelectTextInputStyle,
  onChangePinEntry = () => {},
}) => {
  const [textArray, onChangeTextArray] = useState([]);
  const [onRef, onRefChange] = useState(-1);

  const renderTextBoxes = () => {
    const refTextBox = [];
    const textInputArray = [];

    for (let i = 0; i < digitCount; i++) {
      let current = i;
      let next = i + 1;
      refTextBox[current] = useRef();
      refTextBox[next] = useRef();

      textInputArray.push(
        <TextInput
          ref={refTextBox[current]}
          style={
            onRef === current
              ? [styles.inputColor, onSelectTextInputStyle]
              : [styles.input, textInputStyle]
          }
          textAlign={'center'}
          textAlignVertical={'center'}
          keyboardType={keyBoardType}
          maxLength={1}
          blurOnSubmit={false}
          value={textArray[current]}
          onChangeText={t => {
            onChangeTextArray(array => {
              let newArray = [...array];
              newArray[current] = t;
              onChangePinEntry(newArray.join(''));
              return newArray;
            });

            if (t.length === 1) {
              if (next === digitCount) {
                refTextBox[current].current.blur();
              } else {
                refTextBox[next].current.focus();
              }
            }
          }}
          onFocus={() => {
            onRefChange(current);
            onChangeTextArray(array => {
              let newArray = [...array];
              newArray[current] = '';
              onChangePinEntry(newArray.join(''));
              return newArray;
            });
          }}
          onBlur={() => onRefChange(-1)}
          onKeyPress={({nativeEvent}) => {
            if (nativeEvent.key === 'Backspace') {
              if (current === 0) {
              } else {
                refTextBox[current - 1].current.focus();
              }
            }
          }}
          onSubmitEditing={() =>
            next === digitCount
              ? refTextBox[current].current.blur()
              : refTextBox[next].current.focus()
          }
        />,
      );
    }

    return textInputArray;
  };

  return (
    <>
      <View style={[styles.container, containerStyle]}>
        {renderTextBoxes()}
      </View>
    </>
  );
};
