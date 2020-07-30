import React, {useState, useEffect}  from 'react';
import { View, StyleSheet, Text, Button, FlatList, ImageBackground } from 'react-native';
import kawalcorona from '../api/kawalcorona';

const RiauScreen = () => {
  const [term, setTerm] = useState('');
  const [result, setResult] = useState([]);

  const getResult = async id => {
    const response = await kawalcorona.get('/indonesia/provinsi');
    //setResult(response.data);
    setResult(response.data.filter(riau => riau.attributes.Kode_Provi === 14));
  };

  useEffect(() => {
    getResult();
  }, []);



  return (
    <View style={styles.container}>
        <Text >Update Terkini Provinsi Riau</Text>
        <View style={styles.Card}>
            <ImageBackground style={styles.backgroundStyle}
                source={{ uri: 'https://www.icsi.org/wp-content/uploads/2020/04/shutterstock_1687243246-e1587657001683.jpg' }}
                imageStyle={{ borderRadius: 10 }}
                >
                <View style={styles.backgroundView}>
                <Text style={styles.total}></Text>
                <Text note style={styles.subtitle}>Positif</Text>
                </View>
            </ImageBackground>

            <ImageBackground style={styles.backgroundStyle}
                source={{ uri: 'https://static.timesofisrael.com/www/uploads/2020/06/F200413NS29.jpg' }}
                imageStyle={{ borderRadius: 5 }}
                >
                <View style={styles.backgroundView}>
                <Text style={styles.total}></Text>
                <Text note style={styles.subtitle}>Sembuh</Text>
                </View>
            </ImageBackground>

            <ImageBackground style={styles.backgroundStyle}
                source={{ uri: 'https://www.mcall.com/resizer/eCAHCJeL2_eFlfeNHe97woNgrmU=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/KCSMSWAZMNACHIOWI53BHN242E.jpg' }}
                imageStyle={{ borderRadius: 10 }}
                >
                <View style={styles.backgroundView}>
                <Text style={styles.total}></Text>
                <Text style={styles.subtitle}>Meninggal</Text>
                </View>
            </ImageBackground>

        </View>

    </View>
  )
};

const styles = StyleSheet.create({
  container: {
  },
  Card: {
  },
  Box: {
      flex: 1
  },
  backgroundStyle: {
    marginTop: 10,
    height:100,
    marginHorizontal:10,
    marginBottom: 10,
  },
  backgroundView: {
    flex:1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 5,
    paddingBottom: 5,
    borderRadius: 5
  },
  total: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  },
  subtitle: {
    color:'white',
    fontWeight: 'bold',
    fontSize: 18
  }

});

export default RiauScreen;
