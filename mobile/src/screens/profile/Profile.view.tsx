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
  goBack,
  saveButton,
}) => {
  return (
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
        <Image
          style={[styles.image]}
          source={{uri: 'https://i.imgur.com/imwXQ08.png'}}
        />
        <Text style={styles.name}>{name}</Text>
        <TouchableOpacity>
          <Text>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <Section>
        <Text style={styles.text}>Full name</Text>
        <TextInput type={'regular'} placeholder={name} />
      </Section>
      <Section>
        <Text style={styles.text}>E-mail</Text>
        <TextInput type={'regular'} placeholder={email} />
      </Section>
      <Section>
        <Text style={styles.text}>Phone number</Text>
        <TextInput type={'regular'} placeholder={phoneNumber} />
      </Section>

      <Button
        title="SAVE"
        containerStyle={styles.button}
        onPress={saveButton}
      />
    </Container>
  );
};
