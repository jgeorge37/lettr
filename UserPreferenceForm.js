import React from 'react';
import {
    Alert,
    Modal,
    StyleSheet,
    TextInput,
    Text,
    TouchableHighlight,
    // DateInput,
    View
  } from "react-native";
// { onSubmit }
const [modalVisible, setModalVisible] = useState(false);

export default function UserPreferenceForm () {
    
    return (
        <View style={styles.centeredView}>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            }}
        >
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
                {/* <Text style={styles.modalText}>Hello World!</Text> */}
                {/* onSubmit={onSubmit}> */}
                {/* <UserPreferenceForm style={styles.modalText}> </UserPreferenceForm> */}
                <Text> Enter Listing Preferences: </Text>
                <TextInput borderColor='gray' placeholder="Move-in-date: Ex 01/01/2020" />
                <TextInput placeholder="Price Range: Ex 500-1000" />
                <TextInput placeholder="Age Preference: Ex 20-25" />
                <TextInput placeholder="Gender Preference: Ex Female/NA" />
                <TextInput placeholder="Gender Preference: Ex Female/NA" />
                {/* <DateInput /> */}


                <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                    setModalVisible(!modalVisible);
                }}
                >
                <Text style={styles.textStyle}>Submit</Text>
                </TouchableHighlight>
            </View>
            </View>
        </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Welcome! Enter Listing Preferences</Text>
      </TouchableHighlight>
    </View>

    );

}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });
  
export default UserPreferenceForm;
