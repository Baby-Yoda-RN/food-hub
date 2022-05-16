import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Container, Section, TextInput} from '../../../src/components';
import {styles} from './textInput.style';

export const TextInputComponent = () => {
  const [text, onChangeText] = useState();
  const [text2, onChangeText2] = useState();
  const [text3, onChangeText3] = useState();
  const [text4, onChangeText4] = useState();
  const [text5, onChangeText5] = useState();
  const [text6, onChangeText6] = useState();
  const [text7, onChangeText7] = useState();

  return (
    <Container isScrollViewDisabled={false}>
      <Section style={styles.section}>
        <TextInput
          type={'regular'}
          placeholder={'email'}
          onChangeText={onChangeText}
        />
      </Section>
      <Section style={styles.section}>
        <TextInput
          leftIcon="Magnify"
          type="search"
          placeholder="Find food by name"
          onChangeText={onChangeText2}
          setText={() => {}}
          text={''}
        />
      </Section>
      <Section style={styles.section}>
        <TextInput
          type="search"
          placeholder={'search'}
          onChangeText={onChangeText3}
        />
      </Section>
      <Section style={styles.section}>
        <TextInput
          type="regular"
          onChangeText={onChangeText4}
          placeholder="Promo Code"
          rightButton="Apply"
        />
      </Section>

      <Section style={styles.section}>
        <TextInput
          type="password"
          rightIcon="Eye"
          onChangeText={onChangeText5}
        />
      </Section>

      <Section style={styles.section}>
        <TextInput
          type="phone"
          leftIcon="FlagUSA"
          onChangeText={onChangeText6}
        />
      </Section>

      <Section style={styles.section}>
        <TextInput onChangeText={onChangeText7} multiline={true} />
      </Section>
    </Container>
  );
};
