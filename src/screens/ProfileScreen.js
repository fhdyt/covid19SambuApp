import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import globalStyles from '../styles/globalStyles';
import { AntDesign } from '@expo/vector-icons';

const ProfileScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
      <View style={styles.container}>
        <SafeAreaView forceInset={{ top: 'always' }}>
          <Text h3 style={globalStyles.Header}>Profil</Text>
          <Button 
            icon={
              <AntDesign
                name="logout"
                size={15}
                color="white"
              />
            }
            iconLeft
            style={styles.signout} 
            title=" Keluar" 
            onPress={signout} />
        </SafeAreaView>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 50,
    marginHorizontal: 20,
  },
  signout: {
    alignSelf: 'center'
  }
});

export default ProfileScreen;
