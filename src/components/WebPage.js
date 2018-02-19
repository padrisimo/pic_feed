import React, { Component } from 'react';
import { WebView, StyleSheet } from 'react-native';


const WebPage = ({ navigation }) => (
    <WebView
        style={styles.container}
        source={navigation.state.params} 
        contentInset={{ top: -50}}/>
)

WebPage.navigationOptions = {
    title: 'Reddit WebView'
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default WebPage;
