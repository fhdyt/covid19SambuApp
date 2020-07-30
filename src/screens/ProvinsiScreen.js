import React, {useState, useEffect}  from 'react';
import { View, StyleSheet, Text, Button, FlatList } from 'react-native';
import kawalcorona from '../api/kawalcorona';
import { SafeAreaView } from 'react-navigation';

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
      <SafeAreaView forceInset={{top: 'always'}}>
      <Text style={styles.Header}>Penyebaran Perprovinsi</Text>
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
      </SafeAreaView>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 50,
    marginHorizontal: 15,
  },
  Header: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#5f6769',
    marginBottom: 15
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
