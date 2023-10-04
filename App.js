import { ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";

import { Layout } from "./components/Layout";
import { ButtonV1 } from "./components/ButtonV1";
import { InputV1 } from "./components/InputV1";
import { getWeahter } from "./fetch";
import { WeatherIcon } from "./components/WeatherIcon";
import { WeatherInformation } from "./components/WeatherInformation";
import ModalWindow from "./components/ModalWindow";

export default function App() {
   const [cityName, setCityName] = useState("");
   const [currentWeather, setCurrentWeather] = useState({});
   const [weatherInAstana, setWeatherInAstana] = useState({});
   const [modalVisible, setModalVisible] = useState(false);
   const [isLoaded, setIsLoaded] = useState(false);

   useEffect(() => {
      (async () => {
         const weather = await getWeahter("astana");
         setWeatherInAstana(weather);
         setIsLoaded(true);
      })();
   }, []);

   const pressToButton = async () => {
      const weather = await getWeahter(cityName);
      if (!weather.main) {
         setModalVisible(true);
      } else {
         setCurrentWeather(weather);
      }
      setCityName("")
   };

   if (!isLoaded) {
      return (
         <Layout style={{}}>
            <ActivityIndicator
               style={{ flex: 1 }}
               size="large"
               color="#f59642"
            />
         </Layout>
      );
   } else {
      return (
         <Layout>
            {!currentWeather.main ? (
               <>
                  <WeatherIcon weather={weatherInAstana} />
                  <WeatherInformation weather={weatherInAstana} />
               </>
            ) : (
               <>
                  <WeatherIcon weather={currentWeather} />
                  <WeatherInformation weather={currentWeather} />
               </>
            )}
            <InputV1
               value={cityName}
               placeholder="Введите город"
               onChangeText={(city) => setCityName(city)}
            />
            <ButtonV1 title="SEND" onPress={() => pressToButton()} disabled={!cityName}/>
            <ModalWindow
               modalVisible={modalVisible}
               setModalVisible={setModalVisible}
            />
         </Layout>
      );
   }
}
