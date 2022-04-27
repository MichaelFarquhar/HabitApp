import React from 'react';
import { Appbar } from 'react-native-paper';

const NewHabitsHeader = ({ navigation }) => {
    return (
        <Appbar.Header>
            <Appbar.BackAction
                onPress={() => {
                    navigation.navigate('TabPages');
                }}
            />
            <Appbar.Content title="Add New Habit" subtitle="" />
        </Appbar.Header>
    );
};

export default NewHabitsHeader;
