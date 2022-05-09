import React, {FC} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Header, TextInput, Container, Button, Section} from '../../components';
import {size, color} from '../../theme';
import {styles} from './Profile.style';
import {TProfileViewProps} from './Profile.type';

export const ProfileView: FC<TProfileViewProps> = ({
  name,
  email,
  phoneNumber,
  profileURL,
  goBack,
  saveButton,
}) => {
  return (
    <>
      <Container
        header={
          <Header
            leftIconName="ChevronLeft"
            iconWidth={size.rg}
            iconHeight={size.rg}
            containerStyle={styles.header}
            leftIconStyle={{backgroundColor: color.white}}
            leftPress={goBack}
          />
        }>
        <View style={styles.profileContainer}>
          <Image style={[styles.image]} source={{uri: profileURL}} />
          <Text style={styles.name}>{name}</Text>
          <TouchableOpacity>
            <Text>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <Section>
            <Text style={styles.text}>Full name</Text>
            <TextInput
              type={'regular'}
              placeholder={name}
              value={''}
              onChangeText={function (value: string): void {
                throw new Error('Function not implemented.');
              }}
            />
          </Section>
          <Section>
            <Text style={styles.text}>E-mail</Text>
            <TextInput
              type={'regular'}
              placeholder={email}
              value={''}
              onChangeText={function (value: string): void {
                throw new Error('Function not implemented.');
              }}
            />
          </Section>
          <Section>
            <Text style={styles.text}>Phone number</Text>
            <TextInput
              type={'regular'}
              placeholder={phoneNumber}
              value={''}
              onChangeText={function (value: string): void {
                throw new Error('Function not implemented.');
              }}
            />
          </Section>
        </View>

        <Button
          title="SAVE"
          containerStyle={styles.button}
          onPress={saveButton}
        />
      </Container>
    </>
  );
};
