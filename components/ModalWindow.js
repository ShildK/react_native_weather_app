import { View, Modal, StyleSheet, Text, TouchableOpacity } from "react-native";

export default ModalWindow = ({ modalVisible, setModalVisible }) => {
   return (
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
         <View style={styles.centeredView}>
            <View style={styles.modalView}>
               <Text style={styles.text}>Неверное название города</Text>
               <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}
                  style={styles.button}
               >
                  <Text style={{color: "#fff", fontWeight: "600"}}>Закрыть</Text>
               </TouchableOpacity>
            </View>
         </View>
      </Modal>
   );
};

const styles = StyleSheet.create({
   centeredView: {
      alignItems: "center",
      justifyContent: "center",
   },
   modalView: {
      width: "80%",
      marginTop: "75%",
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      justifyContent: "center",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
   },
   text: {
      fontSize: 18,
      fontWeight: "600",
   },
   button: {
      width: "40%",
      backgroundColor: "#1b87cf",
      borderRadius: 5,
      padding: 15,
      alignItems: "center",
      marginTop: 30,
   },
});
