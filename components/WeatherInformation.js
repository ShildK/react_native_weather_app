import { View, Text, StyleSheet } from "react-native";

export const WeatherInformation = ({ weather }) => {
   const currentDay = new Date().getDay() + 1;
   const currentMounth = new Date().getMonth();

   const mounths = {
      0: "Января",
      1: "Февраля",
      2: "Марта",
      3: "Апреля",
      4: "Мая",
      5: "Июня",
      6: "Июля",
      7: "Августа",
      8: "Сентября",
      9: "Октября",
      10: "Ноября",
      11: "Декабря",
   };

   if (weather?.main?.feels_like != null) {
      return (
         <View style={{ alignItems: "center" }}>
            <View style={styles.container}>
               <Text style={styles.text}>{weather.name}</Text>
               <Text style={styles.text}>
                  {currentDay} {mounths[currentMounth]}
               </Text>
            </View>
            <View style={styles.container}>
               <Text style={styles.tempInfo}>
                  {parseInt(weather.main.temp)}°
               </Text>
               <Text style={styles.text}>{weather.weather[0].main}</Text>
            </View>
         </View>
      );
   }
};
const styles = StyleSheet.create({
   container: {
      marginVertical: 25,
      alignItems: "center",
   },
   tempInfo: {
      fontSize: 64,
      fontWeight: "700",
      color: "#fff",
   },
   text: {
      fontSize: 24,
      fontWeight: "700",
      color: "#fff",
      margin: 3,
   },
});
