import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';

const Stats = () => {
    return (
        <View style={styles.container}>
            <Text>Stats Page</Text>
            <StatusBar style="auto" />
        </View>
    );
};

export default Stats;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
