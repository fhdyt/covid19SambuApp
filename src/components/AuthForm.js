import React, { useState } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from './Spacer';
import { SafeAreaView } from 'react-navigation';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
    <SafeAreaView forceInset={{top: 'always'}}>
    <Image style={styles.imageLogo} source={require('../../assets/logo_sambu.png')} />
    <Spacer>
    <View style={styles.Form}>
        <Text h3 style={styles.Header}>{headerText}</Text>
        <Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
        leftIcon={
                    <AntDesign
                      name='mail'
                      size={24}
                      color='#8994A1'
                    />
                  }
      />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        leftIcon={
                  <AntDesign
                    name='key'
                    size={24}
                    color='#8994A1'
                  />
                }
                    />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      </Spacer>
        <Button
          title={submitButtonText}
          onPress={() => onSubmit({ email, password })}
        />
      </View>
      </Spacer>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginHorizontal: 15,
    marginTop: 15,
  },
  imageLogo: {
    height : 150,
    width: 170,
    marginTop: 7,
    marginRight: 10,
    alignSelf: 'center'
  },  
  Header: {
    fontWeight: 'bold',
    color: '#8994A1',
    alignSelf: 'center'
  },
  Form: {
    backgroundColor: '#f6f6f6',
    paddingHorizontal: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingBottom: 20
  }
});

export default AuthForm;
