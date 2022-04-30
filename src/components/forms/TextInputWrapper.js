import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const TextInputWrapper = ({ children, style, text, error }) => {
    return (
        <View style={style}>
            {children}
            {text && (
                <View style={styles.textContainer}>
                    <Text style={error ? styles.textError : styles.text}>{text}</Text>
                </View>
            )}
        </View>
    );
};

export default TextInputWrapper;

const styles = StyleSheet.create({
    textContainer: {
        paddingLeft: 15,
        marginTop: 5,
    },
    textError: {
        color: '#B00020',
    },
    text: {
        color: 'rgba(0,0,0,0.6)',
    },
});
