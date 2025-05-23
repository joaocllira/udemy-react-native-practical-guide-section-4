import React from 'react';
import { View, Text, StyleSheet, GestureResponderEvent } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';

export default function GameScreen() {
    return (
        <View style={styles.screen}>
            <Title>Opponent's Number</Title>
            <View>
                <Text>Higher or lower?</Text>
                <PrimaryButton
                    onPress={function (event: GestureResponderEvent): void {
                        throw new Error('Function not implemented.');
                    }}
                >
                    +
                </PrimaryButton>
                <PrimaryButton
                    onPress={function (event: GestureResponderEvent): void {
                        throw new Error('Function not implemented.');
                    }}
                >
                    -
                </PrimaryButton>
            </View>
            <View>
                <Text>Log rounds</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
});
