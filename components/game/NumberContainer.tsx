import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

export default function NumberContainer({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignContent: 'center',
        justifyContent: 'center',
    },
    numberText: {
        fontFamily: 'open-sans-bold',
        color: Colors.accent500,
        fontSize: 36,
        textAlign: 'center',
    },
});
