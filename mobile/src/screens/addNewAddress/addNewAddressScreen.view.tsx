import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {TextInput, Header, Button, Section, Container} from 'components';
import {TaddNewAddressViewProps} from './addNewAddressScreen.type';
import {styles} from './addNewAddressScreen.style';
import {size} from 'theme';

export const AddNewAddressScreenView: FC<TaddNewAddressViewProps> = ({
  name,
  phoneNumber,
  state,
  city,
  street,
  saveButton,
  goBack,
}) => {
  return (
    <Container
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
          <TextInput type="search" placeholder={name} />
        </Section>

        <Section>
          <Text style={styles.text}>Mobile number</Text>
          <TextInput type="search" placeholder={phoneNumber} />
        </Section>

        <Section>
          <Text style={styles.text}>State</Text>
          <TextInput type="search" placeholder={state} />
        </Section>

        <Section>
          <Text style={styles.text}>City</Text>
          <TextInput type="search" placeholder={city} />
        </Section>

        <Section>
          <Text style={styles.text}>Street (Include house number)</Text>
          <TextInput type="search" placeholder={street} />
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
