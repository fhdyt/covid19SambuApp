import React, {useState, useEffect}  from 'react';
import { View, StyleSheet, Button, FlatList } from 'react-native';
import { Text } from 'react-native-elements';
import kawalcorona from '../api/kawalcorona';
import { SafeAreaView } from 'react-navigation';
import globalStyles from '../styles/globalStyles';

const ProvinsiScreen = () => {
  const [term, setTerm] = useState('');
  const [result, setResult] = useState([]);

  const getResult = async id => {
    const response = await kawalcorona.get('/indonesia/provinsi');
    setResult(response.data);
    //setResult(response.data.filter(riau => riau.attributes.Kode_Provi === 14));
    console.log(response.data);
  };

  useEffect(() => {
    getResult();
  }, []);



  return (

    <View style={styles.container}>
      <Text h3 style={globalStyles.Header}>Penyebaran Perprovinsi</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={result}
        keyExtractor={(provinsi) => provinsi.attributes.Kode_Provi}
        renderItem={({ item }) => {
          return (
              <View style={styles.Card}>
                <Text style={styles.Provinsi}>
                  {item.attributes.Provinsi}
                </Text>
                <Text style={styles.Detail}>
                  Positif : {item.attributes.Kasus_Posi}
                </Text>
                <Text style={styles.Detail}>
                  Sembuh : {item.attributes.Kasus_Semb}
                </Text>
                <Text style={styles.Detail}>
                  Meninggal : {item.attributes.Kasus_Meni}
                </Text>
              </View>
          );
        }}
      />
    </View>
  )
};

ProvinsiScreen.navigationOptions = ({ navigation }) => {
  return {
    title : '',
    headerStyle: {
      elevation: 0, // remove shadow on Android
      shadowOpacity: 0, // remove shadow on iOS
      backgroundColor: 'transparent'
    },
    
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  Card: {
    backgroundColor: '#f6f6f6',
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  Provinsi: {
    fontWeight: 'bold',
    fontSize: 18,
    marginHorizontal: 10,
    marginVertical : 10,
    color: '#777777'

  },
  Detail: {
    marginHorizontal: 10,
    marginBottom : 10,
    color: '#777777'
  }

});


export default ProvinsiScreen;
