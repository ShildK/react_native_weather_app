import { StyleSheet } from "react-native"
import { Text, TouchableOpacity } from "react-native"

export const ButtonV1 = ({ title, onPress, disabled, style }) => {
    return(
        <TouchableOpacity disabled={disabled} onPress={onPress} style={{...styles.button, ...style}}>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: "20%",
        backgroundColor: "#fff",
        borderRadius: 5,
        padding: 8,
        alignItems: "center",
        margin: 20,
    }
})