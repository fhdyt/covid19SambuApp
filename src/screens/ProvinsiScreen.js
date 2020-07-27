import React, {useState, useEffect}  from 'react';
import { View, StyleSheet, Text, Button, FlatList } from 'react-native';
import kawalcorona from '../api/kawalcorona';

const ProvinsiScreen = () => {
  const [term, setTerm] = useState('');
  const [result, setResult] = useState([]);

  const getResult = async id => {
    const response = await kawalcorona.get('/indonesia/provinsi');
    setResult(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getResult();
  }, []);



  return (
    <View style={styles.container}>
      <FlatList
        data={result}
        keyExtractor={(provinsi) => provinsi.attributes.Kode_Provi}
        renderItem={({ item }) => {
          return (
              <View >
                <Text>
                  {item.attributes.Provinsi}
                </Text>
              </View>
          );
        }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },

});

export default ProvinsiScreen;
