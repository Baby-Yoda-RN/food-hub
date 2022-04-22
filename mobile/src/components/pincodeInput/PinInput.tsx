import React, {useState, useRef} from 'react';
import {View, Text, StyleProp, TextInput} from 'react-native';
import {styles} from './PinInput.styles';

interface Props {
  PinStyle?: StyleProp<styles>;
  digitCount: int;
  keyBoardType: string;
}

export const PinInput: React.FC<Props> = ({title = 'pin'}) => {
  const [text, onChangeText] = useState('');
  const [text2, onChangeText2] = useState('');
  const [text3, onChangeText3] = useState('');
  const [text4, onChangeText4] = useState('');

  const [onRef, onRefChange] = useState('0');

  const ref_to_input1 = useRef();
  const ref_to_input2 = useRef();
  const ref_to_input3 = useRef();
  const ref_to_input4 = useRef();

  return (
    <>
      <View style={styles.container}>
        <TextInput
          ref={ref_to_input1}
          style={onRef === '1' ? styles.inputColor : styles.input}
          textAlign={'center'}
          keyboardType={'numeric'}
          maxLength={1}
          blurOnSubmit={false}
          value={text}
          onChangeText={text => {
            onChangeText(text);
            if (text.length === 1) {
              ref_to_input2.current.focus();
            }
          }}
          onFocus={() => {
            onRefChange('1');
            onChangeText('');
          }}
          onBlur={() => onRefChange('0')}
          onSubmitEditing={() => ref_to_input2.current.focus()}
        />

        <TextInput
          ref={ref_to_input2}
          style={onRef === '2' ? styles.inputColor : styles.input}
          textAlign={'center'}
          keyboardType={'numeric'}
          maxLength={1}
          blurOnSubmit={false}
          value={text2}
          onChangeText={text2 => {
            onChangeText2(text2);
            if (text2.length === 1) {
              ref_to_input3.current.focus();
            }
          }}
          onFocus={() => {
            onRefChange('2');
            onChangeText2('');
          }}
          onBlur={() => onRefChange('0')}
          onSubmitEditing={() => ref_to_input3.current.focus()}
        />

        <TextInput
          ref={ref_to_input3}
          style={onRef === '3' ? styles.inputColor : styles.input}
          textAlign={'center'}
          keyboardType={'numeric'}
          maxLength={1}
          blurOnSubmit={false}
          value={text3}
          onChangeText={text3 => {
            onChangeText3(text3);
            if (text3.length === 1) {
              ref_to_input4.current.focus();
            }
          }}
          onFocus={() => {
            onRefChange('3');
            onChangeText3('');
          }}
          onBlur={() => onRefChange('0')}
          onSubmitEditing={() => ref_to_input4.current.focus()}
        />

        <TextInput
          ref={ref_to_input4}
          style={onRef === '4' ? styles.inputColor : styles.input}
          textAlign={'center'}
          keyboardType={'numeric'}
          maxLength={1}
          blurOnSubmit={false}
          value={text4}
          onChangeText={text4 => {
            onChangeText4(text4);
            if (text4.length === 1) {
              onRefChange('0');
              ref_to_input4.current.blur();
            }
          }}
          onFocus={() => {
            onRefChange('4');
            onChangeText4('');
          }}
          onBlur={() => onRefChange('0')}
        />
      </View>
    </>
  );
};
