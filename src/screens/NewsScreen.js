import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import globalStyles from '../styles/globalStyles';
import { SafeAreaView } from 'react-navigation';
import newsapi from '../api/newsapi';

const NewsScreen = ({ navigation }) => {
    const [result, setResult] = useState([]);

    const getNews = async id => {
    const response = await newsapi.get('');
    setResult(response.data.articles);
    //setResult(response.data.filter(riau => riau.attributes.Kode_Provi === 14));
    console.log(response.data.articles);
  };

  useEffect(() => {
    getNews();
  }, []);

    return (
        <View style={styles.container}>
            <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h3 style={[globalStyles.Header, styles.Header]}>Berita</Text>
            <FlatList
            showsVerticalScrollIndicator={false}
            data={result}
            keyExtractor={(berita) => berita.articles}
            renderItem={({ item }) => {
            return (
                <TouchableOpacity
                    onPress={() => navigation.navigate('DetailNews', {item : item})}
                >
                <View style={styles.Card}>
                    <Image style={styles.Image}
                            source={{ uri: item.urlToImage }}
                        />
                    <View>
                    <View style={styles.Title}>
                        <Text style={styles.Judul}>
                        {item.title}
                        </Text>
                        <Text style={styles.Desc}>
                        {item.description}
                        </Text>
                        <Text style={styles.Sumber}>
                        {item.source.name}
                        </Text>
                    </View>
                </View>
                </View>
                </TouchableOpacity>
            );
            }}
        />
            </SafeAreaView>
        </View>
    );
};

NewsScreen.navigationOptions = ({ navigation }) => {
    return {
      header: () => false,
    };
  };



const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 50,
      },
    Judul: {
        fontSize : 18,
        fontWeight: 'bold'
    },
    Sumber: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    Desc: {
        
    },
    Card: {
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 10,
        backgroundColor: '#f6f6f6',
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    Title : {
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    Image: {
        height: 150,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    Header: {
        marginHorizontal:20,
        marginBottom: 10
    },
});

export default NewsScreen;