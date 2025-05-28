import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Pressable,
    GestureResponderEvent,
} from 'react-native';
import Colors from '../../constants/colors';

import type { PropsWithChildren } from 'react';

export default function PrimaryButton({
    children,
    onPress,
}: PropsWithChildren<{ onPress: (event: GestureResponderEvent) => void }>) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                onPress={onPress}
                android_ripple={{ color: Colors.primary600 }}
                style={({ pressed }) =>
                    pressed
                        ? [, styles.buttonInnerContainer, styles.pressed]
                        : styles.buttonInnerContainer
                }
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
    },
    pressed: {
        opacity: 0.75,
    },
});
