import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text } from 'react-native-elements';
import globalStyles from '../styles/globalStyles';

const Header = ({ navigation }) => {
    return (
        <View style={styles.headerStyle}>
                <Image style={styles.imageLogo} source={require('../../assets/logo_sambu.png')} />
                <View style={styles.headerStyleTitle}>
                    <Text h4 style={globalStyles.Header}>Tim Satgas Covid-19</Text>
                    <Text h5 style={globalStyles.Header}>PT. Pulau Sambu Kuala Enok</Text>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    imageLogo: {
      height : 40,
      width: 46,
      marginTop: 7,
      marginRight: 10,
      alignSelf: 'center'
    },
    headerStyle: {
      flex: 1,
      flexDirection: 'row',
    },
    headerStyleTitle: {
      //alignSelf: 'center',
    }
  });
export default Header;