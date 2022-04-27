import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import HabitsHeader from './Header';

const Habits = ({ navigation }) => {
    return (
        <React.Fragment>
            <HabitsHeader navigation={navigation} />
            <View style={styles.container}>
                <Text>Habits Page</Text>
                <StatusBar style="auto" />
            </View>
        </React.Fragment>
    );
};

export default Habits;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
