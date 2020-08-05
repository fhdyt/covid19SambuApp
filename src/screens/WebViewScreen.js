import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import { ProgressDialog } from 'react-native-simple-dialogs';

const Loading = () => {
    return (
            <ProgressDialog
            visible={true}
            message="Loading..."
            />
        )
}
const WebViewScreen = ({ navigation }) => {
    const item = navigation.state.params.item;
    return (
        <View style={styles.container}>
        <WebView
        originWhitelist={['*']}
        source={{ uri: item.url }}  
        javaScriptEnabled={true}
        domStorageEnabled={true}
        renderLoading={Loading}
        startInLoadingState={true}
      />
      </View>
    );
}

WebViewScreen.navigationOptions = ({ navigation }) => {
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
      },
    ActivityIndicatorStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },

});

export default WebViewScreen;