import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {TextInput, Header, Button, Section, Container} from 'components';
import {TaddNewAddressViewProps} from './addNewAddressScreen.type';
import {styles} from './addNewAddressScreen.style';
import {size} from 'theme';

export const AddNewAddressScreenView: FC<TaddNewAddressViewProps> = ({
  isLoading,
  name,
  phoneNumber,
  state,
  city,
  street,
  saveButton,
  goBack,
  setName,
  setPhone,
  setStreet,
  setCity,
  setProvince,
}) => {
  return (
    <Container
      isLoading={isLoading}
      header={
        <Header
          leftIconName="ChevronLeft"
          title="Add new address"
          iconWidth={size.rg}
          iconHeight={size.rg}
          containerStyle={styles.header}
          leftPress={goBack}
        />
      }>
      <View style={styles.container}>
        <Section>
          <Text style={styles.text}>Full name</Text>
          <TextInput type="search" placeholder={name} onChangeText={setName} />
        </Section>

        <Section>
          <Text style={styles.text}>Mobile number</Text>
          <TextInput
            type="search"
            placeholder={phoneNumber}
            onChangeText={setPhone}
          />
        </Section>

        <Section>
          <Text style={styles.text}>Street (Include house number)</Text>
          <TextInput
            type="search"
            placeholder={street}
            onChangeText={setStreet}
          />
        </Section>

        <Section>
          <Text style={styles.text}>City</Text>
          <TextInput type="search" placeholder={city} onChangeText={setCity} />
        </Section>

        <Section>
          <Text style={styles.text}>State</Text>
          <TextInput
            type="search"
            placeholder={state}
            onChangeText={setProvince}
          />
        </Section>

        <Button
          title="SAVE"
          containerStyle={styles.button}
          onPress={saveButton}
        />
      </View>
    </Container>
  );
};
