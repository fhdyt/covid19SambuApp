import React, {useState, useEffect}  from 'react';
import { View, StyleSheet, ScrollView, ImageBackground, Image } from 'react-native';
import { Text } from 'react-native-elements';
import { Header } from 'react-native-elements';
import kawalcorona from '../api/kawalcorona';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-navigation';
import globalStyles from '../styles/globalStyles';
import HeaderTop from '../components/Header';

const HomeScreen = ({ navigation }) => {
  
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
    <SafeAreaView forceInset={{top: 'always'}}>
    <ScrollView>
    <View style={styles.container}>
      <HeaderTop />

      <ImageBackground style={styles.backgroundStyle}
        source={{ uri: 'https://www.icsi.org/wp-content/uploads/2020/04/shutterstock_1687243246-e1587657001683.jpg' }}
        imageStyle={{ borderRadius: 10 }}
      >
      <View style={styles.backgroundView}>
        <Text style={styles.total}>{result.positif}</Text>
        <Text note style={styles.subtitle}>Positif</Text>
      </View>
      </ImageBackground>

      <ImageBackground style={styles.backgroundStyle}
        source={{ uri: 'https://static.timesofisrael.com/www/uploads/2020/06/F200413NS29.jpg' }}
        imageStyle={{ borderRadius: 10 }}
      >
      <View style={styles.backgroundView}>
        <Text style={styles.total}>{result.sembuh}</Text>
        <Text note style={styles.subtitle}>Sembuh</Text>
      </View>
      </ImageBackground>

      <ImageBackground style={styles.backgroundStyle}
        source={{ uri: 'https://www.mcall.com/resizer/eCAHCJeL2_eFlfeNHe97woNgrmU=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/KCSMSWAZMNACHIOWI53BHN242E.jpg' }}
        imageStyle={{ borderRadius: 10 }}
      >
      <View style={styles.backgroundView}>
        <Text style={styles.total}>{result.meninggal}</Text>
        <Text style={styles.subtitle}>Meninggal</Text>
      </View>
      </ImageBackground>

      <ImageBackground style={styles.backgroundStyle}
        source={{ uri: 'https://i0.wp.com/www.middleeastmonitor.com/wp-content/uploads/2020/03/20200330_2_41629245_53496497.jpg?resize=1200%2C777&quality=85&strip=all&zoom=1&ssl=1' }}
        imageStyle={{ borderRadius: 10 }}
      >
      <View style={styles.backgroundView}>
        <Text style={styles.total}>{result.dirawat}</Text>
        <Text note style={styles.subtitle}>Dirawat</Text>
      </View>
      </ImageBackground>

      <TouchableOpacity
        onPress={() => navigation.navigate('Provinsi')}
      >
      <Text style={styles.Provinsi}>Lihat data lengkap</Text>
      </TouchableOpacity>
    </View>
    
    </ScrollView>
    </SafeAreaView>
  )
};

HomeScreen.navigationOptions = ({ navigation }) => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    marginHorizontal: 20,
  },
  backgroundStyle: {
    marginTop: 10,
    height: 130,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10,
  },
  backgroundView: {
    flex:1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    paddingHorizontal: 15,
    paddingBottom: 5,
    borderRadius: 10
  },
  total: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold'
  },
  subtitle: {
    color:'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  Provinsi : {
    color : 'gray'
  }
});



export default HomeScreen;
