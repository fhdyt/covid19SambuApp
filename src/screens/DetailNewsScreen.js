import React from 'react';
import { View, StyleSheet, Image, Linking, Dimensions } from 'react-native';
import { Text, Button } from 'react-native-elements';
import globalStyles from '../styles/globalStyles';

const DetailNewsScreen = ({ navigation }) => {

    const item = navigation.state.params.item;
    const { width, height } = Dimensions.get("window");
    console.log(navigation);
    return (
        <>
        <Image style={styles.Image}
                            source={{ uri: item.urlToImage }}
                        />
        <View style={styles.container}>
            <Text style={styles.Author}>{item.author}</Text>
            <Text h4 style={[globalStyles.Header, styles.Header]}>{item.title}</Text>
            <Text h5 style={styles.Desc}>{item.description}</Text>
            <Button 
            title=" Selengkapnya" 
            onPress={ ()=>{ Linking.openURL(item.url)}}
             />
        </View>
        </>
    );
}


DetailNewsScreen.navigationOptions = ({ navigation }) => {
    const item = navigation.state.params.item;
    return {
      title : item.source.name,
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
        marginBottom: 50,
        marginHorizontal: 20,
      },
      Image: {
       height: 200,
      },
      Author: {
          marginTop: 15
      },
      Header: {
        marginBottom: 10,
      }, 
      Desc: {
        marginBottom: 10
      }
});

export default DetailNewsScreen;