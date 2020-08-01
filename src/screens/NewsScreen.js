import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import globalStyles from '../styles/globalStyles';
import { SafeAreaView } from 'react-navigation';

const NewsScreen = () => {
    return (
        <View style={styles.container}>
            <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h3 style={globalStyles.Header}>Berita</Text>
            
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 50,
        marginHorizontal: 20,
      },
});

export default NewsScreen;