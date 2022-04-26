import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';

const Home = () => {
    return (
        <View style={styles.container}>
            <Text>Home Page</Text>
            <StatusBar style="auto" />
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
