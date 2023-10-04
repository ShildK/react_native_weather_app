import { TextInput, StyleSheet } from "react-native";

export const InputV1 = ({ placeholder, onChangeText, value }) => {
   return (
      <TextInput
         placeholder={placeholder}
         onChangeText={onChangeText}
         value={value}
         style={{ ...styles.input }}
      />
   );
};

const styles = StyleSheet.create({
   input: {
      width: "60%",
      backgroundColor: "#fff",
      borderRadius: 10,
      padding: 12,
      alignItems: "center",
      marginTop: 30,
   },
});
