import React, {useState, useEffect}  from 'react';
import { View, StyleSheet, Text, Button, FlatList } from 'react-native';
import kawalcorona from '../api/kawalcorona';

const HomeScreen = () => {
  const [term, setTerm] = useState('');
  const [result, setResult] = useState([]);
  
  const getResult = async id => {
    const response = await kawalcorona.get('/indonesia');
    setResult(response.data[0]);
    console.log(response.data);
  };

  useEffect(() => {
    getResult();
  }, []);

  
  
  return (
    <View>
      <Text style={{fontSize:30}}>{result.name}</Text>
      <Text style={{fontSize:30}}>{result.positif}</Text>
      <Text style={{fontSize:30}}>{result.sembuh}</Text>
      <Text style={{fontSize:30}}>{result.meninggal}</Text>
      <Text style={{fontSize:30}}>{result.dirawat}</Text>
      <FlatList
        data={result}
        keyExtractor={(nama) => nama.id}
        renderItem={({ item }) => {
          return (
              <View >
                <Text>
                  {item.name}
                </Text>
                <Text>
                  {item.positif}
                </Text>
              </View>
          );
        }}
      />
    </View>
  )
};

const styles = StyleSheet.create({});

export default HomeScreen;
