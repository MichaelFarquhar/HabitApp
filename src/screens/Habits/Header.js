import React from 'react';
import { Appbar, Button } from 'react-native-paper';

const HabitsHeader = ({ navigation }) => {
    return (
        <Appbar.Header>
            <Appbar.Content title="Your Habits" subtitle="" />
            <Button
                icon="plus"
                mode="contained"
                color="#ffab91"
                style={{ marginRight: 10 }}
                // theme={{ colors: { primary: '#ffab91' } }}
                onPress={() => navigation.navigate('NewHabit')}
            >
                New Habit
            </Button>
        </Appbar.Header>
    );
};

export default HabitsHeader;
