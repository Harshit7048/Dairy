import React, { useRef } from "react";
import { View, Text, Pressable, Alert, StyleSheet } from "react-native";

export default function ExampleScreen(): React.ReactElement {
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const startHold = () => {
        timerRef.current = setTimeout(() => {
            Alert.alert("2 seconds completed!");
            // 👉 your function here
        }, 2000);
    };

    const cancelHold = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
    };

    return (
        <View style={styles.container}>
            <Pressable onPressIn={startHold} onPressOut={cancelHold}>
                <View style={styles.button}>
                    <Text style={styles.text}>Hold for 2 seconds</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        padding: 20,
        backgroundColor: "#4fa3f7",
        borderRadius: 10,
        alignItems: "center",
    },
    text: {
        color: "#fff",
        fontSize: 16,
    },
});
