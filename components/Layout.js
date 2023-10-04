import { View } from "react-native";

export const Layout = ({ children }) => {
   return (
      <View
         style={{
            flex: 1,
            alignItems: "center",
            backgroundColor: "#1b87cf",
            paddingVertical: 20,
         }}
      >
         {children}
      </View>
   );
};
