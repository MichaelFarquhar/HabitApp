import { StyleSheet, View } from 'react-native';
import React from 'react';
import NewHabitsHeader from './Header';
import { Button, TextInput } from 'react-native-paper';
import TextFieldWrapper from '../../components/forms/TextInputWrapper';

const NewHabit = ({ navigation }) => {
    const handleSubmit = () => {
        console.log('pressed');
    };

    return (
        <React.Fragment>
            <NewHabitsHeader navigation={navigation} />
            <View style={styles.container}>
                <TextFieldWrapper style={styles.textInput}>
                    <TextInput label="New Habit" dense value={''} />
                </TextFieldWrapper>
                <TextFieldWrapper style={styles.textInput} text={'Optional'}>
                    <TextInput label="Description" dense value={''} />
                </TextFieldWrapper>
                <Button
                    icon="plus"
                    mode="contained"
                    onPress={() => handleSubmit()}
                    style={styles.button}
                >
                    Add New
                </Button>
            </View>
        </React.Fragment>
    );
};

export default NewHabit;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 25,
    },
    textInput: {
        marginVertical: 10,
    },
    button: {
        marginTop: 20,
        width: 135,
    },
});
