import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import NewHabitsHeader from './Header';

const NewHabit = ({ navigation }) => {
    return (
        <React.Fragment>
            <NewHabitsHeader navigation={navigation} />
            <View>
                <Text>NewHabit</Text>
            </View>
        </React.Fragment>
    );
};

export default NewHabit;
