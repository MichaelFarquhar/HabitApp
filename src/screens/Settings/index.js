import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import SettingsHeader from './Header';

const Settings = () => {
    return (
        <React.Fragment>
            <SettingsHeader />
            <View style={styles.container}>
                <Text>Settings Page</Text>
                <StatusBar style="auto" />
            </View>
        </React.Fragment>
    );
};

export default Settings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
