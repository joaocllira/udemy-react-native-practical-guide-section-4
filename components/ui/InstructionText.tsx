import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

export default function InstructionText({ children }: { children: string }) {
    return <Text style={styles.instructionText}>{children}</Text>;
}

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.accent500,
        fontSize: 24,
    },
});
