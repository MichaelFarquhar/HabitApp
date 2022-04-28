import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import StatsHeader from './Header';

const Stats = () => {
    return (
        <React.Fragment>
            <StatsHeader />
            <View style={styles.container}>
                <Text>Stats Page</Text>
                <StatusBar style="auto" />
            </View>
        </React.Fragment>
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
