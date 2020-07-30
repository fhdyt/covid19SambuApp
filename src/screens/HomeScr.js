import React, {useState, useEffect}  from 'react';
import { View, StyleSheet, Text, ScrollView, ImageBackground } from 'react-native';
import { Header } from 'react-native-elements';
import kawalcorona from '../api/kawalcorona';
import RiauScreen from './RiauScreen';

const HomeScreen = () => {
  const [term, setTerm] = useState('');
  const [result, setResult] = useState([]);

  const getResult = async id => {
    const response = await kawalcorona.get('/indonesia');
    setResult(response.data[0]);
    //console.log(response.data);
  };

  useEffect(() => {
    getResult();
  }, []);



  return (

    <ScrollView>
    <View style={styles.container}>
    <ImageBackground style={styles.backgroundStyle}
      source={{ uri: 'https://image.freepik.com/free-vector/social-distancing-concept_23-2148501908.jpg' }}
      imageStyle={{ borderRadius: 10 }}
    >
    <View style={styles.backgroundView}>
    </View>
    </ImageBackground>
    </View>
    <RiauScreen />
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundStyle: {
    marginTop: 45,
    height: 250,
    borderRadius: 5,
    marginHorizontal: 5,
    marginBottom: 10,
  },
  backgroundView: {
    flex:1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    paddingHorizontal: 15,
    paddingBottom: 5,
    borderRadius: 15,
  },
  total: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold'
  },
  subtitle: {
    color:'black',
    fontWeight: 'bold'
  }
});

export default HomeScreen;
