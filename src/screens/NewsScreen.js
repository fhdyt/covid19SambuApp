import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Image, TouchableOpacity,Dimensions } from 'react-native';
import { Text } from 'react-native-elements';
import globalStyles from '../styles/globalStyles';
import { SafeAreaView } from 'react-navigation';
import newsapi from '../api/newsapi';
import SkeletonContent from 'react-native-skeleton-content';

const NewsScreen = ({ navigation }) => {
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const { width, height } = Dimensions.get("window");

    const getNews = async id => {
        setLoading(true)
        const response = await newsapi.get('')
        .then((response) => {
            setResult(response.data.articles);
            setLoading(false)
        }, (error) => {
            console.log(error);
        });
    };

  useEffect(() => {
    getNews();
  }, []);

    return (
        <View style={styles.container}>
            <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h3 style={[globalStyles.Header, styles.Header]}>Berita</Text>
            { loading ? 
            (
                <>
                <SkeletonContent
                  containerStyle={{flex: 1, alignItems: 'center', marginTop: 15}}
                  layout={[
                    { key: '1', 
                      height : 280, 
                      width: width-50,
                      borderRadius:15, 
                      marginBottom: 20 
                    },
                    { key: '2', 
                      height : 280, 
                      width: width-50,
                      borderRadius:15, 
                      marginBottom: 20 
                    },
                    { key: '3', 
                      height : 280, 
                      width: width-50,
                      borderRadius:15, 
                      marginBottom: 20 
                    }
                  ]}
                >  
                </SkeletonContent>
                </>
            ):
            (
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
            )}
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