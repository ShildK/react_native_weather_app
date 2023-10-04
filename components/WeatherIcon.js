import { Image, StyleSheet } from "react-native";

const icons = {
   2: "https://cdn-icons-png.flaticon.com/512/3104/3104612.png",
   3: "https://cdn-icons-png.flaticon.com/512/2412/2412691.png",
   5: "https://cdn-icons-png.flaticon.com/512/4150/4150904.png",
   6: "https://cdn-icons-png.flaticon.com/512/6363/6363166.png",
   7: "https://cdn-icons-png.flaticon.com/512/1197/1197102.png",
   8: "https://cdn-icons-png.flaticon.com/512/3208/3208756.png",
};

export const WeatherIcon = ({ weather }) => {
   if (weather?.sys?.id != null) {
      console.log(weather);
      const weatherIdStr = weather.sys.id.toString()[0];
      return <Image style={styles.icon} source={{ uri: (icons[weatherIdStr])}} />;
   }
   else{
      return <Image style={styles.icon} source={{ uri: (icons[8])}} />;
   }
};

const styles = StyleSheet.create({
    icon: {
        width: "46%", 
        height: 180, 
        marginTop: "20%",
        marginBottom: "5%"
    }
})